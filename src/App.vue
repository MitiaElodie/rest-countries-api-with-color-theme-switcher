<script>
import CountryCard from '@/components/CountryCard.vue'
import countryList from '@/data/data.json'
export default {
  name: 'App',
  components: {
    CountryCard
  },

  data() {
    return {
      countryList: countryList
    }
  }
}
</script>

<template>
  <CountryCard
    :country="countryList[10]"
  />
</template>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

:root {
  font-family: 'Nunito Sans';
}
</style>
