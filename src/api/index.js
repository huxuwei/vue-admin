import service from '@/utils/request'

// 登录接口
export function loginByUsername(username,password) {
  return service({
    url: '/system/api/auth/jwt/token',
    method: 'post',
    data: {username,password}
  })
}

/**
 * @type {Function | Ajax}
 * @desc 获取用户菜单权限
 * @param {String | Number} userId
 * @return Promise
 */
export function userMenuTree (userId) {
	return request({
		url: process.env.BASE_API + server_api + '/menu/findTreeByUser/' + userId,
		method: 'post'
	})
}

export function test(params){
  return service({
    url: '/system/api/tech/technician/page',
    method: 'post',
    data: params
  })
}