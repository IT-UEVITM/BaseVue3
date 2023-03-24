<template>
  <div>
    <h1 class="text-center subNavBar">
      Esta es la página Home para las Actividades
    </h1>
    <router-link
      class="nav-link-sub"
      to="/actividades/1"
      custom
      v-slot="{ navigate }"
    >
      <button @click="navigate" role="link">Falso verdadero</button>
    </router-link>
    <router-link
      class="nav-link-sub"
      to="/actividades/2"
      custom
      v-slot="{ navigate }"
    >
      <button @click="navigate" role="link">Cuestionario</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ActividadesHomeComponent'
}
</script>
