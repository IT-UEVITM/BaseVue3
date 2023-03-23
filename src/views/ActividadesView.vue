<template>
  <div>
    <div v-if="!this.actividadId"><ActividadesHomeComponent /></div>
    <div v-if="this.actividadId === 1"><FalsoVerdaderoComponent /></div>
    <div v-if="this.actividadId === 2"><CuestionarioComponent /></div>
  </div>
</template>

<script>
import {
  ActividadesHomeComponent,
  FalsoVerdaderoComponent,
  CuestionarioComponent
} from '@/components/ActividadesComponents'

export default {
  name: 'ActividadesView',
  data() {
    return { actividadId: parseInt(this.$route.params.id) }
  },
  components: {
    ActividadesHomeComponent,
    FalsoVerdaderoComponent,
    CuestionarioComponent
  }
}
</script>
