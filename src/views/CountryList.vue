<script>
import { mapState } from 'vuex'

import SearchBar from '@/components/SearchBar.vue';
import CountryCardList from '@/components/CountryCardList.vue';

export default {
   name: 'CountryList',
   components: { SearchBar, CountryCardList },
   computed: {
      ...mapState(['countryList'])
   }
}
</script>

<template>
   <div class="country-list">
      <div class="country-list__header">
         <SearchBar class="country-list__search-bar"/>
      </div>
      <CountryCardList
         class="country-list__list"
         :country-list="countryList"
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