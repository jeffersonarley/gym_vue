import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from './pages/IndexPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

// Brazos
import BrazosEjercicio1 from './pages/brazos/Ejercicio1.vue'
import BrazosEjercicio2 from './pages/brazos/Ejercicio2.vue'
import BrazosEjercicio3 from './pages/brazos/Ejercicio3.vue'
import BrazosEjercicio4 from './pages/brazos/Ejercicio4.vue'

// Pecho
import PechoEjercicio1 from './pages/pecho/Ejercicio1.vue'
import PechoEjercicio2 from './pages/pecho/Ejercicio2.vue'
import PechoEjercicio3 from './pages/pecho/Ejercicio3.vue'
import PechoEjercicio4 from './pages/pecho/Ejercicio4.vue'

// Espalda
import EspaldaEjercicio1 from './pages/espalda/Ejercicio1.vue'
import EspaldaEjercicio2 from './pages/espalda/Ejercicio2.vue'
import EspaldaEjercicio3 from './pages/espalda/Ejercicio3.vue'
import EspaldaEjercicio4 from './pages/espalda/Ejercicio4.vue'

// Pierna
import PiernaEjercicio1 from './pages/pierna/Ejercicio1.vue'
import PiernaEjercicio2 from './pages/pierna/Ejercicio2.vue'
import PiernaEjercicio3 from './pages/pierna/Ejercicio3.vue'
import PiernaEjercicio4 from './pages/pierna/Ejercicio4.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  },
  // Brazos
  {
    path: '/brazos/ejercicio1',
    name: 'brazosEjercicio1',
    component: BrazosEjercicio1
  },
  {
    path: '/brazos/ejercicio2',
    name: 'brazosEjercicio2',
    component: BrazosEjercicio2
  },
  {
    path: '/brazos/ejercicio3',
    name: 'brazosEjercicio3',
    component: BrazosEjercicio3
  },
  {
    path: '/brazos/ejercicio4',
    name: 'brazosEjercicio4',
    component: BrazosEjercicio4
  },
  // Pecho
  {
    path: '/pecho/ejercicio1',
    name: 'pechoEjercicio1',
    component: PechoEjercicio1
  },
  {
    path: '/pecho/ejercicio2',
    name: 'pechoEjercicio2',
    component: PechoEjercicio2
  },
  {
    path: '/pecho/ejercicio3',
    name: 'pechoEjercicio3',
    component: PechoEjercicio3
  },
  {
    path: '/pecho/ejercicio4',
    name: 'pechoEjercicio4',
    component: PechoEjercicio4
  },
  // Espalda
  {
    path: '/espalda/ejercicio1',
    name: 'espaldaEjercicio1',
    component: EspaldaEjercicio1
  },
  {
    path: '/espalda/ejercicio2',
    name: 'espaldaEjercicio2',
    component: EspaldaEjercicio2
  },
  {
    path: '/espalda/ejercicio3',
    name: 'espaldaEjercicio3',
    component: EspaldaEjercicio3
  },
  {
    path: '/espalda/ejercicio4',
    name: 'espaldaEjercicio4',
    component: EspaldaEjercicio4
  },
  // Pierna
  {
    path: '/pierna/ejercicio1',
    name: 'piernaEjercicio1',
    component: PiernaEjercicio1
  },
  {
    path: '/pierna/ejercicio2',
    name: 'piernaEjercicio2',
    component: PiernaEjercicio2
  },
  {
    path: '/pierna/ejercicio3',
    name: 'piernaEjercicio3',
    component: PiernaEjercicio3
  },
  {
    path: '/pierna/ejercicio4',
    name: 'piernaEjercicio4',
    component: PiernaEjercicio4
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notfound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router