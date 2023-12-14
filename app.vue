<template>
  <div ontouchstart="">
    <AppHeader />
    <div class="h-16" />
    <body
      class="min-h-screen dark:bg-black dark:text-white bg-white text-black"
    >
      <NuxtPage />
    </body>
    <AppFooter />
  </div>
</template>

<style>
@import "public/main.css";
</style>
