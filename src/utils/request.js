//src/utils/request.js
import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url
  timeout: 10000, // request timeout
})

//  请求拦截器
service.interceptors.request.use(
  (config) => {
    let token = sessionStorage.getItem('token') || null
    if (token) {
      // 如果token不为null，否则传token给后台
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    //届时根据后端返回success或者code值判断
    if (res.status === 200) {
      return res
    } else {
      return res
    }
  },
  (error) => {
    //响应错误
    return Promise.reject(error)
  }
)

export default service