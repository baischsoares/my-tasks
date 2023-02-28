<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Tarefas abertas:  {{ tarefasAbertas.length }}</p>
    <p>Tarefas feitas:  {{ tarefasFeitas.length }}</p>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  computed: {
    tarefasAbertas(){
      return this.$store.state.usuario.tarefas
    },
    tarefasFeitas(){
      return this.$store.state.usuario.tarefasFeitas

    }
  }
}
</script>
