<template>
  <div id="app" tabindex="-1">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import Footer from './components/Footer.vue';
  import Header from '@/components/Header.vue';

  useHead({});
</script>

<style lang="scss" scoped>
  #app {
    @apply h-full flex flex-col overflow-auto;
  }

  main {
    @apply flex-grow;
  }
</style>
