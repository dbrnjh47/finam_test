<template>
  <div class="faq">
    <div class="faq__list" itemscope="" itemtype="https://schema.org/FAQPage">
      <div class="faq__item" v-for="(item, index) in items" :key="index" :class="{ active: activeIndex === index }"
        @click="toggleAccordion(index)">
        <div class="faq__info" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
          <div class="faq__answer">
            <h1 itemprop="name">{{ item.question }}</h1>
            <div class="faq__trigger">
              <span v-html="svgImage" />
            </div>
            <!-- <img class="faq__trigger" :src="strImage" alt="arrow" loading="lazy" decoding="async"> -->
          </div>
          <div class="faq__result" v-if="activeIndex === index" itemprop="text">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import svgImage from '@/assets/images/components/forms/str.svg?raw'
import '@/assets/scss/components/faq.scss';
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const activeIndex = ref(null)
const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

</script>
