<script setup>

import QuestionForm from '@/components/forms/QuestionForm.vue'
import FAQ from '@/components/FAQ.vue'

const faqItems = [
  {
    question: 'Кто у вас работает?',
    answer: '...'
  },
  {
    question: 'Как происходит оплата?',
    answer: '...'
  },
  {
    question: 'Кто покупает материалы?',
    answer: '...'
  },
  {
    question: 'Есть ли у вас лицензия на выполнение ремонтно-отделочных работ?',
    answer: 'Да. У нас есть разрешения на оказание всех видов услуг по ремонту квартир. Необходимая документация представлена на сайте.'
  },
]
</script>

<template>
  <section class="home_faq home_faq__container">
    <h2>Часто задаваемые вопросы</h2>
    <div>
      <FAQ :items="faqItems"></FAQ>
      <div>
        <QuestionForm></QuestionForm>
      </div>
    </div>

  </section>
</template>
