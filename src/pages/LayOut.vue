<!--
 * @Author: jsopy
 * @Date: 2024-05-27 21:50:24
 * @LastEditTime: 2024-06-05 20:52:59
 * @FilePath: /cmsadmin/src/pages/LayOut.vue
 * @Description: 骨架屏
 * 
-->

<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 左侧 menu -->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
        <tags-view></tags-view>
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar/index.vue'
import Navbar from '@/components/layout/Navbar/index.vue'
import AppMain from '@/components/layout/AppMain/index.vue'
import TagsView from '@/components/layout/TagsView'
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.module.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
