<template>
 <div class="tarefa-item">
  <span>{{ tarefa.prazo }}</span>
  <span>{{ tarefa.titulo }}</span>
  <div class="botoes">
    <button>Editar</button>
    <button @click="excluirTarefa(tarefa)">Feita</button>
  </div>
 </div>
</template>

<script>


export default {
  name: 'TarefaItem',
  props: ['tarefa'],
  methods: {
    excluirTarefa(tarefa){
      let listaTarefas = this.$store.state.usuario.tarefas.filter(task => {
        return !(task.id == tarefa.id);
      })
      this.$store.dispatch('tarefaFeita', tarefa)
      this.$store.dispatch('atualizarTarefas', listaTarefas)
    }
  }
}
</script>

<style>
.tarefa-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding: 20px 0px;
}
</style>
