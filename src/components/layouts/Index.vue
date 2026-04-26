<template>

  <AppHead></AppHead>

  <div>
    <Header></Header>

    <main>
      <RouterView />
    </main>

    <Footer></Footer>
  </div>

</template>

<script>
import Footer from '../Footer.vue';
import Header from '../Header.vue';
import AppHead from '../Head.vue';

export default {
  name: 'IndexLayout',
  components: {
    Footer, Header, AppHead
  },
  data() {

  }
}
</script>
