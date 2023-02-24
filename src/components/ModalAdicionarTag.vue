<template>
  <div class="modal">
    <div class="modal-container">
      <button class="fechar" @click="fecharModal">X</button>
      <label for="nome">Nome
        <input type="text" v-model="tag.nome" required id="nome">
      </label>
      <label for="cor">Cor:
        <input type="color" v-model="tag.estilo.backgroundColor" required id="cor">
      </label>
      <p class="erro" v-if="erro"> Adicione um nome e escolha uma cor</p>
      <button class="buttonModal" @click="adicionarTag">Adcionar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalAdicionarTarefa',
  data(){
    return {
      tag: {
        nome: '',
        estilo: {
          backgroundColor: ''
        }
      },
      erro: false,
    }
  },
  methods: {
    adicionarTag(){
      if(this.tag) {
       this.$store.dispatch('criarTag', this.tag);
       this.fecharModal()
       this.erro = false
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
.lista-tags{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: none;
}
.adicionada{
   border: 1px solid var(--corTexto2) 
}
.cor{
  display: inline-block;
  width: 100%;
  height: 5px;
}
</style>
