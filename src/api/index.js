import service from '@/utils/request'

// 登录接口
export function loginByUsername(username,password) {
  return service({
    url: '/system/api/auth/jwt/token',
    method: 'post',
    data: {username,password}
  })
}

// export function test(params) {
//   return service({
//     url : 'eeeee',
//     method: 'post'
//   })
// }

export function test(params){
  return service({
    url: '/system/api/tech/technician/page',
    method: 'post',
    data: params
  })
}