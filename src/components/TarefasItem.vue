<template>
 
    <div class="tarefa-item">
        <span :class="foraPrazo ? 'fora' : ''" class="prazo">{{ tarefa.prazoFormatado }}</span>
        <span class="titulo"> {{ tarefa.titulo }}</span>
        <div class="tags">
          <span v-for="(tag, index) in tarefa.tags" :key="index" :style="tag.estilo" class="tag"></span>
       </div>
        <div class="btns"> 
          <button  v-if="tarefa.descricao" class="infos-tarefa" @click="modalInformacao = true"> ? </button>
          <button class="editar" @click="editar = true">Editar</button>
          <button class="feita" @click="excluirTarefa(tarefa)">Feita</button>
        </div>
        <ModalEditarTarefa v-if="editar" :tarefa="tarefa" @fecharModal="editar = false"/>
        <div v-if="modalInformacao" class="modal">
          <ModalTarefaInfo :tarefa="tarefa" @fecharModal=" modalInformacao = false"/>
        </div> 
    </div>

 

 
</template>

<script>
 import ModalEditarTarefa from '@/components/ModalEditarTarefa.vue'
 import ModalTarefaInfo from '@/components/ModalTarefaInfo.vue'


export default {
  name: 'TarefaItem',
  props: ['tarefa'],
   components: {
     ModalEditarTarefa,
     ModalTarefaInfo
   },
  data(){
    return{
      modalInformacao: false,
      editar: false
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
      let confirmacao = window.confirm('Você concluiu essa tarefa?')
      if(confirmacao){
        let listaTarefas = this.$store.state.usuario.tarefas.filter(task => {
        return !(task.id == tarefa.id);
      })
      let diaConclusao = new Date()
      tarefa.dataConclusao = diaConclusao.getTime()
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

<style scoped>
.tarefa-item{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d1d1d1;
  padding: 20px 0px;
}
.titulo{
  font-weight: 500;
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
  width: 15px;
  height: 5px;
  margin-left: 5px;
  float: right;
}

.btns{
  display: flex;
  gap: 15px;
}

@media(max-width: 720px){
  .tarefa-item{
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 20px;
  }
}
</style>
