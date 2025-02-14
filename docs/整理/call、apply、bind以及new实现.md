#### call

##### 定义：`call`方法使用一个指定的`this`值和单独给出的一个或多个参数来调用一个函数。

例子

```javascript
var obj = {
  name: "张三",
};

function fn() {
  console.log(this.name);
}

fn.call(obj); // 张三
```

作用：

- 改变了`this`指向，指向到`obj`
- 执行函数fn

可以理解为以下形式

```javascript
var obj = {
  name: "张三",
  fn: function () {
    console.log(this.name);
  },
};

obj.fn(); // 张三
```

以上操作虽然将`this`指向了obj，但是在obj上面扩展了fn函数，这显然是不行的，但如果把fn函数执行完成之后删掉不就可以了嘛

实现

- 不管是引用数据类型还是原始数据类型，它们的方法都是定义在`原型对象`上面的
- 方法中的`this`指向的是谁调用这个方法

```javascript
Function.prototype.myCall = function (context) {
  // 判断调用对象
  if (typeof this !== 'function') {
    throw new Error("Type error");
  }
  // 兼容为传参的情况
  context = context || window
  // 获取参数
  let args = [...arguments].slice(1)
  // 缓存结果
  let result = null
  const symbolKey = Symbol()
  context[symbolKey] = this
  result = context[symbolKey](...args)
  delete context[symbolKey]
  return result
}
```

#### apply

##### 定义：该方法调用一个具有给定`this`值的函数，以及以一个数组或一个类数组对象)的形式提供的参数并调用相应函数。该方法与`call`方法的区别在于，`call`方法接受的是一个参数列表，而`apply`方法接受的是一个包含多个参数的数组。

实现

```javascript
Function.prototype.myApply = function (context) {
	if (typeof this !== 'function') {
    throw new Error("Type error")
  }
  context = context || window
  let result = null
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  // 执行要被调用的方法
  if (arguments[1]) {
    result = context[fnSymbol](...arguments[1]);
  } else {
    result = context[fnSymbol]();
  }
  delete context[fnSymbol]
  return result
}
```

#### bind

##### 定义：该方法创建一个新的函数，在`bind()`被调用时，这个新函数的`this`被指定为`bind()`的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

##### 示例

```javascript
let obj = {
	name: "张三",
	getName () {
		console.log(this.name)
	}
}
obj.getName() // 张三

let obj1 = {
  name: '李四'
}
let fn = obj.getName.bind(obj1)
fn()  // 李四
```

但以上会存在一个问题：

```
一个绑定函数也能使用 new 操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
```

```javascript
function getName () {
  console.log('new', this.name)
}
let obj1 = {
  name: '李四'
}
let Fn = getName.bind(obj1);
let obj = new Fn();  // new undefined
```

##### 实现

1. 指定this
2. 传入参数
3. 返回一个函数
4. 兼容`new`关键字

```javascript
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error("Type error")
  }
  const args = [...arguments].slice(1),
  const fn = this;
  return function Fn () {
    return fn.apply(
       this instanceof Fn ? this : context,
       args.concat(...arguments)
    )
  }
}
```

#### call、apply、bind区别

- 三者都可以修改 `this` 指向
- 三者第一个参数都是`this`要指向的对象，如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`
- 三者都可以传参，但是`apply`是数组，而`call`是参数列表，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入
- `bind`是返回绑定this之后的函数，`apply`、`call` 则是立即执行

#### new实现

1. 首先创建一个空对象
2. 根据原型链，设置空对象的`__propto__`为构造函数的`prototype`
3. 构造函数的 `this` 指向这个对象，执行构造函数的代码（为新对象添加属性）
4. 判断函数的返回值类型，如果是引用类型则直接返回

```javascript
function myNew (context) {
  let obj = new Object()
  obj.__proto__ = context.prototype
  const res = context.apply(obj, [...arguments].slice(1))
  return typeof res === 'object' ? res : obj
}
```

#### 参考链接

[解析bind原理，并手写bind实现](https://kgithub.com/sisterAn/JavaScript-Algorithms/issues/81)

[面试官：bind、call、apply区别？如何实现一个bind？](https://vue3js.cn/interview/JavaScript/bind_call_apply.html#%E4%B8%80%E3%80%81%E4%BD%9C%E7%94%A8)

[new 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)