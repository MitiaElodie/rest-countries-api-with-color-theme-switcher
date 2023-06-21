<script>
import { mapState } from 'vuex'

import SearchBar from '@/components/SearchBar.vue';

export default {
   name: 'CountryList',
   components: { SearchBar },
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
   </div>
</template>