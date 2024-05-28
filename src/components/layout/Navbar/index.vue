<!--
 * @Author: jsopy
 * @Date: 2024-05-28 19:50:59
 * @LastEditTime: 2024-05-28 19:52:06
 * @FilePath: /cmsadmin/src/components/layout/Navbar/index.vue
 * @Description: 头部导航栏
 * 
-->

<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('头部导航栏')
</script>

<style lang="scss" scoped></style>
