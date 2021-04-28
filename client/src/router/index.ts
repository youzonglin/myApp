import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home/index.vue"),
  },
  {
    path: "/discover",
    name: "Discover",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Discover.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Order.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mine.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
