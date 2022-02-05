# Web API

## 1. Web APIs 与 ECMAScript（js语法）的关系

Web APIs 是对js语法的应用，在做交互效果时大量使用js语法。

## 2. API 和 Web API

### 2.1 API

API (Application Programming INterface) 是给程序员的一种工具（预定义函数），无需访问源码或理解内部工作机制，就可更轻松地实现某些功能。

### 2.2 Web API

**Web API** 是**浏览器**提供的一套操作浏览器功能和页面元素的**API**（BOM和DOM），主要针对于浏览器的交互效果。

如：弹出警示框的API：alert。

Web API 一般都有输入和输出（函数的传参和返回值），Web API 大部分是方法（函数）

#### 2.2.1 学习方法

- 这个接口是做什么的；
- 这个接口有没有参数，参数有没有要求；
- 返回值是什么；
- 测试。

## 3. DOM

### 3.1 定义

文档对象模型（Document Object Model, DOM）是处理 HTML 或 XML 的**编程接口**，可通过 DOM 接口**修改页面**内容。

### 3.2 DOM 树

<img src="E:\myCode\Web\course\HTML_CSS_Javascript\js\Web APIs\md_pic\DOM树.jpg" alt="DOM树" style="zoom: 67%;" />

- 文档：一个页面就是一个文档，在DOM中用 document 表示；
- 元素：页面中所有的标签都是元素，在DOM中使用 element 表示；
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释……），在 DOM 中使用 node 表示。
- DOM 把**以上内容**都看作是**对象**。

### 3.3 获取元素

获取元素的方法：

- 根据 ID 获取；
- 根据标签名获取；
- 通过 HTML5 新增方法获取；
- 特殊元素获取。

#### 3.3.1 根据 ID 获取

使用 gerElementById() 获取带 id 的元素对象

```javascript
document.getElementById('id名')
```

- 因为文档从上往下加载，所以先写标签，后写script；
- 参数id是大小写敏感的字符串；
- 返回的是一个元素对象；
- console.dir() 打印返回的元素对象，以查看里面的属性和方法。

#### 3.3.2 根据标签名获取

使用 getElementsByTagName() 方法可以返回带有指定标签名的**对象的集合**。

```javascript
document.getElementsByTagName('标签名');
```

- 返回的是获取过来的元素对象的集合，以伪数组的形式存储；
- 采用遍历的方式，依次打印伪数组里的元素。

获取某个元素（父元素）内部所有指定标签名的子元素。

```javascript
element.getElementsByTagName('标签名');
```

父元素必须是单个对象（指定是那一个元素对象，伪数组不可以），不获取父元素自己。
