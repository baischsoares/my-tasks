<template>
  <div class="modal-container modal-infos-tarefa">
            <button class="fechar" @click="$emit('fecharModal')">X</button>
            <p class="titulo-tarefa">{{ tarefa.titulo }}</p>
            <p class="prazo-tarefa"> {{ tarefa.prazoFormatado }}</p>
            <p class="descricao-tarefa">Descrição:</p>
            <div class="descricao-espaco">
              <p class="descricao-tarefa"> {{ tarefa.descricao }}</p>
            </div>
  </div >
</template>

<script>
export default {
  name: 'ModalTarefaInfo',
  props: ['tarefa']
}
</script>

<style>
.modal-infos-tarefa{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.descricao-espaco{
  padding: 5px;
  grid-column: 1/-1;
  height: 200px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>