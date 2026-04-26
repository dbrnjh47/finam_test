<script setup>

const disputes = [
  {
    "service": "Взыскание неустойки за просрочку передачи объекта строительства",
    "price": 50000,
  },
  {
    "service": "О признании недействительным договора долевого строительства",
    "price": 50000,
  },
  {
    "service": "О расторжении договора участия в долевом строительстве",
    "price": 50000,
  },
  {
    "service": "О безвозмездном устранении выявленных при передаче объекта строительства недостатков",
    "price": 50000,
  },
  {
    "service": "О взыскании денежных средств за устранение недостатков в строительстве",
    "price": 50000,
  },
  {
    "service": "О признании права собственности на объект ДДУ и другие",
    "price": 50000,
  },
  {
    "service": "Взыскание денежных средств за недостающие квадратные метры объекта долевого строительства",
    "price": 50000,
  },
  {
    "service": "Составление искового заявления или претензии",
    "price": 60000,
  },
];

</script>

<template>
  <section class="home_disputes home_disputes__container">
    <div>
      <h2>Виды споров с застройщиками по ДДУ и стоимость услуг</h2>
      <table>
        <thead>
          <tr>
            <th>Услуга</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dispute in disputes">
            <td>{{ dispute.service }}</td>
            <td>{{ `от ${dispute.price.toLocaleString('ru-RU')} ₽` }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="background: red;"></div>
  </section>
</template>
