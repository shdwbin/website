<template>
  <button
    class="rounded-full p-1 px-5 flex flex-row flex-nowrap disabled:pointer-events-none"
    :class="[
      { 'font-bold': bold },
      {
        'bg-accentMain hover:bg-accentShade dark:bg-neutralMain dark:hover:bg-neutralShade text-neutralMain dark:text-accentMain':
          !theme,
        'bg-neutralMain text-accentMain hover:bg-neutralShade':
          theme === 'white',
        'bg-accentMain text-neutralMain hover:bg-accentShade':
          theme === 'black',
        'bg-gradient-to-r from-accentTintStart to-accentTintEnd text-neutralMain hover:shadow hover:shadow-gray-500 disabled:shadow-none':
          theme === 'gradient',
        'bg-transparent border-2 border-accentShade dark:border-neutralShade hover:border-accentMain hover:bg-neutralMain hover:text-accentMain dark:hover:border-neutralMain':
          theme === 'transparent',
        'bg-neutralMain dark:bg-accentMain text-accentMain dark:text-neutralMain':
          theme === 'inverted',
      },
      {},
    ]">
    <component
      :is="leftIcon"
      v-if="leftIcon"
      class="mr-1 ml-[-.5rem] max-h-full my-auto border-inherit text-inherit"
      role="presentation"
      aria-hidden="true" />
    <slot />
    <component
      :is="rightIcon"
      v-if="rightIcon"
      class="ml-1 mr-[-.5rem] max-h-full my-auto border-inherit text-inherit"
      role="presentation"
      aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
  import type { Component } from 'vue';

  defineProps<{
    leftIcon?: Component;
    rightIcon?: Component;
    bold?: boolean;
    hoverText?: string;
    theme?:
      | 'black'
      | 'white'
      | 'transparent'
      | 'gradient'
      | 'theme'
      | 'inverted';
  }>();
</script>
