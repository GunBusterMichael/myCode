# 弹性Flex布局

## 1. 优点&缺点

### 1.1 传统布局与Flex布局

| 传统布局                         | Flex弹性布局                             |
| -------------------------------- | ---------------------------------------- |
| 兼容性好                         | 操作方便。布局极为简单，在移动端应用广泛 |
| 布局繁琐（浮动、清除浮动……）     | PC端浏览器支持情况较差                   |
| 有局限性，不能在移动端很好的布局 | IE 11 或更低版本，不支持或部分支持       |

### 1.2 使用场景

> 1、如果是**PC端**布局，仍使用**传统布局**；
>
> 2、如果是**移动端**，或**不考虑兼容性问题的PC端**页面布局，则使用**flex弹性布局**

## 2. Flex布局原理

### 2.1 布局原理解释

采用Flex布局的元素，被称为Flex容器（Flex container），简称“容器”。它的所有子元素自动成为容器成员，被称为Flex项目（Flex item），简称“项目”。

![容器、项目](D:\Web\course\HTML_CSS_Javascript\css\css-teach\flex弹性布局\img_md\容器项目.jpg)

### 2.2 总结Flxe布局原理

> 通过给**父盒子添加Flex属性**，来**控制子盒子**的位置和排列方式。

## 3. Flex布局父级盒子常见属性

### 3.1 常见父项属性归纳

- flex-direction：设置主轴的方向；
- justify-content：设置主轴上的子元素排列方式；
- flex-wrap：控制子元素是否换行；
- align-items：设置侧轴上的子元素排列方式（单行）；
- align-content：设置侧轴上的子元素的排列方式（多行）；
- flex-flow：flex-direction和flex-wrap的复合属性。

### 3.2 flex-direction设置主轴方向

#### 3.2.1 主轴与侧轴

在flex布局中，分为主轴与侧轴两个方向，或被叫做：行和列、x轴和y轴。

- 默认主轴方向为x轴方向，水平向右；
- 默认侧轴方向为y轴方向，水平向下。

![主轴、侧轴](D:\Web\course\HTML_CSS_Javascript\css\css-teach\flex弹性布局\img_md\主轴、侧轴.jpg)

#### 3.3.2 属性值

flex-direction属性决定主轴的方向（及项目的排列方向）

**注意：**

> 主轴和侧轴是会变化的。
>
> flex-direction设置谁为主轴，谁就是主轴，剩下的就是侧轴。
>
> 子元素顺着主轴排列。

| 属性值                          | 说明                 |
| ------------------------------- | -------------------- |
| **flex-direction: row;**        | **（默认）从左到右** |
| flex-direction: row-reverse;    | 从右到左             |
| **flex-direction: column;**     | **从上到下**         |
| flex-direction: column-reverse; | 从下到上             |

### **3.3 justify-content 设置主轴上的子元素排列方式（重要）**

**注意：**

> 使用 justify-content 前要确定主轴是哪个

| 属性值                              | 说明                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| **justify-content: flex-start;**    | **（默认）从主轴头部开始排列**                               |
| justify-content: flex-end;          | 从尾部开始排列                                               |
| **justify-content: center;**        | ***在主轴居中对齐***                                         |
| **justify-content: space-around;**  | ***最左最右元素不贴边，平分剩余空间（相邻子元素的边距为2倍被分配的空间）*** |
| **justify-content: space-evenly;**  | **最左最右元素不贴边，每个元素之间的间隔相等**               |
| **justify-content: space-between;** | **先两边贴边，再平分剩余空间**                               |

### **3.4 flex-wrap 设置子元素是否换行（重要）**

默认情况下，项目都排在一条线上（又称“轴线”）上。flex-wrap属性定义，**在flex布局中默认不换行**。

| 属性值               | 说明           |
| -------------------- | -------------- |
| flex-wrap: nowrap;   | （默认）不换行 |
| **flex-wrap: wrap;** | **换行**       |

