import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*
  等同于：
  new Vue({
    el: '#app',
    render: h => h(App)
  })
*/
new Vue({
  render: h => h(App),
}).$mount('#app')
