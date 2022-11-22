<template>
  <section class="mb-28" :aria-label="name">
    <Divider class="mb-14" :name="name" />
    <div class="max-w-6xl w-4/5 m-auto" v-bind="$attrs">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Divider from '@/components/Divider.vue';

  defineProps<{
    name: string;
  }>();
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>
