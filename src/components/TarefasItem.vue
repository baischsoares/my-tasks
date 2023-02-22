<template>
 <div class="tarefa-item">
  <span>{{ tarefa.prazo }}</span>
  <span>{{ tarefa.titulo }}</span>
  <div class="botoes">
    <button>Editar</button>
    <button>Feita</button>
  </div>
 </div>
</template>

<script>
export default {
  name: 'TarefaItem',
  props: ['tarefa'],
  data(){
    
  },
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
