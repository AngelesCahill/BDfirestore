<template>
    <div>
        <b-navbar toggleable type="dark" variant="dark">
            <b-navbar-brand href="#">CURSOS</b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
                <router-link class="nav-link" aria-current="page" :to="{name:'Administracion'}">Administración</router-link>
                <router-link class="nav-link" aria-current="page" :to="{name:'Login'}">Iniciar Sesión</router-link>
                <router-link class="nav-link" aria-current="page" :to="{name: 'Registro'}">Registrase</router-link>
                <button class="nav-link btn btn-danger bg-danger"  :disabled="exiteUser" :class="activandoLogOut" @click="SignOut">Cerrar Sesión</button>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';
export default {
    name: 'Navbar',
    methods: {
        SignOut(){
            firebase.auth().signOut().then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tu Sesión se ha cerrado exitosamente',
                    showConfirmButton: false,
                    timer: 2500
                })
                this.$router.push({name:'Login'});
                console.log('Sesion cerrada');
            }).catch((error) => {
                console.error(error)
            });
        }
        
    },
    computed: {
        ...mapGetters(['enviandoUsuario']),
        exiteUser(){
            return !this.enviandoUsuario;
        },
        activandoLogOut(){
           return this.exiteUser ? 'disabled' : '';
        },
    },
}
</script>

<style>

</style>