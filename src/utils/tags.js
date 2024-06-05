/**
 * @Author: jsopy
 * @Date: 2024-06-05 20:47:07
 * @LastEditTime: 2024-06-05 20:48:42
 * @FilePath: /cmsadmin/src/utils/tags.js
 * @Description:
 * @
 */

const whiteList = ['/login', '/import', '/404', '/401']

/**
 * path 是否需要被缓存
 * @param {*} path
 * @returns
 */
export function isTags(path) {
  return !whiteList.includes(path)
}
