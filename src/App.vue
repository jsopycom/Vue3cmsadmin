<template>
  <div>
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
const locale = ref(zhCn)
const store = useStore()
generateNewStyle(store.getters.mainColor).then((newStyleText) => {
  writeNewStyle(newStyleText)
})
</script>

<style lang="scss" scoped></style>
