<template>
  <div class="p-3">
    <h1 class="p-3 text-4xl font-bold">検索</h1>

    <input
      v-model="search"
      class="w-100 m-1 mb-4 flex w-full rounded-md p-3 text-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-500"
    />

    <NuxtLink
      v-for="result in results"
      :key="result.id"
      :to="result._path"
      class="m-1 flex flex-col rounded-xl bg-gray-100 p-8 dark:bg-gray-800"
    >
      <h1 class="text-xl font-bold">{{ result.title }}</h1>
      <p>{{ result.description }}</p>
      <!-- <p>デバッグ用、検索Id: {{ result.searchId }}</p> -->
      <p class="text-gray-500">{{ result._path }}</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import MiniSearch from "minisearch";

const search = ref("");
const results = ref();

/** 取得するフィールド */
const fields = ["title", "description", "searchId", "_path", "search-id"];

/** Mini Searchのインスタンス */
const miniSearch = new MiniSearch({
  fields: fields, // 検索をするフィールド、ここではfieldsを指定
  storeFields: fields, // 検索結果の応答の際に含めるフィールド、fieldsを指定
});

useHead({
  title: "検索...",
});

// 起動時
onMounted(async () => {
  const { data } = await useAsyncData(
    // useAsyncDataを使用する必要があるみたいなので
    "contentQuery",
    () =>
      queryContent("") // /blog の記事を
        .only(fields) // fieldsのフィールドのみ取得
        .find(), // 上記の条件で探してもらって
  );

  /** レスポンスを加工するための変数 */
  let response = data.value;
  // console.log(response);

  if (!response) {
    console.error("検索できる記事データがありません");
    return;
  }

  // Mini Searchは検索するのにidを必要らしいので、idを手動で振る
  for (let index = 0; index < response.length; index++) {
    response[index].id = index;
  }

  // response の内容を見たければ
  // console.log(response);

  // miniSearchの検索対象に追加
  miniSearch.addAll(response);
});

// テキストボックスのsearchの値を監視
watch(search, async () => {
  const result = miniSearch.search(search.value, { prefix: true, fuzzy: 2 });
  results.value = result;
});
</script>
