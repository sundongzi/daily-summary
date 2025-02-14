##### 定义：

弹性布局

##### flex成分属性

- Flex-grow：增长系数
- Flex-shrink：收缩规则，仅在默认宽度之和大于容器宽度的时候才会发生收缩
- Flex-basis：指定flex元素在主轴方向上的初始大小

##### 缩写规则

1. 单值情况

   - 一个无单位数，会被当做flex：<number> 1 0

     ```css
     flex:1  => flex: 1 1 0
     ```

   - 一个有效的宽度值，会被当做`flex-basis`的值

     ```css
     flex: 20px => flex: 1 1 20px
     ```

   - none

     ```css
     flex: none => flex: 0 0 auto
     ```

   - auto

     ```css
     flex: auto => flex: 1 1 auto
     ```

2. 双值情况：第一个值必须为`无单位数`，并且会被当做`flex-grow`的值。第二个值必须为以下之一：

   - 一个无单位数：会被当做`flex-shrink`的值

     ```css
     flex: 1 1 => flex: 1 1 0
     ```

   - 一个有效的宽度值：会被当做`flex-basis`的值

     ```css
     flex: 1 20px => flex: 1 1 20px
     ```

3. 三值情况

   - 第一个值必须为无单位的数（正数），会被当做`flex-grow`的值
   - 第二个值必须为无单位的数（正数），会被当做`flex-shrink`的值
   - 第三个值必须为一个有效的宽度值，会被当做`flex-basis`的值

##### 参考链接

[flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)