1. let与const

2. 模块化（export与import）

3. 变量解构

4. 扩展运算符（...）

5. async与await

6. includes方法

7. 对象方法扩展

   ```es6
   Object.keys()
   Object.values()
   Object.entries()
   ```

8. 模板字符串

9. Promise

   ``` 
   1、三种状态
   2、两个回调函数：resolve与reject
   3、then方法链式调用
   4、考虑then方法调用时，状态在pending时的情况（通过定义状态成功以及失败两个数据进行存储）
   5、then方法返回值的四种情况：
   	 返回的是本身（导致循环调用，直接return）
   	 返回A+规范的promise：直接获取then中的返回值，需要注意此处then可能返回值还是promise对象，因此需要递归处理
   	 返回其他规范的promise：需要注意可能存在多次调用多次执行的问题，应该通过定义一个变量进行控制。
   	 返回普通的值：直接resolve(结果值)
   ```

   其他规范的promise：

<img src="/Users/sundong/Library/Application Support/typora-user-images/image-20230617131913943.png" alt="image-20230617131913943" style="zoom:30%;" />