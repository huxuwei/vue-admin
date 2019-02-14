import Vue from 'vue'
import Router from 'vue-Router'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    component: ()=>import('@/views/login')
  },
  {
    path: '/',
    component: ()=>import('@/views/layout')
  }
]

export default  new Router({
  routes,
})