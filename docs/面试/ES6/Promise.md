##### 原理

promise可以执行异步操作，从语法上来说，它是一个对象，从它可以获取异步操作的消息。

1. promise 有三个状态：`pending`，`fulfilled`，or `rejected`；「规范 Promise/A+ 2.1」
2. `new promise`时， 需要传递一个`executor()`执行器，执行器立即执行；
3. `executor`接受两个参数，分别是`resolve`和`reject`；
4. promise 的默认状态是 `pending`；
5. promise 有一个`value`保存成功状态的值，可以是`undefined/thenable/promise`；「规范 Promise/A+ 1.3」
6. promise 有一个`reason`保存失败状态的值；「规范 Promise/A+ 1.5」
7. promise 只能从`pending`到`rejected`, 或者从`pending`到`fulfilled`，状态一旦确认，就不会再改变；
8. promise 必须有一个`then`方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 和 promise 失败的回调 onRejected；「规范 Promise/A+ 2.2」
9. 如果调用 then 时，promise 已经成功，则执行`onFulfilled`，参数是`promise`的`value`；
10. 如果调用 then 时，promise 已经失败，那么执行`onRejected`, 参数是`promise`的`reason`；
11. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调`onRejected`；

##### 链式调用

由于`then`方法返回的是一个新的`promise`实例，因此可以采用链式写法，也就是`then`方法后面再调用另一个方法。

1. then 的参数 `onFulfilled` 和 `onRejected` 可以缺省，如果 `onFulfilled` 或者 `onRejected`不是函数，将其忽略，且依旧可以在下面的 then 中获取到之前返回的值；「规范 Promise/A+ 2.2.1、2.2.1.1、2.2.1.2」
2. promise 可以 then 多次，每次执行完 promise.then 方法后返回的都是一个“新的promise"；「规范 Promise/A+ 2.2.7」
3. 如果 then 的返回值 x 是一个普通值，那么就会把这个结果作为参数，传递给下一个 then 的成功的回调中；
4. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.2.7.2」
5. 如果 then 的返回值 x 是一个 promise，那么会等这个 promise 执行完，promise 如果成功，就走下一个 then 的成功；如果失败，就走下一个 then 的失败；如果抛出异常，就走下一个 then 的失败；「规范 Promise/A+ 2.2.7.3、2.2.7.4」
6. 如果 then 的返回值 x 和 promise 是同一个引用对象，造成循环引用，则抛出异常，把异常传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.3.1」
7. 如果 then 的返回值 x 是一个 promise，且 x 同时调用 resolve 函数和 reject 函数，则第一次调用优先，其他所有调用被忽略；「规范 Promise/A+ 2.3.3.3.3」

##### 解决了什么问题

- 回调函数执行多次
- 回调函数没有执行
- 回调函数有时同步执行有时异步执行 
- 回调地狱

##### 存在哪些不足

- 无法取消promise，一旦新建就会立即执行
- 如果不设置回调函数（reject），promise内部的错误无法反应到外部
- 当状态处于pending时，无法判断当前进展到哪一个阶段

##### 手写Promise

```javascript
const resolvePromise = (promise1, x, resolve, reject) => {
  if (promise1 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  
  let called
  if ((typeof x === 'object' && x!= null) || typeof x === 'function') {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return
          called = true
          resolvePromise(promise1, y, resolve, reject)
        }, r= > {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}
```



```javascript
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(executor){
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    // 存放成功的回调
    this.onResolvedCallbacks = []
    // 存放失败的回调
    this.onRejectedCallbacks = []
    
    let resolve = (value) => {
      if (value instanceof Promise) {
        return value.then(resolve, reject)
      }
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  static resolve(data) {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
    // 每次调用then都会返回一个新的promise
    let newPromise = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(newPromise, x, resolve, reject)
          } catch(e) {
            reject(e)
          }
        }, 0)
      }
      
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(newPromise, x, resolve, reject)
          } catch(e) {
            reject(e)
          }
        }, 0)
      }
      
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
               resolvePromise(newPromise, x, resolve, reject)
            } catch(e) {
              reject(e)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
               resolvePromise(newPromise, x, resolve, reject)
            } catch(e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    return newPromise
  }
}
```

##### 红绿灯问题

题目：红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用 Promse 实现）

```javascript
function red () {
  console.log('red')
}
function green () {
  console.log('green')
}
function yellow () {
  console.log('yellow')
}
```

利用`then`和递归实现

```javascript
let light = function (time, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb()
      resolve()
    }, time)
  })
}

let step = function () {
  Promise.resolve().then((resolve, reject) => {
    return light(3000, red)
  }).then(() => {
    return light(2000, green)
  }).then(() => {
    return light(1000, red)
  }).then(() => {
    step()
  })
}
step()
```



##### 参考链接

[面试官：“你能手写一个 Promise 吗”](https://zhuanlan.zhihu.com/p/183801144)