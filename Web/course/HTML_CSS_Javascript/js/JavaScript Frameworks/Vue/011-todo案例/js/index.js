const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    inputContent: '',
    isItalic: true,
    checkMark: '',
    isChangeContent: '',
    isShowDel: '',
    isAllCompleted: false,
    activeNum: 0
  },
  filters: {
    showCheckMark(value) {
      let checkMark = ''
      checkMark = value === true ? '√' : ''
      return checkMark
    }
  },
  computed: {
    activeStatus() {
      this.activeNum = 0
      // 因为 forEach 内部的 this 不再指向 Vue 实例，所以需要提前保存 Vue 实例，或者用其他方法
      for (let item of this.todos) {
        if (item.isCompleted === false) {
          this.activeNum++
        }
      }
      if (this.activeNum > 0) {
        return this.activeNum + '项未完成'
      } else {
        return '都完成了'
      }
    },
    isShowDelCompletedTodos() {
      if (this.activeNum < this.todos.length) {
        return true
      } else {
        return false
      }
    },
    isShowTodoList() {
      if (this.todos.length === 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    createTodo() {
      if (this.inputContent === '') return;
      this.todos.unshift({
        content: this.inputContent,
        isCompleted: false,
        checkMark: '',
        isChangeContent: false,
        isShowDel: false,
        isShowTodo: true
      })
      this.inputContent = ''
      this.isItalic = true
    },
    switchItalic() {
      if (this.inputContent != '') {
        this.isItalic = false
      } else {
        this.isItalic = true
      }
    },
    switchCompleted(item) {
      item.isCompleted = !item.isCompleted
      let flag = true
      for (item of this.todos) {
        if (item.isCompleted === false) {
          flag = false
          break
        }
      }
      this.isAllCompleted = flag
    },
    startChangeContent(item) {
      item.isChangeContent = true
    },
    changeContent(event, index) {
      this.todos[index].content = event.target.value
    },
    finishChangeContent(event, item, index) {
      item.isChangeContent = false
      if (event.target.value === '') {
        this.delTodo(index)
      }
    },
    switchShowDel(item) {
      item.isShowDel = !item.isShowDel
      // console.log('switchShowDel');
    },
    delTodo(index) {
      if (index + 1 != this.todos.length) {
        this.todos[index + 1].isShowDel = true
      }
      this.todos.splice(index, 1)
    },
    switchAllCompleted() {
      if (this.todos.length === 0) return;
      if (this.isAllCompleted === false) {
        for (let item of this.todos) {
          item.isCompleted = !this.isAllCompleted
        }
        this.isAllCompleted = !this.isAllCompleted
      } else {
        for (let item of this.todos) {
          item.isCompleted = !this.isAllCompleted
        }
        this.isAllCompleted = !this.isAllCompleted
      }
    },
    showAllTodos() {
      this.todos.forEach(function (item) {
        item.isShowTodo = true
      })
    },
    showActiveTodos() {
      this.todos.forEach(function (item) {
        item.isShowTodo = !item.isCompleted
      })
    },
    showCompletedTodos() {
      this.todos.forEach(function (item) {
        item.isShowTodo = item.isCompleted
      })
    },
    delCompletedTodos() {
      this.todos = this.todos.filter(item => item.isCompleted === false)
      this.isAllCompleted = false
    }
  },
  // 使用生命周期函数mounted配合属性ref="input"实现autofocus
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus()
    })
  }
})

// 禁止手指双击放大、缩小页面
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
  var now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, {
  passive: false
});

// 特别感谢
console.log('特别感谢：A-SOUL https://space.bilibili.com/703007996/');