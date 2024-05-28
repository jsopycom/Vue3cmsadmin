/**
 * @Author: jsopy
 * @Date: 2024-05-26 20:33:02
 * @LastEditTime: 2024-05-28 21:00:48
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
        message: '测试post接口',
        data: {
          token: 'Bearer 123456789'
        }
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
  },
  {
    url: '/sys/profile',
    type: 'get',
    response: (config) => {
      console.log(config)
      // mock error
      return {
        success: true,
        code: 200,
        data: {
          role: [
            {
              id: '1',
              title: '超级管理员'
            }
          ],
          _id: '612710a0ec87aa543c9c341d',
          id: '0',
          username: 'super-admin',
          title: '超级管理员',
          avatar:
            'https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg',
          permission: {
            menus: [
              'userManage',
              'roleList',
              'permissionList',
              'articleRanking',
              'articleCreate'
            ],
            points: [
              'distributeRole',
              'importUser',
              'removeUser',
              'distributePermission'
            ]
          }
        },
        message: '获取资料成功'
      }
    }
  }
]
