<template>
  <ul class="breadcrumb__lists" itemscope itemtype="https://schema.org/BreadcrumbList">
    <template v-for="(item, index) in items" :key="index">

      <li v-if="index > 0" class="breadcrumb__item">
        <a class="breadcrumb__link off">/</a>
      </li>


      <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a v-if="!item.active" itemprop="item" class="breadcrumb__link" :class="{ 'start': index === 0 }"
          :href="item.url">
          <span itemprop="name">{{ item.name }}</span>
        </a>
        <a v-else itemprop="item" class="breadcrumb__link active" :class="{ 'start': index === 0 }">
          <span itemprop="name">{{ item.name }}</span>
        </a>
        <meta itemprop="position" :content="String(index + 1)">
      </li>
    </template>
  </ul>
</template>

<script setup>
import '@/assets/scss/components/breadcrumb.scss';

import { computed } from 'vue'

const baseUrl = import.meta.env.VITE_APP_NAME || window.location.origin

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
})

const buildFromRoute = () => {
  props.items.unshift({ name: 'Главная', url: '/' })
  console.log(props.items);
  return props.items
}

// Итоговый массив элементов
const items = computed(() => {
  return buildFromRoute()
})

</script>
