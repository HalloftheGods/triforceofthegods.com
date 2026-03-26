import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import './styles/main.css'

const app = createApp(App)

app.use(VueGtag, {
  config: { id: 'G-W78LECKXK6' }
})

app.mount('#app')
