<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12">
                <div class="mt-5">
                    <b-table-simple hover small caption-top responsive>
                        <b-thead head-variant="dark">
                        <b-tr>
                            <b-th class="mx-3">#</b-th>
                            <b-th class="mx-3">Nombre</b-th>
                            <b-th class="mx-3">Escuela</b-th>
                            <b-th class="mx-3">Duración</b-th>
                            <b-th class="mx-3">Valor</b-th>
                            <b-th class="mx-3">Estado</b-th>
                            <b-th class="mx-3">Favorito</b-th>
                            <b-th class="mx-3">Editar</b-th>
                            <b-th class="mx-3">Eliminar</b-th>
                        </b-tr>
                        </b-thead>
                        <b-tbody>
                        <b-tr v-for="(item, index) in enviandoCursos" :key="index">
                            <b-td>{{index+1}}</b-td>
                            <b-td>{{item.nombre}}</b-td>
                            <b-td>{{item.escuela}}</b-td>
                            <b-td>{{item.duracion}}</b-td>
                            <b-td>{{item.valor}}</b-td>
                            <b-td>{{item.completo ? 'Terminado' : 'En Proceso'}}</b-td>
                            <b-td>{{item.favorito ? 'Si' : 'No'}}</b-td>
                            <b-td><b-button variant="warning" @click="editarProducto(item.idDoc)">Editar</b-button></b-td>
                            <b-td><b-button variant="danger"   @click="eliminarProducto(item.idDoc)">Eliminar</b-button></b-td>
                        </b-tr>
                        </b-tbody>
                        <b-tfoot>
                        <b-tr>
                            <b-td colspan="7" variant="secondary" class="text-right">
                            Cantidad de Cursos <b>{{}}</b>
                            </b-td>
                        </b-tr>
                        </b-tfoot>
                    </b-table-simple>
                </div>
            </div>
        </div>
        <div>
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-example1')">Agregar Curso</b-button>
        <b-modal id="bv-modal-example1" hide-footer>
            <template #modal-title>
            Agregar Curso
            </template>
            <div class="d-block text-center">
                <div class="d-block text-left">
                    <b-form>
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
                        </b-form-group>
                        <div class="d-block text-center">
                            <b-button type="submit" variant="success mx-4 mt-3" @click.prevent="agregarProducto">Agregar</b-button>
                            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example1')">Cerrar</b-button>
                        </div>
                    </b-form>
                </div>
            </div>
        </b-modal>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
    name: 'Administracion',
    data(){
        return {
            nombre: '',
            duracion: '',
            valor: '',
            urlimagen: '',
            escuela: ''
        }
    },
    computed: {
        ...mapGetters(['enviandoCursos'])
    },
    methods: {
        agregarProducto(){
            if(this.nombre.length >= 2 && this.duracion && this.valor && this.urlimagen && this.escuela.length >= 2){
                let datos = {
                    nombre: this.nombre,
                    duracion: this.duracion,
                    valor: this.valor,
                    urlimagen: this.urlimagen,
                    escuela: this.escuela
                }
                 this.$store.dispatch('agregandoProducto', datos)
                
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Revisa los datos ingresados',
                    footer: 'Debes llenar todos los datos'
                });
            }
            
        },
        eliminarProducto(id){
            this.$store.dispatch('eliminandoProducto',id);
        },
        editarProducto(idDoc){
            this.$router.push({name: 'Editar', params: {id: idDoc}});
        },

    }

}
</script>

<style>

</style>