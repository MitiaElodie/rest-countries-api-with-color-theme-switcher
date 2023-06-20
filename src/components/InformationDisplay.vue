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