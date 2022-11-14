<template>
  <label
    class="d-swap d-swap-rotate rounded-sm p-2 bg-neutralMain hover:bg-neutralShade focus:bg-neutralShade">
    <input type="checkbox" v-model="preferenceStore.lightTheme" />
    <Sun class="d-swap-on" />
    <Moon class="d-swap-off" />
  </label>
</template>

<script setup lang="ts">
  import { Moon, Sun } from 'lucide-vue-next';
  import usePreferenceStore from '@/stores/preferences';

  const preferenceStore = usePreferenceStore();

  preferenceStore.$subscribe(
    (_mutation, state) => {
      document.body.className = state.lightTheme ? 'light' : 'dark';
    },
    { immediate: true }
  );
</script>
