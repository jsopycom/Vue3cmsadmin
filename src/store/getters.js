/**
 * @Author: jsopy
 * @Date: 2024-05-27 21:27:41
 * @LastEditTime: 2024-06-05 21:02:53
 * @FilePath: /cmsadmin/src/store/getters.js
 * @Description: getters文件
 * @
 */

import { MAIN_COLOR } from '@/config/index.js'
import { generateColors } from '@/utils/theme'
import { getItem } from '@/utils/common/storage'
const getters = {
  token: (state) => state.Login.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.Login.userInfo) !== '{}'
  },
  userInfo: (state) => state.Login.userInfo,
  cssVar: (state) => {
    return {
      ...state.theme.variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  },
  sidebarOpened: (state) => state.APP.sidebarOpened,
  language: (state) => state.APP.language,
  mainColor: (state) => state.theme.mainColor,
  tagsViewList: (state) => state.APP.tagsViewList
}

export default getters
