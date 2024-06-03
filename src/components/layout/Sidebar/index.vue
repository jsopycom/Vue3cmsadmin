<!--
 * @Author: jsopy
 * @Date: 2024-05-28 19:50:53
 * @LastEditTime: 2024-06-03 21:22:49
 * @FilePath: /cmsadmin/src/components/layout/Sidebar/index.vue
 * @Description: 侧边栏
 * 
-->
<template>
  <div class="">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg"
      ></el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        {{ $t('message.title') }}
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
