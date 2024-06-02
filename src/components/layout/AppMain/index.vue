<!--
 * @Author: jsopy
 * @Date: 2024-05-28 19:51:04
 * @LastEditTime: 2024-06-02 12:04:22
 * @FilePath: /cmsadmin/src/components/layout/AppMain/index.vue
 * @Description: 
 * 
-->

<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box; /* 就是把border和padding计算在内 */
}
</style>
