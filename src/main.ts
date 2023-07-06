import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router/index"
import { plugin, defaultConfig } from "@formkit/vue"
import config from "../formkit.config.ts"
import "@formkit/themes/genesis"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(router).use(plugin, defaultConfig(config)).use(pinia).mount("#app")
