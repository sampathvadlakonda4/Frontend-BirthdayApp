import { createApp } from 'vue'
import App from './App.vue'

// store
import store from "./store/store"

//routing
import router from "./routes/routes"

//boostrap
// import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

//tailwind css
import tailwind from './assets/tailwind.css';

// toaster
import toaster from "@meforma/vue-toaster"

// font-awesome
import "@fortawesome/fontawesome-free/css/all.css"

const app = createApp(App)
app.use(toaster)
app.use(store)
app.use(router)
app.use(tailwind)
app.mount('#app')
