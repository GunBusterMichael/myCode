# pageshow 事件与 load 事件

## 1. load 事件

### 1.1 触发条件

1. <a>超链接；
2. `F5`或刷新按钮（强制按钮）；
3. 前进、后退按钮。

但是在某些版本的==火狐==浏览器中，存在“往返缓存”，其保留了页面数据、DOM 和 JavaScript 状态。所以在这些版本的浏览器中，点击==后退按钮不能刷新页面==。

## 2. pageshow 事件

### 2.1 触发条件

==不论==页面是否来自==缓存==，==页面显示==时就会==触发==：

1. <a>超链接；
2. `F5`或刷新按钮（强制按钮）；
3. 前进、后退按钮。

### 2.2 触发顺序

pageshow 事件在 ==load 事件==触发==后触发==。

### 2.3 事件写法

pageshow 事件要被添加给 window 对象：

```javascript
window.addEventListener('pageshow', function() {})
```

###  2.4 事件的方法

使用 pageshow 事件的 persisted 方法 `e.persisted` 判断页面是否从缓存中被加载：

```javascript
window.addEventListener('pageshow', function(e) {
	console.log(e.persisted)
})
```

- 如果 e.persisted 返回 ==true==，则表明页面==是==从==缓存==中被加载的；
- 如果 e.persisted 返回 ==false==，则表明页面==不是==从==缓存==中被加载的。
