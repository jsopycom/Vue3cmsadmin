/**
 * @Author: jsopy
 * @Date: 2024-05-27 21:19:12
 * @LastEditTime: 2024-06-01 21:21:01
 * @FilePath: /cmsadmin/src/store/modules/Login.js
 * @Description:登录模块
 * @
 */
import { getUserInfo, loginApiPost } from '@/api/Login/index'
import { setItem, getItem, removeAllItem } from '@/utils/common/storage'
import { TOKEN, USERINFO } from '@/config/index'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    token: '' || getItem(TOKEN),
    userInfo: {} || getItem(USERINFO)
  },
  mutations: {
    updateToken(state, payload) {
      state.token = payload
      setItem(TOKEN, payload)
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
      setItem(USERINFO, payload)
    }
  },
  actions: {
    loginapi({ commit }, payload) {
      // commit('updateToken', payload);
      return new Promise((resolve, reject) => {
        loginApiPost({ username: payload.username, password: payload.password })
          .then((res) => {
            commit('updateToken', res.token)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo({ commit }) {
      const result = await getUserInfo()
      commit('setUserInfo', result)
      return result
    },
    loginout({ commit }) {
      commit('updateToken', '')
      commit('setUserInfo', {})
      removeAllItem()
      // TODO 清理权限相关配置
      router.push('/login')
    }
  }
}
