<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :uniqueOpened="true"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
    :default-active="activeMenu"
    :collapse="!$store.getters.sidebarOpened"
  >
    <SideBarItem
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></SideBarItem>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SideBarItem from './SidebarItem.vue'
const router = useRouter()
const route = useRoute()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
const activeMenu = computed(() => {
  const { path } = route
  return path
})
console.log(routes.value)
</script>

<style lang="scss" scoped></style>
