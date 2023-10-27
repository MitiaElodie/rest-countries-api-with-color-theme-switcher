<script>
import { mapState } from 'vuex'

import InformationList from '@/components/InformationList.vue';
export default {
   name: 'CountryDetails',

   props: {
      countryId: {
         type: String,
         required: true
      }
   },

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

      borderCountryList() {
         return this.country.borders?.map((border) => ({ name: this.getCountryByAlpha3Code(border).name, countryId: border})) || []
      },
   },

   created() {
      this.country = this.getCountryByAlpha3Code(this.countryId)
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
<section class="country-details">
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
            <div class="country-details__border-list">
               <span class="country-details__border-label">Border countries:</span>
               <template v-if="borderCountryList.length > 0">
                  <router-link
                     v-for="(border, index) in borderCountryList"
                     :key="`border-${index}`"
                     :to="{
                        name: 'CountryDetails',
                        params: { countryId: border.countryId}
                     }"
                     class="country-details__border"
                  >{{ border.name }}</router-link>
               </template>
               <template v-else><span class="country-details__no-borders">None</span></template>
            </div>
      </div>
   </div>
</section>
</template>

<style lang="scss">
.country-details {
   font-size: 14px;

   &__country-information,
   &__information {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
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

   &__border-label {
      margin-right: 5px;
   }

   &__border-list {
      display: inline-flex;
      flex-wrap: wrap;

      gap: 10px;
      margin-top: 50px;
   }

   &__border {
      border-radius: 2px;
      padding: 1px 20px;
      text-decoration: none;

      box-shadow: var(--button-box-shadow);
      color: var(--text-color);
      background-color: var(--element-background-color);
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

      box-shadow: var(--button-box-shadow);
      color: var(--text-color);
      background-color: var(--element-background-color);
   }

   &__back-container {
      margin-bottom: 50px;
   }

   &__flag {
      display: block; // to remove the extra space at the bottom
      width: 475px;
      min-width: 250px;
      box-shadow: var(--box-shadow);
   }

   &__name {
      font-size: 1.5em;
      margin-bottom: 25px;
      font-weight: 800;
   }
}
</style>