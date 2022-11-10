<template>
  <section class="mb-4" :aria-label="name">
    <Divider class="mb-4" v-bind="props" />
    <slot />
  </section>
</template>

<script setup lang="ts">
  import Divider from '@/components/Divider.vue';

  const props = defineProps<{
    name: string;
  }>();
</script>
