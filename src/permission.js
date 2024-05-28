/**
 * @Author: jsopy
 * @Date: 2024-05-27 21:47:29
 * @LastEditTime: 2024-05-28 21:37:02
 * @FilePath: /cmsadmin/src/permission.js
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

router.beforeEach(async (to, from, next) => {
  // 有token
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在 ,如果不存在则获取
      if (!store.getters.hasUserInfo) {
        const result = await store.dispatch('Login/getUserInfo')
        console.log(result)
      }
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
