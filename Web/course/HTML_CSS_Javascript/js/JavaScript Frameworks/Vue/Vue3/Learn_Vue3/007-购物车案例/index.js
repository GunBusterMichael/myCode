const app = {
  template: '#my-app',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        }
      ],
    }
  },
  methods: {
    // 将当前被循环到的数组成员的 index 传入到 method 中
    decrease(index) {
      this.books[index].count--
    },
    increase(index) {
      this.books[index].count++
    },
    delate(index) {
      this.books.splice(index, 1)
    },
    // 通过 method 实现 filter
    modifyPrice(price) {
      return '￥' + price
    }
  },
  computed: {
    // 实现 Vue3 中的 filter
    filterBooks() {
      return this.books.map(item => {
        // 因为 item 是一层对象，所以 Object.assign 是深拷贝
        const newItem = Object.assign({}, item)
        newItem.price = '￥' + item.price
        return newItem
      })
    },
    totalPrice() {
      const totalPrice = this.books.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price * currentValue.count,
        0
      )
      return totalPrice
    },
  }
}

Vue.createApp(app).mount('#app')