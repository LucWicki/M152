import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page1 from '../views/Pages/Page1.vue'
import Aufgabe1 from '../views/Pages/Aufgabe1.vue'
import RWD from '../views/Pages/RWD.vue'
import Profile from '../views/Pages/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1,
    }, 
    {
      path: '/aufgabe1',
      name: 'Aufgabe1',
      component: Aufgabe1,
    },
    {
      path: '/rwd',
      name: 'RWD',
      component: RWD,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    }
  ]
})

export default router
