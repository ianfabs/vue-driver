import Vue from 'vue'
import App from './App.vue'
import VueDriver from './plugins/driver'
import './plugins/theme.scss'

Vue.use(VueDriver)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
