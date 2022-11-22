<template>
  <div class="w-2/5">
    <div
      class="aspect-square h-24 border rounded-sm bg-accentShade mb-2"
      :class="{
        'animate-pulse': skeleton,
      }">
      <img
        v-if="!skeleton"
        class="h-full w-full rounded-sm"
        :src="githubData.avatar_url ?? 'https://via.placeholder.com/256.png'" />
    </div>

    <p
      class="font-bold"
      :class="{
        'animate-pulse w-20 h-4 p-1 rounded': skeleton,
      }">
      {{ person.name ?? githubData.name }}
    </p>
    <p class="italic mb-1">{{ person.role }}</p>
    <p class="text-sm mb-2">{{ person.bio ?? githubData.bio }}</p>
    <div class="flex flex-row flex-wrap gap-[6px]">
      <PersonBadge
        name="Github"
        :icon="Github"
        :link="`https://github.com/${person.githubUsername}`" />
      <PersonBadge
        v-for="(badge, index) in person.badges ?? []"
        :key="index"
        v-bind="badge" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Endpoints } from '@octokit/types';
  import axios from 'axios';
  import { Github } from 'lucide-vue-next';
  import PersonBadge, { type Badge } from './PersonBadge.vue';

  export type GithubUser =
    Endpoints['GET /users/{username}']['response']['data'];

  export type Person = {
    name?: string;
    bio?: string;
    badges?: Badge[];
    githubUsername: string;
    role: string;
  };

  const props = defineProps<{ person: Person; skeleton?: boolean }>();

  const githubData = (
    await axios.get<GithubUser>(
      `https://api.github.com/users/${props.person.githubUsername}`
    )
  ).data;
</script>
