import Vue from 'vue'
import App from './App.vue'
import VueDriver from './plugins/driver'
import './plugins/kite.less'

Vue.use(VueDriver)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
