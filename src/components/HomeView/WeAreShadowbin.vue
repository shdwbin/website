<template>
  <div class="flex flex-row flex-wrap justify-between">
    <div class="w-1/2 min-w-[24rem] mr-auto flex-grow flex-shrink">
      <div class="flex flex-row mb-5">
        <ShadowbinIcon
          class="inline max-h-14 aspect-square ml-4 fill-accentShade dark:fill-neutralShade" />
        <div>
          <h2 class="font-semibold">
            We are <span class="font-extrabold">Shadowbin</span>.
          </h2>
          <h3 class="font-semibold">
            Building the next cutting-edge
            <span class="font-extrabold">file sharing service</span>.
          </h3>
        </div>
      </div>
      <p>
        We are an international team of developers working on creating the next
        professional, privacy focused file sharing service.<br /><br />

        Shadowbin <span class="font-bold">lead</span> instead of
        follow, with experience in creating products for unicorn startups and
        YC companies.<br /><br />

        Our core tech stack is TypeScript and Rust with
        <span class="font-bold">experienced</span> developers in Software
        Engineering.<br /><br />

        We're always looking at bringing people onto our team. Send us
        an e-mail at <a href="mailto:hello@shadowb.in">hello@shadowb.in</a> to
        get involved.
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
  import { REST } from '@discordjs/rest';
  import { Routes } from 'discord-api-types/v10';
  import PersonBlock, { type Person } from './PersonCard.vue';
  import ShadowbinIcon from '@/components/icons/ShadowbinIcon.vue';

  // TODO: Store this somewhere more private. Thankfully we're doing this
  // under a private repository. That said, this is still a horrible idea.
  const rest = new REST({ version: '10' })
    .setToken('MTA0NDM5MTU4MTc5ODYzMzYyMw.G-Z5xc.03kd9XQiFOz5SFtGw8NWZXusfU7emHrUBh_L6Q');

  // Using the REST handler this way isn't ideal, but this is for PoC reasons.
  try {
      const people: Person[] = [
        {
          name: "Hanna",
          position: "Founder",
          image: await rest.get(Routes.user(333459879379337216)).displayAvatarURL(),
          bio: "Lorem ipsum, lorem ipsum.",
          badges: [{ icon: Github, link: 'https://github.com/xhxnna', name: 'Github' }],
        },
        {
          name: "Sophia",
          position: "Lead UX Engineer",
          image: await rest.get(Routes.user(242351388137488384)).displayAvatarURL(),
          bio: "Sophia is the person behind all the UX and UI design of Shadowbin. " +
               "She has worked at numerous startups with years of professional experience " +
               "in the software industry.",
          badges: [{ icon: Github, link: 'https://github.com/i0bs', name: 'Github' }],
        },
        {
          name: "Zoe",
          position: "Frontend Engineer",
          image: await rest.get(Routes.user(279692618391093248)).displayAvatarURL(),
          bio: "Lorem ipsum, lorem ipsum.",
          badges: [{ icon: Github, link: 'https://github.com/theS1LV3R', name: 'Github' }],
        },
      ];
  } catch (error) {
    console.error(error);
  }
</script>
