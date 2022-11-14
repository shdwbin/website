<template>
  <span :class="`${gradient === 'full' ? gradientSVG : ''}`"
    >An encrypted, privacy focused
    <span :class="`${gradient === 'end' ? gradientSVG : ''}`"
      >file sharing service.</span
    ></span
  >
</template>

<script setup lang="ts">
  defineProps<{
    gradient?: 'none' | 'end' | 'full';
  }>();

  const gradientSVG =
    'bg-gradient-to-r from-accentTintStart to-accentTintEnd bg-clip-text text-transparent';
</script>
