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
        <div class="tag-perfil" v-for="tag in tags" :key="tag">
          <div class="tag-dados">
            <p class="tag-perfil-nome">{{ tag.nome }}</p>
            <p :style="tag.estilo" class="estilo-tag"></p>
          </div>
          <button class="excluirTag" @click="excluirTag(tag)">X</button>
        </div>
        <button @click="adicionandoTag = true" class="adicionarTag">Adicionar nova</button>
      </div>

    </div>
    <ModalAdicionarTag v-if="adicionandoTag" @fecharModal="adicionandoTag = false" />
  </section>
  
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
.tag-perfil span{
  display: inline-block;
  font-size:0.75rem;
}
.tag-dados{
  display: grid;
  grid-template-columns: 100px auto;
  align-items: center;
}

.tag-perfil{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;
}
.estilo-tag{
  display:block;
  width: 20px;
  height: 5px;
}
.adicionarTag{
  background: var(--corAzul);
  width: 100%;
}
.adicionarTag:hover{
  background: var(--corRoxa);
}
.excluirTag{
  color: var(--corAlerta);
  background: transparent;
}
.excluirTag:hover{
  border: 1px solid var(--corAlerta);
}
@media(max-width: 720px){
  .perfil-secao{
  grid-template-columns: 1fr;
  }
  
}
</style>
