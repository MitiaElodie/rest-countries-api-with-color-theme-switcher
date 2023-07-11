<script>
export default {
   name: 'SearchBar',
   data() {
      return {
         searchValue: ''
      }
   }
}
</script>

<template>
   <div class="search-bar">
      <i class="fa fa-search"></i>
      <input
         v-model="searchValue"
         class="search-bar__input"
         placeholder="Search for a country..."
      />
   </div>
</template>

<style lang="scss">
.search-bar {
   &__input {
      border: none;
   }
}
</style>