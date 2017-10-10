import Vue from 'vue'
import App from './App.vue'
import DatePicker from '../src'
Vue.use(DatePicker)
new Vue({
  render: h => h(App)
}).$mount('#app')
