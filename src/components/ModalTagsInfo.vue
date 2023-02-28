<template>
  <div class="modal">
    <div class="modal-container">
      <button class="fechar" @click="fecharModal">X</button>
      <ListaTags v-for="(tag, index) in tags" :key="index" :tag="tag"/>
    </div>
  </div>
</template>

<script>
import ListaTags from './ListaTags.vue';
export default {
  components: { ListaTags },
  name: 'ModalTagsInfo',
  computed: {
    tags(){
      return this.$store.state.tags
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
