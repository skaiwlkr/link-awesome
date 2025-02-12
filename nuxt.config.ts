// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],

  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },

  compatibilityDate: '2025-02-08',
})