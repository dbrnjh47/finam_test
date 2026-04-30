<script setup>
const steps = [
  "Полноценную консультацию у нашего юриста.",
  "Составление претензии к застройщику или ремонтной бригаде",
  "Представительство на судебных заседаниях первой и второй инстанции",
  "Получение исполнительного листа, его предоставление в банк или приставам",
  "Подготовка и подача заявлений о банкротстве застройщика."
]

const formatNumber = (num) => {
  return num.toString().padStart(2, '0');
};

</script>

<template>
  <section class="home_steps home_steps__container">
    <h2>Мы предлагаем</h2>
    <div class="home_steps__list_wrapper">
      <div class="home_steps__list">
        <div class="home_steps__item" v-for="(item, index) in steps" :key="index">
          <span>{{ formatNumber(index + 1) }}</span>
          <p>{{ item }}</p>
        </div>
      </div>
      <div class="home_steps__text">
        В случае необходимости у нас же вы можете заказать приемку квартиры или частного дома после строительства или
        ремонта, обследование с помощью тепловизора и иного специального оборудования. Мы выявим существующие дефекты,
        составим подробный отчет, который может быть использован в судебных разбирательствах.
      </div>
    </div>

  </section>
</template>
