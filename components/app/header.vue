<template>
  <header
    class="flex h-16 w-full align-center items-center fixed bg-gray-100/80 dark:bg-gray-900/80 shadow-custom"
  >
    <NuxtLink class="mx-3" :to="'/'">
      <img
        src="https://github.com/KT-3620.png"
        alt="KT-3620のアイコン"
        class="h-10 w-10 rounded-full active:opacity-50 touch-auto transition-opacity duration-200"
      />
    </NuxtLink>

    <NuxtLink
      class="bg-gray-400 dark:bg-gray-600 h-10 p-2 mx-1 active:bg-gray-500 text-black dark:text-white rounded-lg active:opacity-50 transition-all duration-200 items-center content-center flex"
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >
      <Icon class="h-8 m-1" :name="route.icon" />
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
];
</script>
<style scoped>
@tailwind base;

.shadow-custom {
  box-shadow: 0px 0px 5px 5px rgba(127, 127, 127, 0.5);
}
</style>
