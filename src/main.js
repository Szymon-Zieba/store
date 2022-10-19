import {createApp, watch} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import './assets/main.css'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();
const app = createApp(App)

const pinia = createPinia()

if(localStorage.getItem("state")){
    pinia.state.value = JSON.parse(localStorage.getItem("state"))
}
watch(
    pinia.state,
    (state) => {
        localStorage.setItem("state",JSON.stringify(state))
    },
    {deep: true}
)

app.use(pinia)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')

