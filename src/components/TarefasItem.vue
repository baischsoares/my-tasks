<template>
 <div class="tarefa-item">

      <span :class="foraPrazo ? 'fora' : ''">{{ tarefa.prazoFormatado }}</span>
      <span>{{ tarefa.titulo }}</span>

      <div class="tags-tarefas">
        <span v-for="(tag, index) in tarefa.tags" :key="index" :style="tag.estilo" class="tag"></span>
      </div>

      <div class="botoes">
        <button  v-if="tarefa.descricao" class="infos-tarefa" @click="modalInformacao = true"> ? </button>
        <button class="editar">Editar</button>
        <button class="feita" @click="excluirTarefa(tarefa)">Feita</button>
      </div>

        <div v-if="modalInformacao" class="modal">
          <div class="modal-container modal-infos-tarefa">
            <button class="fechar" @click="modalInformacao = false">X</button>
            <p class="titulo-tarefa">{{ tarefa.titulo }}</p>
            <p class="prazo-tarefa"> {{ tarefa.prazo }}</p>
            <p class="descricao-tarefa">Descrição:</p>
            <div class="descricao-espaco">
              <p class="descricao-tarefa"> {{ tarefa.descricao }}</p>
            </div>
          </div >
        </div>
  </div>
</template>

<script>

export default {
  name: 'TarefaItem',
  props: ['tarefa'],
  data(){
    return{
      modalInformacao: false,
    }
  }, 
  computed:{
    foraPrazo(tarefa){
      let diaAtual = new Date();
      return (tarefa.prazo > diaAtual) ? true : false
    }
  },
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
    },
    abrirModal(){
      this.$emit('abrirModal')
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
  text-align: center;
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
.modal-infos-tarefa{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 15px;
}
.titulo-tarefa{
  font-weight: 700;
}
.prazo-tarefa{
  justify-self: flex-end;
}
.prazo-tarefa, .descricao-tarefa, .tag{
  font-size: 0.75rem;
}
.descricao-espaco{
  padding: 5px;
  grid-column: 1/-1;
  height: 200px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
