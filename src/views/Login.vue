<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-6 col-xl-6 mx-auto my-5">
                <form class="my-5" @submit.prevent="LoginUser">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="LoginUser">Iniciar Sesión</button>
                    <a type="button" class="btn btn-primary mx-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Olvide mi Contraseña</a>
                </form>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Recupera tu Contraseña</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="recuperarPassword">Enviar e-mail de recuperación</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import Swal from 'sweetalert2';

export default {
    name: 'LogIn',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        LoginUser(){
            if(this.email && this.password.length > 5){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then((result) => {
                        console.log(result.user.uid);
                        console.log(result.user.email);
                        console.log(result.user.emailVerified);
                        console.log(result.user.photoURL);
                        console.log(result.user.displayName);
                        this.$router.push({name: 'Home'});
                    })
                    .catch((error) => {
                        console.error(error.code);
                        console.error(error.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Debes registrarte!',
                            footer: 'Aún no estás registrado'
                        })
                    });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal, revisa tus datos!',
                    footer: 'Si nos estás registrado debes ir a Registrase'
                    })
            }
        },
        recuperarPassword(){
            firebase.auth().sendPasswordResetEmail(this.email).then(() => {
                console.log('Correo enviado');
            }).catch((error) => {
                console.error(error);
            });
        }
    },
    }
</script>

<style>

</style>