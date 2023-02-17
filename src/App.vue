<template>
  <div class="grid-layout"> 
    <nav>
    <router-link class="link-router" to="/">Tarefas</router-link> 
    <router-link class="link-router" to="/dashboard">Dashboard</router-link>
    <router-link class="link-router" to="/perfil">Perfil</router-link>
  </nav>
  <router-view/>
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

/* Estilo navegacao vertical */
.grid-layout{
  display:grid;
  grid-template-columns: 250px auto;
  gap: 50px;
}
nav{
  border-right: 1px solid var(--corAzul);;
  height: 100vh;
  align-items: flex-start;
}
.link-router{
  display: block;
  text-align: center;
  padding: 20px 0px;
  color: var(--corTexto);
  border-bottom: 1px solid var(--corAzul);
}
.router-link-active{
  background: var(--corAzul);
  color: white;
}
</style>
