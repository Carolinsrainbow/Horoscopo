import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    horoscopos: []
  },
  mutations: {
    SET_HOROSCOPOS(state, horoscopos) {
      state.horoscopos = horoscopos
    }
  },
  actions: {
    traerHoroscopos({
      commit
    }) {
      axios.get('https://api.xor.cl/tyaas/').then((data) => {
        let res = data.data.horoscopo
        let miDataHoroscopo = Object.values(res)
        commit('SET_HOROSCOPOS', miDataHoroscopo)
      })
    },
  },
  modules: {}
})