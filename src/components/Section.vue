<template>
  <section class="mb-4" :aria-label="name">
    <Divider class="mb-4" v-bind="props" />
    <div class="max-w-5xl w-4/5 m-auto">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Divider from '@/components/Divider.vue';

  const props = defineProps<{
    name: string;
  }>();
</script>
