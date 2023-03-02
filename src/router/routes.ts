// 路由定义
const Router = {
  home: {
    path: "/home",
    name: "home",
    component: () => import('../components/home/HomePage.vue'),
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        redirect: '/home/dashboard/rank',
        component: () => import('../components/home/dashboard/Dashboard.vue'),
        children: [
          {
            path: 'user',
            component: () => import("../components/home/dashboard/user/UserPage.vue"),
            meta: { title: '用户' },
          },
          {
            path: 'flutter',
            component: () => import("../components/home/dashboard/flutter/FlutterPage.vue"),
            meta: { title: '跨平台' },
          },
          {
            path: 'rank',
            component: () => import("../components/home/dashboard/rank/RankPage.vue"),
            meta: { title: '排行榜' },
          },
          {
            path: 'menu',
            component: () => import("../components/home/dashboard/menu/MenuPage.vue"),
            meta: { title: '级联菜单' },
          },
          {
            path: 'typescript',
            component: () => import("../components/home/dashboard/usage/UsagePage.vue"),
            meta: { title: 'TypeScript语法' },
          },
        ]
      },
      {
        path: "a",
        name: "a",
        meta: { title: 'A' },
        component: () => import('../components/home/a/A.vue'),
      },
      {
        path: "b",
        name: "b",
        meta: { title: 'B' },
        component: () => import('../components/home/b/B.vue'),
      },
      {
        path: "c",
        name: "c",
        meta: { title: 'C' },
        component: () => import('../components/home/c/C.vue'),
      },
      {
        path: "d",
        name: "d",
        meta: { title: 'D' },
        component: () => import('../components/home/d/D.vue'),
      },
    ]
  },
  login: {
    path: "/login",
    name: "login",
    component: () => import("../components/login/LoginPage.vue"),
    meta: { loginDisable: true, title: '登录' }
  },
  // d: {
  //   path: "/d",
  //   name: "D",
  //   component: () => import('../components/d/D.vue'),
  // },
};

export default Router;
