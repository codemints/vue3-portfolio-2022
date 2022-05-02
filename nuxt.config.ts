import { defineNuxtConfig } from "nuxt3";
import { resolve } from 'path'

export default defineNuxtConfig({
  head: {
    title: 'Codemints Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"},
    ]
  },
  pwa: {
    icon: {
      fileName: '@/public/favicon.png'
    }
  },
  css: [
    'scss/main.scss',
    'ico/fontawesome/scss/fontawesome.scss',
    'ico/fontawesome/scss/brands.scss',
    'ico/fontawesome/scss/regular.scss',
    'ico/fontawesome/scss/solid.scss',
  ],
  alias: {
    'img': resolve(__dirname, './assets/img'),
    'fonts': resolve(__dirname, './assets/fonts'),
    'scss': resolve(__dirname, './assets/scss'),
    'comp': resolve(__dirname, './components'),
    'ico': resolve(__dirname, './assets/icons'),
    'state': resolve(__dirname, './composables'),
  },
  buildModules: [
    '@pinia/nuxt',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        '@headlessui/vue'
      ]
    },
    vue: {
      reactivityTransform: true,
    }
  }
});