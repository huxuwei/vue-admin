import router from './router'
import store from "./store"


router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  console.log(arguments)
  // 
  let whiteList = ['login']
  if(localStorage.getItem('TOKEN')){
    // console.log(1)
    if(to.path === '/login'){
      next('/')
    }
  }else{
    if(whiteList.includes(to.path)){
      next()
    }else{
      next('/login')
    }
  }
  console.log(to)
  // next()
})