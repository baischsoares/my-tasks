<template>
  <div class="modal">
    <div class="modal-container">
      <button class="fechar" @click="fecharModal">X</button>
      <label for="titulo">Título da tarefa
        <input type="text" v-model="tarefa.titulo"  required id="titulo">
      </label>
      <label for="descricao">Descrição:
        <textarea type="" v-model="tarefa.descricao"  required id="descricao"></textarea>
      </label>
      <label for="prazo">Prazo:
        <input type="date" v-model="tarefa.prazo"  required id="prazo">
      </label>
      <div class="lista-tags">
          <button v-for="(tag, index) in tags" 
          :key="index"  
          :style="tag.estilo" 
          @click="adicionarTag(tag)" 
          :class="tarefa.tags.includes(tag) ? 'adicionada' : ''">
            {{ tag.nome }}
          </button>
      </div >
      
      <p class="erro" v-if="erro"> Adicione pelo menos o título e o prazo</p>
      <button class="buttonModal" @click="criarTarefa">Criar tarefa</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalAdicionarTarefa',
  data(){
    return {
      tarefa: {
        titulo: '',
        prazo: '',
        descricao: '',
        tags: [],
      },
      erro: false,
    }
  },
  computed: {
    tags(){
      return this.$store.state.tags
    },
  },
  methods: {
    criarTarefa(){
      if(this.tarefa.titulo && this.tarefa.prazo) {
        this.tarefa.id = Math.random() * new Date().getTime();

        let data = new Date(this.tarefa.prazo);
        this.tarefa.prazo = data.getTime();

        this.tarefa.prazoFormatado = data.getUTCDate() + '/' + (data.getUTCMonth()+1) + '/' + data.getFullYear();

        this.$store.dispatch('criarTarefa', this.tarefa);
        this.fecharModal();
      }else {
      this.erro = true
      }
    },
    adicionarTag(tagEscolhida){
      let i = this.tarefa.tags.findIndex(tag => tag.nome == tagEscolhida.nome)
       if(i < 0) {
        this.tarefa.tags.push(tagEscolhida)
       } else{
        this.tarefa.tags.splice(i, 1)
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
</style>
