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