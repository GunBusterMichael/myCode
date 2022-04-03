/* 
    export * 命令表示再输出 cricle 模块的所有属性和方法（除了 default 方法）。
！       export * 命令会忽略 circle 模块的 default 方法
*/
export * from './circle.js';
export var e = 2.71828182846;
export default function (x) {
    return Math.exp(x);
}

// 将 circle 的属性和方法改名后再输出：
export {getArea as getCirclrArea} from './circle.js'