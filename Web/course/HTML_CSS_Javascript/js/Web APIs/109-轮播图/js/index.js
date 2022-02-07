window.addEventListener('load', function () {
    // 1. 获取元素
    var arrow_l = this.document.querySelector('.arrow-l')
    var arrow_r = this.document.querySelector('.arrow-r')
    var focus = this.document.querySelector('.focus')
    var ul = focus.querySelector('ul')
    var ol = focus.querySelector('ol')

    // 2. 鼠标经过、离开轮播图，显示、隐藏左右按钮，停止、启动轮播图定时器
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
        finishTimer()
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
        startTimer()
    })

    // 3. 依据轮播图片个数，创建下方圆点
    var focusWidth = focus.offsetWidth
    for (var i = 0; i < ul.children.length; i++) {
        // 3.1 创建圆点元素 li
        var li = this.document.createElement('li')
        // 3.2 创建当前圆点的索引号 data-index（自定义属性）
        li.setAttribute('data-index', i)
        // 3.2将圆点元素 li 插入到父盒子 ol 中
        ol.appendChild(li)

        /*
            4. 给 li 添加类名 current
                4.1 给每个 li 添加点击后变换类名事件；
                    在创建 li 的循环内加，就可以在创建 li 时，给当前被创建的 li 添加事件；
                    利用“排他思想”。
        */
        li.addEventListener('click', function () {
            // 4.1.1 排他思想：清除其他 li 的类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            // 4.1.2 排他思想：添加当前 li 的类名
            this.className = 'current'

            /*
                5. 点击圆点使图片移动
                    5.1 ul 的移动距离：
                        - (ul 的索引号 * 图片的宽度)
            */
            var index = this.getAttribute('data-index')
            // 5.2 让点击圆点移动图片和点击箭头移动图片联动
            imgNum = circleNum = index
            animate(ul, - index * focusWidth)
        })
    }
    // 4.2 设置第一个圆点的类名为 current
    ol.children[0].className = 'current'

    // 6. 点击左右箭头按钮，滚动一张图片
    // 6.1 复制第一张图片到轮播图末尾，以实现无缝滚动
    var cloneFirstLi = ul.children[0].cloneNode(true)
    ul.appendChild(cloneFirstLi)
    var circleNum = 0

    // 6.2 点击右按钮，向左滚动一张图片
    var imgNum = 0
    // 6.2.1 节流阀：图片移动结束后，才能接着移动下一张图片
    var flag = true    // 初始化节流阀为开
    arrow_r.addEventListener('click', function () {
        if (flag == true) {    // 点击箭头时判断节流阀状态：如果节流阀打开
            flag = false    // 将节流阀关闭，然后执行轮播图
            if (imgNum == ul.children.length - 1) {    // imgNum == 4
                ul.style.left = imgNum = 0
            }
            imgNum++
            animate(ul, -imgNum * focusWidth, function () {
                flag = true    // 一次轮播图移动结束后，打开节流阀
            })
            console.log('imgNum' + imgNum);

            // 6.2.2 让圆点跟随图片变化
            circleNum++
            // 6.2.2.1 亮圆点处于最右时，重置圆点
            if (circleNum == ol.children.length) {    // circleNum == 4
                circleNum = 0
            }
            // 6.2.2.3 调用“利用排他思想设置圆点类名”函数
            setCirclesClassName()
        }
    })

    // 6.3 点击左按钮，向右滚动一张图片
    arrow_l.addEventListener('click', function () {
    if (flag == true) {
        flag = false
        
            if (imgNum == 0) {
                imgNum = ul.children.length - 1
                ul.style.left = -imgNum * focusWidth + 'px'
            }
            imgNum--
            animate(ul, -imgNum * focusWidth, function () {
                flag = true
            })
            console.log('imgNum' + imgNum);

            // 6.3.1 让圆点跟随图片变化
            circleNum--
            if (circleNum === -1) {
                circleNum = ol.children.length - 1
            }
            setCirclesClassName()
        }
    })
    // 6.2.1.2 建立“利用排他思想设置圆点类名”函数
    function setCirclesClassName() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[circleNum].className = 'current'
        console.log('circleNum' + circleNum);
    }

    // 7. 自动播放轮播图
    function startTimer() {
        timer = this.setInterval(function () {
            arrow_r.click()
        }, 2000)
    }
    function finishTimer() {
        clearInterval(timer)
        timer = null
    }
    startTimer()
})

/*
非无缝轮播图代码：
    var num = 0
    arrow_r.addEventListener('click', function () {
        if (num == 3) {
            num = 0
        } else {
            num++
        }
        animate(ul, -num * focusWidth)
    })
    arrow_l.addEventListener('click', function () {
        if (num <= 0) {
            num = 3
        } else {
            num--
        }
        animate(ul, -num * focusWidth)
    })
*/