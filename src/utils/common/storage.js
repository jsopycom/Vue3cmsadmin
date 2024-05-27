/**
 * @Author: jsopy
 * @Date: 2024-05-27 21:18:22
 * @LastEditTime: 2024-05-27 21:18:27
 * @FilePath: /cmsadmin/src/utils/common/storage.js
 * @Description:存储数据
 * @
 */
export const setItem = (key, value) => {
  // 两种类型
  // 1 基本数据类型
  // 2 复杂数据类型
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}
/**
 * @description: 获取数据
 * @param {*}
 * @return {*}
 */

export const getItem = (key) => {
  const data = window.sessionStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

/**
 * @description:   删除指定的数据
 * @param {*}
 * @return {*}
 */

export const removeItem = (key) => {
  window.sessionStorage.removeItem(key)
}

/**
 * @description: 删除全部数据
 * @param {*}
 * @return {*}
 */

export const removeAllItem = () => {
  window.sessionStorage.clear()
}
