<template>
  <span :class="`${gradient === 'full' ? gradientSVG : ''}`"
    >An encrypted,
    <span :class="`${gradient === 'end' ? gradientSVG : ''}`"
      >privacy focused </span
    >file sharing service.
  </span>
</template>

<script setup lang="ts">
  defineProps<{
    gradient?: 'none' | 'end' | 'full';
  }>();

  const gradientSVG =
    'bg-gradient-to-r from-accentTintStart to-accentTintEnd bg-clip-text text-transparent';
</script>
