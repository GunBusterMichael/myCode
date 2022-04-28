import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

/* 调用 axios */
axios({
  url: 'http://www.blogry.cn/test/index'
}).then(re => {    /* axios 会返回 promise 实例，re 为请求到的数据 */
  console.log(re)
})