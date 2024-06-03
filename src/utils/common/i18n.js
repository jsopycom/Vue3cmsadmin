/**
 * @Author: jsopy
 * @Date: 2024-06-03 21:08:23
 * @LastEditTime: 2024-06-03 21:15:51
 * @FilePath: /cmsadmin/src/utils/common/i18n.js
 * @Description:
 * @
 */

import i18n from '@/i18n/i18n.js'
export function generateTitle(title) {
  return i18n.global.t('message.route.' + title)
}
