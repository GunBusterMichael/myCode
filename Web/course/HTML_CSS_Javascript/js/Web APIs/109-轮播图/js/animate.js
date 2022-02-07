function animate(obj, target, callback) {
    clearInterval(obj.animationTimer)
    obj.animationTimer = setInterval(function () {
        // 计算步长 step
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            clearInterval(obj.animationTimer)
            /*
                利用短路运算判断 callback 是 undefined 还是有函数在里面：
                    如果 callback 函数存在，则其转换成布尔值为 true；
                    如果 callback 函数不存在，则其为 undefined，转换成布尔值为 true；

                    表达式一为 true，则返回表达式二的值；
                    表达式一为 false，则返回表达式一的值，表达式二不执行
            */
            callback && callback()
        } else {
            // 赋值元素当前位置
            obj.style.left = obj.offsetLeft + step + "px"
        }
    }, 15);
}