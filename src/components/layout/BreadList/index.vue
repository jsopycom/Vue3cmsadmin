<!--
 * @Author: jsopy
 * @Date: 2024-06-02 20:47:23
 * @LastEditTime: 2024-06-03 21:20:04
 * @FilePath: /cmsadmin/src/components/layout/BreadList/index.vue
 * @Description: 面包屑导航
 * 
-->

<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{
          generateTitle(item.meta.title)
        }}</span>
        <!-- 可点击项 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
          generateTitle(item.meta.title)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { generateTitle } from '@/utils/common/i18n'
const route = useRoute()

// 处理点击事件
const router = useRouter()
const onLinkClick = (item) => {
  console.log(item)
  router.push(item.path)
}

// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  console.log(route.matched)
  breadcrumbData.value = route.matched.filter(
    // 过滤显示 只有title和meta显示
    (item) => item.meta && item.meta.title
  )
  console.log(breadcrumbData.value)
}
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)

// 将来需要进行主题替换，所以这里获取下动态样式
const store = useStore()
// eslint-disable-next-line
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
    font-weight: 600;
  }

  .redirect:hover {
    // 将来需要进行主题替换，所以这里不去写死样式
    color: v-bind(linkHoverColor);
  }
}
</style>
