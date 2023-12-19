<template>
  <div class="my-5 flex w-full flex-col items-center justify-center">
    <NuxtImg
      src="https://github.com/KT-3620.png"
      alt="KT-3620"
      class="m-8 flex rounded-full shadow-xl shadow-slate-500"
    />
    <h1 class="p-3 text-5xl font-extrabold">KT</h1>
    <div class="flex flex-row items-center max-md:flex-col">
      <h3 class="p-1 text-3xl">👋 Hello World!</h3>
      <h3 class="p-1 text-3xl">こんにちは! 世界!</h3>
    </div>
  </div>
  <AppDocs class="m-10" />
</template>

<script setup lang="ts">
useHead({
  title: "@KT-3620",
});
</script>
