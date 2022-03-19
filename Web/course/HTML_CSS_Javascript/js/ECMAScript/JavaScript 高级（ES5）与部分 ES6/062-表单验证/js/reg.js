window.onload = function () {
    // 定义正则表达式
    var regOfMobTel = /^1[3|4|5|7|8]\d{9}$/    // 手机号码正则表达式
    var regOfQQ = /^[1-9]\d{4,}$/    // QQ号正则表达式
    var regOfNickname = /^[\u4e00-\u9fa5\w-]{2,8}$/    // 昵称（二到八位中文、数字、字母、-_）正则表达式
    var regOfTextMessage = /^\d{6}$/    // 六位短信验证码正则表达式
    var regOfPwd = /^[a-zA-Z0-9_-]{6,16}$/

    // 获取元素
    var MobTel = document.querySelector('#tel')
    var qq = document.querySelector('#qq')
    var nickname = document.querySelector('#nickname')
    var textMessage = document.querySelector('#textMessage')
    var pwd = document.querySelector('#pwd')
    var surePwd = document.querySelector('#surepwd')

    // 表单验证函数
    function validateContents(ele, reg) {
        ele.addEventListener('keyup', function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入'
            }
        })
    }

    // 验证手机号码
    validateContents(MobTel, regOfMobTel)

    // 验证qq号码
    validateContents(qq, regOfQQ)

    // 验证昵称
    validateContents(nickname, regOfNickname)

    // 验证短信验证码
    validateContents(textMessage, regOfTextMessage)

    // 验证密码
    validateContents(pwd, regOfPwd)

    // 验证确认密码
    surePwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致😅'
        }
    }
}