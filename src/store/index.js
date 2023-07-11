import { createStore } from 'vuex'
import countryList from '@/data/data.json'

export default createStore({
  state: {
    countryList: [],
    regionList: [],
  },
  mutations: {
    setCountryList(state, countryList) {
      state.countryList = countryList
    },

    setRegionList(state, regionList) {
      state.regionList = regionList
    }
  },
  actions: {
    setCountryList({ commit }) {
      commit('setCountryList', countryList)
    },

    setRegionList({ commit }) {
      // get the list of all regions
      const regionList = new Set([...this.state.countryList.map((country) => country.region)])

      commit('setRegionList', regionList)
    },
  },
  modules: {
  }
})
