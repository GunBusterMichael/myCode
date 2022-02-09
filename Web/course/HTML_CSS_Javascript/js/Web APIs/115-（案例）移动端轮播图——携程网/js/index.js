window.addEventListener('load', function () {

    // 1. 获取元素
    var focus = this.document.querySelector('.focus')
    var ul = focus.children[0]
    var ol = focus.children[1]

    // 2. 获取 focus 的宽度（轮播图移动一次的宽度）
    var focusWidth = focus.offsetWidth

    // 3. 利用定时器自动播放轮播图
    var index = 0
    var focusTimer = null
    function startFocusTimer() {
        clearInterval(focusTimer)
        focusTimer = setInterval(function () {
            index++
            moveFocus('all .3s')
        }, 2000);
    }
    startFocusTimer()
    
    /* 
        4. 无缝滚动
            4.1 监听过度完成事件
                4.1.1 用处
                    在过度完成后，再判断当前轮播图处于哪张图片
                4.1.2 事件名称
                    transitionend
    */
    ul.addEventListener('transitionend', function () {

        // 判断当前轮播图处于哪张图片
        if (index >= 3) {
            // 处于最后一张图片后，跳回 index==0 的图片
            index = 0
            moveFocus('none')
        } else if (index < 0) {
            index = 2
            moveFocus('none')
        }

        // 5. 圆点跟随轮播图变化
        // 选出 ol 中带有 current 类名的 li，去掉 current 类名
        ol.querySelector('.current').classList.remove('current')
        // 给当前索引号对应的 li 添加 current 类
        ol.children[index].classList.add('current')
    })

    // 封装轮播图移动（不包括计算 index）函数
    function moveFocus(transition) {
        var translateX = -index * focusWidth
        ul.style.transition = transition
        ul.style.transform = 'translateX(' + translateX + 'px)'
    }

    /*
        6. 手指滑动轮播图
            6.1 触摸元素 touchstart：
                获取手指初始坐标；
                获取盒子初始位置。
            6.2 移动手指 touchmove：
                获取手指的移动距离：
                    手指当前坐标 - 手指初始坐标；
                移动盒子:
                    盒子移动后的坐标 = 盒子初始位置 + 手指的移动距离。
    */
    var touchStartX = 0
    var moveX = 0

    /* 
        7.1 判断用户是否滑动了图片
            初始化 flag = false
            手指移动事件启动后，再赋值为 true

    */
    var flag = false

    // 手指开始触摸轮播图
    ul.addEventListener('touchstart', function (e) {

        // 获取手指初始坐标
        touchStartX = e.targetTouches[0].pageX

        // 手指触摸轮播图时，停止自动轮播
        clearInterval(focusTimer)
        focusTimer = null
    })

    // 手指滑动轮播图
    ul.addEventListener('touchmove', function (e) {

        // 获取手指移动距离
        moveX = e.targetTouches[0].pageX - touchStartX

        // 计算轮播图 ul 移动距离
        var translateX = -index * focusWidth + moveX

        // 手指拖动时，不需要 transition 渐变动画
        ul.style.transition = 'none'
        ul.style.transform = 'translateX(' + translateX + 'px)'

        // 禁止拖动屏幕
        e.preventDefault()

        // 手指移动事件启动后，将 flag 赋值为 true
        flag = true
    })

    /* 
        7. 手指切换轮播图：
            手指滑动轮播图距离超过 ±50px，则切换轮播图
    */
    // 手指从轮播图上抬起
    ul.addEventListener('touchend', function () {

        // 如果手指移动过（flag == true），再判断手指移动的距离
        if (flag) {
            // 手指滑动轮播图距离超过 +50px，切换至左侧的图
            if (moveX > 50) {
                index--
            } else if (moveX < -50) {
                index++
            }
            moveFocus('all .3s')
        }

        // 手指抬起后，重新启动轮播图计时器
        startFocusTimer()
    })
})