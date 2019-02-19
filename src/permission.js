import router from './router'
import store from "./store"


router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  console.log(arguments)
  // 白名单
  let whiteList = ['login']
  //  
  if(localStorage.getItem('TOKEN'))
  {
    // 已有token
    if(to.path === '/login'){
      next('/')
    }else{
      // if(){

      // }else{
        
      // }
    }
  }else{
    // 没有token
    if(whiteList.includes(to.path)){
      next()
    }else{
      next('/login')
    }
  }
})