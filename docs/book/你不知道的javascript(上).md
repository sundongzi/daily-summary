### LHS与RHS概念以及异常：

#### 概念：当变量出现在赋值操作的左侧时进行LHS查询，当出现在右侧的为RHS查询

```javascript
var a = 2  // 实际上是为了查找a并为它赋值为2  这就是LHS查询
console.log(a) // 实际上是为了查找到a并打印出来 这就是RHS查询
```

**在非严格模式下，进行LHS查询如果找不到便会Undefined，但如果使用RHS进行查询找不到相应变量则会 ReferenceError，但是在严格模式下，都会报 ReferenceError.**

### 变量提升：

```javascript
foo()   // typeError
bar()   // ReferenceError
var foo = function bar(){}
// 这段程序foo被提升到了全局作用域，因此导致不会产生ReferenceError,但是因为foo并没有赋值，因此会出现undefined错误，所以调用foo()，就相当于对undefined进行函数调用
```

#### this指向问题

```Javascript
var Obj = function () {
  this.name = '张三'，
  this.age = 20,
  return {
    name: '李四'
  }
}
var newObj = new Obj()
console.log('姓名：' + newObj.name + '年龄：' + newObj.age) // 姓名：李四 年龄：undefined
// ps: 如果构造器显式地返回一个object类型的对象，那么此次运算最终返回这个对象，而不是我们之前期待的this。
```

