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