import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import hi from '../components/hi.vue'
import hi1 from '../components/hi1.vue'
import hi2 from '../components/hi2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/hi',
    component: hi,
    children: [
      { path: '/', name: 'Hello/hi', component: hi },
      { path: 'hi1', name: 'hi1', component: hi1 },
      { path: 'hi2', name: 'hi2', component: hi2 }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
