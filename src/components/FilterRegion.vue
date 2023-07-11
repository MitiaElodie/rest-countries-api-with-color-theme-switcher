<template>
   <div class="filter-region">
      <button
         @click="toggle"
         class="filter-region__button"
      >Filter by Region</button>
      <div
         v-if="active"
         class="filter-region__dropdown-content"
      >
      Menu
      </div>
   </div>
</template>

<script>
export default {
   data () {
      return {
      active: false
      }
   },
   methods: {
      toggle () {
      this.active = !this.active
      }
   }
}
</script>

<style lang="scss">
.filter-region {
   position: relative;

   &__button {
      padding: 10px;
      border: none;
      cursor: pointer;
      background-color: white;
   }

   &__dropdown-content {
      position: absolute;
      background-color: white;
   }
}
</style>
