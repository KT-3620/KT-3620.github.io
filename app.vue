<template>
  <div ontouchstart="">
    <AppHeader />
    <div class="h-16" />
    <body
      class="min-h-screen bg-white text-black dark:bg-black dark:text-white"
    >
      <NuxtPage />
    </body>
    <AppFooter />
  </div>
</template>

<style lang="postcss">
@import "public/main.css";
</style>
