<template>
  <Hero />
  <Section name="What We Do">
    <WhatWeDo />
  </Section>
  <Section name="How It's Done" hidden>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptates!
    Cumque perspiciatis earum, aut excepturi maiores voluptates harum possimus
    culpa temporibus corporis nulla quia at eaque expedita eligendi dignissimos
    tenetur corrupti unde explicabo! Facilis perspiciatis deserunt qui ab
    molestiae iusto recusandae blanditiis, eligendi delectus ad reiciendis.
    Quasi fugit aliquam, itaque dolorem obcaecati possimus minus. Ipsam alias
    exercitationem, dolore reiciendis, aliquid id sit illo ab beatae ratione ad
    ullam totam eaque cumque nulla sed, vitae nihil laudantium assumenda
    cupiditate. Aliquam, est necessitatibus? Assumenda praesentium illo
    blanditiis ex quo! Expedita nam quaerat odio hic id, eum, quae ea, excepturi
    velit et accusamus?
  </Section>
  <Section name="Who We Are">
    <WeAreShadowbin class="mb-20" />
    <InvestorsSponsors class="hidden" />
  </Section>
  <Section name="Get Involved" hidden>
    <LatestPosts />
    <Explore />
  </Section>
</template>

<script setup lang="ts">
  import { useHead } from '@vueuse/head';
  import Section from '@/components/Section.vue';
  import Hero from '@/components/Hero.vue';
  import LatestPosts from '@/components/HomeView/LatestPosts.vue';
  import Explore from '@/components/HomeView/Explore.vue';
  import WeAreShadowbin from '@/components/HomeView/WeAreShadowbin.vue';
  import InvestorsSponsors from '@/components/HomeView/InvestorsAndSponsors.vue';
  import WhatWeDo from '@/components/HomeView/WhatWeDo.vue';

  useHead({});
</script>
