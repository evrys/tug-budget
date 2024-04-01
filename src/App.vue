<script setup lang="ts">
import { defineState } from 'vue-define-state'
import tugBudgetImg from './assets/tug-budget.webp'
import tugImg from './assets/tug.webp'
import twotailImg from './assets/twotail.webp'
import merrekImg from './assets/merrek.webp'
import elyarImg from './assets/elyar.webp'
import crimsonImg from './assets/crimson.webp'
// import citadelAltaereinImg from './assets/citadel-altaerein.webp'
import { PurchasableItem, wishlist } from "./wishlist"
import { minBy, sortBy } from 'lodash-es'

const state = defineState({
  totalPartyGold: 3000,
  maxItemLevel: 8,

  partyMembers: [
    { name: 'Tug', share: 1, image: tugImg, class: 'Champion', archetype: 'Sorcerer' },
    { name: 'Twotail', share: 1, image: twotailImg, class: 'Rogue', archetype: 'Bard' },
    { name: 'Merrek', share: 1, image: merrekImg, class: 'Barbarian', archetype: 'Wrestler' },
    { name: 'Elyar', share: 1, image: elyarImg, class: 'Wizard', archetype: 'Gelid Shard' },
    { name: 'Crimson', share: 1, image: crimsonImg, class: 'Oracle', archetype: 'Beastmaster' },
    // { name: 'Citadel Altaerein', share: 1, image: citadelAltaereinImg }
  ],

  get availableRecs() {
    return wishlist.filter(item => !item.level || item.level <= this.maxItemLevel)
  },

  get membersWithPurchases() {
    let budget = this.totalPartyGold

    const membersWithPurchases = this.partyMembers.map(member => {
      return {
        ...member,
        purchases: [] as PurchasableItem[],
        remainingPotentialPurchases: sortBy(this.availableRecs.filter(item => item.for === member.name), item => -item.cost),
        spent: 0
      }
    })

    while (true) {
      // Figure out who can still wants to buy something within budget
      const membersWhoCanBuy = membersWithPurchases.filter(m => m.remainingPotentialPurchases.length && m.remainingPotentialPurchases[m.remainingPotentialPurchases.length - 1].cost <= budget)

      // We'll buy something for whoever has spent the least
      const member = minBy(membersWhoCanBuy, member => member.spent)

      // If there's no one to buy for, we're done
      if (!member) break

      const cheapestPurchase = member.remainingPotentialPurchases.pop()!

      member.purchases.push(cheapestPurchase)
      member.spent += cheapestPurchase.cost
      budget -= cheapestPurchase.cost
    }

    return membersWithPurchases
  }
})
</script>

<template>
  <VApp>
    <VMain>
      <VContainer>
        <VImg :src="tugBudgetImg" alt="Tug Budget" :maxWidth="300" style="margin: auto;" />
        <h1 class="text-h2 mt-4 mb-6">Tug does budgeting</h1>
        <VSlider
          v-model="state.totalPartyGold"
          label="Total Party Gold"
          id="totalPartyGold"
          :min="0"
          :max="10000"
          :step="100"
          color="gold"
          thumbLabel="always">
          <template v-slot:thumb-label="{ modelValue }">
            {{ modelValue }}gp
          </template>
        </VSlider>
        <VSlider
          v-model="state.maxItemLevel"
          class="mt-4"
          label="Max Item Level"
          id="maxItemLevel"
          :min="1"
          :max="20"
          :step="1"
          thumbLabel="always" />
      </VContainer>
      <VRow>
        <VCol v-for="member in state.membersWithPurchases" :key="member.name" :style="{ minWidth: '250px' }">
          <VCard>
            <VAvatar :image="member.image" size="100px" class="mx-auto mt-4" />
            <VCardTitle>{{ member.name }}</VCardTitle>
            <VCardSubtitle>Class: {{ member.class }}</VCardSubtitle>
            <VCardSubtitle>Archetype: {{ member.archetype }}</VCardSubtitle>
            <div class="text-gold">Spending {{ member.spent }}gp</div>
            <div>Buying {{ member.purchases.length }}/{{
          member.purchases.length + member.remainingPotentialPurchases.length }}
              items</div>
            <div v-if="member.remainingPotentialPurchases.length === 0">Needs more suggestions</div>
            <VList>
              <VListItem v-for="rec in member.purchases" :key="rec.name">
                <a :href="rec.link" target="_blank">
                  <VListItemTitle>{{ rec.name }}</VListItemTitle>
                </a>
                <p>{{ rec.desc }}</p>
                <VListItemSubtitle>Level {{ rec.level }} - {{ rec.cost }}gp</VListItemSubtitle>
              </VListItem>
            </VList>
          </VCard>
        </VCol>
      </VRow>
    </VMain>
  </VApp>
</template>

<style>
body {
  background-color: rgb(18, 18, 18);
}

h1 {
  font-size: 64px;
}

main {
  text-align: center;
  padding-bottom: 320px !important;
}

.v-slider-thumb__label {
  color: white !important;
}
</style>
