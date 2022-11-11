<template>
  <div class="flex flex-col items-center mt-20">
    <div class="flex flex-col items-center mb-12 gap-3">
      <h2>Explore Shadowbin</h2>
      <p>Lorem ipsum, lorem ipsum.</p>
      <RouterLink to="/" class="float-right h-min mt-auto">
        <PillButton right-icon="arrow-right" nogradient>See all</PillButton>
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
  import LanguageShowoff from '@/components/LanguageShowoff.vue';
  import PillButton from '@/components/buttons/PillButton.vue';
  import VueLogo from '@/components/logos/VueLogo.vue';
  import TypescriptLogo from '@/components/logos/TypescriptLogo.vue';

  const languages: Array<{ icon?: Component; name: string; pad?: boolean }> = [
    { icon: VueLogo as Component, name: 'Vue.JS', pad: true },
    { icon: TypescriptLogo as Component, name: 'Typescript' },
    { icon: undefined, name: '✨ Nothing ✨' },
  ];
</script>
