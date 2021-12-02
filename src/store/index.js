import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const auth = {
  namespaced: true,
  state:() => ({
    userName: '',
    logged: false
  }),
  mutations: {
    setLogged(state, value){
      state.logged = value
    }
  }
}

export default new Vuex.Store({
  state: {
    local: {
      localId: '',
      localNombre: 'Chamañiño',
      aforoMaximo: '',
    }
  },
  mutations: {},
  actions: {},
  modules: {
    auth: auth
  },
});
