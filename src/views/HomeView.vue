<script setup>

import Hero from '@/components/home/Hero.vue';
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Главная',
  description: 'Добро пожаловать на наш сайт.',
  keywords: 'главная, домашняя страница, welcome',
})

</script>

<template>
  <Hero></Hero>
</template>
