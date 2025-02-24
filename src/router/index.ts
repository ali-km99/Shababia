import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/Programs',
      name: 'Programs',

      component: () => import('../views/ProgramsPage.vue'),
    },
    {
      path: '/News',
      name: 'News',

      component: () => import('../views/NewsPage.vue'),
    },
  ],
})

export default router
