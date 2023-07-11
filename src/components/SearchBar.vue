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
      <i class="search-bar__search-icon fa fa-search"></i>
      <input
         v-model="searchValue"
         class="search-bar__input"
         placeholder="Search for a country..."
      />
   </div>
</template>

<style lang="scss">
.search-bar {
   min-width: 200px;
   max-width: 400px;
   border-radius: 5px;

   color: hsl(0, 0%, 52%);
   background-color: white;


   &__input {
      border: none;
      height: 100%;

      &:focus {
         outline: none; // to remove the border when focused
      }
   }

   &__search-icon {
      padding: 10px 15px;
   }
}
</style>