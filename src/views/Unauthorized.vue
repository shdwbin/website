<template>
  <div class="w-full h-full flex flex-col items-center justify-center gap-3">
    <h2>Page not accessible</h2>
    <p>
      You are not authorized to view this page.
    </p>
    <RouterLink to="/">
      <PillButton class="mt-8" bold nogradient> Go home </PillButton>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { useHead } from '@vueuse/head';
  import PillButton from '@/components/buttons/PillButton.vue';

  const route = useRoute();

  useHead({
    title: 'Page Not Accessible',
  });
</script>
