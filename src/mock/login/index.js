/**
 * @Author: jsopy
 * @Date: 2024-05-26 20:33:02
 * @LastEditTime: 2024-05-26 20:33:06
 * @FilePath: /cmsadmin/src/mock/login/index.js
 * @Description:
 * @
 */

module.exports = [
  // user login
  {
    url: '/api/loginpost',
    type: 'post',
    response: (config) => {
      console.log(config)
      const { username, password } = config.body
      console.log(username)
      console.log(password)
      // mock error
      return {
        code: 200,
        message: '测试post接口'
      }
    }
  },
  {
    url: '/api/loginget',
    type: 'get',
    response: (config) => {
      console.log(config)
      const { username, password } = config.query
      console.log(username)
      console.log(password)
      // mock error
      return {
        code: 200,
        message: '测试get接口'
      }
    }
  }
]
