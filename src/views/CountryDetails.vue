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
               value: this.country.population.toLocaleString('en'),
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
               value: this.joinWithComma(this.country.currencies),
            },
            {
               name: 'Languages',
               value: this.joinWithComma(this.country.languages),
            },
         ]
      },

      borderCountryNames() {
         return this.country.borders?.map((border) => this.getCountryByAlpha3Code(border).name) || []
      },
   },

   created() {
      this.country = this.getCountryByAlpha3Code(this.$route.params.countryId)
   },

   methods: {
      getCountryByAlpha3Code(code) {
         return this.countryList.filter((country) => country.alpha3Code == code)[0]
      },

      joinWithComma(itemList) {
         const localItemList = itemList || []

         return localItemList.map((item) => item.name).join(', ')
      }
   }
}
</script>

<template>
<div class="country-details">
   <div class="country-details__back-container">
      <button
         class="country-details__back-button"
         @click="$router.back()"
      >
         <i class="fa fa-arrow-left country-details__arrow-left-icon" />
         <span class="country-details__back-label">Back</span>
      </button>
   </div>
   <div class="country-details__country-information">
         <img
            class="country-details__flag"
            :src="country.flags.png"
         />
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
         <div class="country-details__border-countries-container">
            <span class="country-details__border-label">Border countries:</span>
            <div class="country-details__border-list">
               <template v-if="borderCountryNames.length > 0">
                  <div
                     v-for="(border, index) in borderCountryNames"
                     :key="`border-${index}`"
                     class="country-details__border"
                  >{{ border }}</div>
               </template>
               <template v-else><span class="country-details__no-borders">None</span></template>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<style lang="scss">
.country-details {
   font-size: 14px;

   &__country-information,
   &__information {
      display: flex;
      flex-wrap: wrap;
   }

   &__information {
      gap: 50px;
      justify-content: space-between;
   }

   &__border-label {
      font-weight: 600;
   }

   &__border-label,
   &__border {
      display: inline-block;
   }

   &__border-list {
      display: inline-flex;
      flex-wrap: wrap;
      margin-left: 5px;

      gap: 10px;
   }

   &__border {
      border-radius: 2px;
      box-shadow: 0px 0px 5px 1px hsl(0, 0%, 85%);
      padding: 1px 20px;
   }

   &__border-countries-container {
      margin-top: 50px;
   }

   &__no-borders {
      font-style: italic;
   }

   &__arrow-left-icon {
      margin-right: 10px;
   }

   &__back-button {
      min-width: 95px;
      padding: 7px 30px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      box-shadow: 0px 0px 5px 1px hsl(0, 0%, 85%);
      background-color: white;
   }

   &__back-container {
      margin-bottom: 50px;
   }

   &__flag {
      display: block; // to remove the extra space at the bottom
      width: 475px;
      min-width: 250px;
      box-shadow: 0px 0px 5px 1px hsl(0, 0%, 85%);
   }

   &__name {
      font-size: 1.5em;
      margin-bottom: 25px;
      font-weight: 800;
   }
}
</style>