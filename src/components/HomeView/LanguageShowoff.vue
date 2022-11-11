<template>
  <div class="flex flex-col flex-shrink flex-grow items-center gap-2">
    <div
      class="aspect-square h-32 border rounded-sm bg-accentShade flex flex-col justify-center flex-shrink flex-grow p-4">
      <component :is="icon" />
    </div>
    <h4>{{ name }}</h4>
  </div>
</template>

<script setup lang="ts">
  import type { Component } from 'vue';

  defineProps<{
    icon?: Component;
    name: string;
    pad?: boolean;
  }>();
</script>
