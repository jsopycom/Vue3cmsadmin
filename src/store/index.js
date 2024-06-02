import { createStore } from 'vuex'
import Login from './modules/Login'
import getters from './getters'
import APP from './modules/app.js'
export default createStore({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    Login,
    APP
  }
})
