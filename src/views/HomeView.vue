<template>
  <div class="home">
    <ModalUsuario v-if="!usuario"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalUsuario from '@/components/ModalUsuario.vue'

export default {
  name: 'HomeView',
  components: {
    ModalUsuario
  },
  computed: {
    usuario(){
      return this.$store.state.usuario
    }
  }
}
</script>
