<script>
import { mapState } from 'vuex'

import SearchBar from '@/components/SearchBar.vue';
import CountryCardList from '@/components/CountryCardList.vue';

export default {
   name: 'CountryList',
   components: { SearchBar, CountryCardList },
   data() {
      return {
         localCountryList: [],
         isLoading: false,
      }
   },

   created() {
      this.localCountryList = this.countryList
   },

   computed: {
      ...mapState(['countryList'])
   },

   methods: {
      onSearchChange(searchValue) {
         this.localCountryList = this.countryList.filter((country) => country.name.toLowerCase().includes(searchValue.toLowerCase()))
      }
   }
}
</script>

<template>
   <div class="country-list">
      <div class="country-list__header">
         <SearchBar   
            class="country-list__search-bar"
            @search-change="onSearchChange"
         />
      </div>
      <CountryCardList
         class="country-list__list"
         :country-list="localCountryList"
      />
   </div>
</template>

<style lang="scss">
.app__content {
   background-color: hsl(0, 0%, 98%);
}

.country-list {
   &__header {
      margin-bottom: 10px;
   }
}
</style>