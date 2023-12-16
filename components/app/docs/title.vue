<template>
  <h1 class="my-4 text-4xl font-extrabold underline underline-offset-8">
    {{ title }}
  </h1>
  <p class="my-4 text-lg">{{ description }}</p>
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
