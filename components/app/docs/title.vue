<template>
  <h1 class="my-3 text-4xl font-extrabold leading-tight">
    {{ title }}
  </h1>
  <p class="my-4 text-base leading-tight">{{ description }}</p>
  <div class="flex text-gray-800 dark:text-gray-200">
    <div class="flex items-center">
      <Icon name="ph:pencil-simple" class="m-1 h-5 w-5" />
      <p class="py-1">{{ wroteDate }}</p>
    </div>
    <div class="ml-4 flex items-center">
      <Icon name="ph:arrow-clockwise" class="m-1 h-5 w-5" />
      <p class="py-1">{{ editedDate }}</p>
    </div>
  </div>
  <div class="my-5 border-b-2 border-gray-300 dark:border-gray-700"></div>

  <AppDocs />
</template>
<script setup lang="ts">
const route = useRoute();
const title = ref("");
const description = ref("");
const wroteDate = ref("");
const editedDate = ref("");

onMounted(async () => {
  const article = await queryContent(`${route.path}`).findOne();
  title.value = article.title ?? "タイトルがありません";
  description.value = article.description ?? "説明がありません";
  const wroteDateObj = new Date(article.wroteDate ?? "");

  wroteDate.value = wroteDateObj.toDateString() ?? "";

  wroteDate.value = returnDate(article.wroteDate);
  editedDate.value = returnDate(article.editedDate);
});

function returnDate(date: string) {
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return "日付がありません";
  else {
    return `${dateObj.getFullYear()}年${
      dateObj.getMonth() + 1
    }月${dateObj.getDate()}日`;
  }
}
</script>

<style lang="postcss">
title {
  @apply mb-4 mt-8 text-4xl font-extrabold underline underline-offset-8;

  text-decoration-thickness: 1px;
}
</style>
