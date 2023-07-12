<script>
export default {
   name: 'InformationDisplay',
   props: {
      information: {
         type: Object,
         default: () => ({
            name: '',
            value: '',
         })
      }
   }
}
</script>

<template>
<div class="information-display">
   <span class="information-display__label">{{ information.name + ':' }}</span>
   <span class="information-display__value">{{ information.value }}</span>
</div>
</template>

<style lang="scss">
.information-display {
   &__label {
      font-weight: 600;
   }

   &__value {
      margin-left: 5px;
   }
}
</style>