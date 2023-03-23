import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActividadesView from '../views/ActividadesView.vue'
import ElementosView from '../views/ElementosView.vue'
import OVAsView from '../views/OVAsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/elementos',
    name: 'elementos',
    component: ElementosView
  },
  {
    path: '/OVAs',
    name: 'OVAs',
    component: OVAsView
  },
  {
    path: '/actividades/:id?',
    name: 'falsoVerdadero',
    component: ActividadesView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
