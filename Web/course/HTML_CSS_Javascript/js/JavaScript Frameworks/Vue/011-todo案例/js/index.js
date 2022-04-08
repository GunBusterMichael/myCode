const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    inputContent: '',
    isItalic: true,
    checkMark: '',
    isChangeContent: '',
    isShowDel: '',
    isAllCompleted: ''
  },
  filters: {

  },
  methods: {
    createTodo() {
      if (this.inputContent.content === '') return;
      this.todos.unshift({
        content: this.inputContent,
        isCompleted: false,
        checkMark: '',
        isDeeper: false,
        isChangeContent: false,
        isShowDel: false
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
      item.checkMark = item.isCompleted === true ? '√' : ''
      item.isDeeper = !item.isDeeper
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
    },
    delTodo(index) {
      this.todos.splice(index, 1)
    },
    switchAllCompleted() {
      for (let item of todos) {
        
        item.isCompleted = true
      }
      this.checkMark = '√'
    }
  },
  // 使用生命周期函数mounted配合属性ref="input"实现autofocus
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus()
    })
  }
})