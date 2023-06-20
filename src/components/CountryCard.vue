
<script>
export default {
  name: 'CountryCard',
  props: {
    country: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<template>
  <div class="country-card">
    <div class="country-card__flag-container">
      <img
        class="country-card__flag"
        :src="country.flags.png"
        :alt="`Flag of ${ country.name }`"
      />
    </div>
  </div>
</template>

<style lang="scss">

</style>
