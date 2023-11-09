import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";

const routes = [
  {
    path: "/",
    name: "auth-view",
    meta: {
      title: `${store.getters.isSignUpComponent ? "Sign Up" : "Sign In"}`,
    },
    component: () => import("../views/AuthView.vue"),
  },
  {
    path: "/about",
    name: "about-view",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/home",
    name: "home-view",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
