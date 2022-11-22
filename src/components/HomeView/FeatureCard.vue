<template>
  <div
    :class="{ 'border-2 rounded-2xl': highlighted }"
    class="w-full lg:w-[31%] lg:max-w-sm p-5 min-w-[20rem]">
    <div
      v-if="topPillText"
      class="dark:bg-neutralMain bg-neutralShade text-accentMain whitespace-nowrap w-min mx-auto -mt-9 mb-4 py-1 px-4 rounded-full">
      {{ topPillText }}
    </div>
    <div>
      <h3 :class="{ 'text-3xl': highlighted }" class="text-center">
        {{ title }}
      </h3>
      <div class="flex flex-col gap-3" :class="{ 'text-[95%]': !highlighted }">
        <slot />
      </div>
      <div class="flex flex-row justify-center mt-4">
        <RouterLink :to="link">
          <PillButton theme="transparent" class="w-min h-min whitespace-nowrap">
            {{ linkTitle }}
          </PillButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import PillButton from '../buttons/PillButton.vue';

  defineProps({
    topPillText: {
      type: String,
      required: false,
    },
    highlighted: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    linkTitle: {
      type: String,
      required: false,
      default: 'Learn more',
    },
  });
</script>
