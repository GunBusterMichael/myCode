(function flexible(window, document) {
    // 获取 HTML 元素（根元素）<html>
    var docEl = document.documentElement
    // dpr：物理像素比
    var dpr = window.devicePixelRatio || 1

    // adjust body font size    设置 body 的字体大小
    function setBodyFontSize() {
        // 如果页面中有 body 元素，则按照 dpr 设置 body 的字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面中没有 body 元素，则在 HTML 标签（初始的 HTML 文档）加载完成（无需等待样式表、图像和子框架的完全加载）后，再次执行设置 body 字体大小函数。
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10    设置 HTML 元素的文字大小
    function setRemUnit() {
        // 将 HTML 的宽度分为 10 等份，1 份就是 1 rem
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize    // 当页面大小发生变化时，重设 rem 大小
    window.addEventListener('resize', setRemUnit)
        // pageshow 事件在页面重新显示时触发
    window.addEventListener('pageshow', function(e) {
        // 如果 e.persisted 返回 true，则表明显示的页面来自缓存。此时也要重新计算 rem 大小
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports    部分移动端浏览器不支持 0.5px 的写法。该段代码可实现 0.5px 的写法：
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))