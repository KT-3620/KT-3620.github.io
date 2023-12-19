<template>
  <div class="w-full text-justify">
    <ContentDoc class="docs" />
  </div>
</template>

<style lang="postcss">
.docs {
  h1 {
    @apply mb-4 mt-6 text-3xl font-bold underline underline-offset-[10px];

    text-decoration-thickness: 1px;
  }

  h2 {
    @apply mb-2 mt-4 text-xl font-bold underline underline-offset-[6px];

    text-decoration-thickness: 0.5px;
    text-decoration-style: dashed;
  }

  h3 {
    @apply mb-0.5 mt-1 font-semibold;
  }

  p {
    @apply m-2 text-base;
  }

  img {
    @apply m-8 mx-auto min-w-[96] max-w-full shadow-sm transition-all duration-200;
  }

  ol {
    @apply ml-3 list-decimal p-2;
  }

  ul {
    @apply ml-3 list-disc p-2;
  }

  li {
    @apply m-1;
  }

  a {
    @apply text-blue-700 dark:text-blue-300;
  }

  .shiki {
    @apply m-2 flex flex-col whitespace-pre-wrap rounded-md text-base leading-relaxed max-md:text-sm;
  }

  code {
    @apply rounded-md bg-gray-200 p-1 font-mono dark:bg-gray-800;
  }
}
</style>
