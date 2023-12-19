---
title: "Nuxt Contentでブログっぽい何かを作ってみた"
description: "初めて書いてみた記事"
searchId:
  [
    "Vue",
    "Nuxt",
    "Content",
    "Markdown",
    "Web",
    "はじめて",
    "初めて",
    "first",
    "つくってみた",
    "作ってみた",
  ]
blog-id: 1
wrote-date: 2023-12-19
edited-date: 2023-12-19
---

# 👋 Hello World!!

はじめまして、KTです。書くものも何も考えていませんでしたが、とりあえずブログっぽい何かを作りました。理由は、Markdownを書くとそれをHTMLに変換してうまいこと載せてくれる [Nuxt Content](https://content.nuxt.com/) というものに一目惚れしたからです。

# Nuxt Contentって?

![Nuxt の Social Card](https://content.nuxt.com/social-card.png)

[Nuxt Content](https://content.nuxt.com/) は、Nuxtと一緒に使えるライブラリです。これを使うと、指定されたフォルダにMarkdownを書くだけでブログを作れます。とっても楽しいです。

- `#` `##` `###` **太字** _斜線_ もしっかり対応
- リストも対応
- `title`, `description` などのメタデータも書ける
  - [Front-matter](https://content.nuxt.com/usage/markdown#front-matter) のおかげ
- 指定パスの記事を一覧する機能などを簡単に実装可能
- [MDC](https://content.nuxt.com/usage/markdown)という記法による[部分的なスタイリング]{style="color: orange;"}も可能
- 設定をすればコードのSyntax Highlightingも可能に

## こんな感じに書けます

### index.vue

```vue
<template>
  <!--
    これだけで、 content/index.md のファイルが読み込まれる
  -->
  <ContentDoc />
</template>

<style>
/* ただの <h1> タグなどとして書き出されるので、必要に応じてスタイリング */
h1 {
  color: red;
  /* @apply text-red-500 */
}
</style>
```

### content/index.md

```md
---
# Front-matter

title: "タイトル"
description: "記事の説明を書きましょう"
# (その他のメタデータ...)
---

# 記事の本文

どんどん書きましょう。**太字** もしっかり対応していますので。

- リストも
- もちろん
- 対応しています

[部分的なスタイリングはこうできるそうです]{style="color: orange;"}
```

私の場合、titleとdescriptionは、ブログの上部と一覧表示にも使用するようにしています。しかも、勝手にWebサイトのタイトルにそれを設定するなども自動でしてくれて、とっても便利です。記事をすべてJSON形式で取得することも可能です。本当にすごいと思います。いいと思ったら[GitHub](https://github.com/nuxt/content)でStarしてあげてください。

# まとめ

**Nuxt Contentすごい便利**
