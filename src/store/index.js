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
      const countryListWithId = countryList.map((country, index) => ({
        ...country,
        id: index + 1 // to not have an id equals to 0
      }))
      commit('setCountryList', countryListWithId)
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
