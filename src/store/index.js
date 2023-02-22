import { createStore } from 'vuex';

export default createStore({
  state: {
    usuario: null,
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
      localStorage.setItem('Usuario', JSON.stringify(this.state.usuario));
    },
  },
  modules: {},
});
