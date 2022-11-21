<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" :aria-label="name">
    <component
      :is="icon"
      class="text-accentShade dark:text-neutralShade"
      aria-hidden="true"
      :aria-label="icon.name" />
  </a>
</template>

<script setup lang="ts">
  import type { Component } from 'vue';
  import usePreferenceStore from '@/stores/preferences';

  // TODO: add color dep. for profile badge borders.
  const preferences = usePreferenceStore();

  export type Badge = {
    icon: Component;
    link: string;
    name: string;
  };

  defineProps<Badge>();
</script>
