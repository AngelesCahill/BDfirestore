<template>
  <div class="home">
    <Nombreusuario/>
    <div class="container">
      <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3 my-3 text-center" v-for="(item,index) in enviandoCursos" :key="index">
            <b-card>
              <b-img v-bind="mainProps" :src="item.urlimagen" alt="Image 1" class="mx-auto"></b-img>
              <h4 class="card-title text-center mt-3">{{item.nombre}}</h4>
              <b-list-group flush class="datostarjeta">
                <b-list-group-item class="mx-auto h-75">Estado: {{item.completo}}</b-list-group-item>
                <b-list-group-item class="mx-auto">Escuela: {{item.escuela}}</b-list-group-item>
                <b-list-group-item class="mx-auto">Duración: {{item.duracion}}</b-list-group-item>
                <b-list-group-item class="mx-auto">Escuela: {{item.valor}}</b-list-group-item>
                <b-list-group-item class="mx-auto">Duración: {{item.favorito}}</b-list-group-item>
              </b-list-group>
              <b-button-group class="mt-2 mx-auto">
                <b-button class="mr-1" id="show-btn" @click="$bvModal.show('#opinion'+index)">Opinar</b-button>
                <b-button class="ml-1" id="show-btn" @click="$bvModal.show('#vermas'+index)">Ver Mas</b-button>
              </b-button-group>
            </b-card>
          </div>
      </div>
    </div>
    <!--Moldal Opinar -->
    <div v-for="(item,index) in enviandoCursos" :key="index">
      <b-modal :id="'#opinion'+index" hide-footer>
        <template #modal-title>
          Opina Sobre este Curso:{{item.nombre}}
        </template>
        <div class="d-block text-center">
          <b-form>
            <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
              <b-form-input id="input-2" v-model="name" required>
              </b-form-input>
            </b-form-group>
            <b-form-group id="input-group-1" label="Email:" label-for="input-1">
              <b-form-input id="input-1" v-model="email" type="email" required>
              </b-form-input>
            </b-form-group>
            <div>
              <b-form-textarea id="textarea" v-model="opinion" rows="3" max-rows="6">
              </b-form-textarea>
              <pre class="mt-3 mb-0">{{ opinion }}</pre>
            </div>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('#opinion'+index)">Close Me</b-button>
      </b-modal>
    </div>
    <!--Modal Ver Mas -->
    <div v-for="(item,index) in enviandoCursos" :key="index">
      <b-modal :id="'#vermas'+index" hide-footer>
        <template #modal-title>
          Ver Mas Información de {{item.nombre}}
        </template>
        <div class="d-block text-center">
          <h3>Hello From This Modal!</h3>
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('#vermas'+index)">Close Me</b-button>
      </b-modal>
    </div>

  </div>
</template>

<script>
import Nombreusuario from '@/components/Nombreusuario.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data(){
    return {
      mainProps: { width: 150, height: 150},
      name: '',
      email: '',
      opinion: '',
    }
  },
  components: {
    Nombreusuario,
  },
  computed: {
    ...mapGetters(['enviandoCursos'])
  }
}
</script>
<style scoped>
.tarjeta {
  height: 41rem;
}
.datostarjeta {
  height: 240px;
}

</style>


  

