/**
 * @Author: jsopy
 * @Date: 2024-06-04 20:17:46
 * @LastEditTime: 2024-06-05 07:23:21
 * @FilePath: /cmsadmin/src/store/modules/theme.js
 * @Description:
 * @
 */

import { getItem, setItem } from '@/utils/common/storage'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/config/index.js'
import variables from '@/styles/variables.module.scss'
export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables
  }),
  mutations: {
    /**
     * 设置主题色
     */
    setMainColor(state, newColor) {
      state.mainColor = newColor
      state.variables.menuBg = newColor
      setItem(MAIN_COLOR, newColor)
    }
  }
}
