import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/home')
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('@/views/sort/sort')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/cart')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/my/my')
  },
  {
    path:'/detail/:iid',
    name:'Detail',
    component:()=>import('@/views/detail/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
 // base: process.env.BASE_URL,
  routes
})

export default router
