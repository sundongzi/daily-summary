##### async

`async`函数返回一个`Promise`对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到`await`就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。必须等到内部所有的`await`命令后面的Promise对象执行完，才会发生状态改变，除非遇到`return`语句或者抛出错误。也就是说，只有`async`函数内部的异步操作执行完，才会执行`then`方法指定的回调函数。

在异步处理上，`async`函数就是Generator函数的语法糖。

`async`函数是基于`Promise`和`Generator`的一层封装。

内置执行器：不像`Generator`函数的执行必须依靠执行器（co）模块

##### 实现原理

就是将`Generator`函数和自动执行器，包装在一个函数里。

##### 解决问题

- 解决回调地域问题
- 内部主动调用`.next`方法

##### Async函数返回值

根据返回值的类型，引起`JS引擎`对返回值处理方式的不同

- return结果值：非`thenable`、非`promise`（不等待）

  ```javascript
  async function testA () {
      return 1;
  }
  ​
  testA().then(() => console.log(1));
  Promise.resolve()
      .then(() => console.log(2))
      .then(() => console.log(3));
  ​
  // (不等待)最终结果👉: 1 2 3
  
  ```

- return结果值：`thenable`（等待1个`then`的时间）

  ```javascript
  async function testB () {
      return {
          then (cb) {
              cb();
          }
      };
  }
  ​
  testB().then(() => console.log(1));
  Promise.resolve()
      .then(() => console.log(2))
      .then(() => console.log(3));
  ​
  // (等待一个then)最终结果👉: 2 1 3
  
  ```

- return结果值：`promise`（等待2个`then`的时间）

  ```javascript
  async function testC () {
      return new Promise((resolve, reject) => {
          resolve()
      })
  }
  
  testC().then(() => console.log(1));
  Promise.resolve()
      .then(() => console.log(2))
      .then(() => console.log(3));
      
  // (等待两个then)最终结果👉: 2 3 1
  
  
  async function testC () {
      return new Promise((resolve, reject) => {
          resolve()
      })
  } 
  
  testC().then(() => console.log(1));
  Promise.resolve()
      .then(() => console.log(2))
      .then(() => console.log(3))
      .then(() => console.log(4))
  
  // (等待两个then)最终结果👉: 2 3 1 4
  
  ```

##### await 右值类型区别（执行顺序）

- await 后面接非`thenable`类型，会立即向微任务队列添加一个微任务`then`，但不需等待。

  ```javascript
  async function test () {
      console.log(1);
      await 1;
      console.log(2);
  }
  ​
  test();
  console.log(3);
  // 最终结果👉: 1 3 2
  
  ```

  ```javascript
  function func () {
      console.log(2);
  }
  ​
  async function test () {
      console.log(1);
      await func();
      console.log(3);
  }
  ​
  test();
  console.log(4);
  ​
  // 最终结果👉: 1 2 4 3
  
  ```

  ```javascript
  async function test () {
      console.log(1);
      await 123
      console.log(2);
  }
  ​
  test();
  console.log(3);
  ​
  Promise.resolve()
      .then(() => console.log(4))
      .then(() => console.log(5))
      .then(() => console.log(6))
      .then(() => console.log(7));
  ​
  // 最终结果👉: 1 3 2 4 5 6 7
  
  ```

- await后面接`thenable`类型，需要等待一个`then`时间之后执行

  ```javascript
  async function test () {
      console.log(1);
      await {
          then (cb) {
              cb();
          },
      };
      console.log(2);
  }
  ​
  test();
  console.log(3);
  ​
  Promise.resolve()
      .then(() => console.log(4))
      .then(() => console.log(5))
      .then(() => console.log(6))
      .then(() => console.log(7));
  ​
  // 最终结果👉: 1 3 4 2 5 6 7
  
  ```

- await后面接`Promise`类型，无需等待

- await后面如果不是`promise`而是普通函数时，后面的普通函数实际上看成由`Promise.resolve()`包裹后执行。

  ```javascript
  await console.log(2)
  await Promise.resolve(console.log(2))
  ```

  

##### 参考链接

[你不知道的 async、await 魔鬼细节](https://juejin.cn/post/7194744938276323384)