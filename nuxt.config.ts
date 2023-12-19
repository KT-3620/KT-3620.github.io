// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: "dark-plus",
      preload: ["js", "ts", "vue"],
    },
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icon", "@nuxt/image"],
});
