<!--
 * @Author: jsopy
 * @Date: 2024-05-28 19:51:04
 * @LastEditTime: 2024-05-28 20:53:49
 * @FilePath: /cmsadmin/src/components/layout/AppMain/index.vue
 * @Description: 
 * 
-->

<template>
  <div class="app-main">
    {{ message }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('主页面')
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box; /* 就是把border和padding计算在内 */
}
</style>
