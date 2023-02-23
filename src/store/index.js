import { createStore } from 'vuex';

export default createStore({
  state: {
    usuario: null,
    tags: [
      {
        nome: 'Trabalho',
        estilo: {
          backgroundColor: '#D2CEFF',
        },
      },
      {
        nome: 'Estudo',
        estilo: {
          backgroundColor: '#DAF2D6',
        },
      },
      {
        nome: 'Compras',
        estilo: {
          backgroundColor: '#D1E5F7',
        },
      },
      {
        nome: 'Pessoal',
        estilo: {
          backgroundColor: '#FFF9DE',
        },
      },
      {
        nome: 'Importante',
        estilo: {
          backgroundColor: '#FFCECE',
        },
      },
    ],
  },
  getters: {},
  mutations: {
    ADICIONAR_USUARIO(state, payload) {
      state.usuario = payload;
    },
    ADICIONAR_TAREFA(state, payload) {
      state.usuario.tarefas.unshift(payload);
    },
    ATUALIZAR_TAREFAS(state, payload) {
      state.usuario.tarefas = payload;
    },
    TAREFA_FEITA(state, payload) {
      state.usuario.tarefasFeitas.unshift(payload);
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
    atualizarTarefas(context, payload) {
      context.commit('ATUALIZAR_TAREFAS', payload);
      localStorage.setItem('Usuario', JSON.stringify(this.state.usuario));
    },
    tarefaFeita(context, payload) {
      context.commit('TAREFA_FEITA', payload);
    },
  },
  modules: {},
});
