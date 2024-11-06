import { createRouter, createWebHistory } from 'vue-router';  // Importación correcta para Vue Router
import AgregarTarea from '../components/AgregarTarea.vue';       // Importar el componente de agregar tareas manualmente
import ExtraerTareasAPI from '../components/ExtraerTareasAPI.vue';     // Importar el componente para extraer tareas de la API
import VistaCombinada from '../components/VistaCombinada.vue';   // Importar el componente para la vista combinada

// Definir las rutas de la aplicación
const routes = [
  {
    path: '/add-task',     // Ruta para agregar tareas manualmente
    name: 'AgregarTarea',
    component: AgregarTarea
  },
  {
    path: '/api-tasks',    // Ruta para extraer tareas desde la API
    name: 'ExtraerTareasAPI',
    component: ExtraerTareasAPI
  },
  {
    path: '/combined-view', // Ruta para la vista combinada
    name: 'VistaCombinada',
    component: VistaCombinada
  },
  {
    path: '/',             // Redirección por defecto
    redirect: '/add-task'  // Redirige al usuario a la vista de agregar tareas
  }
];

// Crear el router con las rutas definidas
const router = createRouter({
  history: createWebHistory(),  // Usar el historial del navegador
  routes                      // Pasar las rutas al router
});

export default router; // Exportar el router para usarlo en la aplicación

