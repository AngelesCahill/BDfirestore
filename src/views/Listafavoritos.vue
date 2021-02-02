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
                            <b-th class="mx-3">Eliminar</b-th>
                        </b-tr>
                        </b-thead>
                        <b-tbody>
                        <b-tr>
                            <b-td>{{index+1}}</b-td>
                            <b-td>{{item.nombre}}</b-td>
                            <b-td>{{item.escuela}}</b-td>
                            <b-td>{{item.duracion}}</b-td>
                            <b-td>{{item.valor}}</b-td>
                            <b-td>{{item.completado ? 'Si' : 'No'}}</b-td>
                            <b-td>{{item.favorito ? 'Si' : 'No'}}</b-td>
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
    </div>
</template>

<script>
export default {
    name: 'Listafavoritos'
}
</script>

<style>

</style>