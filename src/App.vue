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
import { orderBy } from 'lodash-es'

const state = defineState({
  totalPartyGold: 3000,
  maxItemLevel: 20,

  partyMembers: [
    { name: 'Tug', image: tugImg, class: 'Champion', archetype: 'Sorcerer' },
    { name: 'Twotail', image: twotailImg, class: 'Rogue', archetype: 'Bard' },
    { name: 'Merrek', image: merrekImg, class: 'Barbarian', archetype: 'Wrestler' },
    { name: 'Elyar', image: elyarImg, class: 'Wizard', archetype: 'Gelid Shard' },
    { name: 'Crimson', image: crimsonImg, class: 'Oracle', archetype: 'Beastmaster' },
    // { name: 'Citadel Altaerein', share: 1, image: citadelAltaereinImg }
  ],

  get availableRecs() {
    return wishlist.filter(item => !item.level || item.level <= this.maxItemLevel)
  },

  get membersWithPurchases() {
    const membersWithPurchases = this.partyMembers.map(member => {
      return {
        ...member,
        purchases: [] as PurchasableItem[],
        budget: this.totalPartyGold / this.partyMembers.length,
        desiredPurchases: orderBy(
          this.availableRecs.filter(item => item.for === member.name),
          ['priority', 'cost'], ['asc', 'desc']
        ),
        spent: 0
      }
    })

    for (const member of membersWithPurchases) {
      for (const purchase of member.desiredPurchases) {
        if (purchase.cost <= member.budget) {
          member.purchases.push(purchase)
          member.spent += purchase.cost
          member.budget -= purchase.cost
        }
      }
    }

    return membersWithPurchases
  },

  get totalSpend() {
    return this.membersWithPurchases.reduce((sum, member) => sum + member.spent, 0)
  },

  get leftoverGold() {
    return this.totalPartyGold - this.totalSpend
  }
})
</script>

<template>
  <VApp>
    <VMain>
      <VContainer>
        <VImg :src="tugBudgetImg" alt="Tug Budget" :width="300" :height="300" style="margin: auto;" />
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
        <div>
          <span class="text-gold">Spending: {{ state.totalSpend }}gp</span>
          &#x2022;
          <span>Leftover: {{ state.leftoverGold }}gp</span>
        </div>
      </VContainer>
      <VContainer fluid>
        <VRow>
          <VCol v-for="member in state.membersWithPurchases" :key="member.name" :style="{ minWidth: '250px' }">
            <VCard>
              <VAvatar :image="member.image" :size="100" class="mx-auto mt-4" />
              <VCardTitle>{{ member.name }}</VCardTitle>
              <VCardSubtitle>Class: {{ member.class }}</VCardSubtitle>
              <VCardSubtitle>Archetype: {{ member.archetype }}</VCardSubtitle>
              <div class="text-gold">Spending {{ member.spent }}gp</div>
              <div>Buying {{ member.purchases.length }}/{{
          member.desiredPurchases.length }}
                items</div>
              <div v-if="member.purchases.length === member.desiredPurchases.length">Needs more suggestions</div>
              <VList>
                <VListItem v-for="rec in member.purchases" :key="rec.name">
                  <VListItemTitle>
                    <!-- <span v-if="rec.priority" class="text-gold">Priority: </span> -->
                    <a v-if="rec.link" :href="rec.link" target="_blank">{{ rec.name }}</a>
                    <b v-else>{{ rec.name }}</b>
                  </VListItemTitle>
                  <p>{{ rec.desc }}</p>
                  <VListItemSubtitle>Level {{ rec.level }} - {{ rec.cost }}gp</VListItemSubtitle>
                </VListItem>
              </VList>
            </VCard>
          </VCol>
        </VRow>
      </VContainer>
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

a,
a:visited {
  color: #89e2ff;
}
</style>
