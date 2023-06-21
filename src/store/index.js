import { createStore } from 'vuex'
import countryList from '@/data/data.json'

export default createStore({
  state: {
    countryList: []
  },
  mutations: {
    setCountryList(state, countryList) {
      state.countryList = countryList
    }
  },
  actions: {
    setCountryList({ commit }) {
      commit('setToggles', countryList)
   },

  },
  modules: {
  }
})
