<template>
    <div class="mt-3">
      <h3>Vista Combinada</h3>
  
      <!-- Componente de agregar tarea manualmente -->
      <AgregarTareas @nuevaTarea="agregarTareaVistaCombinada" />
  
      <!-- Mostrar tareas obtenidas de la API y tareas manuales -->
      <h4>Tareas Pendientes</h4>
      <ul class="list-group mt-3">
        <li 
          v-for="(tarea, index) in tareasCombinadas" 
          :key="index" 
          class="list-group-item d-flex justify-content-between align-items-center"
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
  
      <!-- Botón para obtener tareas de la API -->
      <button @click="obtenerTareasAPI" class="btn btn-success mt-3">Obtener Tareas de la API</button>
    </div>
  </template>
  
  <script>
  import AgregarTareas from './AgregarTareas.vue';
  import axios from 'axios';
  
  export default {
    components: {
      AgregarTareas
    },
    data() {
      return {
        tareas: [], // Tareas manuales que se agregarán
        tareasAPI: [], // Tareas obtenidas desde la API
      };
    },
    computed: {
      // Tareas combinadas (tareas manuales + tareas de la API)
      tareasCombinadas() {
        return [...this.tareasAPI, ...this.tareas];
      }
    },
    methods: {
      // Método para agregar una tarea manualmente
      agregarTareaVistaCombinada(tarea) {
        this.tareas.push({ texto: tarea, completada: false });
      },
  
      // Método para obtener las tareas desde la API
      async obtenerTareasAPI() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
          const tareasAPI = response.data.slice(0, 5); // Limitar a las primeras 5 tareas
          this.tareasAPI = tareasAPI.map(tarea => ({
            texto: tarea.title,
            completada: false,
          }));
        } catch (error) {
          console.error("Error al obtener las tareas:", error);
        }
      },
  
      // Marcar tarea como completada
      marcarCompletada(index) {
        this.tareasCombinadas[index].completada = true;
      },
  
      // Eliminar tarea
      eliminarTarea(index) {
        if (index < this.tareasAPI.length) {
          // Si el índice está dentro de las tareas obtenidas de la API
          this.tareasAPI.splice(index, 1);
        } else {
          // Si el índice está dentro de las tareas manuales
          this.tareas.splice(index - this.tareasAPI.length, 1);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales si es necesario */
  .text-decoration-line-through {
    text-decoration: line-through;
    color: grey;
  }
  </style>
  
  
  