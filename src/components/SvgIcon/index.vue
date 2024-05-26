<!--
 * @Author: jsopy
 * @Date: 2024-05-26 21:20:30
 * @LastEditTime: 2024-05-26 21:20:34
 * @FilePath: /cmsadmin/src/components/SvgIcon/index.vue
 * @Description: SVGICON文件
 * 
-->

<template>
  <!--展示外部图标-->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon"
    :class="className"
  ></div>
  <!--展示内部图标-->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  // icon图标
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})
/* 判断法则 */
const external = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/*
当前图标是否为外部图标,
*/
const isExternal = computed(() => {
  return external(props.icon)
})

/*
外部图标样式,
*/
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
  }
})
/*
内部图标
*/
const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: 0.1em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
