<script setup>
import '@/assets/scss/components/forms/question_form.scss';

import localImg from '@/assets/images/flags/ru.svg'

</script>

<template>
  <div class="form bid_form">
    <h2>У меня есть вопрос</h2>

    <div class="form__inputs">
      <label class="input input_phone_wrapper" for="bid_form_phone_input">
        <img :src="localImg" alt="flag">
        <span>+7</span>
        <input type="text" placeholder="(000) 000-00-00" id="bid_form_phone_input"></input>
      </label>

      <textarea cols="30" rows="10" placeholder="Ваш вопрос" class="input"></textarea>
    </div>

    <button class="btn">Оставить заявку</button>
  </div>
</template>
