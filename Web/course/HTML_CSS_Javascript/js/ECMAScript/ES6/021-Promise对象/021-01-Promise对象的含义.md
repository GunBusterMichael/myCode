# Promise 对象的含义

## 1. Promise 对象是什么

Promise 对象是一种==异步编程==的解决方案。

Promise 对象是一个容器，内部保存着某个未来才会结束的事件的运行结果。

## 2. Promise 对象的状态

### 2.1 状态的分类

Promise 对象有三种状态：

- pending：进行中；
- fulfilled：已成功；
- rejected：已失败。

### 2.2 状态不受外界影响

只有 Promise 对象中==异步操作的结果==，可以==决定==当前是哪一种==状态==，其他操作都无法改变状态。

### 2.3 状态改变

#### 2.3.1 状态改变的情况

分两种：

- 从 pending（进行中）变为 fulfilled（已成功）；
- 从 pending（进行中）变为 rejected（已失败）。

#### 2.3.2 状态一旦改变，就不会再变

状态一旦从 pending 变为 fulfilled 或 rejected，就不会再变。

这种状态不会再变的情况被称为 resolved（已定型）。

如果在改变已发生（已定型）后，再对 Promise 对象添加回调函数，得到的也是添加回调函数之前的状态，不会再变。

## 3. Promise 对象的运行过程

### 3.1 创建 Promise 对象并立即运行

Promise 有三种状态，如果用 Promise() 构造器创建一个 Promise 对象，当被创建时，它的状态是pending。

### 3.2 调用 resolve 或 reject 方法并改变 Promise 对象的状态

如果一个 Promise 对象的 resolve 方法被调用，它的状态会变成 fulfilled；而如果一个 Promise 对象的 reject 方法被调用，它的状态会变成 rejected。

此外，还有两种初始化 Promise 对象的方法，分别是 Promise.resolve 方法和 Promise.reject 方法。前者会直接返回一个状态为 fulfilled 的 Promise 对象，而后者会直接返回一个状态为 rejected 的 Promise 对象。

#### 3.2.1 调用 resolve 或 reject 方法的过程

在一个 Promise 链中，如果一个 Promise 状态变成了 fulfilled，它会自动在 Promise 链中向下寻找，直到发现一个 then 方法，并执行其中的第一个参数函数，而如果一个 Promise 的状态变成了rejected，它会在 Promise 链中向下寻找，直到发现一个带有两个参数的 then 方法并执行它的第二个参数函数或发现一个 catch 方法并执行它的参数函数。

## 3. Promise 对象的优点

- Promise 对象可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数；
- Promise 对象提供统一的接口，方便控制异步操作。

## 4. Promise 对象的缺点

### 4.1 无法取消 Promise

一旦新建了 Promise 对象，它就会立即执行，无法中途取消。

### 4.2 返回错误的限制

如果不设置回调函数，Promise 内部抛出的错误，就不会被反映到外部。

### 4.3 无法得知事件运行中的进展

当 Promise 对象处于 pending（进行中）状态时，无法得知事件目前进展到了哪一个阶段，是刚刚开始还是即将完成。