<template>
  <div class="modal">
    <div class="modal-container">
      <button class="fechar">X</button>
      <label for="nome">Nome:
        <input type="text" v-model="usuario.nome" required id="nome">
      </label>
      
      <label for="email">Email:
        <input type="email" v-model="usuario.email" required id="email">
      </label>
      <p class="erro" v-if="erro"> Adcione seu nome e e-mail</p>
      <button class="buttonModal" @click="adicionarUsuario">Criar usuário</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalUsuario',
  data(){
    return {
      usuario: {
        nome: '',
        email: '',
        tarefas: [],
        tarefasFeitas: [],
      },
      erro: false
    }
  },
  methods: {
    adicionarUsuario(){
      if(this.usuario.nome && this.usuario.email){
        this.$store.dispatch('salvarUsuario', this.usuario);
        this.erro = false
      } else {
        this.erro = true
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.erro{
  color: var(--corAlerta);
  font-size: 0.75rem;
  font-weight: 700;
}
</style>
