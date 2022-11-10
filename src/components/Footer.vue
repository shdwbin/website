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
    </div>
  </footer>
</template>

<script setup lang="ts">
  import ShadowbinIcon from '@/components/icons/ShadowbinIcon.vue';
  import Slogan from './Slogan.vue';

  const year = new Date().getFullYear();
</script>
