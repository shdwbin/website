<template>
  <div class="flex flex-row flex-wrap justify-between">
    <div class="w-1/2 min-w-[24rem] mr-auto flex-grow flex-shrink">
      <div class="flex flex-row mb-5">
        <div>
          <h2 class="font-semibold">
            We are <span class="font-extrabold">Shadowbin</span>.
          </h2>
          <h3 class="font-semibold">
            Building an encrypted, privacy focused
            <span class="font-extrabold">file-sharing service</span>.
          </h3>
        </div>
        <ShadowbinIcon
          class="inline max-h-14 aspect-square ml-4 fill-accentShade dark:fill-neutralShade" />
      </div>
      <p>
        We're an international team of developers working on creating the best
        cutting-edge products.<br /><br />

        Shadowbin are <span class="font-bold">leaders</span> instead of
        followers, with experience working at unicorn and YC companies.<br /><br />

        Our main core tech stack is around TypeScript and Rust, with
        <span class="font-bold">proliferate experience</span> in software
        engineering. <br /><br />

        We're always looking at bringing people onto our team. Send us
        <a href="mailto:hello@shadowb.in">an e-mail</a> to get involved.
      </p>
    </div>
    <div
      class="flex w-1/2 min-w-[24rem] flex-wrap flex-grow flex-shrink justify-evenly content-evenly gap-4">
      <PersonBlock
        v-for="(person, index) in people"
        :key="index"
        v-bind="person" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Github } from 'lucide-vue-next';
  import { faker } from '@faker-js/faker/locale/en_US';
  import PersonBlock, { type Person } from './PersonCard.vue';
  import ShadowbinIcon from '@/components/icons/ShadowbinIcon.vue';

  const people: Person[] = [
    {
      name: faker.name.fullName(),
      position: faker.name.jobTitle(),
      image: faker.image.avatar(),
      bio: faker.hacker.phrase(),
      badges: [
        { icon: Github, link: '', name: 'Github' },
        { icon: Github, link: '', name: 'Github' },
        { icon: Github, link: '', name: 'Github' },
      ],
    },
    {
      name: faker.name.fullName(),
      position: faker.name.jobTitle(),
      image: faker.image.avatar(),
      bio: faker.hacker.phrase(),
      badges: [
        { icon: Github, link: '', name: 'Github' },
        { icon: Github, link: '', name: 'Github' },
      ],
    },
    {
      name: faker.name.fullName(),
      position: faker.name.jobTitle(),
      image: faker.image.avatar(),
      bio: faker.hacker.phrase(),
      badges: [{ icon: Github, link: '', name: 'Github' }],
    },
    {
      name: faker.name.fullName(),
      position: faker.name.jobTitle(),
      image: faker.image.avatar(),
      bio: faker.hacker.phrase(),
      badges: [],
    },
  ];
</script>
