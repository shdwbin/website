<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <component :is="icon" class="fill-neutralMain" />
  </a>
</template>

<script setup lang="ts">
  import type { Component } from 'vue';

  export type Badge = {
    icon: Component;
    link: string;
  };

  defineProps<Badge>();
</script>
