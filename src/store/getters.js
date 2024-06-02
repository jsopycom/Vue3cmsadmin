/**
 * @Author: jsopy
 * @Date: 2024-05-27 21:27:41
 * @LastEditTime: 2024-06-02 13:37:01
 * @FilePath: /cmsadmin/src/store/getters.js
 * @Description: getters文件
 * @
 */

import variables from '@/styles/variables.module.scss'

const getters = {
  token: (state) => state.Login.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.Login.userInfo) !== '{}'
  },
  userInfo: (state) => state.Login.userInfo,
  cssVar: (state) => variables,
  sidebarOpened: (state) => state.APP.sidebarOpened
}

export default getters
