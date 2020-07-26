<template>
  <div id="app">
    <TopHeader/>
    <tray/>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue'
import Tray from './components/Tray.vue'

export default {
  name: 'App',
  components: {
    TopHeader,
    Tray
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background: url("./assets/burger.jpg");
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
