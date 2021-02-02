import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Registro.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "Administracion" */ '../views/Administracion.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    props: true,
    component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue'),
  },
  {
    path: '/listafavoritos',
    name: 'Listafavoritos',
    component: () => import(/* webpackChunkName: "Listafavoritos" */ '../views/Listafavoritos.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
