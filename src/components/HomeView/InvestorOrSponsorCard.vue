<template>
  <div>
    <div class="aspect-square h-24 border rounded-sm bg-accentShade mb-2"></div>
    <p class="font-bold">{{ name }}</p>
    <p v-if="person" class="italic">{{ person }}</p>
  </div>
</template>

<script setup lang="ts">
  export type InvestorOrSponsor = {
    logo?: string;
    person?: string;
    name: string;
  };

  defineProps<InvestorOrSponsor>();
</script>
