import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

// =3. 配置 axios 默认设置（开始）
axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
axios.defaults.timeout = 5000

// =1. axios 的基本使用（开始）
/* 调用 axios */
axios({
  url: '/home/multidata',
  method: 'get'  /* 发送 get 请求 */
  // method: 'post'  /* 发送 post 请求 */
}).then(re => {    /* axios 会返回 promise 实例，re 为请求到的数据 */
  console.log(re)
})

/* 向有参数的 url 发送请求 */
axios({
  url: '/home/data',
  // 针对 get 请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(re => {
  console.log(re)
})
// =2 axios 的基本使用（结束）

// =2. axios 发送并发请求（开始）
axios.all([axios({
  url: 'http://152.136.185.210:7878/api/hy66/home/multidata'
}), axios({
  url: 'http://152.136.185.210:7878/api/hy66/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})])
  .then(results => {
    console.log(results)
  })
  // 通过 axios.spread() 将并发请求数据的数组拆分成单个数据
  /* .then(axios.spread((res1, res2) => {
    console.log(res1)
    console.log(res2)
  })) */
// =2. axios 发送并发请求（结束）