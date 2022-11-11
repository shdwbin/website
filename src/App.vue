<template>
  <div id="app">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Footer from './components/Footer.vue';
  import Header from '@/components/Header.vue';
</script>

<style lang="scss" scoped>
  #app {
    @apply h-full flex flex-col overflow-auto;
  }

  main {
    @apply flex-grow;
  }
</style>
