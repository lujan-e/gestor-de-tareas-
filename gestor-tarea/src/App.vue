<template>
  <div>
    <!-- Barra de navegación principal -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        
        <!-- Título de la aplicación -->
        <a class="navbar-brand" href="#">Gestor de Tareas</a>
        
        <!-- Botón de colapso para pantallas pequeñas -->
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menú desplegable -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto"> <!-- Alinea a la derecha -->
            
            <!-- Opciones de Tareas como botones en la barra -->
            <li class="nav-item">
              <router-link to="/agregar-tareas" class="btn btn-light mx-2">Agregar Tareas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/extraer-tareas-api" class="btn btn-light mx-2">Extraer Tareas de la API</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/vista-combinada" class="btn btn-light mx-2">Vista Combinada</router-link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
    
    <!-- Vista principal donde se muestran las rutas -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Personalización adicional de la barra de navegación */
.navbar {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para darle profundidad */
}
.btn {
  font-weight: bold; /* Botones con texto en negrita */
}
</style>






