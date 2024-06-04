/**
 * @Author: jsopy
 * @Date: 2024-06-04 20:21:18
 * @LastEditTime: 2024-06-05 07:09:24
 * @FilePath: /cmsadmin/src/utils/theme.js
 * @Description:
 * @
 */

import color from 'css-color-function'
import rgbHex from 'rgb-hex'
import formula from '@/config/formula.json'
import axios from 'axios'

/**
 * 最后一步根据主色值，生成最新的样式表
 */
export const generateNewStyle = async (primaryColor) => {
  const colors = generateColors(primaryColor)
  let cssText = await getOriginalStyle()

  // 遍历生成的样式表，在 CSS 的原样式中进行全局替换
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + colors[key]
    )
  })

  return cssText
}

/**
 * 根据主色生成色值表,简单来说就是把primary替换为色值,然后生成新的色值表
 */
export const generateColors = (primary) => {
  if (!primary) return
  const colors = {
    primary
  }
  Object.keys(formula).forEach((key) => {
    const value = formula[key].replace(/primary/g, primary)
    colors[key] = '#' + rgbHex(color.convert(value))
  })
  return colors
}

/**
 * 1.获取当前 element-plus 的默认样式表
 */
const getOriginalStyle = async () => {
  // const version = require('element-plus/package.json').version
  // console.log(version)
  const url = 'https://file.jsopy.com/DemoAll/Vue3Cms/index.css'
  const { data } = await axios(url)
  // 把获取到的数据筛选为原样式模板
  return getStyleTemplate(data)
}

/**
 * 2.返回 style 的 template,主要就是替换标记，把颜色替换为标记
 */
const getStyleTemplate = (data) => {
  // element-plus 默认色值
  const colorMap = {
    '#3a8ee6': 'shade-1',
    '#409eff': 'primary',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9'
  }
  // 根据默认色值为要替换的色值打上标记
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    data = data.replace(new RegExp(key, 'ig'), value)
  })
  return data
}

/**
 * 写入最后一步写入新样式到 style
 * @param {*} elNewStyle  element-plus 的新样式
 * @param {*} isNewStyleTag 是否生成新的 style 标签
 */
export const writeNewStyle = (elNewStyle) => {
  const style = document.createElement('style')
  style.innerText = elNewStyle
  document.head.appendChild(style)
}
