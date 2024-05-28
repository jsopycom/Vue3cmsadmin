/**
 * @Author: jsopy
 * @Date: 2024-05-27 21:27:41
 * @LastEditTime: 2024-05-28 21:34:19
 * @FilePath: /cmsadmin/src/store/getters.js
 * @Description: getters文件
 * @
 */

const getters = {
  token: (state) => state.Login.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.Login.userInfo) !== '{}'
  }
}

export default getters
