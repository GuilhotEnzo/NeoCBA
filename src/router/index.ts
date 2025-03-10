import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Recits from "../views/Recits.vue";
import ListePersonnages from "../views/ListePersonnages.vue";
import Chapitre from "../views/Chapitre.vue";
import HorsSerie from "../views/HorsSerie.vue";
import Personnage from "../views/Personnage.vue";

const router = createRouter({
  history: createWebHashHistory('/NeoCBA/'),
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
      component: ListePersonnages
    },
    {
      path: '/chapitre/:id',
      name: 'Chapitre',
      component: Chapitre
    },
    {
      path: '/hs/:id',
      name: 'HS',
      component: HorsSerie
    },
    {
      path: '/personnage/:id',
      name: 'Personnage',
      component: Personnage
    }
  ]
})

export default router