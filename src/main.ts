import { createProPlugin, inputs } from '@formkit/pro'
import '@formkit/pro/genesis'
import '@formkit/themes/genesis'
import { defaultConfig, plugin } from '@formkit/vue'
import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import config from '../formkit.config.ts'
import App from './App.vue'
import router from './router/index'
import './style.css'

const pro = createProPlugin('fk-8bde343b28', inputs)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app
  .use(router)
  .use(plugin, defaultConfig({ config: config, plugins: [pro] }))
  .use(pinia)
  .use(vuetify)
  .mount('#app')
