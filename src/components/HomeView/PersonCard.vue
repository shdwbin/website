<template>
  <div class="w-2/5">
    <div class="aspect-square h-24 border rounded-sm bg-accentShade mb-2"></div>
    <p class="font-bold">{{ name }}</p>
    <p class="italic mb-1">{{ position }}</p>
    <p class="text-sm mb-2">{{ bio }}</p>
    <div class="flex flex-row flex-wrap gap-[6px]">
      <PersonBadge
        v-for="(badge, index) in badges"
        :key="index"
        v-bind="badge" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import PersonBadge, { type Badge } from './PersonBadge.vue';

  export type Person = {
    name: string;
    position: string;
    bio?: string;
    badges: Badge[];
  };

  defineProps<Person>();
</script>
