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
      <Octicon
        v-if="leftIcon"
        class="mr-1 ml-[-.5rem] max-h-full"
        :name="leftIcon"
        role="presentation"
        aria-hidden="true" />
      <slot />
      <Octicon
        v-if="rightIcon"
        class="ml-1 mr-[-.5rem] max-h-full"
        :name="rightIcon"
        role="presentation"
        aria-hidden="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IconName } from '@primer/octicons';
  import Octicon from '../icons/Octicon.vue';

  defineProps<{
    leftIcon?: IconName;
    rightIcon?: IconName;
    bold?: boolean;
    outlined?: boolean;
    nogradient?: boolean;
  }>();
</script>
