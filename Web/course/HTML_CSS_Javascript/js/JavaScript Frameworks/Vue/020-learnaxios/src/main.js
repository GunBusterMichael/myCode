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
  url: 'http://152.136.185.210:7878/api/hy66/home/multidata',
  method: 'get'  /* 发送 get 请求 */
  // method: 'post'  /* 发送 post 请求 */
}).then(re => {    /* axios 会返回 promise 实例，re 为请求到的数据 */
  console.log(re)
})

/* 向有参数的 url 发送请求 */
axios({
  url: 'http://152.136.185.210:7878/api/hy66/home/multidata',
  // 针对 get 请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(re => {
  console.log(re)
})