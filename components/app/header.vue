<template>
  <header
    class="align-center shadow-custom fixed flex h-16 w-full items-center bg-gray-100/80 dark:bg-gray-900/80"
  >
    <NuxtLink class="mx-3" :to="'/'">
      <NuxtImg
        src="https://github.com/KT-3620.png"
        alt="KT-3620のアイコン"
        class="h-10 w-10 touch-auto rounded-full transition-opacity duration-200 active:opacity-50"
      />
    </NuxtLink>

    <NuxtLink
      class="mx-1 flex h-10 content-center items-center rounded-lg bg-gray-300 p-2 text-black transition-all duration-200 active:bg-gray-500 active:opacity-50 dark:bg-gray-600 dark:text-white"
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >
      <Icon class="m-1 h-8" :name="route.icon" />
      <p class="p-1">{{ route.name }}</p>
    </NuxtLink>
  </header>
</template>
<script setup>
const routes = [
  {
    path: "/about",
    name: "About",
    icon: "ph:question",
  },
  {
    path: "/blog",
    name: "Blog",
    icon: "ph:note",
  },
  {
    path: "/search",
    name: "Search",
    icon: "ph:magnifying-glass",
  },
];
</script>
<style lang="postcss">
@tailwind base;

.shadow-custom {
  box-shadow: 0px 0px 3px 3px rgba(72, 72, 144, 0.3);
}
</style>
