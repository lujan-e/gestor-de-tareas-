// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import AgregarTareas from './components/AgregarTareas.vue';
import ExtraerTareasAPI from './components/ExtraerTareasAPI.vue';
import VistaCombinada from './components/VistaCombinada.vue';

const routes = [
  { path: '/', redirect: '/agregar-tareas' },
  { path: '/agregar-tareas', component: AgregarTareas, name: 'AgregarTareas' },
  { path: '/extraer-tareas-api', component: ExtraerTareasAPI, name: 'ExtraerTareasAPI' },
  { path: '/vista-combinada', component: VistaCombinada, name: 'VistaCombinada' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
