##### 定义

块级格式化上下文，属于页面`CSS`渲染的一部分，用于决定块级盒的布局及浮动相互影响范围的一个区域。

##### 盒模型分类

- 标准盒模型：由【内容、padding、margin、border】组成。通过`CSS`设置的元素宽度也只作用于`内容区域`

​		该模型下元素的宽度 = 内容 + padding + border

- 怪异盒模型（IE盒模型），设置`border-sizing: border-box`可以出现怪异盒模型。

  通过css设置的元素宽度包含：内容区 + padding + border

##### 创建BFC的方式

- 根元素（<html>）
- 浮动元素：float值不为`none`
- 绝对定位元素：position值`fixed或absolute`
- 行内块元素：`display: inline-block`
- overflow：值不为`visible`
- 弹性元素（display）：值为`flex`或`inline-flex`

[具体请参考](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

##### BFC特性

- `BFC`内部的块级盒会在垂直方向上一个接一个排列
- 同一个`BFC`下的相邻块级元素可能会发生margin重叠，创建新的BFC可以避免
- 浮动盒的区域不会和`BFC`重叠[参考示例](https://codepen.io/lycheelee/pen/mdJXaXK?editors=1100)
- 计算`BFC`的高度时，浮动元素也会参与计算[参考示例](https://codepen.io/lycheelee/pen/wvayENb?editors=1100)

##### 需要注意

- 一个元素不能同时存在于两个BFC中

##### 参考链接

[可能是最好的BFC解析了...](https://juejin.cn/post/6960866014384881671)

