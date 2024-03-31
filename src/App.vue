<script setup lang="ts">
import { defineState } from 'vue-define-state'
import tugBudgetImg from './assets/tug-budget.webp'
import tugImg from './assets/tug.webp'
import twotailImg from './assets/twotail.webp'
import merrekImg from './assets/merrek.webp'
import elyarImg from './assets/elyar.webp'
import crimsonImg from './assets/crimson.webp'
import citadelAltaereinImg from './assets/citadel-altaerein.webp'

const state = defineState({
  totalPartyGold: 5000,
  partyMembers: [
    { name: 'Tug', share: 1, image: tugImg },
    { name: 'Twotail', share: 1, image: twotailImg },
    { name: 'Merrek', share: 1, image: merrekImg },
    { name: 'Elyar', share: 1, image: elyarImg },
    { name: 'Crimson', share: 1, image: crimsonImg },
    { name: 'Citadel Altaerein', share: 1, image: citadelAltaereinImg }
  ],
})
</script>

<template>
  <VApp>
    <VMain>
      <VContainer>
        <VImg :src="tugBudgetImg" alt="Tug Budget" :maxWidth="300" style="margin: auto;" />
        <h1 class="text-h2 mt-4 mb-4">Tug does budgeting</h1>
        <VSlider
          v-model="state.totalPartyGold"
          id="totalPartyGold"
          :min="0"
          :max="10000"
          :step="1"
          color="#FFD700"
          thumbLabel="always">
          <template v-slot:thumb-label="{ modelValue }">
            {{ modelValue }}gp
          </template>
        </VSlider>
        <VLabel for="totalPartyGold">Total Party Gold</VLabel>
      </VContainer>
      <VCol>
        <VRow>
          <VCard v-for="member in state.partyMembers" :key="member.name" class="mb-4">
            <VAvatar :image="member.image" size="100px" class="mx-auto" />
            <VCardTitle>{{ member.name }}</VCardTitle>
          </VCard>
        </VRow>
      </VCol>
    </VMain>
  </VApp>
</template>

<style>
h1 {
  font-size: 64px;
}

#app {
  text-align: center;
}
</style>
