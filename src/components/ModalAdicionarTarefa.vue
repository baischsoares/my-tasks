<template>
  <div class="modal">
    <div class="modal-container">
      <button class="fechar">X</button>
      <label for="titulo">Título da tarefa
        <input type="text" v-model="tarefa.titulo"  required id="titulo">
      </label>
      <label for="descricao">Descrição:
        <textarea type="" v-model="tarefa.descricao"  required id="descricao"></textarea>
      </label>
      <label for="prazo">Prazo:
        <input type="date" v-model="tarefa.prazo"  required id="prazo">
      </label>
      <p class="erro" v-if="erro"> Adcione seu nome e e-mail</p>
      <button class="buttonModal" @click="adicionarUsuario">Criar tarefa</button>
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
      erro: null,
    }
  },
}

</script>


<style>
.erro{
  color: var(--corAlerta);
  font-size: 0.75rem;
  font-weight: 700;
}
</style>
