<template>
  <div>
    <button @click="volver()">Volver</button>
    <h1 class="text-center">
      Esta es la página Actividad de falso y verdadero
    </h1>
  </div>
</template>

<script>
export default {
  name: 'FalsoVerdaderoComponent',
  methods: {
    volver() {
      window.history.back()
    }
  }
}
</script>
