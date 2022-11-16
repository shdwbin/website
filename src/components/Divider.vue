<template>
  <div class="flex flex-row justify-center">
    <div class="divider-line" />
    <div
      :div="`divider-${contentID}`"
      class="rounded-sm py-2 px-4 border-neutralShade bg-neutralShade dark:border-accentShade dark:bg-accentShade text-accentMain dark:text-neutralMain">
      <p>{{ name }}</p>
    </div>
    <div class="divider-line" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    name: string;
  }>();

  const contentID = computed(() =>
    props.name.replace(/[^A-Za-z]{1,}/g, '-').toLowerCase()
  );
</script>

<style lang="scss" scoped>
  .divider-line {
    @apply flex-grow h-0 border my-auto border-neutralShade bg-neutralShade dark:border-accentShade dark:bg-accentShade;
  }
</style>
