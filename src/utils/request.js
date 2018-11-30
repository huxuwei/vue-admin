import axios from "axios";
import store from "../store";
import { Message } from "element-ui";

// 创建axios实例
const service = axios.create({
  // baseURL: "",
  timeout: 150000
});

// request 拦截器
service.interceptors.request.use(
  config => {
    // 存在token，将token加入请求头
    if (store.getters.token) {
      config.headers.common["Authorization"] = store.getters.token;
    }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// 添加响应拦截器
// 根据返回的值进行处理
service.interceptors.response.use(
  response => {
    const res = response.data;
    // 根据
    if (res.code === 200) {
      return response.data;
    }

    //  登录已过期时做什么
    if (res.code === 40003) {
      Message({
        type: "warning",
        message: res.message
      })
    }
    Message({
      type: "warning",
      message: res.message
    })
    return Promise.reject(res.message)
  },
  err => {
    Message({
      type: 'error',
      message: err.message
    })
    return Promise.reject(err)
  }
);

export default service