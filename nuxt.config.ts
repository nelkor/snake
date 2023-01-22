import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    '#': resolve('./app'),
    '@': resolve('./client'),
    '$': resolve('./server'),
  },
  css: ['@/general/index.scss'],
  app: {
    head: {
      title: 'Змейка',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
    },
  },
})
