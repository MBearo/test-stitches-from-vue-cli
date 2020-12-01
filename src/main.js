import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { a } from './test.rsjs'

Vue.config.productionTip = false

console.log(a)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
