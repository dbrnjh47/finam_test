<script setup>

import { useHead } from '@unhead/vue'

import bebasneuecyrillicFontUrl from '@/assets/fonts/bebas_neue_cyrillic/bebasneuecyrillic.ttf'
const inter400Woff2Url = '/node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2'
const inter700Woff2Url = '/node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2'

const env = {
  "VITE_APP_NAME": import.meta.env.VITE_APP_NAME,
  "VITE_APP_URL": import.meta.env.VITE_APP_URL,
  "VITE_APP_LOCALE": import.meta.env.VITE_APP_LOCALE,
  "VITE_APP_EMAIL": import.meta.env.VITE_APP_EMAIL,
  "VITE_APP_TEST": import.meta.env.VITE_APP_TEST,
};

const robotsContent = env.VITE_APP_TEST === 0
  ? 'index, follow'
  : 'noindex, nofollow'

useHead({
  title: env.VITE_APP_NAME,
  titleTemplate: (title) => title ? `${env.VITE_APP_NAME} | ${title}` : env.VITE_APP_NAME,
  meta: [
    {
      name: 'og:site_name',
      content: env.VITE_APP_NAME
    },
    {
      name: 'language',
      content: 'ru'
    },
    {
      property: 'og:locale',
      content: 'ru'
    },
    {
      name: 'author',
      content: `${env.VITE_APP_NAME}, ${env.VITE_APP_EMAIL}`
    },
    {
      name: 'og:email',
      content: env.VITE_APP_EMAIL
    },
    {
      name: 'robots',
      content: robotsContent
    },
    {
      name: 'og:image',
      content: '/favicon.ico'
    },
    {
      name: 'twitter:image',
      content: '/favicon.ico'
    },
    //
    { 'http-equiv': 'Cache-Control', content: 'yes-cache' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: env.VITE_APP_URL }
  ],
  link: [
    {
      rel: 'preload',
      as: 'font',
      type: 'font/ttf',
      href: bebasneuecyrillicFontUrl,
      crossorigin: 'anonymous'          // === true, важно для корректной загрузки шрифтов браузером [citation:4]
    },
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      href: inter400Woff2Url,
      crossorigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      href: inter700Woff2Url,
      crossorigin: 'anonymous'
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
      type: 'image/x-icon'
    }
  ]
})

</script>

<template>

<!--  -->

<!-- <link rel="icon" href="/temple/images/layout/logo/logo16x16.png" sizes="16x16" type="image/png">
<link rel="icon" href="/temple/images/layout/logo/logo32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/temple/images/layout/logo/logo64x64.png" sizes="64x64" type="image/png">
<link rel="icon" href="/temple/images/layout/logo/logo96x96.png" sizes="96x96" type="image/png">
<link rel="icon" href="/temple/images/layout/logo/logo128x128.png" sizes="128x128" type="image/png">
<link rel="icon" href="/temple/images/layout/logo/logo152x152.png" sizes="152x152" type="image/png">
<link rel="icon" href="/temple/images/layout/logo/logo192x192.png" sizes="192x192" type="image/png"> -->

<!-- <link rel="apple-touch-icon-precomposed" sizes="16x16" href="/temple/images/layout/logo/logo16x16.png">
<link rel="apple-touch-icon-precomposed" sizes="32x32" href="/temple/images/layout/logo/logo32x32.png">
<link rel="apple-touch-icon-precomposed" sizes="64x64" href="/temple/images/layout/logo/logo64x64.png">
<link rel="apple-touch-icon-precomposed" sizes="128x128" href="/temple/images/layout/logo/logo128x128.png">
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/temple/images/layout/logo/logo152x152.png"> -->

<!-- <link rel="icon" href="/temple/images/layout/logo/favicon32x32.svg" sizes="any" type="image/svg+xml"> -->

</template>
