<template>
  <header class="h-16 p-3 border-b border-accentShade">
    <div class="w-5/6 max-w-5xl mx-auto">
      <ShadowbinIcon class="max-h-full m-auto float-left h-10" />
      <div class="float-right h-full flex flex-row items-center text-lg gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">Roadmap</RouterLink>
        <RouterLink to="/">
          <PillButton theme="gradient" bold>Join waitlist</PillButton>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import PillButton from './buttons/PillButton.vue';
  import ShadowbinIcon from './icons/ShadowbinIcon.vue';
</script>
