<template>
  <ContentDoc class="m-5" />
  <NuxtLink v-if="$route.path.startsWith('/blog')" :to="'/blog'">
    ブログ一覧に戻る
  </NuxtLink>
  <p class="dark:text-white">Current Path: {{ $route.path }}</p>
</template>

<script setup lang="ts"></script>

<style>
@tailwind base;

h1 {
  @apply text-4xl underline font-extrabold my-5;
}

h2 {
  @apply text-2xl underline font-bold my-3;
}

h3 {
  @apply text-xl my-2;
}

a {
  @apply text-blue-500 underline;
}
</style>
