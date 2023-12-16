// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-import": {},
      "tailwindcss/nesting": {},
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icon", "@nuxt/image"],
});
