<template>
  <div
    class="rounded-full p-1"
    :class="`
    ${bold ? 'font-bold' : ''}
    ${outlined ? '' : ''}
    ${
      nogradient
        ? 'bg-neutralMain'
        : 'bg-gradient-to-r from-accentTintStart to-accentTintEnd'
    }`">
    <div
      class="py-[2px] px-5 text-accentMain flex flex-row flex-nowrap rounded-full"
      :style="{
        color: outlined || !nogradient ? '#EEEEEE' : '#000000',
      }"
      :class="`${outlined ? 'bg-accentMain' : ''}`">
      <component
        :is="leftIcon"
        v-if="leftIcon"
        class="mr-1 ml-[-.5rem] max-h-full my-auto"
        :name="leftIcon"
        role="presentation"
        aria-hidden="true" />
      <slot />
      <component
        :is="rightIcon"
        v-if="rightIcon"
        class="ml-1 mr-[-.5rem] max-h-full my-auto"
        :name="rightIcon"
        role="presentation"
        aria-hidden="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Component } from 'vue';

  defineProps<{
    leftIcon?: Component;
    rightIcon?: Component;
    bold?: boolean;
    outlined?: boolean;
    nogradient?: boolean;
  }>();
</script>
