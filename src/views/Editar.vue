<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-6 text-center mt-5 mx-auto">
                <h4>Editar Curso: {{nombre}}</h4>
                <div class="d-block text-left">
                    <b-form @submit.prevent="actualizarProducto">
                        <b-form-group id="input-group-2" label="Nombre" label-for="input-2">
                            <b-form-input type="text" id="input-2" v-model="nombre" required>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3" label="Escuela" label-for="input-3">
                            <b-form-input type="text" id="input-3" v-model="escuela" required>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-4" label="Duracion" label-for="input-4">
                            <b-form-input type="text" id="input-4" v-model="duracion" required>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-5" label="Valor" label-for="input-5">
                            <b-form-input type="number" id="input-5" v-model="valor" required>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-6" label="Url Imagen" label-for="input-6">
                            <b-form-input type="text" id="input-6" v-model="urlimagen" required>
                            </b-form-input>
                            <div class="col-6 box1 mx-auto mt-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheckCompleto" v-model="completo">
                                    <label class="form-check-label" for="defaultCheckCompleto">
                                        Estado: {{completo ? 'Terminado' : 'En Proceso'}}
                                    </label>
                                </div>
                            </div>
                            <div class="col-6 box1 mx-auto mt-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" v-model="favorito">
                                    <label class="form-check-label" for="defaultCheck2">
                                        Favorito: {{favorito ? 'Si' : 'No'}}
                                    </label>
                                </div>
                            </div>
                        </b-form-group>
                        <div class="d-block text-center my-5">
                            <b-button type="submit" variant="success mx-4 mt-3">Guardar Cambios</b-button>
                            <b-button type="reset" variant="primary mx-4 mt-3" @click="$router.go(-1)">Volver</b-button>
                        </div>
                    </b-form>
                </div>          
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
    name: 'Editar',
    props: ['id'],
    data() {
        return {
            nombre: '',
            urlimagen: '',
            valor: '',
            duracion: '',
            escuela: '',
            favorito: false,
            completo: false,
        }
    },
    methods: {
        actualizarProducto(){
            if(this.nombre.length > 2 && this.duracion && this.valor && this.urlimagen && this.escuela.length > 2){
                let datos = {
                    nombre: this.nombre,
                    duracion: this.duracion,
                    valor: this.valor,
                    urlimagen: this.urlimagen,
                    escuela: this.escuela,
                    favorito: this.favorito,
                    completo: this.completo,
                    idDoc: this.id
                };
                this.$store.dispatch('editandoProducto', datos);
                setTimeout(() => {
                    this.$router.push({name: 'Administracion'})
                }, 1500);
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se ha podido editar el producto',
                    footer: 'Revisa los datos que ingresaste'
                });
            }
        }
    },
    computed: {
        ...mapGetters(['enviandoCursos']),
    },
    mounted(){
        let datos = this.enviandoCursos.find(curso => curso.idDoc === this.id);
        if (datos !== undefined){
            this.nombre = datos.nombre,
            this.urlimagen = datos.urlimagen,
            this.valor = datos.valor,
            this.duracion = datos.duracion,
            this.escuela = datos.escuela,
            this.favorito = datos.favorito,
            this.completo = datos.completo
        } else {
            Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El curso no existe',
            });
            setTimeout(() => {
                this.$router.push({name: 'Administracion'})
            }, 1500)
        }
    } 
}
</script>

<style>
.box1 {
    display: inline-block;
}
</style>