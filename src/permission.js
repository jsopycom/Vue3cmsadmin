/**
 * @Author: jsopy
 * @Date: 2024-05-27 21:47:29
 * @LastEditTime: 2024-05-27 21:47:34
 * @FilePath: /cmsadmin/permission.js
 * @Description:路由拦截
 * @
 */

import router from './router'

import store from './store'

// 白名单

const whiteList = ['/login']

/*
 *路由守卫
 */

router.beforeEach((to, from, next) => {
  // 有token
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有token,分成两种 白名单和非白名单
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
