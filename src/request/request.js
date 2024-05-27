// request.js
import axios from 'axios'
// import router from "@/router";
import store from '@/store'

const instance = axios.create({
  baseURL: process.env.VUE_APP_EE_BASE_API,
  // 这里千万不能写headers否则会造成数据缓存
  timeout: 300000
})
/** **** request拦截器==>对请求参数做处理 ******/
instance.interceptors.request.use(
  (config) => {
    // 加载
    // store.state.loadingflag = true;
    const value = store.state.Login.token
    console.log(value)
    if (value) {
      config.headers.authorization = value
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
/** **** respone拦截器==>对响应做处理 ******/
instance.interceptors.response.use(
  (response) => {
    // store.state.loadingflag = false;
    if (response.data.code === 200) {
      return response.data.data
    } else {
      return response.data.message
    }
  },
  (error) => {
    // 错误提醒
    // store.state.loadingflag = false
    // 这里就是依据情况验证,当是什么的时候返回登录页
    if (error.response.status === 403) {
      // 返回登录页
    }
    return Promise.reject(error)
  }
)
export default instance
