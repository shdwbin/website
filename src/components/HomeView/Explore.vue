<template>
  <div class="flex flex-col items-center mt-20">
    <div class="flex flex-col items-center mb-24">
      <h2>Explore Shadowbin</h2>
      <p>Lorem ipsum, lorem ipsum.</p>
      <RouterLink to="/" class="float-right h-min mt-8">
        <PillButton
          :right-icon="ArrowRight"
          :theme="preferences.lightTheme ? 'transparent' : 'theme'"
          >See all</PillButton
        >
      </RouterLink>
    </div>

    <div class="flex flex-row wrap gap-10">
      <LanguageShowoff
        v-for="language of languages"
        :key="language.name"
        :icon="language.icon"
        :name="language.name"
        :pad="language.pad" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Component } from 'vue';
  import { ArrowRight } from 'lucide-vue-next';
  import LanguageShowoff from '@/components/HomeView/LanguageShowoff.vue';
  import PillButton from '@/components/buttons/PillButton.vue';
  import VueLogo from '@/components/logos/VueLogo.vue';
  import TypescriptLogo from '@/components/logos/TypescriptLogo.vue';
  import usePreferenceStore from '@/stores/preferences';

  const preferences = usePreferenceStore();

  const languages: Array<{ icon?: Component; name: string; pad?: boolean }> = [
    { icon: VueLogo as Component, name: 'Vue.JS', pad: true },
    { icon: TypescriptLogo as Component, name: 'Typescript' },
    { icon: undefined, name: '✨ Nothing ✨' },
  ];
</script>
