<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  margin: 0px;
  padding: 0px;
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
