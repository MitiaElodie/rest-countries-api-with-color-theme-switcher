<script>
import { mapState } from 'vuex'

import InformationList from '@/components/InformationList.vue';
export default {
   name: 'CountryDetails',

   components: { InformationList },

   data() {
      return { country: {}}
   },

   computed: {
      ...mapState(['countryList']),

      geographicalInformation() {
         return [
            {
               name: 'Native Name',
               value: this.country.nativeName,
            },
            {
               name: 'Population',
               value: this.country.population,
            },
            {
               name: 'Region',
               value: this.country.region,
            },
            {
               name: 'Sub Region',
               value: this.country.subregion,
            },
            {
               name: 'Capital',
               value: this.country.capital,
            },
         ]
      },

      culturalInformation() {
         return [
            {
               name: 'Top Level Domain',
               value: this.country.topLevelDomain[0],
            },
            {
               name: 'Currencies',
               value: this.country.currencies[0].name,
            },
            {
               name: 'Languages',
               value: this.country.languages[0].name,
            },
         ]
      }
   },

   created() {
      const countryId = this.$route.params.countryId

      this.country = this.countryList.filter((country) => country.id == countryId)[0]
   }
}
</script>

<template>
<div class="country-details">
   <div class="country-details__back-container">
      <div class="country-details__back-button">
         <span class="country-details__back-label">Back</span>
      </div>
   </div>
   <div class="country-details__country-information">
      <div class="country-details__flag-container">
         <img
            class="country-details__flag"
            :src="country.flags.png"
         />
      </div>
      <div class="country-details__information-container">
         <h3 class="country-details__name">{{ country.name }}</h3>
         <div class="country-details__information">
            <InformationList
               class="country-details__geographical-information"
               :information-list="geographicalInformation"
            />
            <InformationList
               class="country-details__cultural-information"
               :information-list="culturalInformation"
            />
         </div>
      </div>
   </div>
</div>
</template>

<style lang="scss">
.country-details {
   &__country-information,
   &__information {
      display: flex;
      flex-wrap: wrap;
   }
}
</style>