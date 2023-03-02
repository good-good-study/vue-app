import { createRouter, createWebHistory } from "vue-router";
import Router from "./routes";

// 全局的路由导航实例
const navigator = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]


  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0, behavior: 'smooth'
    }
  },
  routes: [
    // 重定向
    {
      path: '/',
      redirect: Router.home.path,
    },
    ...Object.values(Router),
  ],
});

export default navigator;
