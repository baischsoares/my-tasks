<template>
  <div class="home">
    <ModalUsuario/>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalUsuario from '@/components/ModalUsuario.vue'

export default {
  name: 'HomeView',
  components: {
    ModalUsuario
  }
}
</script>
