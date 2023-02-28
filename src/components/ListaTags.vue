<template>
  <div class="tag-perfil">
          <div class="tag-dados">
            <p class="tag-perfil-nome">{{ tag.nome }}</p>
            <p :style="tag.estilo" class="estilo-tag"></p>
          </div>
          <button class="excluirTag" @click="excluirTag(tag)">X</button>
  </div>
</template>

<script>
export default {
  name: 'listaTags',
  props: ['tag'],
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
.excluirTag{
  color: var(--corAlerta);
  background: transparent;
}
.excluirTag:hover{
  border: 1px solid var(--corAlerta);
}
</style>