import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home-view",
    meta: {
      title: "Home",
    },
    component: () => import("../views/HomeView.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: "Dashboard",
        },
        component: () => import("@/views/DashboardView.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        meta: {
          title: "Profile",
        },
        component: () => import("@/views/ProfileView"),
        children: [
          {
            path: "/edit-profile",
            name: "editProfile",
            meta: {
              title: "Edit Profile",
            },
            component: () => import("@/components/profile/EditProfile.vue"),
          },
        ],
      },
    ],
  },
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
    path: "/:catchAll(.*)",
    name: "error-view",
    meta: {
      title: "Error",
    },
    component: () => import("../views/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.meta.title}`;
  next();
});

export default router;
