<template>
  <ContentDoc class="docs" />
</template>

<style lang="postcss">
.docs {
  h1 {
    @apply mb-4 mt-6 text-3xl font-bold underline underline-offset-[10px];

    text-decoration-thickness: 1px;
  }

  h2 {
    @apply mb-2 mt-4 text-2xl font-bold underline underline-offset-[6px];

    text-decoration-thickness: 0.5px;
    text-decoration-style: dashed;
  }

  h3 {
    @apply mb-0.5 mt-1 text-lg font-semibold;
  }

  p {
    @apply ml-2 text-base;
  }

  img {
    @apply m-8 mx-auto min-w-[96] max-w-full shadow-sm transition-all duration-200;
  }

  ol {
    @apply ml-3 list-decimal p-3;
  }

  ul {
    @apply ml-3 list-disc p-3;
  }

  li {
    @apply mb-1 ml-4;
  }

  a {
    @apply text-blue-700 dark:text-blue-300;
  }

  code {
    @apply rounded-md bg-gray-200 p-1 font-mono text-sm dark:bg-gray-800;
  }
}
</style>
