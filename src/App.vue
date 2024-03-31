<script setup lang="ts">
import { defineState } from 'vue-define-state'
import tugBudgetImg from './assets/tug-budget.webp'

const state = defineState({
  totalPartyGold: 5000
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
