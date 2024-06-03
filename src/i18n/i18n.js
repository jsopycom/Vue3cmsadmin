/**
 * @Author: jsopy
 * @Date: 2024-06-03 20:27:17
 * @LastEditTime: 2024-06-03 21:27:13
 * @FilePath: /cmsadmin/src/i18n/i18n.js
 * @Description:
 * @
 */

import { createI18n } from 'vue-i18n'

import messages from './langs/index.js'

import { getItem } from '@/utils/common/storage.js'

import { LANG } from '@/config/index.js'

// 从localStorage中拿到用户的语言选择，如果没有，那默认英文。
const i18n = createI18n({
  legacy: false, // 这个legacy必须加
  locale: getItem(LANG) || 'en',
  messages
})

export default i18n
