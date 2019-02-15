import router from './router'
import store from "./store"


router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  console.log(arguments)
  // 
  if(store.getters.token){
    console.log(1)
  }else{
    
  }
  next()
})