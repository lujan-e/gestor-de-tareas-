<template>
    <div class="mt-3">
      <h3>Extraer Tareas de la API</h3>
      <button @click="obtenerTareasAPI" class="btn btn-success">Obtener Tareas de la API</button>
  
      <!-- Mostrar las tareas obtenidas -->
      <ul class="mt-3 list-group">
        <li 
          class="list-group-item d-flex justify-content-between align-items-center" 
          v-for="(tarea, index) in tareas" 
          :key="index"
        >
          <span :class="{'text-decoration-line-through': tarea.completada}">
            {{ tarea.texto }}
          </span>
  
          <div>
            <button 
              class="btn btn-success btn-sm mx-1" 
              @click="marcarCompletada(index)" 
              :disabled="tarea.completada"
            >
              Hecho
            </button>
            <button 
              class="btn btn-danger btn-sm mx-1" 
              @click="eliminarTarea(index)"
            >
              Eliminar
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // Importar axios
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tareas: [] // Aquí almacenaremos las tareas obtenidas de la API
      };
    },
    methods: {
      async obtenerTareasAPI() {
        try {
          // Realizamos la llamada a la API con axios
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
          
          // Suponiendo que la API devuelve un array de tareas
          const tareasAPI = response.data.slice(0, 5); // Usamos solo las primeras 5 tareas para mostrar
  
          // Asignamos las tareas obtenidas a la propiedad 'tareas'
          this.tareas = tareasAPI.map(tarea => ({
            texto: tarea.title, // Usamos el título de la tarea
            completada: false // Inicialmente las tareas no están completadas
          }));
        } catch (error) {
          console.error("Error al obtener las tareas:", error);
        }
      },
      marcarCompletada(index) {
        // Cambiar el estado de completada a true
        this.tareas[index].completada = true;
      },
      eliminarTarea(index) {
        // Eliminar la tarea de la lista
        this.tareas.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales para mejorar el diseño */
  .text-decoration-line-through {
    text-decoration: line-through;
    color: grey;
  }
  </style>
  
  
  