import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/auth-view",
    name: "auth-view",
    meta: {
      title: "Sign In",
    },
    component: () => import("../views/AuthView.vue"),
  },
  {
    path: "/about",
    name: "about-view",
    meta: {
      title: "About",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "home-view",
    meta: {
      title: "Home",
    },
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
