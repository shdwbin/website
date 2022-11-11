<template>
  <Hero />
  <Section name="What We Do">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptates!
  </Section>
  <Section name="How It's Done">
  </Section>
  <Section name="Who We Are">
  </Section>
  <Section name="Get Involved">
    <LatestPosts />
    <Explore />
  </Section>
</template>

<script setup lang="ts">
  import Section from '@/components/Section.vue';
  import Hero from '@/components/Hero.vue';
  import LatestPosts from '@/components/HomeView/LatestPosts.vue';
  import Explore from '@/components/HomeView/Explore.vue';
</script>
