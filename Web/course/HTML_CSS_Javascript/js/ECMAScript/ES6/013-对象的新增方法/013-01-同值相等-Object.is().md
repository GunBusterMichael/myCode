# Object.is() 同值相等

## 1. 比较两值相等的方法

### 1.1 相等运算符 ==

会自动转换数据类型。

### 1.2 全等（严格相等）运算符 ===

- NaN 不等于 NaN：

  ```js
  NaN === NaN    // 返回 false
  ```

- +0, -0, 0 两两相等：

  ```js
  -0 === +0    // 返回 true
  -0 === 0     // 返回 true
  +0 === 0     // 返回 true
  ```

### 1.3 同值相等 Object.is()

行为与全等（严格相等）运算符 === 基本类似，但是：

- NaN 等于 NaN：

  ```javascript
  Object.is(NaN, NaN)    // 返回 true
  ```

- -0 不等于 +0，-0 不等于 0：

  ```js
  Object.is(-0, +0)    // 返回 false
  Object.is(-0, 0)     // 返回 false
  ```

- +0 等于 0

  ```js
  Object.is(+0, 0)    // 返回 true
  ```

## 2. 数组与数组不相等

```js
console.log([] == [])    // 返回 false
console.log([] === [])    // 返回 false

let bln = Object.is([], [])
console.log(bln)    // 返回 false
```

## 3. 对象与对象不相等

```js
console.log({} == {})    // 返回 false
console.log({} === {})    // 返回 false

let bln = Object.is({}, {})
console.log(bln)    // 返回 false
```

