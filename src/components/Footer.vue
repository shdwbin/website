<template>
  <footer
    class="flex flex-nowrap flex-col justify-left pb-14 pt-20 text-accentMain dark:text-neutralMain"
    :style="{
      background: `linear-gradient(180deg, rgba(${color}, 0) 0%, rgba(${color}, 1) 23.44%, rgba(${color}, 1) 100%)`,
    }">
    <div class="w-4/5 max-w-7xl mx-auto fill-accentMain dark:fill-neutralMain">
      <div class="flex flex-row">
        <ShadowbinLogo class="mr-5 w-14" />
        <h2 class="h-min my-auto">shadowbin</h2>
      </div>
      <p>
        <Slogan />
      </p>
      <p class="font-bold">&copy; {{ year }} shadowbin.</p>
      <div class="flex flex-row mt-4">
        <ThemeToggle />
        <VerticalDivider />
        <a
          v-for="social in socialMedia"
          :key="social.link"
          :href="social.link"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-sm p-2 bg-neutralMain hover:bg-neutralShade focus:bg-neutralShade">
          <component
            :is="social.icon"
            :aria-label="`${social.label} logo`"
            class="text-accentMain" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { computed, type Component } from 'vue';
  import { Github } from 'lucide-vue-next';
  import Slogan from './Slogan.vue';
  import VerticalDivider from './VerticalDivider.vue';
  import ThemeToggle from './ThemeToggle.vue';
  import ShadowbinLogo from '@/components/logos/ShadowbinLogo.vue';
  import usePreferenceStore from '@/stores/preferences';

  const preferences = usePreferenceStore();

  const color = computed(() =>
    preferences.lightTheme ? '202, 202, 202' : '16, 16, 16'
  );

  const year = new Date().getFullYear();

  const socialMedia: Array<{ icon: Component; link: string; label: string }> = [
    {
      icon: Github,
      link: 'https://github.com/shdwbin',
      label: 'Github',
    },
  ];
</script>
