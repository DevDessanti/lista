<template>
  <div id="app">
    <NavBar/>
    <FooterBar/>
    <router-view />
  </div>
</template>

<script>

import NavBar from './components/navbarAll.vue'
import FooterBar from './components/footerAll.vue'

export default {
  name: 'App',
  components: {NavBar,FooterBar}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
