<!--
 * @Author: jsopy
 * @Date: 2024-06-03 20:38:43
 * @LastEditTime: 2024-06-03 21:00:31
 * @FilePath: /cmsadmin/src/components/layout/Langselect/index.vue
 * @Description: 
 * 
-->

<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div style="background: #fff">
      <svg-icon icon="language" className="size" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'cn'" command="cn">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
defineProps({
  effect: {
    type: String,
    default: 'light',
    validator: function (value) {
      // 这个值必须匹配下列字符串中的一个
      return ['dark', 'light'].indexOf(value) !== -1
    }
  }
})

const store = useStore()
const language = computed(() => store.getters.language)

// 切换语言的方法
const i18n = useI18n()
const handleSetLanguage = (lang) => {
  i18n.locale.value = lang
  store.commit('APP/setLanguage', lang)
  ElMessage.success('更新成功')
}
</script>

<style scoped lang="scss">
.size {
  font-size: 24px;
}
</style>
