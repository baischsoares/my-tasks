<template>
  <nav>
    <router-link to="/">Tarefas</router-link> 
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/perfil">Perfil</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap");

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
</style>
