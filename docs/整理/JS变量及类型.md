##### 数据类型

目前`javascript`数据类型共分为`8`种，其中又分为两大类，分别是`原始数据类型`与`对象（引用）数据类型`。

1. 原始数据类型（基本数据类型 7 种）

   - String
   - Number
   - Boolean
   - null
   - undefined
   - symbol
   - BigInt

   Symbol：表示独一无二的值 [ECMAScript6-symbol](https://es6.ruanyifeng.com/#docs/symbol)

   BigInt：是一种内置对象，可以表示任意大的整[BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

2. 对象数据类型（1种）

   - Object

3. 包装数据类型（三种）：属于特殊的引用类型

   - String
   - Number
   - Boolean

   ```javascript
   true === new Boolean(true); // false
   123 === new Number(123); // false
   'ConardLi' === new String('ConardLi'); // false
   console.log(typeof new String('ConardLi')); // object
   console.log(typeof 'ConardLi'); // string
   ```

   ```javascript
   原始类型与包装类型的主要区别在于对象的生存期，使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中，而原始类型则只存在于一行代码的执行瞬间，然后立即被销毁，这意味着我们不能在运行时为原始类型添加属性和方法。
   
   let name = '张三'
   name.age = 18
   console.log(name.age)  // undefined
   ```

##### 装箱和拆箱

- 装箱转换：把原始类型转换包装类型
- 拆箱处理：把引用类型处理为原始类型

针对于原始类型，每当操作一个原始数据类型时，后台会自动创建一个包装类型的对象，从而能够调用相应的方法和属性。

```javascript
let str = 'javascript'
str.substring(4)  // script
```

事实上以上操作经历了以下几个过程：

- 创建一个`String`的包装类型实例
- 调用实例上的`substring`方法
- 销毁实例

也就是说当我们使用原始数据类型调用方法时会自动的执行`装箱`和`拆箱`的操作。

从引用类型到基本类型的转换，也就是拆箱的过程中，会遵循`ECMAScript规范`规定的`toPrimitive`原则，一般会调用引用类型的`valueOf`和`toString`方法，你也可以直接重写`toPeimitive`方法。一般转换成不同类型的值遵循的原则不同，例如：

- 引用类型转换为`Number`类型，先调用`valueOf`，再调用`toString`
- 引用类型转换为`String`类型，会先调用`toString`，再调用`valueOf`

```javascript
let obj = {
  valueOf () {
    console.log('valueOf')
    return 100
  },
  toString () {
    console.log('string')
    return '李四'
  }
}
console.log(obj - 30)
// valueOf
// 70

console.log(`${obj}哥`)
// string
// 李四哥
```

[Symbol.toPrimitive](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)

```javascript
const obj2 = {
  [Symbol.toPrimitive]: () => { console.log('toPrimitive'); return 123; },
};
console.log(obj2 - 1);   // toPrimitive   122
```

如果不存在`valueOf`和`toString`方法，或者没有返回原始数据类型，则会抛出`TypeError`错误。

```javascript
const obj3 = {
  valueOf: () => { console.log('valueOf'); return {}; },
  toString: () => { console.log('toString'); return {}; },
};
console.log(obj3 - 1);  
// valueOf  
// toString
// TypeError
```

除了程序中的自动装箱和拆箱操作，我们也可以手动进行装箱和拆箱操作。比如可以直接调用包装类型的`valueOf`和`toString`方法进行拆箱操作。

```javascript
// 装箱
var num = new Number("123");  

// 拆箱
console.log( typeof num.valueOf() ); //number
console.log( typeof num.toString() ); //string
```

##### 原始数据类型与对象数据类型区别

1. 存储方式不同

   首先内存空间分为两种，分别是`栈内存`与`堆内存`。

   `javascript`中原始类型存储在`栈内存中`。

   栈内存：

   - 储存值的大小固定
   - 空间小
   - 可以直接操作其保存的变量，其运行效率高
   - 由系统自动分配存储空间

   ```javascript
   let a,
       b = null,
       c = true,
       d = 123,
       str = 'ConardLi';
   ```

   ![image-20230104160959449](/Users/sundong/Library/Application Support/typora-user-images/image-20230104160959449.png)

   如果把上述变量中的`str + '6'`，发现str的值变成了`ConardLi6`，由于栈中的内存空间的大小是固定的，那么注定了存储在栈中的变量就是不可变的。其实是在栈中新开辟了一块空间用于存储`ConardLi6`，然后把变量str指向了新开辟的空间地址。

   ![image-20230104161440789](/Users/sundong/Library/Application Support/typora-user-images/image-20230104161440789.png)

   堆内存：

   - 存储的值大小不定，可动态调整
   - 空间较大，运行效率低
   - 无法直接操作其内部存储，使用引用地址读取
   - 通过代码分配储存空间

   对象（引用）类型的值储存在堆内存中，在栈中只存储了引用地址，该地址指向堆内存中的值

   ```javascript
   var obj1 = {name:"ConardLi"}
   var obj2 = {age:18}
   var obj3 = function(){...}
   var obj4 = [1,2,3,4,5,6,7,8,9]
   ```

   ![image-20230104175807017](/Users/sundong/Library/Application Support/typora-user-images/image-20230104175807017.png)

2. 复制方式

   原始数据类型：

   ```javascript
   var name = 'ConardLi';
   var name2 = name;
   
   
   name2 = 'code秘密花园';
   console.log(name); // ConardLi;
   ```

   ![image-20230104180518672](/Users/sundong/Library/Application Support/typora-user-images/image-20230104180518672.png)

   原始数据类型复制时，会重新开辟出一块空间用来存储`ConardLi`，虽然变量`name`和`name2`的值一样，但是指向的内存空间完全不同。

   因此当你修改变量`name2`的值时丝毫不会影响变量`name`。

   

   对象数据类型：

   ```javascript
   var obj = {name:'ConardLi'};
   var obj2 = obj;
   obj2.name = 'code秘密花园';
   console.log(obj.name); // code秘密花园
   ```

   ![image-20230104181002124](/Users/sundong/Library/Application Support/typora-user-images/image-20230104181002124.png)

   当你复制对象数据类型时，其实复制的是存储在栈中的引用地址，因此当时修改变量`obj`时，因为引用地址对应堆内存中的值一样，因此变量`obj2`的值也会跟着变化。

3. 对比方式

   ```javascript
   var name = 'ConardLi';
   var name2 = 'ConardLi';
   console.log(name === name2); // true
   
   var obj = {name:'ConardLi'};
   var obj2 = {name:'ConardLi'};  // 会在栈中生成新的引用地址
   console.log(obj === obj2); // false
   ```

   ![image-20230104181445967](/Users/sundong/Library/Application Support/typora-user-images/image-20230104181445967.png)

   原始数据类型对比的就是值，如果值相等，则返回`true`。

   对象数据类型对比的是存储在栈中的引用地址，引用地址相同则返回`true`。

4. 值传递和引用地址传递

   ```javascript
   let name = 'ConardLi';
   function changeValue(name){
     name = 'code秘密花园';  // 局部变量
   }
   changeValue(name);
   console.log(name);
   ```

   上面的例子打印结果是`ConardLi`，说明函数参数仅仅是被传入的变量复制给了的一个局部变量，改变这个局部变量并不是影响外部变量。

   ```javascript
   let obj = {name:'ConardLi'};
   function changeValue(obj){
     obj.name = 'code秘密花园';
   }
   changeValue(obj);
   console.log(obj.name); // code秘密花园
   ```

   当函数参数为引用类型时，从表面上看，好像引用类型就是按照引用地址传递的。但事实并不是，当函数参数为引用类型时，同样将参数复制了一个副本到局部变量，只不过复制的这个副本是`指向堆内存中的地址`而已，我们在函数内部对对象的属性进行操作，实际上和外部变量指向堆内存中的值相同，但是这并不代表着引用传递。

   ```javascript
   let obj = {};
   function changeValue(obj){
     obj.name = 'ConardLi';
     obj = {name:'code秘密花园'}; // 该变量和外部的变量并不是同一个对象，在栈中的引用地址也不一样
   }
   changeValue(obj);
   console.log(obj.name); // ConardLi
   ```

   函数参数传递的并不是变量的`引用`，而是变量拷贝的副本，当变量是原始类型时，这个副本就是值本身，当变量是引用类型时，这个副本是指向堆内存的地址。所以，再次记住：

   ```
   ECMAScript中所有的函数的参数都是【按值传递】的。
   ```

##### 数据类型判断方法

1. typeof

   主要用于判断`原始数据类型`以及`函数`，其返回的结果为字符串。

   ```javascript
   typeof '123'   // 'string'
   typeof 123     // 'number'
   typeof true    // 'boolean'
   typeof undefined // 'undefined'
   typeof Symbol() // 'symbol'
   
   typeof function () {}  // 'function'
   ```

   但针对于引用类型，则并不适合，因为除函数以外的所有引用类型，返回结果都是`object`

   ```javascript
   typeof [] // 'object'
   typeof {} // 'object'
   typeof new Date() // 'object'
   typeof /^\d*$/; // 'object' 
   ```

   有一点需要注意，针对原始类型`null`，返回的结果为`object`，这是`javascript`初版时遗留下来的Bug，考虑到如果修改会存在大量的兼容问题，因此就一直没有修复。

   ```javascript
   typeof null // 'object'
   ```

2. instanceof（不推荐）

   用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上，可以判断出引用类型具体是什么类型的对象，但不能用于判断原始数据类型。

   ```javascript
   [] instanceof Array   // true
   {} instanceof Object  // true
   new RegExp() instanceof RegExp // true
   ```

   ```javascript
   [] instanceof Object  // true
   function (){} instanceof Object  // true
   ```

3. Object.prototype.toString.call()（推荐）

   建议使用`Object`原型上的`toString`方法，虽然每一个引用类型都有`toStirng`方法，但是大部分引用类型（比如：Array、Date）等都重写了`toString`方法，因此调用`Object`原型上的`tostring`方法会比较准确，最终返回的结果是`'[object type]'`，其中`type`是对象的类型。

   ![image-20230105101709553](/Users/sundong/Library/Application Support/typora-user-images/image-20230105101709553.png)

##### 数据转换

1. 如果发生隐式转换，那么各种类型转换符合如下：

   ![image-20230105145730051](/Users/sundong/Library/Application Support/typora-user-images/image-20230105145730051.png)

2. 针对运算符`+`，需要注意：

   - 当一侧为`String`类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型
   - 当一侧为`Number`类型，另一侧为原始类型（除字符串类型），则将原始类型转换为`Number`类型
   - 当一侧为`Number`类型，另一侧为引用类型，将引用类型和`Number`类型转换成字符串后拼接

   ```javascript
   123 + '456'   // 123456
   123 + null    // 123
   123 + {}      // 123[object Object]
   ```

3. `==`

- NaN

  `NaN`与任何类型进行比较都返回`false`（包括它自己）

  ```javascript
  NaN == NaN   // false
  ```

- Boolean

  `Boolean`与其他类型进行比较时，会先转换成`Number`类型

  ```javascript
  true == 1  // true
  false == 0 // true
  true == ['1']  // true
  ```

  但有一点需要注意`undefined`、`null`虽然也都是假值，但是它们与`Boolean`类型进行比较时，`Boolean`会先转换成`Number`类型。

  ```javascript
  false == undefined  // false
  false == null       // false
  ```

  上述例子中虽然`undefined`与`null`都属于假值，但是最终结果返回`false`。因为`false`率先被转换成了`Number`类型，也就是0，因此最终结果为`false`。

- String & Number

  `String`类型与`Number`类型进行比较时，会先把`String`类型转换成为`Number`类型，然后在进行比较。

  ```javascript
  '123' == 123  // true
  ```

- null & undefined

  `null`类型与`undefined`类型进行比较时返回结果为`true`，与其他任何类型进行比较时都返回`false`。

  ```javascript
  null == undefined   // true
  null == 11   // false
  undefined == '12'  //false
  ```

- 原始类型与引用类型

  当原始类型和引用类型做比较时，对象类型会依照[ToPrimitive](https://blog.csdn.net/qq_54954413/article/details/125807796)规则转换为原始类型:

  ```javascript
    '[object Object]' == {} // true
    '1,2,3' == [1, 2, 3] // true
  ```

  再看下面这个例子：

  ```javascript
  [] == ![]   // true
  ```

  以上返回结果为`true`，首先引用数据类型转换为`boolean`数据类型时，会先被转换为`true`，然后由于取反`!`操作，因此`![]`返回`false`，`false`属于`boolean`类型，因此又被转换为0。至于等式左边`[]`，按照`ToPrimitive`原则会先转换为`'0'`，然后把`'0'`转换为0。最终得到`0 == 0`，因此结果为`true`。

  ```javascript
  true == []  // false [] => '0' => 0        1 == 0
  true == ![]  // false   引用类型转换为boolean类型时，会先被转换为true，然后由于取反操作   true == !true
  ```

##### 精度丢失

```javascript
0.1 + 0.2 === 0.3 // false
```

计算机存储双精度浮点数时先把十进制数转换为二进制的`科学计数法`的形式，然后计算机以自己的规则`{符号位+(指数位+指数偏移量的二进制)+小数部分}`存储二进制的科学记数法。

因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差。

- [IEEE 754标准](https://baike.baidu.com/item/IEEE%20754/3869922#:~:text=IEEE%20754%E6%A0%87%E5%87%86%E8%A7%84%E5%AE%9A%EF%BC%9A,%E9%9D%9E%E8%A7%84%E7%BA%A6%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%B5%AE%E7%82%B9%E6%95%B0%E7%9A%84%E6%8C%87%E6%95%B0%E5%81%8F%E7%A7%BB%E5%80%BC%E6%AF%94%E8%A7%84%E7%BA%A6%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%B5%AE%E7%82%B9%E6%95%B0%E7%9A%84%E6%8C%87%E6%95%B0%E5%81%8F%E7%A7%BB%E5%80%BC%E5%B0%8F1%20%E3%80%82%20%E4%BE%8B%E5%A6%82%EF%BC%8C%E6%9C%80%E5%B0%8F%E7%9A%84%E8%A7%84%E7%BA%A6%E5%BD%A2%E5%BC%8F%E7%9A%84%E5%8D%95%E7%B2%BE%E5%BA%A6%E6%B5%AE%E7%82%B9%E6%95%B0%E7%9A%84%E6%8C%87%E6%95%B0%E9%83%A8%E5%88%86%E7%BC%96%E7%A0%81%E5%80%BC%E4%B8%BA1%EF%BC%8C%E6%8C%87%E6%95%B0%E7%9A%84%E5%AE%9E%E9%99%85%E5%80%BC%E4%B8%BA-126%EF%BC%9B%E8%80%8C%E9%9D%9E%E8%A7%84%E7%BA%A6%E7%9A%84%E5%8D%95%E7%B2%BE%E5%BA%A6%E6%B5%AE%E7%82%B9%E6%95%B0%E7%9A%84%E6%8C%87%E6%95%B0%E5%9F%9F%E7%BC%96%E7%A0%81%E5%80%BC%E4%B8%BA0%EF%BC%8C%E5%AF%B9%E5%BA%94%E7%9A%84%E6%8C%87%E6%95%B0%E5%AE%9E%E9%99%85%E5%80%BC%E4%B9%9F%E6%98%AF-126%E8%80%8C%E4%B8%8D%E6%98%AF-127%E3%80%82)

  IEEE 754规定了四种表示浮点数值的方式：单精确度（32位）、双精确度（64位）、延伸单精确度（43比特以上，很少使用）与延伸双精确度（79比特以上，通常以80位实现）。

  在`javascript`中，针对`Number`数值类型，采用的是`64位双精度浮点数编码`。

  该标准规定了四种表示浮点数值的方式，优点是可以归一化处理整数和小数。

- 二进制转换为十进制

  以`10101111.1101`为例：

  1. 针对整数部分`10101111`的计算逻辑

     ```javascript
     // 10101111
     // 从右往左
     
     1 * Math.pow(2,0) + 1 * Math.pow(2,1) + 1 * Math.pow(2,2) + 1* Math.pow(2,3) + 0 * Math.pow(2,4) + 1 * Math.pow(2,5) + 0 * Math.pow(2,6) + 1 * Math.pow(2,7)
     = 1 + 2 + 4 + 8 + 0 + 32 + 0 + 128
     = 175
     ```

  2. 针对小数部分`1101`的计算逻辑

     ```javascript
     // 1101
     // 从左往右
     
     1 * Math.pow(2,-1) + 1 * Math.pow(2,-2) + 0 * Math.pow(2,-3) + 1 * Math.pow(2,-4)
     = 0.8125
     ```

- 十进制转换为二进制

  以`175.8125`举例：

  1. 针对整数部分`175`，采取`除2取余，逆序排列`

     ```javascript
     175 / 2 = 87     1
     87 / 2  = 43     1
     43 / 2  = 21     1
     21 / 2  = 10     1
     10 / 2  = 5      0
     5 / 2   = 2      1
     2 / 2   = 1      0
     1 / 2   = 0      1
     ```

     最终得到`10101111`

  2. 针对小数部门`8125`，采取`乘2取整，顺序排列`

     ```javascript
     0.8125 * 2 = 1.625
     0.625 * 2 = 1.25
     0.25 * 2 = 0.5
     0.5 * 2 = 1
     ```

     最终得到`1101`

  3. 最后把结果进行拼接得到`10101111.1101`

- 科学计数法

  1. 十进制的175.8125，转换为科学计数法为`1.758125 * 10^2`
  2. 十进制 175.8125 对应的二进制（先把整数位转为二进制，再把小数位转为二进制，最后把结果合并） 10101111.1101，进一步可以使用二进制的科学计数法来表示，对应的二进制科学计数法为 1.01011111101 * 2^7。跟十进制类似，将底数 10 换为了 2，`7` 则代表小数点往右多少位。

- 64位比特分为三个部分

  - 符号位S：第 1 位是正负数符号位（sign），0代表正数，1代表负数

  - 指数位E：中间的 11 位存储指数（exponent），用来表示次方数，可以为正负数。在双精度浮点数中，指数的固定偏移量为`1023`，小数点往右移动`-`，往左移动`+`，最后与固定偏移量（1023）进行相加。

  - 尾数位M：最后的 52 位是尾数（mantissa），超出的部分自动进一舍零，不足52位时进行补0操作。

    ![image-20230106155759572](/Users/sundong/Library/Application Support/typora-user-images/image-20230106155759572.png)

    ![image-20230106155857193](/Users/sundong/Library/Application Support/typora-user-images/image-20230106155857193.png)

##### 参考链接

[【JS进阶】你真的掌握变量和类型了吗](https://juejin.cn/post/6844903854882947080#heading-3)

[javascript 双精度浮点数剖析](https://zhuanlan.zhihu.com/p/351127362)