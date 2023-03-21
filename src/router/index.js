import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActividadesView from '../views/ActividadesView.vue'
import ElementosView from '../views/ElementosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/actividades',
    name: 'actividades',
    component: ActividadesView
  },
  {
    path: '/elementos',
    name: 'elementos',
    component: ElementosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
