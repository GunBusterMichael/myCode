import Vue from 'vue'
import App from './App'
import axios from 'axios'
import { request } from './network/request'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})


// // =3. 使用全局的 axios 和对应的配置进行网络请求（开始）
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
// axios.defaults.timeout = 5000

// // =1. axios 的基本使用（开始）
// /* 调用 axios */
// axios({
//   url: '/home/multidata',
//   method: 'get'  /* 发送 get 请求 */
//   // method: 'post'  /* 发送 post 请求 */
// }).then(re => {    /* axios 会返回 promise 实例，re 为请求到的数据 */
//   console.log(re)
// })

// /* 向有参数的 url 发送请求 */
// axios({
//   url: '/home/data',
//   // 针对 get 请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(re => {
//   console.log(re)
// })
// // =2 axios 的基本使用（结束）

// // =2. axios 发送并发请求（开始）
// axios.all([axios({
//   url: 'http://152.136.185.210:7878/api/hy66/home/multidata'
// }), axios({
//   url: 'http://152.136.185.210:7878/api/hy66/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
//   .then(results => {
//     console.log(results)
//   })
//   // 通过 axios.spread() 将并发请求数据的数组拆分成单个数据
//   /* .then(axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
//   })) */
// // =2. axios 发送并发请求（结束）
// // =3. 使用全局的 axios 和对应的配置进行网络请求（结束）

// =4. 创建多个 axios 实例，实现局部配置（开始）
// 创建第一个实例，设置第一个局部配置
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:7878/api/hy66',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res)
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// // 创建第二个实例，设置第二个局部配置
// const instance2 = axios.create({
//   baseURL: 'http://111.222.333.22:8000',
//   timeout: 5000
// })
// =4. 创建多个 axios 实例，实现局部配置（结束）

// =5. 封装 axios
// 可以将 request 函数当成一个 axios 实例
request({
  url: '/home/multidata/'
})
  // 这是 axios 实例的 resolve 方法，用于处理请求到的数据
  // res 是 promise 实例传递给 resolve 的参数——从服务器端请求到的数据
  .then(res => {
    console.log(res)
  })
  // 这是 axios 实例的 reject 方法，用于处理报错信息
  // err 是 promise 实例传递给 reject 的参数——网络请求失败后返回的报错信息
  .catch(err => {
    console.log(err)
  })