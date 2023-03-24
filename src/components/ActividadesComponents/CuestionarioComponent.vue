<template>
  <div>
    <button @click="volver()">Volver</button>
    <h1 class="text-center">Esta es la página Actividad de cuestionario</h1>
  </div>
</template>

<script>
export default {
  name: 'CuestionarioComponent',
  methods: {
    volver() {
      window.history.back()
    }
  }
}
</script>
