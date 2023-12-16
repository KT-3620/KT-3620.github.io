<template>
  <AppHeader />
  <div class="h-16"></div>
  <body class="min-h-full bg-white text-black dark:bg-black dark:text-white">
    <Status404 />
  </body>

  <AppFooter />
</template>

<script setup lang="ts">
// ステータスコードを受け取る
const error = useError();
const code = ref(0);
</script>
