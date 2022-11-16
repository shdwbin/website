<template>
  <div class="flex flex-col flex-shrink flex-grow items-center gap-2">
    <div
      class="aspect-square h-24 flex flex-col justify-center flex-shrink flex-grow">
      <component
        :is="icon"
        class="hover:drop-shadow-lg focused:drop-shadow-lg transition-all duration-200" />
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
