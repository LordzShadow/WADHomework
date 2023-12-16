import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { appStore, storeKey } from './store'

const app = createApp(App)

app.use(router)
app.use(appStore, storeKey)

app.mount('#app')
