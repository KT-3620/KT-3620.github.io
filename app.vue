<template>
  <div ontouchstart="">
    <NuxtLoadingIndicator
      color="gray"
      alpha="0.5"
      :duration="5000"
      :throttle="500"
      class="z-50"
    />
    <header>
      <AppHeader />
    </header>
    <body class="min-h-screen text-black dark:text-white">
      <div class="h-16" />
      <NuxtPage />
    </body>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<style lang="postcss">
@import "public/main.css";

:root {
  @apply bg-white dark:bg-black;
}
</style>

<script setup lang="ts">
useHead({
  script: [
    {
      async: true,
      "data-id": "101437567",
      src: "https://static.getclicky.com/js",
    },
  ],
});
</script>
