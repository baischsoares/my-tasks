<template>
  <div class="home">
    
    <div v-if="!usuario">
      <ModalUsuario />
    </div>
    <div v-else>
      <div class="btns">
        <button class=" botao-info-tag" @click=" modalTags = true">?</button>
        <button class="botao-add" @click="adicionando = true">+</button>
      </div>

      <ModalTagsInfo v-if="modalTags" @fecharModal=" modalTags = false"/>
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
import ModalTagsInfo from '@/components/ModalTagsInfo.vue'

export default {
  name: 'HomeView',
  components: {
    ModalUsuario,
    ModalAdicionarTarefa,
    TarefasItem,
    ModalTagsInfo,
  },
  data(){
    return {
      adicionando: false,
      modalinformacoes: false,
      tarefa: null,
      modalTags: false,
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
.btns{
  float: right;
  display: flex;
  align-items: center;
  gap: 15px;
}
.botao-info-tag{
  color: var(--corAlerta);
  font-size: 1.5rem;
  font-weight: bold;
  background: transparent;
}
.botao-info-tag:hover{
  color: var(--corVerde);
}
.botao-add{
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
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
