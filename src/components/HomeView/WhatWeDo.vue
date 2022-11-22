<template>
  <div
    class="flex flex-wrap lg:flex-row flex-col justify-evenly place-items-end gap-8 lg:gap-6">
    <FeatureCard
      link="/"
      highlighted
      title="Encryption"
      topPillText="Highlight"
      class="lg:order-2">
      <p>It's time to ditch non-encrypted file storage.</p>
      <p>
        Shadowbin's privacy is taken to the next level: we encrypt every single
        file that you store onto our platform. By using various internal
        encryption methods, Shadowbin guarantees an encrypted storage system for
        every user.
      </p>
      <p>
        Additionally, we will never ask to track any data from you outside of
        our cloud plan for billing. Analytics received from file sharing are
        anonymously shared and non-related to the owner.
      </p>
    </FeatureCard>
    <FeatureCard
      link="/"
      title="Syncronized sharing"
      topPillText="Planned"
      class="lg:order-1">
      <p>Synchronise your files locally for local network sharing.</p>
      <p>
        Along with a proofed and fully capable cloud platform, Shadowbin allows
        for you to share your files locally between users on a network. Stay
        in-sync with others by using Shadowbin's local platform management
        service.
      </p>
      <p>
        In the future, Shadowbin will further consider allowing for proxies to
        be used to drive home the concept of privacy by having a masked server
        connection.
      </p>
    </FeatureCard>
    <FeatureCard link="/" title="Self-hosting" class="lg:order-3">
      <p>Host your own cloud solution through our open-sourced software.</p>
      <p>
        Shadowbin offers its own cloud for those wanting to use a dedicated
        server for file sharing. However, we also allow for companies to host it
        themselves for their own purposes. Shadowbin's free hosting source is
        decentralised and in no way regulated for usage.
      </p>
      <p>
        Check out our available SDKs for more information regarding how you can
        use Shadowbin in your company's workflow for file sharing purposes.
      </p>
    </FeatureCard>
    <FeatureCard link="/" title="Team management" class="lg:order-4">
      <p>Bring managing files between teams to life with Shadowbin.</p>
      <p>
        We offer shared file access to those who need to have sensitive contents
        accessible between numerous users. Whether it may be coworkers or
        different teams, Shadowbin gives you free mutual file sharing where it's
        truly needed.
      </p>
    </FeatureCard>
  </div>
</template>

<script setup lang="ts">
  import FeatureCard from './FeatureCard.vue';
</script>
