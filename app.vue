<template>
  <div ontouchstart="">
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