### **3.5 align-items 设置侧轴上的子元素排列方式（单行）（重要）**

align-items控制子元素在一行时，在**侧轴**（默认为y轴）上的**排列方式**。

| 属性值                       | 说明                                       |
| ---------------------------- | ------------------------------------------ |
| **align-items: flex-start;** | **（默认）从上到下**                       |
| align-items: flex-end;       | 从下到上                                   |
| **align-items: center;**     | **挤在一起（子元素没有间隔）居中**         |
| **align-items: stretch;**    | **拉伸（设置此元素时，不要给子元素高度）** |

### **3.6 align-content 设置侧轴上的子元素排列方式（多行）**

设置子项在**侧轴**上的**排列方式**，**只能用于**子项出现换行**的情况**（多行）**，在**单行**下是**没有效果**的。

| 属性值                            | 说明                                                         |
| --------------------------------- | ------------------------------------------------------------ |
| **align-content: flex-start;**    | **从侧轴的头部开始排列**                                     |
| align-content: flex-end;          | 从侧轴的尾部开始排列（贴底对齐）                             |
| **align-content: center;**        | **在侧轴居中显示**                                           |
| **align-content: space-around;**  | **最边上的子项不贴边，平分剩余空间（相邻子元素的边距为2倍被分配的空间）** |
| **align-content: space-between;** | **子项在侧轴先分布在两边，再平分剩余空间**                   |
| **align-centent: stretch;**       | **（默认）各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于'flex-start'** |

### **3.7 flex-flow**

flex-flow 是 flex-direction 和 flex-wrap 属性的复合属性。

```css
flex-direction: row;
flex-wrap: wrap;
/* 简写为 */
flex-flow: row wrap;
```

## 4. Flex布局子项常见属性

- flex：子项目所占的份数；
- align-self：子项目自己在侧轴的排列方式；
- order：子项的排列顺序。

### **4.1 flex属性（重要）**

flex属性定义子项目在剩余空间中所分配的空间，占多少份数

```css
.item {
    flex: <number>;	/* default 0 */
}
```

### **4.2 align-self控制子项自己在侧轴上的排列方式**

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。

默认值为auto，表示继承父元素的aligh-items属性。如果没有父元素，则等同于stretch。

```css
span:nth-child(2) {
    /* 设置自己在侧轴上的排列方式 */
    align-self: flex-end;
}
```

### 4.3 order 属性定义项目的排列顺序

数值越小，排列越靠前，默认为零

```css
span:nth-child(2) {
    /* 设置自己在侧轴上的排列方式 */
    order: -1;	/*排位靠前*/
}
```

### 4.4. 伸缩属性

#### 4.4.1 属性集合

| 属性值                                 | 说明                                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| flex-basis: ?px \| ?% \| ?rem \| auto; | 设置弹性盒伸缩基准值。给所有子项选择器添加设置全体子项，给单独子项添加设置单独子项； |
| flex-grow: number;                     | 有剩余空间时，设置弹性盒的扩展比率，充满剩余空间。数字为0时，不缩小； |
| flex-shrink: number                    | 设置弹性盒的缩小比率                                         |
| flex                                   | flex-grow/flex-shrink/flex-basis的合写属性，**注意顺序**。   |

- 大于等于1：允许扩大或缩小；

- 等于0：固定值，不变；

#### 4.4.2 特殊写法

| 属性         | 说明             |
| ------------ | ---------------- |
| flex: auto;  | flex: 1 1 auto;  |
| flex: none;  | flex: 0 0 auto;  |
| flex: 0%     | flex: 1 1 0%;    |
| flex: 100px; | flex: 1 1 100px; |
| flex: 1;     | flex: 1 1 0%;    |

- auto表示width生效，宽度取决于设置的width；
- 前两个数字为1 1时，子元素自动扩展、缩小，第三个基准值则不重要了。