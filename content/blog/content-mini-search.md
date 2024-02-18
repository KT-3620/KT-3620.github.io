---
title: "Nuxt Content + Mini Search"
description: "検索機能なんかうまくいかなかったから自力実装しました"
searchId:
  [
    "Mini",
    "Search",
    "検索",
    "けんさく",
    "実装",
    "じっそう",
    "Nuxt",
    "Content",
    "Vue",
    "Web",
    "kennsaku",
    "作ってみた",
    "つくってみた",
  ]
blogId: 2
wroteDate: "2023-12-19"
editedDate: "2024-02-19"
---

こんにちは、KTです。前回の記事で書いた通り、一目惚れしたNuxt Contentしてこのブログを作ってみたのですが、それにふと検索機能を追加したいと思ったので検索機能を実装しようとしました。
しかし、Nuxt Contentにもalpha版で検索機能はあるのですが、私の使い方が良くないのか行き詰まってしまいました。そこで、その検索機能に使われているライブラリを元に手動で実装することにしました。

# 環境

筆記当時の環境です。

- Nuxt 3 (v3.8.2)
- Nuxt Content (v2.9.0)
- Mini Search (v6.3.0)

# 仕組み

1. あらかじめ記事のFront Matterに検索に使用するデータを書き込んでおく
2. Nuxt Content の `queryContent()` をうまいこと使っていい感じのJSONを取得する
3. その JSON を元に、少し加工をして Mini Search に追加する
4. 検索ボックスに入力された文字列を元に、Mini Search に検索してもらう
5. 検索結果を表示、完了！

# 前提

## `content`フォルダのmdファイル

それぞれのmdファイルにFront Matterを用いて次のことを書いてください。

- `title`: 記事のタイトル
- `description`: 記事の説明
- `searchId`: 検索するときに反応させたい単語、string型の配列で複数指定可能

## ディレクトリ構造

こんな感じにしました。

```txt
content
└── blog
    ├── first-blog.md
    ├── second-blog.md
    └── third-blog.md

pages
├── blog
│   ├── index.vue
│   └── [id].vue
├── index.vue
└── search.vue

その他index.vueや他のページなど...
```

# コード

~~TypeScriptで書いてますが、`lang="ts"`を消して JavaScript で動かしても動くと思います。（型定義の必要が無かったので）~~

追記: 結果的にany型が含まれてしまっていたので修正しました。JavaScriptでエラーが出る箇所にはコメントアウトしたコードを使ってください。

### pages/search.vue

CSS周りは各自でお願いします。

```vue
<template>
  <div>
    <h1>検索</h1>
    <input v-model="search" />

    <NuxtLink v-for="result in results" :key="result.id" :to="result._path">
      <h1>{{ result.title }}</h1>
      <p>{{ result.description }}</p>
      <p>デバッグ用、検索Id: {{ result.searchId }}</p>
      <p>デバッグ用、パス: {{ result._path }}</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import MiniSearch, { type SearchResult } from "minisearch";
// JS
// import MiniSearch from "minisearch";

const search = ref("");
const results: Ref<SearchResult[]> = ref([]);
// JS
// const search = ref("");

/** 取得するフィールド */
const fields = ["title", "description", "searchId", "_path", "search-id"];

/** Mini Searchのインスタンス */
const miniSearch = new MiniSearch({
  fields: fields, // 検索をするフィールド、ここではfieldsを指定
  storeFields: fields, // 検索結果の応答の際に含めるフィールド、fieldsを指定
});

// 起動時
onMounted(async () => {
  const { data } = await useAsyncData(
    // useAsyncDataを使用するほうがいいらしい
    "contentQuery",
    () =>
      queryContent("") // /blog の記事を
        .only(fields) // fieldsのフィールドのみ取得
        .find(), // 上記の条件で探してもらって
  );

  /** レスポンスを加工するための変数 */
  let response = data.value;
  // console.log(response);

  // レスポンスが空なら
  if (!response) {
    console.error("検索できる記事データがありません");
    return;
  }

  // Mini Searchは検索するのにidを必要らしいので、idを手動で振る
  for (let index = 0; index < response.length; index++) {
    response[index].id = index;
  }

  // response の内容を見たければ
  console.log(response);

  // miniSearchの検索対象に追加
  miniSearch.addAll(response);
});

// テキストボックスのsearchの値を監視
watch(search, async () => {
  const result = miniSearch.search(search.value, { prefix: true, fuzzy: 2 });
  results.value = result;
});
</script>
```

### 参考: 記事のマークダウン

```md
---
title: "タイトル"
description: "記事についての説明を書きましょう。"
searchId: ["Tag", "Web", "Nuxt"]
---

<!-- Front Matter 終わり -->

<!-- 本文 -->

# 本文

ここに記事の本文を書きましょう。
```

# 感想

適当にmdファイルをコピペして低電力モードのiPhoneで50ファイルほどで検索したら余裕でした。

ただ、200ファイルほどで検索したら、流石にもっさりと...と思いましたが検索結果がヒットしすぎて200個のNuxtLinkのレンダリングに時間がかかっているだけでした。

~~そりゃあそうだよなぁ~~

Mini Searchの設定を変えて、検索結果の数の上限を決めれば問題ないと思います。

ふざけて1000ファイルでも検索結果が少なければいけるやろと思って試しましたが、全然いけました。すごい。1000ファイルでも`watch()`使って1文字入れるたびに検索しても大きな問題はなさそうです。

というか、改めてライブラリの説明を見たらこのライブラリは**全文検索**ライブラリでした。タイトルとタグだけでの検索にしてはオーバースペックだったかもしれませんが、やりたいことができたので良きとします。~~まぁ記事数が検索するほどないんですけど~~

よければ、[ここから](/search)試してみてください。

# って思っていたら...

2023/12/19時点の情報です。

`nuxt generate`した時に、なんと、`queryContent()`が404エラーで取得できませんでした。これだとGitHub Pagesに上げた際に検索ができません。

って思ったら[Nuxt ContentのGitHubのIssue](https://github.com/nuxt/content/issues/2062)に上がっていました。

それによると、`nuxt.config.ts`に次の設定を適用するとうまくいったケースがあったそうです。実際、今(2023/12/19時点)のところこの設定を使っています。
ただ、これをするとSSR\(Server Side Rendering\)もSSG\(Static Site Generation)もできなくなります。修正を祈るばかりです...

```ts
defineNuxtConfig({
  ssr: false, // SSRを無効化する
  content: {
    experimental: {
      clientDB: true, // これをtrueにする
    },
  },
  // その他の設定は元の設定を使ってください
});
```

# おわりに

ここまで読んでくれてありがとうございます。

コードはご自由にお使いいただいて構いません。権利表示は不要ですが、もしよければこの記事へのリンクを貼っていただけると嬉しいです。ただし、この記事のコードを使って何か起きても責任は負いません。ご了承ください。\(The Unlicense\)
