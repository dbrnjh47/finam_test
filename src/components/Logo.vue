<script setup>
import logo from '@/assets/images/logo.svg'
import '@/assets/scss/components/logo.scss';

</script>


<template>
  <RouterLink :to="{ name: 'IndexPage' }" class="logo">
    <img :src="logo" alt="logo">
    <span>Краски ремонта</span>
  </RouterLink>
</template>
