<script>
import { mapState } from 'vuex'
export default {
   name: 'CountryList',
   computed: {
      ...mapState(['countryList'])
   }
}
</script>

<template>
   <div class="country-list">
      Country list
   </div>
</template>