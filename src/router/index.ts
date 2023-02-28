import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Nprogress from 'nprogress';
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHashHistory(),
  //使用history打包后会变空白
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView //() => import("../views/HomeView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});

router.afterEach(to => {
  Nprogress.done();
});

export default router;
