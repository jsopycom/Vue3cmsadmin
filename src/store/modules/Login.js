/**
 * @Author: jsopy
 * @Date: 2024-05-27 21:19:12
 * @LastEditTime: 2024-05-27 21:46:37
 * @FilePath: /cmsadmin/src/store/modules/Login.js
 * @Description:登录模块
 * @
 */
import { loginApiPost } from '@/api/Login/index'
import { setItem, getItem } from '@/utils/common/storage'
import { TOKEN } from '@/config/index'
export default {
  namespaced: true,
  state: {
    token: '' || getItem(TOKEN)
  },
  mutations: {
    updateToken(state, payload) {
      state.token = payload
      setItem(TOKEN, payload)
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
    }
  }
}
