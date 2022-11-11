<template>
  <div class="w-full h-full flex flex-col items-center justify-center gap-3">
    <h2>Page not found</h2>
    <p>
      The page <code>/{{ route.params.path[0] }}</code> was not found.
    </p>
    <RouterLink to="/">
      <PillButton bold class="pt-[104px]"> Go to home </PillButton>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import PillButton from '@/components/buttons/PillButton.vue';

  const route = useRoute();
</script>
