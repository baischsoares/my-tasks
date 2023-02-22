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
    ADICIONAR_TAREFA(state, payload) {
      state.usuario.tarefas.push(payload);
    },
  },
  actions: {
    salvarUsuario(context, payload) {
      context.commit('ADICIONAR_USUARIO', payload);
      localStorage.setItem('Usuario', JSON.stringify(this.state.usuario));
    },
    criarTarefa(context, payload) {
      context.commit('ADICIONAR_TAREFA', payload);
      localStorage.setItem('Usuario', JSON.stringify(this.state.usuario));
    },
  },
  modules: {},
});
