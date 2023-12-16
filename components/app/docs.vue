<template>
  <ContentDoc class="docs" />
</template>

<style lang="postcss">
.docs {
  h1 {
    @apply mb-3 mt-5 text-3xl font-bold underline underline-offset-8;

    text-decoration-thickness: 1px;
  }

  h2 {
    @apply mb-1 mt-3 text-2xl font-bold underline underline-offset-4;

    text-decoration-thickness: 0.5px;
  }

  h3 {
    @apply mb-0.5 mt-1 text-lg font-semibold;
  }

  p {
    @apply p-1 text-base;
  }

  a {
    @apply text-blue-700 dark:text-blue-300;
  }
}
</style>
