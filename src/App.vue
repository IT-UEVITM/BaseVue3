<template>
  <div class="container">
    <navBarComponent />
    <router-view />
  </div>
</template>

<script>
import navBarComponent from '@/components/NavBarComponent.vue'

export default {
  name: 'HomeView',
  components: {
    navBarComponent
  }
}
</script>
