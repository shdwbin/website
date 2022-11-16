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

  getters: {
    theme(state) {
      return state.lightTheme ? 'light' : 'dark';
    },
  },
});

export default usePreferenceStore;
