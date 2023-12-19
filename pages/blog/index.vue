<template>
  <div class="p-3">
    <h1 class="p-3 text-4xl font-bold">ブログ</h1>
    <ContentList class="w-full" path="/blog" v-slot="{ list }">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <NuxtLink
          v-for="blog in list"
          :key="blog._path"
          class="m-1 flex flex-col rounded-xl bg-gray-100 p-8 dark:bg-gray-800"
          :to="blog._path"
        >
          <h1 class="text-xl font-bold">
            {{ blog.title }}
          </h1>
          <p>
            {{ blog.description }}
          </p>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "ブログ",
});
</script>
