<template>
  <Nav/>
  <router-view />
  <Footer/>
</template>

<script>
import Nav from './assets/Nav'
import Footer from './assets/Footer'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>