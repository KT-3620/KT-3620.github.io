<template>
  <h1 class="my-3 text-4xl font-extrabold leading-tight">
    {{ title }}
  </h1>
  <p class="my-4 text-lg leading-tight">{{ description }}</p>
  <div class="my-5 border-b-2 border-gray-300 dark:border-gray-700"></div>

  <AppDocs />
</template>
<script setup lang="ts">
const route = useRoute();
const title = ref("");
const description = ref("");

onMounted(async () => {
  const firstArticle = await queryContent(`${route.path}`).findOne();
  title.value = firstArticle.title ?? "タイトルがありません";
  description.value = firstArticle.description ?? "説明がありません";
});
</script>

<style lang="postcss">
title {
  @apply mb-4 mt-8 text-4xl font-extrabold underline underline-offset-8;

  text-decoration-thickness: 1px;
}
</style>
