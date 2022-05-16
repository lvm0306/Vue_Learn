import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import axios from "axios"

Vue.prototype.$http = axios
import ui from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'


import router from './router/index';
import store from './store/index';



Vue.use(ui)
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
