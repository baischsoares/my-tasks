<template>
  <div class="modal">
    <div class="modal-container">
      <button class="fechar" @click="fecharModal">X</button>
      <label for="titulo">Título da tarefa
        <input type="text" v-model="tarefa.titulo"  required id="titulo">
      </label>
      <label for="descricao">Descrição:
        <textarea type="" v-model="tarefa.descricao"  required id="descricao"></textarea>
      </label>
      <label for="prazo">Prazo:
        <input type="date" v-model="tarefa.prazo"  required id="prazo">
      </label>
      <p class="erro" v-if="erro"> Adicione titulo, descricao e prazo</p>
      <button class="buttonModal" @click="criarTarefa">Criar tarefa</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalAdicionarTarefa',
  data(){
    return {
      tarefa: {
        titulo: '',
        prazo: '',
        descricao: '',
      },
      erro: false,
    }
  },
  methods: {
    criarTarefa(){
      if(this.tarefa.titulo && this.tarefa.prazo && this.tarefa.descricao) {
        this.tarefa.id = Math.random() * new Date().getTime()
        this.$store.dispatch('criarTarefa', this.tarefa);
        this.fecharModal();
      }else {
      this.erro = true
      }
    },
     fecharModal(){
      this.$emit('fecharModal')
     }
  }
}

</script>


<style>
.erro{
  color: var(--corAlerta);
  font-size: 0.75rem;
  font-weight: 700;
}
</style>
