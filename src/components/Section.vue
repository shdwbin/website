<template>
  <section class="mb-28" :aria-label="name" v-if="!hidden">
    <Divider class="mb-14" :name="name" />
    <div class="max-w-7xl w-4/5 m-auto" v-bind="$attrs">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Divider from '@/components/Divider.vue';

  defineProps<{
    name: string;
    hidden?: boolean;
  }>();
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>
