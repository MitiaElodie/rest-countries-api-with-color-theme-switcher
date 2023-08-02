<script>
import { mapActions } from 'vuex'

import countryList from '@/data/data.json'
export default {
  name: 'App',

  data() {
    return {
      countryList: countryList,
      hasDarkMode: false,
    }
  },

  created() {
    return this.setCountryList().then(() => this.setRegionList())
  },

  methods: {
    ...mapActions(['setCountryList', 'setRegionList']),

    toggleDarkMode() {
      this.hasDarkMode = !this.hasDarkMode
    },
  },
}
</script>

<template>
  <div
    class="app"
    :class="{'app--dark-mode': hasDarkMode}"
  >
    <div class="app__header">
      <router-link
        class="app__title-link"
        :to="{ name: 'CountryList' }"
      >
        <h1 class="app__title">Where in the world?</h1>
      </router-link>
      <button
        class="app__dark-mode-button"
        @click="toggleDarkMode"
      >
        <i class="app__dark-mode-icon fa fa-moon" />
        <span class="app__dark-mode-label">Dark Mode</span>
      </button>
    </div>
    <div class="app__content">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>


<style lang="scss">
:root {
  --text-color: hsl(200, 15%, 8%);
  --header-background-color: white;
  --app-content-background-color: hsl(0, 0%, 98%);
  --element-background-color: white;
  --box-shadow: 0px 0px 5px 1px hsl(0, 0%, 85%);
  --search-text-color: hsl(0, 0%, 52%);
  --button-box-shadow: 0px 0px 5px 1px hsl(0, 0%, 85%);
}

* {
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans';
}

.app {
  &--dark-mode {
    --text-color: white;
    --header-background-color: #2b3743;
    --app-content-background-color: #202d36;
    --element-background-color: #2b3743;
    --box-shadow: none;
    --search-text-color: white;
    --button-box-shadow: 0px 0px 5px 1px #1d2935;
  }
  color: var(--text-color);
  height: 100vh;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;

    gap: 10px;
    padding: 25px;

    background-color: var(--header-background-color);
  }

  &__title {
    font-size: 1em;
  }

  &__dark-mode-button {
    background-color: inherit;
    color: inherit;
    border: none;
    cursor: pointer;

    font-weight: 600;
  }

  &__dark-mode-icon {
    padding: 5px;
  }

  &__content {
    background-color: var(--app-content-background-color);
    padding: 40px 60px;
    overflow: auto;
    flex-grow: 1;
  }

  &__title-link {
    text-decoration: none;
    color: inherit;
  }
}

@media (max-width: 430px) {
  .app {
    &__content {
      padding: 20px 30px;
    }
  }
}
</style>
