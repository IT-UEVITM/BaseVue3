<template>
  <div>
    <header class="app-header">
      <navBarComponent></navBarComponent>
    </header>
    <main class="container py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navBarComponent from '@/components/MenuComponents/NavBarComponent.vue'

export default {
  name: 'HomeView',
  components: {
    navBarComponent
  }
}
</script>
