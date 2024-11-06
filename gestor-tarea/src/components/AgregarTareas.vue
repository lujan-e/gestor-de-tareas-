<template>
    <div class="mt-3">
      <h3>Agregar Tarea Manualmente</h3>
      
      <!-- Formulario para agregar tareas -->
      <form @submit.prevent="agregarTarea">
        <div class="mb-3">
          <input v-model="nuevaTarea" class="form-control" placeholder="Ingresa la tarea" />
        </div>
        <button type="submit" class="btn btn-primary">Agregar Tarea</button>
      </form>
  
      <div class="mt-4">
        <h4>Tareas Pendientes</h4>
        <ul class="list-group">
          <!-- Mostrar tareas pendientes -->
          <li 
            v-for="(tarea, index) in tareasPendientes" 
            :key="index" 
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span :class="{'text-decoration-line-through': tarea.completada}">
              {{ tarea.texto }}
            </span>
            <button class="btn btn-success btn-sm" @click="marcarCompletada(index)">Hecho</button>
            <button class="btn btn-danger btn-sm" @click="eliminarTarea(index)">Eliminar</button>
          </li>
        </ul>
      </div>
  
      <div class="mt-4">
        <h4>Tareas Completadas</h4>
        <ul class="list-group">
          <!-- Mostrar tareas completadas -->
          <li 
            v-for="(tarea, index) in tareasCompletadas" 
            :key="index" 
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span class="text-decoration-line-through">{{ tarea.texto }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nuevaTarea: '',
        tareas: [] // Lista de todas las tareas
      };
    },
    computed: {
      tareasPendientes() {
        // Devuelve solo las tareas que no están completas
        return this.tareas.filter(tarea => !tarea.completada);
      },
      tareasCompletadas() {
        // Devuelve solo las tareas que están completas
        return this.tareas.filter(tarea => tarea.completada);
      }
    },
    methods: {
      agregarTarea() {
        if (this.nuevaTarea.trim() !== '') {
          this.tareas.push({
            texto: this.nuevaTarea,
            completada: false
          });
          this.nuevaTarea = ''; // Limpiar el campo de entrada
        }
      },
      marcarCompletada(index) {
        // Marcar la tarea como completada
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
  