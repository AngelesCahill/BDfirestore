import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    cursos: [],
  },
  getters: {
    enviandoUsuario(state){
      return state.user;
    },
    enviandoCursos(state){
      return state.cursos;
    }
  },
  mutations: {
    mutandoUsuario(state, datoUser){
      state.user = datoUser;
    },
    mutandoTraerBaseDatos(state, datos){
      state.cursos = datos;
    },
  },
  actions: {
    user({commit}, datoUser){
      commit('mutandoUsuario', datoUser);
    },
    traerBaseDatos({commit}){
      firebase.firestore().collection('cursos').onSnapshot((respuesta) =>{
        let datos = [];
        respuesta.forEach(element =>{
          console.log(element.data(), element.id);
          datos.push({
            idDoc: element.id,
            nombre: element.data().nombre,
            duracion: element.data().duracion,
            urlimagen: element.data().urlimagen,
            completo: element.data().completo,
            escuela: element.data().escuela,
            valor: element.data().valor,
            favorito: element.data().favorito
          });
        });
        commit('mutandoTraerBaseDatos', datos);
      }, error =>console.error(error));
    },
    agregandoProducto(context, datos){
      firebase.firestore().collection('cursos').add({
        nombre: datos.nombre,
        duracion: datos.duracion,
        valor: datos.valor,
        urlimagen: datos.urlimagen,
        completo: false,
        favorito: false
    })
    .then(respuesta => console.log(respuesta))
    .catch(error => console.error(error))
    },
    eliminandoProducto(context,id){
      firebase.firestore().collection('cursos').doc(id).delete()
      .then(()=>console.log('Se eliminó el producto'))
      .catch(error => console.error(error));
    },
    editandoProducto(context, datos){
      firebase.firestore().collection('cursos').doc(datos.idDoc).update({
        nombre: datos.nombre,
        duracion: datos.duracion,
        valor: datos.valor,
        urlimagen: datos.urlimagen,
        escuela: datos.escuela,
        favorito: datos.favorito,
        completo: datos.completo,
        idDoc: datos.idDoc
      })
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Los cambios han sido guardados',
          showConfirmButton: false,
          timer: 1500
      })
      })
      .catch(error => console.error(error));
    }
  },
})
