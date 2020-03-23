import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'http://localhost:3000/'
  },
  mutations: {
  },
  actions: {
    makeToast(state, { vm, message }) {
      vm.$bvToast.toast(message, {
        title: `Error`,
        toaster: 'b-toaster-bottom-right',
        variant: 'danger',
        solid: true
      })
    }
  },
  modules: {
  }
})
