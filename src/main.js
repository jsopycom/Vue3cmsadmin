import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import { mockXHR } from './mock'
import installElementPlus from './plugins/element'
// 添加icon 图标
import installIcons from '@/icons'
// 模拟数据
mockXHR()

const app = createApp(App)

installElementPlus(app)
// svg图标
installIcons(app)
app.use(store).use(router).mount('#app')
