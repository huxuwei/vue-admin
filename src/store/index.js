import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)

import {loginByUsername} from '@/api/index.js'

const store = new Vuex.Store({
	state: {
			token: ''
	},
	getters:{
			token: state=>state.token
	},
	mutations: {
		SET_TOKEN(state,str){
			console.log(str)
			state.token = str
			localStorage.setItem('TOKEN',str)
		}
	},
	actions:{
		// 登录成功，设置token到store中
		LoginByUsername({commit},userInfo){
				const username = userInfo.username.trim()
				return new Promise((resolve,reject)=>{
					loginByUsername(username,userInfo.password).then(res=>{
						const data = res.data
						
						commit('SET_TOKEN',data)
						resolve()
					}).catch(err=>{
						reject(err)
					})
				})
		}
	}
})

export default store