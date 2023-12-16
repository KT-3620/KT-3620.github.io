<template>
  <div class="p-3">
    <h1 class="text-4xl font-bold">ブログ</h1>
    <ContentList class="w-full" path="/blog" v-slot="{ list }">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <NuxtLink
          v-for="blog in list"
          :key="blog._path"
          class="font-lg m-1 rounded-xl bg-gray-100 p-8 dark:bg-gray-800"
          :to="blog._path"
          >{{ blog.title }}
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>
