<template>
  <div>
    <div class="perfil">
      <h1>Seu perfil</h1>
      <p><b>Nome: </b> {{ usuario.nome }} </p>
      <p><b>E-mail: </b> {{ usuario.email }} </p>
    </div>
    <div class="tags-perfil">
      <h4>Suas tags</h4>
      <div class="tag-perfil" v-for="tag in tags" :key="tag">
        <p class="tag-perfil-nome">{{ tag.nome }}</p>
        <p :style="tag.estilo" class="estilo-tag"></p>
        <button @click="excluirTag(tag)">X</button>
      </div>
      <button @click="adicionandoTag = true">Adicionar nova</button>
    </div>
    <ModalAdicionarTag v-if="adicionandoTag" @fecharModal="adicionandoTag = false" />
  </div>
  
</template>

<script>

import ModalAdicionarTag from '@/components/ModalAdicionarTag.vue'

export default {
  name: 'PerfilView',
  components: {
    ModalAdicionarTag
  },
  data(){
    return {
      adicionandoTag: false,
    }
  },
  computed: {
    usuario(){
      return this.$store.state.usuario
    },
    tags(){
      return this.$store.state.tags
    }
  },
  methods: {
    excluirTag(tagExcluida){
        let listaTags = this.$store.state.tags.filter(tag => {
        return !(tag.nome == tagExcluida.nome);
        })
        console.log(listaTags)
      this.$store.dispatch('excluirTag', listaTags)
    }
  }
}
</script>
<style>
.perfil p{
  display: block;
}
.tag-perfil span{
  display: inline-block;
  font-size:0.75rem;
}
.tag-perfil{
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
}
.estilo-tag{
  display:block;
  width: 20px;
  height: 5px;
}
</style>
