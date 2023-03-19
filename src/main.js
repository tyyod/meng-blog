import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ba from 'vue-ba'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(ba, '298505fd228d56b60dbe19e0fbe7ba66')

app.mount('#app')
