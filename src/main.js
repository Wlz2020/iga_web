import './assets/main.css'
import 'animate.css'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import '@/utils/rem'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ViewUIPlus from 'view-ui-plus'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // 将插件添加到 pinia 实例上

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ViewUIPlus)

app.mount('#app')
