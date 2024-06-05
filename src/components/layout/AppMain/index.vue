<!--
 * @Author: jsopy
 * @Date: 2024-05-28 19:51:04
 * @LastEditTime: 2024-06-05 21:48:59
 * @FilePath: /cmsadmin/src/components/layout/AppMain/index.vue
 * @Description: 
 * 
-->

<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { isTags } from '@/utils/tags'
import { generateTitle } from '@/utils/common/i18n'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()

/**
 * 生成 title
 */
const getTitle = (route) => {
  let title = ''
  if (!route.meta) {
    // 处理无 meta 的路由
    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
  }
  return title
}

/**
 * 监听路由变化
 */
const store = useStore()
watch(
  route,
  (to, from) => {
    if (!isTags(to.path)) return
    const { fullPath, meta, name, params, path, query } = to
    store.commit('APP/addTagsViewList', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    })
  },
  {
    immediate: true
  }
)
watch(
  () => {
    return store.state.APP.language
  },
  (newval, oldval) => {
    console.log('改变了')
    console.log(newval)
    store.getters.tagsViewList.forEach((route, index) => {
      store.commit('APP/changeTagsView', {
        index,
        tag: {
          ...route,
          title: getTitle(route)
        }
      })
    })
  }
)
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box; /* 就是把border和padding计算在内 */
  overflow-x: hidden;
}
</style>
