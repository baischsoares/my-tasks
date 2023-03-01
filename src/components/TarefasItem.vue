<template>
 
    <tr class="tarefa-item">
        <td :class="foraPrazo ? 'fora' : ''" class="prazo">{{ tarefa.prazoFormatado }}</td>
        <td class="titulo">
          {{ tarefa.titulo }}
           <span v-for="(tag, index) in tarefa.tags" :key="index" :style="tag.estilo" class="tag"></span>
        </td>
        <td class="tags">
         
        </td>
        <td class="btns"> 
          <button  v-if="tarefa.descricao" class="infos-tarefa" @click="modalInformacao = true"> ? </button>
          <button class="editar" @click="editar = true">Editar</button>
          <button class="feita" @click="excluirTarefa(tarefa)">Feita</button>
        </td>
        <ModalEditarTarefa v-if="editar" :tarefa="tarefa" @fecharModal="editar = false"/>
        <div v-if="modalInformacao" class="modal">
          <ModalTarefaInfo :tarefa="tarefa" @fecharModal=" modalInformacao = false"/>
        </div> 
    </tr>

 

 
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

td{
  width: 100%;
  padding: 5px;
  text-align: center;
}
.btns{
  display: flex;
  gap: 15px;
}
.prazo{
  width: max-content;
}
</style>
