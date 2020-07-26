import Vue from 'vue'
import App from './App.vue'
import Store from './Store/Store'

Vue.config.productionTip = false

new Vue({
  store:Store,
  render: h => h(App),
}).$mount('#app')
