// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入 fastclick 库，解决移动端点击300ms延迟问题
import fastClick from 'fastclick'
// 引入能让所有手机显示效果一致的 css 文件
import 'styles/reset.css'
// 引入解决 1px border 问题的 css 文件
import 'styles/border.css'
// 引入 iconfont 字体图标
import 'styles/iconfont.css'

Vue.config.productionTip = false

// 使用 fastClick 库
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
