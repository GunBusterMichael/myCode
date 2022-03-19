// 保存构造函数中的 this
var thisOfConstructor = null

class Tab {
    constructor(id) {

        // 将构造函数中的 this 赋值给 thisOfConstructor
        thisOfConstructor = this

        // 获取元素（不包括 tab 栏（li）和下方内容（section））
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        // tab 栏的父元素
        this.parentElementOfTab = this.main.querySelector('.firstnav ul:first-child')
        // 获取下方内容的父元素
        this.parentElementOfCon = this.main.querySelector('.tabscon')

        // 调用初始化函数 init
        this.init()

    }

    // 获取 HTML 中写出的和通过添加按钮添加的全部 tab 栏（li）、关闭按钮和下方内容（section）
    getTabsAll() {    // 获取函数
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.closeButtons = this.main.querySelectorAll('.icon-close')
        this.liactive = this.main.querySelector('.liactive')
        this.spans = document.querySelectorAll('.firstnav li span:first-child')
    }

    /* 
        init（初始化）：
            为相关元素绑定事件
    */
    init() {

        // 调用获取函数
        this.getTabsAll()

        // 给添加 tab 栏按钮添加点击事件
        this.add.addEventListener('click', this.addTab)
        
        for (var i = 0; i < this.lis.length; i++) {

            // 给 tab 栏添加点击事件
            this.lis[i].index = i
            this.lis[i].addEventListener('click', this.toggleTab)

            // 给关闭 tab 栏按钮添加点击事件
            this.closeButtons[i].index = i
            this.closeButtons[i].addEventListener('click', this.removeTab)

            // 给更改文本的 span 和 sections 添加双击事件
            this.spans[i].addEventListener('dblclick', this.editTab)
            this.sections[i].addEventListener('dblclick', this.editTab)
        }

    }

    // 切换 tab 功能
    toggleTab() {

        // 清除 tab 栏和下方内容已存在的样式
        thisOfConstructor.clearClass()

        // 被点击的 tab 栏底边框颜色变白
        this.className = 'liactive'

        // tab 栏下方内容随点击变化
        thisOfConstructor.sections[this.index].className = 'conactive'

        // 调用初始化函数
        thisOfConstructor.init()

        console.log('切换后'+thisOfConstructor.liactive.index);

    }

    // 添加 tab 功能
    addTab() {

        // 清除现有 tab 栏和下方内容的类
        thisOfConstructor.clearClass()

        // 生成随机数，之后添加到新的下方内容中
        var random = Math.random()

        // 创建新的 tab 栏（li）
        var newLi = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-close"></span></li>'

        // 将新的 tab 栏（li）追加到父元素内
        thisOfConstructor.parentElementOfTab.insertAdjacentHTML('beforeend', newLi)

        // 创建新的下方内容（section）
        var newSection = '<section class="conactive">新选项卡的内容：' + random + '</section>'

        // 将新的下方内容（section）追加到父元素内
        thisOfConstructor.parentElementOfCon.insertAdjacentHTML('beforeend', newSection)

        // 添加完新元素后，调用初始化函数
        thisOfConstructor.init()

        console.log('添加后'+thisOfConstructor.liactive.index);

    }

    // 删除 tab 功能
    removeTab(e) {

        // 阻止冒泡，以防止触发切换 tab 栏事件
        e.stopPropagation()

        console.log('删除前'+thisOfConstructor.liactive.index);

        /*
            显示前一个或后一个 tab 栏：
                1. tab 栏数量大于 0 时：
                    1.1 关闭最后一个 tab 时，显示前一个 tab 栏
                    1.2 关闭其他 tab 时，显示后一个 tab 栏
        */
        if (thisOfConstructor.lis.length > 1 && thisOfConstructor.liactive.index === this.index) {
            if (this.index == thisOfConstructor.lis.length - 1) {
                thisOfConstructor.lis[this.index - 1].click()
            } else if (this.index >=0) {
                thisOfConstructor.lis[this.index + 1].click()
            }
        }

        // 删除被点击删除按钮的 tab 栏
        thisOfConstructor.lis[this.index].remove()
        thisOfConstructor.sections[this.index].remove()

        // 删除后，调用初始化函数，更新当前的 tab 对象
        thisOfConstructor.init()

    }

    // 修改 tab 功能
    editTab() {
        
        // 获取原先的文字
        var str = this.innerHTML

        // 禁止双击选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

        // 生成文本框
        this.innerHTML = '<input type="text">'

        // 将文本框内的文字改为原先的文字
        var input = this.children[0]
        input.value = str

        // 默认选中文本框内的文字
        input.select()

        // 文本框失焦后，将文本框内的文字赋值给 span
        input.addEventListener('blur', function () {
            this.parentNode.innerHTML = input.value
        })

        // 在文本框中按下回车后，将文本框内的文字赋值给 span
        input.addEventListener('keyup', function (e) {
            if (e.keyCode == 13) {
                // 手动调用文本框失焦事件
                this.blur()
            }
        })
    }

    // 清除元素当前的类
    clearClass() {

        for (var i = 0; i < this.lis.length; i++) {

            // 清除 tab 栏的类
            this.lis[i].className = ''

            // 清除 tab 栏下方内容的类
            this.sections[i].className = ''

        }
    }
}

new Tab('#tab')

