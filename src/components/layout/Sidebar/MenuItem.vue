<!--
 * @Author: jsopy
 * @Date: 2024-06-02 13:25:30
 * @LastEditTime: 2024-06-03 21:17:46
 * @FilePath: /cmsadmin/src/components/layout/Sidebar/MenuItem.vue
 * @Description: 
 * 
-->
<template>
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <svg-icon v-else :icon="icon" style="vertical-align: middle"></svg-icon>
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { generateTitle } from '@/utils/common/i18n'
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
