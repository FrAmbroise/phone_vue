import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import ClavierView from '@/views/ClavierView.vue'
import AppelView from '@/views/AppelView.vue'

const routes = [
  {
    path: '/',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path:'/appel',
    name: 'appel',
    component: AppelView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
