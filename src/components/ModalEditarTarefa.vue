<template>
  <div class="modal">
    <div class="modal-container modal-editar">
      <button class="fechar" @click="fecharModal">X</button>
      <label for="titulo">Título da tarefa
        <input type="text" v-model="novaTarefa.titulo"  required id="titulo" :placeholder="tarefa.titulo">
      </label>
      <label for="descricao">Descrição:
        <textarea type="" v-model="novaTarefa.descricao"  required id="descricao" :placeholder="tarefa.descricao"></textarea>
      </label>
      <label for="prazo">Prazo:
        <input type="date" v-model="novaTarefa.prazo"  required id="prazo">
      </label>
      <div class="lista-tags">
          <button v-for="(tag, index) in tags" 
          :key="index"  
          :style="tag.estilo" 
          @click="adicionarTag(tag)" 
          :class="novaTarefa.tags.includes(tag) ? 'adicionada' : ''">
            {{ tag.nome }}
          </button>
      </div >
      
      <p class="erro" v-if="erro"> Adicione pelo menos o título e o prazo</p>
      <button class="buttonModal" @click="editarTarefa(tarefa)">Editar tarefa</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalEditarTarefa',
  props:['tarefa'],
  data(){
    return {
      novaTarefa: {
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
    tarefas(){
      return this.$store.state.usuario.tarefas
    }
  },
  methods: {
   editarTarefa(tarefa){
    if(this.novaTarefa.titulo && this.novaTarefa.prazo){
      let indice = this.tarefas.findIndex((tarefaAntiga) => {
      return tarefa.id == tarefaAntiga.id
      })

      this.novaTarefa.id = Math.random() * new Date().getTime();

      let data = new Date(this.novaTarefa.prazo);
      this.novaTarefa.prazo = data.getTime();

      this.novaTarefa.prazoFormatado = data.getUTCDate() + '/' + (data.getUTCMonth()+1) + '/' + data.getFullYear();

      this.tarefas[indice] = this.novaTarefa
      
      this.$store.dispatch('editarTarefa', this.tarefas)
      this.fecharModal()
      } else {
        this.erro = true
      }
    },
  
      adicionarTag(tagEscolhida){
         let i = this.novaTarefa.tags.findIndex(tag => tag.nome == tagEscolhida.nome)
          if(i < 0) {
          this.novaTarefa.tags.push(tagEscolhida)
          } else{
           this.novaTarefa.tags.splice(i, 1)
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
@media(max-width: 720px){
  .modal-editar{
    width: 90%;
    margin: 0 auto;
  }
}
</style>
