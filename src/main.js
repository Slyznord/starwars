import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Bootstrap from 'bootstrap-vue'

Vue.use(Bootstrap)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
