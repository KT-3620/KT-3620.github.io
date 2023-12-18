---
title: "Webサイト作成記"
description: "初めて書いてみたブログだよん"
searchId: ["Vue", "Nuxt", "Content", "Markdown", "Web", "Blog"]
date: 2023-12-17
---

# 👋 Hello World!!

こんにちは、KTです。書くものも本当になにもありませんが、とりあえずブログっぽい何かを作りました。理由は、Markdownを書くとそれをHTMLに変換してうまいこと載せてくれる [Nuxt Content](https://content.nuxt.com/) というものに一目惚れしたからです。

# Nuxt Contentって?

![Nuxt の Social Card](https://content.nuxt.com/social-card.png)

[Nuxt Content](https://content.nuxtjs.org/) は、Nuxtと一緒に使えるライブラリです。これを使うと、指定されたフォルダにMarkdownを書くだけでブログを作れます。とっても楽しいです。

- `#` `##` `###` **太字** _斜線_ もしっかり対応
- リストも対応
- `title`, `description` などのメタデータも書ける
  - [Front-matter](https://content.nuxt.com/usage/markdown#front-matter) のおかげ
- 指定パスの記事を一覧することができる

こんな感じに書けます。私の場合、titleとdescriptionは、ブログの上部と一覧表示に使用するようにしています。
