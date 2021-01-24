import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: resolve => require(['@/views/Home.vue'], resolve),
      },
      {
        path: '/live',
        name: 'Live',
        component: resolve => require(['@/views/Live.vue'], resolve),
      },
      {
        path: '/promotion',
        name: 'Promotion',
        component: resolve => require(['@/views/Promotion.vue'], resolve),
      },
      {
        path: '/appdownload',
        name: 'AppDownload',
        // route level code-splitting
        // this generates a separate chunk (Live.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AppDownload.vue')
      },
      {
        path: '/payment',
        name: 'Payment',
        component: resolve => require(['@/views/Payment.vue'], resolve),
      },
    ]
  },
  {
    path: '/m',
    name: 'MobileSite',
    component: resolve => require(['@/views/mobile/Mobile.vue'], resolve),
  },
  {
    path: '/m/login',
    name: 'Login',
    component: resolve => require(['@/views/mobile/Login.vue'], resolve),
  },
  {
    path: '/m/register',
    name: 'Register',
    component: resolve => require(['@/views/mobile/Register.vue'], resolve),
  }
]

const router = new VueRouter({
  routes
})

export default router
