<!--
 * @Author: jsopy
 * @Date: 2024-05-28 19:50:53
 * @LastEditTime: 2024-05-28 19:50:59
 * @FilePath: /cmsadmin/src/components/layout/Sidebar/index.vue
 * @Description: 侧边栏
 * 
-->
<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('侧边栏')
</script>

<style lang="scss" scoped></style>
