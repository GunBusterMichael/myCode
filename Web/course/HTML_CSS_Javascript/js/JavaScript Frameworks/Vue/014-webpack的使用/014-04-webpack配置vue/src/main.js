// 1.1 使用 ES6 的模块化规范
import {add, mul} from './js/mathUtils.js'

console.log(add(20, 30))
console.log(mul(20, 30))

// 1.2 使用 ES6 的模块化规范
import {name, age, height} from './js/info.js'

console.log(name)
console.log(age)
console.log(height)

// 2. 依赖 css 文件
require('./css/normal.css')

// 3. 依赖 less 文件
require('./css/special.less')
document.writeln('<h2>测试 less 文件打包。</h2>')

// 4. 使用 Vue 进行开发
import Vue from 'vue'

/*
  将与 Vue 实例相关的 template data methods 抽取到一个组件中;
    将组件写到一个单独的 vue 文件中。
*/
import App from './vue/App'

// 4.1 可以不将 Vue 实例赋值给一个变量
new Vue({
  el: '#app',
  /*
    Vue 实例会将 el 指定的 DOM 元素替换成 template 内的 HTML 代码。
      将 Vue 实例的 template data methods 抽取到一个组件中。
  */
  /* Vue 实例的 template 为包含 Vue 实例 template data methods 的组件所注册的标签。 */
  template: '<App/>',
  /* 将包含 Vue 实例 template data methods 的组件注册到 Vue 实例中。 */
  components: {
    App
  }
})