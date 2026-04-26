import { createRouter, createWebHistory } from 'vue-router'

import IndexLayout from '../components/layouts/Index.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: IndexLayout,
    name: "IndexLayout",
    children: [
      {
        path: '',
        name: 'IndexPage',
        component: HomeView,
      },
    ],
  },

  {
    // Перенаправление, если путь не найден (404)
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: () => import('../views/NotFoundView.vue') // Ленивая загрузка
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
