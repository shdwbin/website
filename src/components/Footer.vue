<template>
  <footer
    class="flex flex-nowrap flex-col justify-left pb-14 pt-20"
    :style="{
      background:
        'linear-gradient(180deg, rgba(16, 16, 16, 0) 0%, #101010 23.44%, #101010 100%)',
    }">
    <div class="w-4/5 max-w-5xl mx-auto">
      <div class="flex flex-row">
        <ShadowbinIcon class="mr-5 w-14" />
        <h2 class="h-min my-auto">shadowbin</h2>
      </div>
      <p>
        <Slogan />
      </p>
      <p class="font-bold">&copy; {{ year }} shdwbin.</p>
      <div class="flex flex-row mt-4">
        <a
          v-for="social in socialMedia"
          :key="social.link"
          :href="social.link"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="border-2 rounded-sm p-2 border-neutralShade">
          <Octicon :name="social.icon" class="fill-neutralMain" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import ShadowbinIcon from '@/components/icons/ShadowbinIcon.vue';
  import type { IconName } from '@primer/octicons';
  import Octicon from './icons/Octicon.vue';
  import Slogan from './Slogan.vue';

  const year = new Date().getFullYear();

  const socialMedia: Array<{ icon: IconName; link: string; label: string }> = [
    {
      icon: 'mark-github',
      link: 'https://github.com/shdwbin',
      label: 'Github',
    },
  ];
</script>
