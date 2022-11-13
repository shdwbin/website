<template>
  <section class="mb-28" :aria-label="name">
    <Divider class="mb-14" :name="name" />
    <div class="max-w-5xl w-4/5 m-auto">
      <slot v-bind="$props" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Divider from '@/components/Divider.vue';

  defineProps<{
    name: string;
  }>();
</script>
