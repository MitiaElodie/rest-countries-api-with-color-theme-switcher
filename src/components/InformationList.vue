<script>
import InformationDisplay from '@/components/InformationDisplay.vue';

export default {
   name: 'InformationList',
   components: { InformationDisplay },
   props: {
      informationList: {
         type: Array,
         default: () => []
      }
   },
}
</script>

<template>
<div class="information-list">
   <InformationDisplay
      v-for="(item, index) in informationList"
      :information="item"
      :key="`informationDisplay${ index }`"
      class="information-list__item"
   />
</div>
</template>

<style lang="scss">
.information-list {
   &__item {
      margin-bottom: 10px;
   }
}
</style>