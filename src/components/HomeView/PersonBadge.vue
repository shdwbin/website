<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <Octicon :name="icon" class="fill-neutralMain" />
  </a>
</template>

<script setup lang="ts">
  import type { IconName } from '@primer/octicons';
  import Octicon from '../icons/Octicon.vue';

  export type Badge = {
    icon: IconName;
    link: string;
  };

  defineProps<Badge>();
</script>
