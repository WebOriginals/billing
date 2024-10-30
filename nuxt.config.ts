// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import { resolve, dirname } from 'node:path';
import en from './locales/en.json';
import ru from './locales/ru.json';
export default defineNuxtConfig({
  $development: undefined,
  $env: undefined,
  $meta: undefined,
  $production: undefined,
  $test: undefined,
  runtimeConfig: {
    public: {
      baseUrl: process.env.VITE_API_BASE || 'http://localhost:3000',
      amazonUrl: process.env.NUXT_PUBLIC_AMAZON || 'https://io.aeza.net',
    },
  },

  css: ['~/assets/css/tailwind.scss'],

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    'nuxt-swiper',
    '@vueuse/nuxt',
    '@nuxtjs/svg-sprite',
    'dayjs-nuxt',
    '@vue-email/nuxt',
  ],

  pinia: {
    autoImports: ['defineStore'],
  },

  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },

  pinia: {
    autoImports: ['defineStore'],
  },

  i18n: {
    langDir: 'locales',
    strategy: 'prefix',
    dynamicRouteParams: false,
    compilation: {
      strictMessage: false,
    },
    messages: {
      en,
      ru,
    },
    locales: [
      {
        flag: 'https://io.aeza.net/icons/flags/ru.png',
        code: 'ru',
        iso: 'ru_RU',
        name: 'Русский',
        file: 'ru.json',
      },
      {
        flag: 'https://io.aeza.net/icons/flags/us.png',
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
    ],

    defaultLocale: 'ru',
  },

  vueEmail: {
    baseUrl: process.env.VITE_API_BASE || 'http://localhost:3000',
    autoImport: true,
  },
  extends: 'content-wind',
  experimental: {
    watcher: 'parcel',
  },
});
