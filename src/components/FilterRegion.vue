
<script>
import { mapState } from 'vuex'

export default {
   data () {
      return {
      active: false
      }
   },

   emits: ['filter-change'],

   computed: {
      ...mapState(['regionList'])
   },

   methods: {
      toggle () {
         this.active = !this.active
      },
   }
}
</script>

<template>
   <div class="filter-region">
      <button
         @click="toggle"
         class="filter-region__toggle-button"
      ><span>Filter by Region</span><i :class="`filter-region__chevron-icon fa ${ active ? 'fa-chevron-up' : 'fa-chevron-down'}`"/></button>
      <div
         v-if="active"
         class="filter-region__dropdown-content"
      >
      <button
         v-for="region in regionList"
         :key="region"
         class="filter-region__region"
         @click="$emit('filter-change', region)"
      >{{ region }}</button>
      </div>
   </div>
</template>

<style lang="scss">
.filter-region {
   position: relative;

   &__toggle-button,
   &__region {
      padding: 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;

      background-color: white;
   }

   &__toggle-button {
      width: 150px;
      box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
   }

   &__dropdown-content {
      position: absolute;
      margin-top: 5px;
      border-radius: 5px;
      min-width: 100%;

      background-color: white;
      box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
   }

   &__region {
      display: block;
      text-align: left;
      width: 100%;

      &:hover {
         background-color: hsl(0, 0%, 98%);
      }
   }

   &__chevron-icon {
      padding-left: 10px;
   }
}
</style>
