<template>
  <div
    class="flex flex-col rounded-lg bg-blue-100 p-3 text-center dark:bg-blue-950"
  >
    <a
      class="flex content-center items-center justify-center p-1 text-gray-700 active:underline dark:text-gray-300"
      href="https://github.com/KT-3620"
      target="_blank"
    >
      <p>@KT-3620</p>
      <Icon class="m-1 h-8" name="ph:arrow-circle-right" />
    </a>
    <NuxtLink to="/privacy" class="p-1">
      <p
        class="text-sm text-gray-500 underline active:underline dark:text-gray-400"
      >
        プライバシーポリシー
      </p>
    </NuxtLink>
  </div>
</template>
