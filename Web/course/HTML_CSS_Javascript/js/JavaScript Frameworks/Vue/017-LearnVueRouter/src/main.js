import Vue from 'vue'
import App from './App'
// 导入 router
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 在 Vue 实例中挂载 router
  router,
  render: h => h(App)
})
