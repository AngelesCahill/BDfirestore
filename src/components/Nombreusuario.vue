<template>

            <div class="usuario" v-if="enviandoUsuario">
                <div class="col-sm-none col-md-12">
                    <img :src="enviandoUsuario.photoURL" alt="" class="foto">
                    <h3 class="mr-3">Hola, {{enviandoUsuario.displayName}} - {{enviandoUsuario.email}}</h3>
                    <a class="btn btn-warning boton1" @click="verificarEmail">Verificar Email</a>
                </div> 
            </div>

</template>

<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex';
export default {
  name: 'Nombreusuario',
  computed: {
    ...mapGetters(['enviandoUsuario'])
  },
    methods: {
    verificarEmail(){
        firebase.auth().currentUser;
            if (!this.enviandoUsuario.emailVerified){
            this.enviandoUsuario.sendEmailVerification().then(() => {
                console.log('Correo Verificado')
            }).catch(function(error) {
                console.error(error);
            });
            } else {
            console.log('Correo Verificado');
            }
        
    }
  },
}
</script>

<style scoped lang="scss">
.usuario {
  height: 42px;
  background-color: rgb(102, 95, 95);
  color: white;
  padding-top: 7px;
  
}
img, h3 {
  display: inline-block;
  font-size: 14px;
  margin-left: 1rem;

}
.foto {
  width: 30px;
  height: 10;
  border: 1px solid red;
  border-radius: 100%;
}
.boton1 {
    display: inline-block;
    width: 8rem;
    height: 2rem;
}
</style>
