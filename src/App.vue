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
.router-view{
  padding: 20px 0px;
}

/* Estilo navegacao vertical */
.grid-layout{
  display:grid;
  grid-template-columns: 250px auto;
  gap: 50px;
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
.modal-container input{
  margin-top: 5px;
  display: block;
  border-radius: 5px;
  border: 2px solid #dedede;
  padding: 10px 5px;
  color: var(--corTexto);
  outline: none;
}
.modal-container input:focus{
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
  cursor: pointer;
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
  cursor: pointer;
}
.buttonModal:hover{
  background: var(--corRoxa);
  color: white;
}
</style>
