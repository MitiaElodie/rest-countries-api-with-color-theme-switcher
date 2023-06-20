<script>
import CountryCard from '@/components/CountryCard.vue'

export default {
  name: 'App',
  components: {
    CountryCard
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CountryCard msg="Welcome to Your Vue.js App"/>
</template>


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
