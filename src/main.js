import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'ant-design-vue'
import './styles/index.css'
import './styles/iconfont/iconfont.css'

const app = createApp(App)
app.use(Button)

const vm = app.mount('#app')