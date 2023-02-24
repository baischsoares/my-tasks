<template>
  <div class="grid-layout"> 
    <nav>
      <router-link class="link-router" to="/">Tarefas</router-link> 
      <router-link class="link-router" to="/dashboard">Dashboard</router-link>
      <router-link class="link-router" to="/perfil">Perfil</router-link>
    </nav>
    <div class="router-view">
      <router-view/>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'AppMyTasks',
  methods: {
    pegarUsuario(){
      if(localStorage.Usuario){
        let usuario = localStorage.getItem('Usuario');
        this.$store.commit('ADICIONAR_USUARIO', JSON.parse(usuario))
      }
    },
    pegarTags(){
      if(localStorage.Tags){
        let tag = localStorage.getItem('Tags');
        this.$store.state.tags = JSON.parse(tag)
      }
    }
  },
  created() {
    this.pegarUsuario();
    this. pegarTags();
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap");

:root{
  --corAlerta: #FFCECE;
  --corRoxa: #D2CEFF;
  --corVerde: #DAF2D6;
  --corAzul: #D1E5F7;
  --corAmarela: #FFF9DE;
  --corTexto:  #69665C;
  --corTexto2: #B2AFA1;
}
*{
  box-sizing: border-box;
}
body{
  margin: 0px;
  padding: 0px;
  font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
}
ul{
  list-style: none;
}
li, p, h1, h2, h3{
  margin: 0px;
  padding: 0px;
}
a{
  text-decoration: none;
}
h1{
  font-size: 2rem;
  font-weight: 500;
  color: var(--corTexto);
}
p{
  font-size: 1rem;
  font-weight: 300;
  color: var(--corTexto);
}
span{
  font-size: .75rem;
  font-weight: 300;
  color: var(--corTexto);
}
button{
  border: none;
  padding: 5px 10px;
  color: var(--corTexto);
  border-radius: 5px;
  cursor: pointer;
}
.router-view{
  margin: 20px 50px;
}

/* Estilo navegacao vertical */
.grid-layout{
  display:grid;
  grid-template-columns: 250px auto;
}
nav{
  border-right: 1px solid var(--corAzul);
  height: 100vh;
  align-items: flex-start;
}
.link-router{
  display: block;
  text-align: center;
  padding: 20px 20px;
  color: var(--corTexto);
  border-bottom: 1px solid var(--corAzul);
}
.router-link-active{
  background: var(--corAzul);
  color: white;
}
@media(max-width: 720px){
  .grid-layout{
    grid-template-columns: 1fr;
  }
  nav{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 10px;
    border-bottom: 1px solid var(--corAzul);
    border-right: none;


  }
  .link-router{
    display: inline-block;
    border-bottom: none;
  }
}

/* Estilo Modal */
.modal{
  position: absolute;
  background:rgba(0,0,0,.1);
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
}
.modal-container{
  background: white;
  display: grid;
  gap: 25px;
  padding: 25px 50px;
  border-radius: 5px;
  position: relative;
  box-shadow: 20px 30px 60px rgba(0,0,0,.2);
}
.modal-container label{
  color: var(--corTexto);
}
textarea{
  resize: none;
}
.modal-container input,
.modal-container textarea{
  width: 100%;
  margin-top: 5px;
  display: block;
  border-radius: 5px;
  border: 2px solid #dedede;
  padding: 10px 5px;
  color: var(--corTexto);
  outline: none;
}
.modal-container input:focus,
.modal-container textarea:focus{
  border: 2px solid var(--corAzul);
}
.fechar{
  position: absolute;
  border-radius: 50%;
  background: var(--corAlerta);
  color: white;
  border: none;
  font-weight: 700;
  padding: 9px 12px;
  top: -15px;
  right: -15px;
  box-shadow: -5px 5px 15px rgba(0,0,0,.2);
}
.fechar:hover{
border: 1px solid var(--corTexto);
color: var(--corTexto);
}
.buttonModal{
  padding: 10px;
  background: transparent;
  border: 1px solid var(--corRoxa);
  border-radius: 5px;
  color: var(--corRoxa);
  font-weight: 700;
}
.buttonModal:hover{
  background: var(--corRoxa);
  color: white;
}
h1{
  margin-bottom: 25px;
}
</style>
