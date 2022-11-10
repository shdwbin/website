<template>
  <div class="flex flex-row justify-center">
    <div class="divider-line" />
    <div
      :div="`divider-${contentID}`"
      class="border-2 border-accentShade rounded-sm py-1 px-4">
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
    @apply flex-grow h-0 border my-auto border-accentShade;
  }
</style>
