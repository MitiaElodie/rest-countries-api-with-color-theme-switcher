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
   &__country-information,
   &__information {
      display: flex;
      flex-wrap: wrap;
   }

   &__border-label {
      font-weight: 700;
   }

   &__border-label,
   &__border {
      display: inline-block;
   }

   &__border-list {
      display: inline-flex;
      flex-wrap: wrap;
      margin-left: 5px;

      gap: 5px;
   }

   &__border {
      border-radius: 5px;;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      padding: 5px 10px;
   }

   &__no-borders {
      font-style: italic;
   }

   &__arrow-left-icon {
      margin-right: 10px;
   }

   &__back-button {
      min-width: 95px;
      padding: 7px 20px;
      border: none;
      cursor: pointer;

      box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
      background-color: white;
   }

   &__back-container {
      margin-bottom: 50px;
   }
}
</style>