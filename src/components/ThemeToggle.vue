<template>
  <label
    class="d-swap d-swap-rotate rounded-sm p-2 bg-neutralMain hover:bg-neutralShade focus:bg-neutralShade">
    <input type="checkbox" v-model="preferenceStore.lightTheme" />
    <Octicon class="d-swap-on" name="sun" />
    <Octicon class="d-swap-off" name="moon" />
  </label>
</template>

<script setup lang="ts">
  import Octicon from './icons/Octicon.vue';
  import usePreferenceStore from '@/stores/preferences';

  const preferenceStore = usePreferenceStore();

  preferenceStore.$subscribe(
    (_mutation, state) => {
      document.body.className = state.lightTheme ? 'light' : 'dark';
    },
    { immediate: true }
  );
</script>
