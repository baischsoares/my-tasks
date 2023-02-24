<template>
  <div class="home">
    
    <div v-if="!usuario">
      <ModalUsuario />
    </div>
    <div v-else>
      <button class="botao-add" @click="adicionando = true">+</button>

      <ModalAdicionarTarefa v-if="adicionando" @fecharModal="adicionando = false"/>

      <h1 >Minhas tarefas</h1>
      <div v-if="usuario.tarefas">
        <TarefasItem v-for="tarefa in usuario.tarefas" :tarefa="tarefa" :key="tarefa.id" @abrirModal="modalinformacoes = true" />
      </div>
      <div v-else>
        <p>Você ainda não adicionou nenhuma tarefa</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalUsuario from '@/components/ModalUsuario.vue'
import ModalAdicionarTarefa from '@/components/ModalAdicionarTarefa.vue'
import TarefasItem from '@/components/TarefasItem.vue'


export default {
  name: 'HomeView',
  components: {
    ModalUsuario,
    ModalAdicionarTarefa,
    TarefasItem,
  },
  data(){
    return {
      adicionando: false,
      modalinformacoes: false,
      tarefa: null
    }
  },
  computed: {
    usuario(){
      return this.$store.state.usuario
    },
  }
}
</script>
<style>
.botao-add{
  float: right;
  height: 35px;
  width: 35px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50%;
  border: 1px solid var(--corTexto);
  background-color: #fff;
  color:var(--corTexto);
  cursor: pointer;
}
.botao-add:hover{
  border: 1px solid var(--corVerde);
  background-color:var(--corVerde);
  color:#fff;
}
</style>
