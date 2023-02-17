import { createStore } from 'vuex';

export default createStore({
  state: {
    usuario: {},
  },
  getters: {},
  mutations: {
    ADICIONAR_USUARIO(state, payload) {
      state.usuario = payload;
    },
  },
  actions: {
    salvarUsuario(context, payload) {
      context.commit('ADICIONAR_USUARIO', payload);
      localStorage.setItem('usuario', JSON.stringify(this.state.usuario));
    },
  },
  modules: {},
});
