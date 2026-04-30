<script setup>

import '@/assets/scss/home/index.scss';

import Hero from '@/components/home/Hero.vue';
import Disputes from '@/components/home/Disputes.vue';
import { useSeo } from '@/composables/useSeo'
import FAQ from '@/components/home/FAQ.vue';
import Steps from '@/components/home/Steps.vue';

useSeo({
  title: 'Главная',
  description: 'Добро пожаловать на наш сайт.',
  keywords: 'главная, домашняя страница, welcome',
})

</script>

<template>
  <Hero></Hero>
  <Disputes></Disputes>
  <Steps></Steps>
  <FAQ></FAQ>
</template>
