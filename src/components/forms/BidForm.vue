<script setup>
import '@/assets/scss/components/forms/bid_form.scss';

import localImg from '@/assets/images/flags/ru.svg'

</script>

<template>
  <div class="form bid_form">
    <h2>Оставить заявку</h2>

    <div class="form__inputs">
      <input type="text" placeholder="Имя" class="input">
      <label class="input input_phone_wrapper" for="bid_form_phone_input">
        <img :src="localImg" alt="flag">
        <span>+7</span>
        <input type="text" placeholder="(000) 000-00-00" id="bid_form_phone_input"></input>
      </label>
    </div>

    <button class="btn">Оставить заявку</button>
  </div>
</template>
