import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_EE_BASE_API,
  timeout: 10000
})

instance.defaults.withCredentials = true

export default instance
