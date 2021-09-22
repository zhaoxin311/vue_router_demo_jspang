import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import hi1 from '../components/hi1.vue'
// import hi2 from '../components/hi2.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   // 单页面多路由 如何配置路由，left，right 是路由的name属性
  //   // path: '/',
  //   // name: 'Home',
  //   // components: {
  //   //   default: Home,
  //   //   left: hi1,
  //   //   right: hi2
  //   // }
  // },
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    // 用冒号绑定两个要传递的参数
    path: '/params/:newsId(\\d+)/:newsTitle',
    name: 'Params',
    component: () => import('../components/params.vue')
  },
  {
    path: '/goAbout',
    // ** redirect基本重定向 **
    redirect: '/'
  },
  {
    // ** 重定向时传递参数**
    path: '/goparams/:newsId(\\d+)/:newsTitle',
    redirect: '/params/:newsId(\\d+)/:newsTitle'
  },
  {
    path: '/hi1',
    alias: '/hello',
    component: () => import('../components/hi1.vue')
  },
  {
    path: '*',
    component: () => import('../components/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history', //
  base: process.env.BASE_URL,
  routes
})

export default router
