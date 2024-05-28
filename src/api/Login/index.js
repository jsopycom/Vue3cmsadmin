/**
 * @Author: jsopy
 * @Date: 2024-05-26 21:00:27
 * @LastEditTime: 2024-05-28 21:05:17
 * @FilePath: /cmsadmin/src/api/Login/index.js
 * @Description:
 * @
 */

import request from '@/request/request.js'

export const loginApiPost = (data) => {
  return request({
    url: '/api/loginpost',
    method: 'post',
    data
  })
}

export const loginApiGet = (params) => {
  return request({
    url: '/api/loginget',
    method: 'get',
    params
  })
}

/*******
 * @description: 获取用户信息
 * @param {*} params
 * @return {*}
 */
export const getUserInfo = (params) => {
  return request({
    url: '/sys/profile',
    method: 'get',
    params
  })
}
