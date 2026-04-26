<template>
  Header
  <a v-for="(item, index) in menuItems" :key="index">{{ item.name }}</a>
</template>

<script>

export default {
  name: 'AppHeader',
  components: {

  },
  data() {
    return {
      menuItems: [
        {
          "name": "test1",
          "url": "/1",
        },
        {
          "name": "test2",
          "url": "/2",
        },
      ]
    }
  }
}

</script>
