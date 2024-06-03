import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import { mockXHR } from './mock'
import installElementPlus from './plugins/element'
// 添加icon 图标
import installIcons from '@/icons'
// 导入全局样式
import './styles/index.scss'
// 路由拦截
import './permission.js'
// 国际化方案
import i18n from './i18n/i18n.js'
// 模拟数据
mockXHR()

const app = createApp(App)

installElementPlus(app)
// svg图标
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
