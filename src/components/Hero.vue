<template>
  <div
    class="flex flex-col items-center bg-repeat h-[63vh] justify-center mb-28"
    id="hero-root"
    :style="{
      backgroundSize: '100% 310%',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      scale: 'crop',
    }">
    <div class="flex flex-nowrap flex-row justify-center">
      <ShadowbinLogo class="mr-5" />
      <h1 class="h-min my-auto text-[4.5rem]">shadowbin</h1>
    </div>
    <h2 class="text-[2.7rem] max-w-3xl text-center my-8">
      <Slogan :gradient="preferences.lightTheme ? 'none' : 'end'" />
    </h2>

    <PillButton disabled class="italic">Waitlist coming soon</PillButton>

    <!-- <RouterLink to="/" class="pointer-events-none">
      <PillButton :right-icon="ArrowRight" class="text-xl" disabled>
        Join waitlist
      </PillButton>
    </RouterLink> -->
  </div>
</template>

<script setup lang="ts">
  import { ArrowRight } from 'lucide-vue-next';
  import PillButton from './buttons/PillButton.vue';
  import Slogan from './Slogan.vue';
  import usePreferenceStore from '@/stores/preferences';
  import ShadowbinLogo from '@/components/logos/ShadowbinLogo.vue';

  const preferences = usePreferenceStore();
</script>

<style lang="scss" scoped>
  #hero-root {
    :root.light & {
      background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.3) 70%,
          rgba(255, 255, 255, 0.75) 95%,
          rgba(255, 255, 255, 1) 100%
        ),
        url(@/assets/HeroImage.png);
    }

    :root.dark & {
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.3) 70%,
          rgba(0, 0, 0, 0.75) 95%,
          rgba(0, 0, 0, 1) 100%
        ),
        url(@/assets/HeroImage.png);
    }
  }
</style>
