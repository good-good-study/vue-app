import { createRouter, createWebHistory } from 'vue-router'
import Router from './routes'

const router = createRouter({
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

  routes: [
    {
      path: Router.home.path,
      name: Router.home.name,
      component: Router.home.componet
    },
    {
      path: Router.flutter.path,
      name: Router.flutter.name,
      component: Router.flutter.componet
    },
    {
      path: Router.rank.path,
      name: Router.rank.name,
      component: Router.rank.componet
    }, {
      path: Router.a.path,
      name: Router.a.name,
      component: Router.a.componet
    },
    {
      path: Router.b.path,
      name: Router.b.name,
      component: Router.b.componet
    },
    {
      path: Router.c.path,
      name: Router.c.name,
      component: Router.c.componet
    },
    {
      path: Router.d.path,
      name: Router.d.name,
      component: Router.d.componet
    },
  ]
})

export default router
