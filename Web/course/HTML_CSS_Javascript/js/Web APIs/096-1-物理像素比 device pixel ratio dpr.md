# 物理像素比

## 1. 物理像素

> 物理像素指设备屏幕上的最小像素点，在物理意义上真实存在。

## 2. 开发像素 || 逻辑像素

### 2.1 定义

> 逻辑像素是在 CSS 中定义的像素。

### 2.2 举例

```css
img {
    width: 100px;
    height: 100px;
}
```

其中，100px 为逻辑像素。

## 3. 物理像素比 Device Pixel Ratio dpr

### 3.1 定义

> 物理像素比是1 个 逻辑像素所能显示的物理像素数量。

### 3.2 获取物理像素比

```javascript
window.devicePixelRatio
// 在 PC 浏览器中返回 1，在 iPhone 6 / 7 / 8 的浏览器中返回 2
```

### 3.3 举例

- iPhone 6 的 dpr 为 2，即 iPhone 6 屏幕上的 2 个物理像素占满 1 个逻辑像素。
- PC 的 dpr 为 1，即 PC 屏幕上的 1 个物理像素占满 1 个逻辑像素。

## 4. 倍图方法

### 4.1 解决的问题

在 dpr 大于 1 的设备中，图片会按照 dpr 等比例放大，造成显示模糊。比如：一张 50px * 50px 的图片，在 iPhone 6 中会被放大到 100px * 100px。

### 4.2 如何设置倍图

准备一张像素为所需像素 dpr 倍的图片，用 css 缩小到所需倍率，以解决显示模糊问题。

### 4.3 举例

二倍图：

我们需要在 iPhone 6 中显示一张 50px * 50px 的图片。那就准备该图片的 100px * 100px 版本，在 css 中把像素设置为 50px * 50px。在 iPhone 6中，图片会被恢复为 100px * 100px 显示。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 我们需要一个50*50像素（css像素）的图片 直接放到我们的iphone8 里面会放大2倍  100* 100 就会模糊 */
        /* 我们采取的是 放一个 100* 100 图片  然后手动的把这个图片 缩小为 50* 50 （css像素） 【因为放到移动设备中，要放大到2倍，所以先缩小为50* 50】 */
        /* 我们准备的图片 比我们实际需要的大小 大2倍，这就方式就是 2倍图 */
        
        img:nth-child(2) {
            width: 50px;
            height: 50px;
        }
    </style>
</head>

<body>
    <!-- 模糊的 -->
    <img src="images/apple50(1).jpg" alt="">
    <!-- 我们采取2倍图 -->
    <img src="images/apple100.jpg" alt="">
</body>

</html>
————————————————
版权声明：本文为CSDN博主「maopolunzi」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/maopolunzi/article/details/103706537
```

![二倍图](https://img-blog.csdnimg.cn/20191225221041781.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hb3BvbHVuemk=,size_16,color_FFFFFF,t_70)