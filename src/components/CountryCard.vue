
<script>
import InformationList from '@/components/InformationList.vue';
export default {
  name: 'CountryCard',
  components: { InformationList },
  props: {
    country: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    countryInformation() {
      return [
        {
          name: 'Population',
          value: this.country.population,
        }, {
          name: 'Region',
          value: this.country.region,
        }, {
          name: 'Capital',
          value: this.country.capital,
        }
      ]
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
    <div class="country-card__country-information">
      <h3 class="country-card__name">{{ country.name }}</h3>
      <InformationList
        class="country-card__information-list"
        :information-list="countryInformation"
      />
    </div>
  </div>
</template>

<style lang="scss">
.country-card {
  width: 350px;
  border-radius: 5px;
  overflow: hidden;

  background-color: white;

  &__flag-container {
    width: 100%;
    height: 200px;
  }

  &__flag {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__country-information {
    padding: 20px;
  }

  &__name {
    margin-bottom: 15px;
    font-size: 1.3em;
  }
}
</style>
