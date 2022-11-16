<template>
  <div
    class="border rounded-md aspect-video max-w-md flex items-end p-6 flex-shrink flex-grow"
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(${color}, 0.85) 30%, rgba(${color}, 0.5) 100%), url(${
        imageURL ?? HeroImage
      })`,
      backgroundSize: '100% auto',
      backgroundPosition: 'bottom center',
    }">
    <div class="flex flex-row mt-auto w-full">
      <div class="float-left mr-auto">
        <h3>{{ title }}</h3>
        <p
          class="text-sm text-ellipsis overflow-hidden"
          :style="{
            'lineClamp': 2,
            'display': '-webkit-box',
            '-webkit-box-orient': 'vertical',
          }"
          :innerHTML="sanitized"></p>
      </div>
      <RouterLink :to="link" class="float-right h-min mt-auto ml-4">
        <PillButton>Read</PillButton>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import DOMPurify from 'dompurify';
  import { marked } from 'marked';
  import HeroImage from '@/assets/HeroImage.png';
  import PillButton from '@/components/buttons/PillButton.vue';
  import usePreferenceStore from '@/stores/preferences';

  const props = defineProps<{
    title: string;
    preview: string;
    link: string;
    imageURL?: string;
  }>();

  const preferences = usePreferenceStore();

  const color = computed(() =>
    preferences.lightTheme ? '200, 200, 200' : '0, 0, 0'
  );

  const rendered = computed(() => marked.parse(props.preview));
  const sanitized = computed(() => DOMPurify.sanitize(rendered.value));
</script>

<style lang="scss" scoped></style>
