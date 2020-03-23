import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next) {
      if (localStorage.token) {
        next()
      } else {
        next(`login`)
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    beforeEnter(to, from, next) {
      if (localStorage.token) {
        next(`main`)
      } else {
        next()
      }
    }
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter(to, from, next) {
      localStorage.removeItem(`token`)
      localStorage.removeItem(`id`)
      localStorage.removeItem(`username`)

      next(`login`)
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
