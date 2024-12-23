import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    children: [
      {
        path: '',
        name: 'Signin',
        component: () => import('../views/signin/index.vue'),
      },
      {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/signup/index.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        component: () => import('../views/error/index.vue'),
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
