<template>
  <div class="container">
    <!-- <navBarComponent /> -->
    <navBarComponentCopy />
    <router-view />
  </div>
</template>

<script>
// import navBarComponent from '@/components/NavBarComponent.vue'
import navBarComponentCopy from '@/components/MenuComponents/NavBarComponent.vue'

export default {
  name: 'HomeView',
  components: {
    // navBarComponent
    navBarComponentCopy
  }
}
</script>
