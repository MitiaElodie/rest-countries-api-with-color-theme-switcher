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
   <router-link
      v-for="(country, index) in countryList"
      :key="`countryCard${ index }`"
      :to="{
         name: 'CountryDetails',
         params: {
            countryId: country.alpha3Code
         }
      }"
      class="country-card-list__link"
   >
      <CountryCard
      :country="country"
      class="country-card-list__item"
      />
   </router-link>

</div>
</template>

<style lang="scss">
.country-card-list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 40px;

   &__link {
      text-decoration: none;
      color: inherit;
   }
}
</style>