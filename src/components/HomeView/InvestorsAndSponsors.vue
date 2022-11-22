<template>
  <div class="flex flex-row flex-wrap justify-between">
    <div
      class="flex flex-row flex-wrap lg:w-1/2 w-full min-w-[24rem] gap-5 justify-center lg:justify-end lg:order-1 order-2">
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
    <div class="lg:w-1/2 w-full min-w-[24rem] lg:order-2 order-1 mb-8">
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
