<template>
  <label
    class="d-swap d-swap-rotate rounded-sm p-2 bg-neutralMain hover:bg-neutralShade focus:bg-neutralShade">
    <input type="checkbox" v-model="preferences.lightTheme" />
    <Sun
      class="d-swap-on text-accentMain"
      aria-label="Sun icon, representing light theme" />
    <Moon
      class="d-swap-off text-accentMain"
      aria-label="Moon icon, representing dark theme" />
  </label>
</template>

<script setup lang="ts">
  import { Moon, Sun } from 'lucide-vue-next';
  import { computed } from 'vue';
  import { useHead } from '@vueuse/head';
  import usePreferenceStore from '@/stores/preferences';

  const preferences = usePreferenceStore();

  const theme = computed(() => preferences.theme);

  useHead({
    htmlAttrs: {
      class: theme,
    },
  });
</script>
