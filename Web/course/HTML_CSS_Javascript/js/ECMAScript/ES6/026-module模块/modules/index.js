/*
    es6 module 模块功能
        1. 构成
            module 功能由 export 和 import 两个命令构成
            1.1 export
                1.1.1 作用
                    用于规定模块的对外接口，向其他模块导出功能。
            1.2 import
                1.2.1 作用
                    用于输入其他模块提供的功能。
        2. 什么是模块
            一个模块就是一个独立的文件。
*/

/*
    3. 抛出变量的方式
        3.1 在初始化语句前添加 export 命令
*/
// 抛出变量
export const name = '张三'
export const age = 20
// 抛出函数
export function sayName(params) {
    console.log('My name is ' + name)
}

/*
    3.2 将变量保存在一个对象中，用 export 抛出
*/
// export { name, age, sayName }

/*
    4. 修改抛出的变量的名字
        使用 as 关键字
*/
export {
    name as username,
    age as userage,
    sayName as sayUsername
}

/*
    5. 动态绑定
        export 语句输出的接口，可以取到模块内部实时的值
*/
export let bar = 'bar'
setTimeout(() => bar = 'barbar', 1000)

/*
    6. export 与 import 命令必须处于模块顶层，
        否则会报错。
*/
{
    // export let a = 1    // 报错
}

/* 
    7. 指定默认输出
        7.1 作用
            将某个变量作为默认变量输出，在 import 时可以自由将这个变量重命名。
        7.2 命令
            export default
        7.2 实现原理
            将某个变量赋值给 default 变量，并输出 default 变量。
        7.3 使用次数
            一个模块只能有一个默认输出。
        7.4 使用限制
            命令后不能跟变量声明语句，
                因为默认输出的本质是将命令后的变量赋值给 default 变量。
            // 正确
            export let a = 1

            // 正确
            let a = 1
            export default a

            // 正确：可以在默认输出命令右侧跟 function 关键字
?           export default function () {
                ......
            }

            // 正确：可以在默认输出命令右侧跟 class 关键字
?           export default class {
                ......
            }
            
            // 错误
!           export defalut let a = 1
*/
const obj = {
    foo: 'foo'
}
export default obj