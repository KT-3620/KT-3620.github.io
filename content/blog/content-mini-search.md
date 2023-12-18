---
title: "Nuxt Content + Mini Search"
description: "検索機能なんかうまくいかなかったから自力実装しました"
searchId:
  [
    "Mini Search",
    "検索",
    "Nuxt",
    "Content",
    "Vue",
    "Web",
    "けんさく",
    "kennsaku",
  ]
date: 2023-12-17
---

こんにちは、KTです。前回の記事で書いた通り、一目惚れしたNuxt Content でしたが、ふと検索したいなと思い、検索機能を実装しました。
Nuxt Content には検索機能はあるのですが、私の使い方が良くないのかも分からず、alpha版だったこともあり、かなり行き詰まってしまいました。そこで、その検索機能に使われているライブラリを元に、自力で実装することにしました。

# 環境

筆記当時の環境です。

- Nuxt 3 (v3.8.2)
  - TS で書いてますが、まんま JS でも動くと思います
- Nuxt Content (v2.9.0)
- Mini Search (v6.3.0)

# 仕組み

1. Nuxt Content の `queryContent()` をうまいこと使っていい感じのJSONを取得する
2. その JSON を元に、少し加工をして Mini Search に追加する
3. 検索ボックスに入力された文字列を元に、Mini Search に検索してもらう
4. 検索結果を表示、完了！

# 前提

それぞれのmdファイルにFront Matterを用いて次のことを書いといてください

- `title`: 記事のタイトル
- `description`: 記事の説明
- `searchId`: 検索するときに反応させたい単語、string型の配列で複数指定可能

# ディレクトリ構造

こんな感じにしました。

```
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

TypeScriptで書いてますが、`lang="ts"`を消して JavaScript で動かしても動くと思います。（型定義の必要が無かったので）

### pages/search.vue

```vue
<script setup lang="ts">
import MiniSearch from "minisearch";

/** 検索ボックスに入力された文字 */
const search = ref("");

/** 検索結果 */
const results = ref();

/** 取得するフィールド */
const fields = ["title", "description", "searchId", "_path"];

/** Mini Searchのインスタンス */
const miniSearch = new MiniSearch({
  fields: fields, // 検索をするフィールド、ここではfieldsを指定
  storeFields: fields, // 検索結果の応答の際に含めるフィールド、fieldsを指定
});

// 起動時
onMounted(async () => {
  await queryContent("blog")
  /*
  /blog の記事を検索するように、"blog"を"docs"なりに変えれば /docs を検索するようになります
  */
    .only(fields) // fieldsのフィールドのみを取得結果に含む
    .find()
    .then((res) => {
      /** レスポンスを加工するための変数 */
      let response = res;

      // Mini Searchは検索するのにidを必要らしいので、idを手動で振る
      for (let index = 0; index < response.length; index++) {
        response[index].id = index;
      }

      // デバッグ用: response の内容を見たければ
      console.log(response);

      // miniSearchの検索対象に追加
      miniSearch.addAll(response);
    });
});

// テキストボックスのsearchの値を監視
watch(search, async () => {
  const result = miniSearch.search(search.value, { prefix: true, fuzzy: 0.2 });
  results.value = result;
});
</script>

<template>
    <h1>検索</h1>

    <!-- 検索結果のリンクを表示 -->
    <input v-model="search" />

    <!-- 検索結果のリンクを表示 -->
    <NuxtLink
      v-for="result in results"
      :key="result.id"
      :to="result._path"
    >
      <h1>{{ result.title }}</h1>
      <p>{{ result.description }}</p>
      <!-- ここより下は適宜消してください -->
      <p>デバッグ用、検索Id: {{ result.searchId }}</p>
      <p>デバッグ用、パス: {{ result._path }}</p>
    </NuxtLink>
  </div>
</template>
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

適当にmdファイルをコピペして低電力モードのスマホで50ファイルほどで検索したら余裕でした。

ただ、200ファイルほどで検索したら、流石にもっさりと...と思いましたが検索結果がヒットしすぎて200個のNuxtLinkのレンダリングに時間がかかっているだけでした。~~そりゃあそうだよなぁ~~ Mini Searchの設定を変えて、検索結果の数の上限を決めれば問題ないと思います。

ふざけて1000ファイルでも検索結果が少なければいけるやろと思って試しましたが、全然いけました。すごい。1000ファイルでも`watch()`使って1文字入れるたびに検索しても大きな問題はなさそうです。

ここまで読んでくれてありがとうございます。

コードはご自由にお使いいただいて構いません。権利表示は不要ですが、もしよければこの記事へのリンクを貼っていただけると嬉しいです。ただし、この記事のコードを使って何か起きても責任は負いません。ご了承ください。
