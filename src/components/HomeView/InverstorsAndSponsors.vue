<template>
  <div class="flex flex-row flex-wrap justify-between">
    <div class="flex flex-row flex-wrap w-1/2 min-w-[24rem] gap-5">
      <InvestorOrSponsorCard
        v-for="investor of investors"
        :key="investor.name"
        v-bind="investor" />
      <RouterLink to="/">
        <InvestorOrSponsorCard
          name="Your name"
          class="italic"
          person="Support us today!" />
      </RouterLink>
    </div>
    <div class="w-1/2 min-w-[24rem]">
      <h2 class="font-semibold h-min">Our investors and sponsors.</h2>
      <p>
        Shadowbin would not be possible without our investors and sponsors. We
        thank each of them very much.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { InvestorOrSponsor } from './InvestorOrSponsorCard.vue';
  import InvestorOrSponsorCard from './InvestorOrSponsorCard.vue';

  const investors: InvestorOrSponsor[] = [];
</script>
