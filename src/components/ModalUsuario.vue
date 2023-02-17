<template>
  <div class="modal">
    <div class="modal-container">
      <button class="fechar">X</button>
      <label for="nome">Nome:
        <input type="text" v-model="nome" required id="nome">
      </label>
      
      <label for="email">Email:
        <input type="text" v-model="email" required id="email">
      </label>
      
      <button class="buttonModal">Criar usuário</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalUsuario',
  data(){
    return {
      usuario: {
        nome: String,
        email: String,
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
