<template>
  <div v-html="svg" class="m-auto" />
</template>

<script setup lang="ts">
  import type { IconName, IconSize } from '@primer/octicons';
  import octicons from '@primer/octicons';

  const props = defineProps<{
    name: IconName;
    height?: IconSize;
  }>();

  const svg = octicons[props.name].toSVG({
    height: props.height ?? 24,
  });
</script>
