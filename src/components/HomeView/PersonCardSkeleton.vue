<template>
  <div class="w-2/5 container">
    <div
      class="aspect-square h-24 border rounded-sm bg-accentShade mb-2 animate-pulse"></div>

    <p class="font-bold w-20 h-4 p-1 rounded animate-pulse"></p>
    <p class="italic mb-1 animate-pulse h-3 w-24 mt-2"></p>
    <p class="text-sm mb-2 animate-pulse"></p>
    <div class="flex flex-row flex-wrap gap-[6px] !bg-transparent">
      <div class="h-4 w-4 rounded-full"></div>
      <div class="h-4 w-4 rounded-full"></div>
      <div class="h-4 w-4 rounded-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .container * {
    @apply bg-neutralShade animate-pulse rounded-sm;
  }
</style>
