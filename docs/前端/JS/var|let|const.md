```javascript
let a = 123
```

1. 为变量a创建一个唯一的标识符
2. 在内存中分配一个地址（在运行时分配）
3. 将值123存储在分配的地址上

##### a等于保存值123的内存地址

```javascript
let b = a
```

##### 以上相当于把变量b指向a的内存地址

```javascript
a = a+1 // 相当于重新给a在内存中分配了一个新地址
// a=124; b=123
```

#### let vs const

注意当某个变量的值发生改变，改变的是`内存地址`，let允许改变内存地址，const不允许改变内存地址

```javascript
const arr = []
arr.push(1) // 此刻内存地址并没有发生改变，只是将值放在堆中存在的数组

arr = ['222'] // 此刻内存地址发生变化，导致报错
```



#### 引用计数垃圾收集算法

![image-20210425170748480](/Users/sundong/Library/Application Support/typora-user-images/image-20210425170748480.png)

#### 标记-清除算法

#### 参考链接：

[从内存角度理解let和const的意义](https://zhuanlan.zhihu.com/p/62449359)