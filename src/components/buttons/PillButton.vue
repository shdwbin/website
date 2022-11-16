<template>
  <div
    class="rounded-full p-1 px-5 flex flex-row flex-nowrap"
    :class="`
    ${bold ? 'font-bold' : ''}
    ${
      theme === 'white'
        ? 'bg-neutralMain text-accentMain'
        : theme === 'black'
        ? 'bg-accentMain text-neutralMain'
        : theme === 'gradient'
        ? 'bg-gradient-to-r from-accentTintStart to-accentTintEnd text-neutralMain'
        : theme === 'transparent'
        ? 'bg-transparent border-2 border-accentShade dark:border-neutralShade'
        : theme === 'inverted'
        ? 'bg-neutralMain dark:bg-accentMain text-accentMain dark:text-neutralMain'
        : 'bg-accentMain dark:bg-neutralMain text-neutralMain dark:text-accentMain'
    }`">
    <component
      :is="leftIcon"
      v-if="leftIcon"
      class="mr-1 ml-[-.5rem] max-h-full my-auto border-inherit text-inherit"
      :name="leftIcon"
      role="presentation"
      aria-hidden="true" />
    <slot />
    <component
      :is="rightIcon"
      v-if="rightIcon"
      class="ml-1 mr-[-.5rem] max-h-full my-auto border-inherit text-inherit"
      :name="rightIcon"
      role="presentation"
      aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
  import type { Component } from 'vue';

  defineProps<{
    leftIcon?: Component;
    rightIcon?: Component;
    bold?: boolean;
    theme?:
      | 'black'
      | 'white'
      | 'transparent'
      | 'gradient'
      | 'theme'
      | 'inverted';
  }>();
</script>
