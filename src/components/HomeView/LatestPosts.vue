<template>
  <div class="flex flex-col items-center">
    <h2 class="mt-8">Latest Blog Posts</h2>

    <RouterLink to="/" class="float-right h-min mt-8 mb-24">
      <PillButton :right-icon="ArrowRight" nogradient>See all</PillButton>
    </RouterLink>

    <div class="flex flex-row justify-around w-full gap-4 flex-wrap">
      <BlogPreview
        v-for="post in posts"
        :key="post.link"
        :title="post.title"
        :link="post.link"
        :preview="post.preview" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ArrowRight } from 'lucide-vue-next';
  import BlogPreview from '@/components/HomeView/BlogPreview.vue';
  import PillButton from '@/components/buttons/PillButton.vue';

  const posts = [
    {
      title: 'Lorem ipsum.',
      preview: 'Lorem ipsum, lorem ipsum lorem **ipsum**.',
      link: '/',
    },
    {
      title: 'Lorem ipsum.',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporal and lots of other lorem ipsum',
      link: '/',
    },
    {
      title: 'Lorem ipsum.',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporal and lots of other lorem ipsum',
      link: '/',
    },
  ].slice(0, 2);
</script>
