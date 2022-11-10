<template>
  <div
    class="border rounded-full bg-neutralMain px-4 py-1 text-accentMain flex flex-row flex-nowrap"
    :class="`${gradientDirection ? gradient : ''} ${
      bold === false ? '' : 'font-bold'
    }`">
    <Octicon v-if="side === 'left' && icon" :name="icon" />
    <slot />
    <Octicon
      class="ml-2 mr-[-.5rem]"
      v-if="(side === 'right' || side === undefined) && icon"
      :name="icon" />
  </div>
</template>

<script setup lang="ts">
  import type { IconName } from '@primer/octicons';
  import Octicon from '../icons/Octicon.vue';

  const props = defineProps<{
    side?: 'right' | 'left';
    icon?: IconName;
    bold?: boolean;
    gradientDirection?:
      | 'to-t'
      | 'to-tr'
      | 'to-r'
      | 'to-br'
      | 'to-b'
      | 'to-bl'
      | 'to-l'
      | 'to-tl';
  }>();

  const gradient = `bg-gradient-${props.gradientDirection!} from-accentTintStart to-accentTintEnd text-neutralMain border-none`;
</script>
