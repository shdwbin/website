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
          class="inline max-h-14 aspect-square ml-4 fill-neutralShade" />
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
  import ShadowbinIcon from '../icons/ShadowbinIcon.vue';
  import PersonBlock, { type Person } from './PersonCard.vue';

  const people: Person[] = [
    {
      name: 'Name namesonsonson',
      position: 'Very long position',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      badges: [
        { icon: 'mark-github', link: '' },
        { icon: 'mark-github', link: '' },
        { icon: 'mark-github', link: '' },
      ],
    },
    {
      name: 'Name nameson',
      position: 'Not so long',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [
        { icon: 'mark-github', link: '' },
        { icon: 'mark-github', link: '' },
      ],
    },
    {
      name: 'Nameson',
      position: 'Position',
      bio: 'Really short bio.',
      badges: [{ icon: 'mark-github', link: '' }],
    },
    {
      name: 'Short',
      position: '',
      badges: [],
    },
  ];
</script>
