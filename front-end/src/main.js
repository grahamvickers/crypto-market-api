import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/reset.css'
import './assets/scss/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



