<template>
  <div class="home">
    <h1 class="text-center">Esta es la página principal</h1>
    <img alt="Vue logo" class="d-flex mx-auto" src="../assets/logo.png" />
    <testComponent msg="Este es un componente de prueba" />
    <h1 class="animate__animated animate__bounce text-center">
      Elemento animado con animate.css
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import testComponent from '@/components/TestComponent.vue'

export default {
  name: 'HomeView',
  components: {
    testComponent
  }
}
</script>
