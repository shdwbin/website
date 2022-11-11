import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

const usePreferenceStore = defineStore('preferences', {
  state: () => ({
    lightTheme: useLocalStorage('preferences:lightTheme', false),
  }),

  actions: {
    setLightTheme(theme: boolean) {
      this.lightTheme = theme;
    },
  },
});

export default usePreferenceStore;
