import { createRouter, createWebHistory } from 'vue-router';
import Signin from '../pages/signin/index.vue';
import Signup from '../pages/signup/index.vue';
import Home from '../pages/home/index.vue';
import Error from '../pages/error/index.vue';
import About from '../pages/about/index.vue';
import Service from '../pages/service/index.vue';
import Profile from '../pages/profile/index.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/signin',
    component: Signin
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/service',
    component: Service
  },
  {
    path: '/profile',
    component: Profile
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
