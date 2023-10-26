import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'ProjectsIndex',
      component: () => import('../views//projects/ProjectsIndex.vue')
    },
    {
      path: '/projects/create',
      name: 'ProjectsCreate',
      component: () => import('../views//projects/ProjectsCreate.vue')
    },
    {
      path: '/projects/:id/edi',
      name: 'ProjectsEdit',
      component: () => import('../views//projects/ProjectsEdit.vue')
    }
  ]
})

export default router
