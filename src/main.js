import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css';
// Use reset.css for setup base css of this app
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
