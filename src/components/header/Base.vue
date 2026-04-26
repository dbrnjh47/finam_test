<script setup>

import { usePhoneFormatter } from '@/composables/usePhoneFormatter'
import logo from '@/assets/images/logo.svg'
import strImage from '@/assets/images/header/str.svg'

const { formatPhoneNumber } = usePhoneFormatter();

const menuItems = [
  {
    'title': "Компания",
  },
  {
    'title': "Ремонт",
  },
  {
    'title': "Дизайн",
  },
  {
    'title': "Проектирование и инжернерия",
  },
  {
    'title': "Стоимость",
  },
  {
    'title': "Портфолио",
  },
];

const phone = import.meta.env.VITE_APP_PHONE;


</script>

<template>
  <div class="header_base header__container">
    <RouterLink :to="{ name: 'IndexPage' }" class="logo">
      <img :src="logo" alt="logo">
      <span>Краски ремонта</span>
    </RouterLink>

    <div class="header_base__menu">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          {{ item.title }}
          <img :src="strImage" alt="str">
        </li>
      </ul>
    </div>
    <div class="header_base__actions">
      <a :href="`tel:${phone}`" itemprop="telephone">{{ formatPhoneNumber(phone) }}</a>
      <button class="btn">Войти</button>
    </div>
  </div>
</template>
