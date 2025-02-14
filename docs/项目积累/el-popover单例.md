https://github.com/ElemeFE/element/issues/9498

#### el-table渲染优化

Q：为什么要调用一个popover?

因为公司前段时间遇到过表格中如果嵌套使用了`el-select`，并且`el-select`中数据量比较大，就会导致页面明显出现卡顿。

问题分析：

通过控制台发现，每次点击一个下拉框都会创建一个`el-popover`的相关DOM，问题找到了，那么如果避免多次重复创建`el-popover`呢

示例：

![image-20211208183726269](/Users/sundong/Library/Application Support/typora-user-images/image-20211208183726269.png)

解决思路：

通过div + el-popover进行模拟，表格内使用div，在外部创建el-popover单例并注册ref，在表格的template中注册click事件，点击div获取popover实例并调用UpdatePopper()

![image-20211208203112675](/Users/sundong/Library/Application Support/typora-user-images/image-20211208203112675.png)