import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/qrcode",
      name: "qrcode",
      component: () => import("../views/qrcode.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/register.vue"),
    },
  ],
});

export default router;
