# BFC

## 1. 定义

> BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

## 2. 布局规则

- 内部的Box会在垂直方向，一个接一个地放置。

- Box垂直方向的距离由margin决定。属于**同一个**BFC的两个相邻Box的margin会发生重叠。

- 每个盒子（块盒与行盒）的margin box的左边，与包含块（父元素）border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

- BFC的区域不会与float box重叠。

- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

- 计算BFC的高度时，浮动元素也参与计算。

## 2. 如何创建BFC

1. <html>本身就是BFC；
2. float: left / right;
3. position: absolute / fixed;
4. overflow: auto / scroll / hidden;
5. display: inline-block / table / table-caption / table - cell / flex / inline-flex

## 3. BFC的应用

### 3.1 清除上下margin合并

#### 3.1.1上下margin合并的情况

```html
<style>
    *{
        margin: 0;
        padding: 0;
    }
    p {
        color: #f55;
        background: yellow;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 30px;
    }
</style>
<body>
    <p>看看我的 margin是多少</p>
    <p>看看我的 margin是多少</p>
</body>
```

效果：

![margin合并](E:\myCode\Web\course\HTML_CSS_Javascript\css\css-teach\BFC\img_md\margin合并.png)

#### 3.1.2 取消上下margin合并的操作与效果

根据：

- 属于同一个BFC的两个相邻的Box会发生margin重叠，把第二个p用div包起来，使与另一个<p>不同处于一个BFC：

```html
<style>
    *{
        margin: 0;
        padding: 0;
    }
    p {
        color: #f55;
        background: yellow;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 30px;
    }
    div{
        overflow: hidden;		<!-- 触发BFC -->
    }
</style>
<body>
    <p>看看我的 margin是多少</p>
    <div>
        <p>看看我的 margin是多少</p>
    </div>
</body>
```

效果如下：

![取消margin合并](E:\myCode\Web\course\HTML_CSS_Javascript\css\css-teach\BFC\img_md\取消margin合并.png)

### 3.2 自适应两栏布局

#### 3.2.1 未添加BFC时的效果

代码：

```html
<style>
    *{
        margin: 0;
        padding: 0;
    }
    body {
        width: 100%;
        position: relative;
    }
 
    .left {
        width: 100px;
        height: 150px;
        float: left;
        background: rgb(139, 214, 78);
        text-align: center;
        line-height: 150px;
        font-size: 20px;
    }
 
    .right {
        height: 300px;
        background: rgb(170, 54, 236);
        text-align: center;
        line-height: 300px;
        font-size: 40px;
    }
</style>
<body>
    <div class="left">LEFT</div>
    <div class="right">RIGHT</div>
</body>
```

效果：

![未自适应两栏](E:\myCode\Web\course\HTML_CSS_Javascript\css\css-teach\BFC\img_md\未自适应两栏.png)

#### 3.2.2 添加BFC后自适应两栏布局的操作与效果

依据：

- 每个盒子的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此；
- BFC的区域不会与float box重叠。

操作：

- 让左边<div>进行浮动float，右边<div>使用overflow: hidden; 触发BFC。

原理：

- 因为BFC内部的元素和外部的元素绝对不会互相影响，因此， 当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。

代码：

```html
<style>
    *{
        margin: 0;
        padding: 0;
    }
    body {
        width: 100%;
        position: relative;
    }
 
    .left {
        width: 100px;
        height: 150px;
        float: left;
        background: rgb(139, 214, 78);
        text-align: center;
        line-height: 150px;
        font-size: 20px;
    }
 
    .right {
        overflow: hidden;		/* 触发BFC */
        height: 300px;
        background: rgb(170, 54, 236);
        text-align: center;
        line-height: 300px;
        font-size: 40px;
    }
</style>
<body>
    <div class="left">LEFT</div>
    <div class="right">RIGHT</div>
</body>
```

效果：

![添加BFC后的自适应两栏布局](E:\myCode\Web\course\HTML_CSS_Javascript\css\css-teach\BFC\img_md\自适应两栏.png)

### 3.3 清除浮动

#### 3.3.1 高度塌陷

当我们不给父盒子设置高度，子盒子设置浮动的时候，父盒子的高度不会因为子盒子而撑开，即发生高度塌陷。这个时候我们就要清除浮动。

代码：

```html
<style>
    .par {
        border: 5px solid rgb(91, 243, 30);
        width: 300px;
    }
    
    .child {
        border: 5px solid rgb(233, 250, 84);
        width:100px;
        height: 100px;
        float: left;
    }
</style>
<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
</html>
```

效果：

![高度塌陷](E:\myCode\course\HTML_CSS_Javascript\css\css-teach\BFC\img_md\高度塌陷效果.png)

#### 3.3.2 清除浮动

依据：

- 计算BFC的高度时，浮动元素也参与计算。

操作：

- 让父盒子激活BFC。

```html
<style>
    .par {
        border: 5px solid rgb(91, 243, 30);
        width: 300px;
        overflow: hidden;
    }
    
    .child {
        border: 5px solid rgb(233, 250, 84);
        width:100px;
        height: 100px;
        float: left;
    }
</style>
<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
```

![清除浮动](E:\myCode\Web\course\HTML_CSS_Javascript\css\css-teach\BFC\img_md\清除浮动.png)

## 4. 总结

以上例子体现：

> BFC就页面上的一个被隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。

因为BFC内部的元素和外部的元素绝对不会互相影响，因此， 当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。

同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。避免margin重叠也是这样的一个道理。
————————————————
版权声明：本文部分内容借鉴CSDN博主「Leon_94」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/sinat_36422236/article/details/88763187
