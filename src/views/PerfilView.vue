<template>
  <section>
    <h1>Seu perfil</h1>
    <div class="perfil-secao">

      <div class="perfil">
        <p><b>Nome: </b> {{ usuario.nome }} </p>
        <p><b>E-mail: </b> {{ usuario.email }} </p>
      </div>
      <div class="tags-perfil">
        <h4>Suas tags</h4>
        <div class="tags-perfil" v-for="tag in tags" :key="tag">
          <ListaTags :tag="tag" />
        </div>
        <button @click="adicionandoTag = true" class="adicionarTag">Adicionar nova</button>
      </div>

    </div>
    <ModalAdicionarTag v-if="adicionandoTag" @fecharModal="adicionandoTag = false" />
  </section>
  
</template>

<script>

import ModalAdicionarTag from '@/components/ModalAdicionarTag.vue'
import ListaTags from '@/components/ListaTags.vue'


export default {
  name: 'PerfilView',
  components: {
    ModalAdicionarTag,
    ListaTags
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
<style scoped>

.perfil-secao{
  display: grid;
  grid-template-columns: 400px 1fr;
  justify-content: start;
  gap: 30px;
}

.perfil p{
  display: block;
  margin-bottom: 15px;
}
h4{
  margin: 0 auto 20px auto;
  color: var(--corTexto);
}

.adicionarTag{
  background: var(--corAzul);
  width: 100%;
}
.adicionarTag:hover{
  background: var(--corRoxa);
}
@media(max-width: 720px){
  .perfil-secao{
  grid-template-columns: 1fr;
  }
}
</style>
