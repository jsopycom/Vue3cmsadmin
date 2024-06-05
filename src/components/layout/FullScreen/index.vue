<!--
 * @Author: jsopy
 * @Date: 2024-06-05 20:20:54
 * @LastEditTime: 2024-06-05 20:27:25
 * @FilePath: /cmsadmin/src/components/layout/FullScreen/index.vue
 * @Description: 封装全屏组件
 * 
-->

<template>
  <div>
    <svg-icon
      :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
      @click="onToggle"
      className="size_24"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

// 是否全屏
const isFullscreen = ref(false)

// 监听变化
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}

// 切换事件
const onToggle = () => {
  screenfull.toggle()
}

// 设置侦听器
onMounted(() => {
  screenfull.on('change', change)
})

// 删除侦听器
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<style lang="scss" scoped>
.size_24 {
  font-size: 24px;
  margin-top: 10px;
  margin-right: 20px;
  cursor: pointer;
}
</style>
