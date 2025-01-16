import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Recits from '../views/Recits.vue'
import Personnages from '../views/Personnages.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/recits',
      name: 'Récits',
      component: Recits
    },
    {
      path: '/personnages',
      name: 'Personnages',
      component: Personnages
    }
  ]
})

export default router