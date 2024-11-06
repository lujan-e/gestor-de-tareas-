const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gestor-de-tarea/' // Cambia esto al nombre correcto de tu repositorio
    : '/'
});

