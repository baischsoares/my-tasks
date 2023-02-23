<template>
 <div class="tarefa-item">
  <span>{{ tarefa.prazo }}</span>
  <span>{{ tarefa.titulo }}</span>
  <div class="tags-tarefas">
    <span v-for="(tag, index) in tarefa.tags" :key="index" :style="tag.estilo" class="tag"></span>
  </div>
  <div class="botoes">
    <button class="editar">Editar</button>
    <button class="feita" @click="excluirTarefa(tarefa)">Feita</button>
  </div>
 </div>
</template>

<script>


export default {
  name: 'TarefaItem',
  props: ['tarefa'],
  methods: {
    excluirTarefa(tarefa){
      let confirmacao = window.confirm('Tem certeza que quer excluir a tarefa?')
      if(confirmacao){
        let listaTarefas = this.$store.state.usuario.tarefas.filter(task => {
        return !(task.id == tarefa.id);
      })
      this.$store.dispatch('tarefaFeita', tarefa)
      this.$store.dispatch('atualizarTarefas', listaTarefas)
    }
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
.botoes{
  display: flex;
  gap: 15px;
}
.botoes button{
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.75rem;
  color: var(--corTexto2);
  cursor: pointer;
}
.botoes button:hover {
  color: var(--corTexto);
}
.feita{
  border: 1px solid var(--corVerde);
  background: var(--corVerde);
}
.editar{
  border: 1px solid var(--corAzul);
  background: var(--corAzul);
}
.tag{
  display: inline-block;
  width: 15px;
  height: 5px;
  margin-left: 5px;
}
</style>
