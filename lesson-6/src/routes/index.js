import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home.vue";
import SecondPage from "../pages/second.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/second/:id",
    name: "Second",
    component: SecondPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
