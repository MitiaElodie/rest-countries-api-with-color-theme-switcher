<script>
import CountryCard from '@/components/CountryCard.vue';
export default {
   name: 'CountryCardList',
   components: { CountryCard },
   props: {
      countryList: {
         type: Array,
         default: () => []
      }
   },
}
</script>

<template>
<div class="country-card-list">
   <CountryCard
      v-for="(country, index) in countryList"
      :key="`countryCard${ index }`"
      :country="country"
      class="country-card-list__item"
   />
</div>
</template>

<style lang="scss">
.country-card-list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 40px;
}
</style>