<template>
  <svg
    aria-label="Shadowbin logo"
    height="100"
    viewBox="0 0 85.416931 100"
    :class="`${
      inverted
        ? 'fill-neutralMain dark:fill-accentMain'
        : 'fill-accentMain dark:fill-neutralMain'
    }`">
    <path
      d="M 0,24.958661 H 8.4122835 V 74.876063 H 0 Z m 77.004409,0 h 8.41252 v 49.917402 h -8.41252 z M 42.87008,100 38.664017,92.562205 80.983859,67.603307 85.190158,75.041339 Z M 0.3235512,75.041339 4.5296695,67.603307 46.817403,92.562205 42.611261,100 Z M 42.514174,0 46.720316,7.4380157 4.4326065,32.396693 0.2264803,24.958661 Z m 42.54685,24.958661 -4.2063,7.438032 L 38.534568,7.4380157 42.74071,0 Z M 14.883229,34.214882 42.708346,50.082677 70.533466,34.214882 V 65.950394 L 42.708346,82.479528 14.883229,66.281024 Z" />
  </svg>
</template>

<script setup lang="ts">
  defineProps<{ inverted?: boolean }>();
</script>
