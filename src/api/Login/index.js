/**
 * @Author: jsopy
 * @Date: 2024-05-26 21:00:27
 * @LastEditTime: 2024-05-26 21:15:16
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
