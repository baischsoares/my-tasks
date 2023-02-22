<template>
  <div class="home">
    <ModalUsuario v-if="!usuario"/>
    <button class="botao-add">+</button>
    <ModalAdicionarTarefa v-if="adicionando"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalUsuario from '@/components/ModalUsuario.vue'
import ModalAdicionarTarefa from '@/components/ModalAdicionarTarefa.vue'


export default {
  name: 'HomeView',
  components: {
    ModalUsuario,
    ModalAdicionarTarefa
  },
  data(){
    return {
      adicionando: true,
    }
  },
  computed: {
    usuario(){
      return this.$store.state.usuario
    }
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
