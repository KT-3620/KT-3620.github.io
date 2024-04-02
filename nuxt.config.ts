// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* SSGの時にはfalseに、SSRの時にtrueに */
  ssr: false,
  devtools: { enabled: true },
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: "dark-plus",
      preload: ["js", "ts", "vue"],
    },
    experimental: {
      clientDB: true,
      // SSGの時にtrueに、SSRの時にfalseに
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

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-icon",
    "@nuxt/image",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    injectRegister: "auto",
    registerType: 'autoUpdate'
  }
});