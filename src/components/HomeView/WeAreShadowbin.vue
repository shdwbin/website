<template>
  <div class="flex flex-row flex-wrap justify-between">
    <div class="w-1/2 min-w-[24rem] mr-auto flex-grow flex-shrink">
      <div class="flex flex-row mb-5">
        <ShadowbinIcon
          class="inline max-h-14 aspect-square mr-4 fill-accentShade dark:fill-neutralShade" />
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

        Shadowbin <span class="font-bold">lead</span> instead of follow, with
        experience in creating products for unicorn startups and YC
        companies.<br /><br />

        Our core tech stack is TypeScript and Rust with
        <span class="font-bold">experienced</span> developers in Software
        Engineering.<br /><br />

        We're always looking at bringing people onto our team. Send us an e-mail
        at <a href="mailto:hello@shadowb.in">hello@shadowb.in</a> to get
        involved.
      </p>
    </div>
    <div
      class="flex w-1/2 min-w-[24rem] flex-wrap flex-grow flex-shrink justify-evenly content-evenly gap-4 pt-8">
      <Suspense>
        <PersonCard
          v-for="(person, index) in people"
          :key="index"
          :person="person" />
        <template #fallback>
          <PersonCardSkeleton v-for="i in 3" :key="i" />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
  import PersonCard, { type Person } from './PersonCard.vue';
  import PersonCardSkeleton from './PersonCardSkeleton.vue';
  import ShadowbinIcon from '@/components/icons/ShadowbinIcon.vue';

  const people: Person[] = [
    {
      githubUsername: 'xhxnna',
      role: 'Founder',
      bio: 'Lorem ipsum, lorem ipsum.',
    },
    {
      role: 'Lead UX Engineer',
      githubUsername: 'i0bs',
      bio:
        'Sophia is the person behind all the UX and UI design of Shadowbin. ' +
        'She has worked at numerous startups with years of professional experience ' +
        'in the software industry.',
    },
    {
      role: 'Frontend Engineer',
      githubUsername: 'theS1LV3R',
      bio: 'Lorem ipsum, lorem ipsum.',
    },
  ];
</script>
