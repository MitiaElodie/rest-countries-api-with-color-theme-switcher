<script>
import { mapActions } from 'vuex'

import countryList from '@/data/data.json'
export default {
  name: 'App',

  data() {
    return {
      countryList: countryList
    }
  },

  created() {
    return this.setCountryList().then(() => this.setRegionList())
  },

  methods: {
    ...mapActions(['setCountryList', 'setRegionList'])
  },
}
</script>

<template>
  <div class="app">
    <div class="app__header">
      <router-link
        class="app__title-link"
        :to="{ name: 'CountryList' }"
      >
        <h1 class="app__title">Where in the world?</h1>
      </router-link>
      <button class="app__dark-mode-button">
        <i class="app__dark-mode-icon fa fa-moon" />
        <span class="app__dark-mode-label">Dark Mode</span>
      </button>
    </div>
    <div class="app__content">
      <router-view/>
    </div>
  </div>
</template>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans';
}

.app {
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    padding: 25px;
  }

  &__title {
    font-size: 1em;
  }

  &__dark-mode-button {
    background-color: inherit;
    border: none;
    cursor: pointer;

    font-weight: 600;
  }

  &__dark-mode-icon {
    padding: 5px;
  }

  &__content {
    padding: 30px;
  }

  &__title-link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
