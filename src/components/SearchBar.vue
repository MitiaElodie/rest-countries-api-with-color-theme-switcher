<script>
export default {
   name: 'SearchBar',
   data() {
      return {
         searchValue: ''
      }
   },

   emits: ['search-change'],
   
   watch: {
      searchValue() {
         this.$emit('search-change', this.searchValue)
      }
   },

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
   display: flex;
   overflow: hidden;

   width: 350px;
   border-radius: 5px;

   color: hsl(0, 0%, 52%);
   background-color: white;
   box-shadow: var(--box-shadow);

   &__input {
      padding: 15px;
      padding-left: 0; // remove the padding left because there is already a padding from the icon
      border: none;
      width: 100%;

      &:focus {
         outline: none; // to remove the border when focused
      }
   }

   &__search-icon {
      padding: 15px 20px;
   }
}
</style>