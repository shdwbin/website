<template>
  <div
    class="flex flex-col items-center bg-repeat h-[63vh] justify-center mb-16"
    :style="{
      background: `linear-gradient(180deg, rgba(0, 0, 0, .3) 70%, rgba(0, 0, 0, .75) 95%, rgba(0, 0, 0, 1) 100%), url(${HeroImage})`,
      backgroundSize: '100% 310%',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      scale: 'crop',
    }">
    <div class="flex flex-nowrap flex-row justify-center">
      <ShadowbinIcon class="mr-5" />
      <h1 class="h-min my-auto text-[4.5rem]">shadowbin</h1>
    </div>
    <h2 class="text-[2.7rem] max-w-3xl text-center my-8">
      <Slogan />
    </h2>
    <PillButton icon="arrow-right" class="text-xl" :bold="false">
      <RouterLink to="/">Join waitlist</RouterLink>
    </PillButton>
  </div>
</template>

<script setup lang="ts">
  import ShadowbinIcon from '@/components/icons/ShadowbinIcon.vue';
  import HeroImage from '@/assets/HeroImage.png';
  import PillButton from './buttons/PillButton.vue';
  import Slogan from './Slogan.vue';
</script>
