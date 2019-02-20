import Vue from 'vue'
import Router from 'vue-Router'

Vue.use(Router)

const constanRouterMap = [
  {
    path: '/login',
    component: ()=>import('@/views/login') 
  },
  {
    path: '/',
    component: ()=>import('@/views/layout')
  },
  {
    path: '/order',
    component: ()=>import('@/views/order') //路由懒加载
  }
]

const asyncRouterMap = [
  {
    path: '/order',
    component: ()=>import('@/views/order') //路由懒加载
  }
]

export default  new Router({
  routes: constanRouterMap,
  mode: 'history',
  linkActiveClass: 'actived'
})