<script>
import { mapState } from 'vuex'

import SearchBar from '@/components/SearchBar.vue';
import FilterRegion from '@/components/FilterRegion.vue';
import CountryCardList from '@/components/CountryCardList.vue';

export default {
   name: 'CountryList',

   components: {
      SearchBar,
      CountryCardList,
      FilterRegion
   },

   data() {
      return {
         localCountryList: [],
         searchValue: '',
         filterValue: '',
      }
   },

   created() {
      this.localCountryList = this.countryList
   },

   computed: {
      ...mapState(['countryList'])
   },

   methods: {
      stringContains(stringValue, searchValue) {
         return stringValue.toLowerCase().includes(searchValue.toLowerCase())
      },

      updateCountryList() {
         this.localCountryList = this.countryList.filter((country) => this.stringContains(country.name, this.searchValue) && this.stringContains(country.region, this.filterValue))
      },

      onSearchChange(searchValue) {
         this.searchValue = searchValue
         this.updateCountryList()
      },

      onFilterChange(filterValue) {
         this.filterValue = filterValue
         this.updateCountryList()
      },
   }
}
</script>

<template>
   <section class="country-list">
      <div class="country-list__header">
         <SearchBar   
            class="country-list__search-bar"
            @search-change="onSearchChange"
         />
         <FilterRegion
            class="country-list__filter-region"
            @filter-change="onFilterChange"
         />
      </div>
      <CountryCardList
         class="country-list__list"
         :country-list="localCountryList"
      />
   </section>
</template>

<style lang="scss">
.country-list {
   font-size: 14px;
   &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-flow: row wrap;
      gap: 15px;
      margin-bottom: 50px;
   }
}

@media (max-width: 650px) {
   .country-list {
      &__search-bar {
         width: 100%;
      }
   }
}
</style>