简单举个例子：

HTML：

```html
<div class="text" id="text">
  文本
</div>
```

CSS:

```css
#text {
  color: red
}
.text {
  color: blue
}
```

以上最终文本应该是什么颜色呢？答案是红色。大家可能都知道`ID选择器`的优先级会比`类名的选择器`优先级高，所以最终颜色为红色。

#### 优先级的计算规则

大家写过css的应该都知道，css的优先级关系如下：

```
内联样式 > ID选择器 > 类名选择器 > 标签（暂且先不考虑!important的情况）
```

但是浏览器具体的优先级算法是什么样的呢？《CSS REFACTORING》中提到了算法的过程。

A specificity is determined by plugging numbers into (a, b, c, d):

1. ##### If the styles are applied via the style attribute, a=1; otherwise, a=0

2. ##### b is equal to the number of ID selectors present.

3. ##### c is equal to the number of class selectors, attribute selectors, and pseudoclasses present.

4. ##### d is equal to the number of type selectors and pseudoelements present.

意思就是：

优先级是由 `a` 、`b`、`c`、`d` 的值来决定的，其中它们的值计算规则如下：

1. 如果存在内联样式，那么`a=1`，否则`a=0`

2. `b`的值等于`ID选择器`出现的次数

3. `c`的值等于`类选择器`出现的次数 + `伪类`出现的次数 + `属性选择器`出现的次数

   ![image-20220511142002737](/Users/sundong/Library/Application Support/typora-user-images/image-20220511142002737.png)

4. `d`的值等于`标签选择器`出现的次数 + `伪元素`出现的次数

   ![image-20220511141927204](/Users/sundong/Library/Application Support/typora-user-images/image-20220511141927204.png)

再举个🌰：

```css
#text > ul > li > a.link {}
```

使用上面的算法可得：

1. 因为没有内联样式，所以a=0
2. `ID选择器`出现的次数为1，所以b=1
3. `类选择器`出现的次数为1，所以c=1
4. `标签选择器`出现的次数为3，所以d=3

以上可以简写为：(0,1,1,3)



到这里大家可能已经知道优先级是如何进行计算的了，但是知道怎么算该如何比较两个优先级的高低呢？

##### 比较的规则是：从左向右依次进行比较，较大的胜出，如果相等则继续往右移一位进行比较。如果四位全部相同，则后面的会覆盖前面的。

继续举🌰：

HTML:

```html
<div id="parent" class="parent">
  <div class="child">
    123
  </div>
  <div class="child">
    456
  </div>
</div>
```

CSS:

```css
#parent {
  .child {
    color: red
  }
}

.parent {
  .child {
    color: blue
  }
}
```

算出`#parent .child`的优先级为`(0, 1, 1, 0)`，`.parent .child`的优先级为`(0, 0, 2, 0)`。可以算出左边第一位都是0，那么就去比较第二位，前者的第二位为1，后者的为0。所以前者的优先级比后者的大，因此为红色。

#### 优先级的特殊情况

经过上面的优先级计算规则可知，内联样式的优先级最高。但是`!important`的优先级比内联样式的优先级还要高，如果不是为了要覆盖内联样式，应该尽量避免使用`!important`。

当然，可能有的人会想，是不是在内联样式中使用了`!important`，外部无论怎么修改都没有办法了呢。确实是这样，因此建议大家千万不要再内联样式中使用`!important`。

但之前遇到过一个小问题跟大家分享一下

HTML:

```html
<div class="text" style="width: 200px!important">
  
</div>
```

CSS:

```css
.text {
  max-width: 100px;
}
```

其实以上`.text`的宽度应该是100px而不是200px，`max-width`覆盖了内联样式中的`!important`。当然这并不是优先级的问题，因为优先级比较的是相同属性的，而`max-width`和`width`并不是同一个属性。之所以说这个例子，是要告诉大家，有时候不管怎么设置容器的 `width` 都不生效，检查一下是否存在 `max-width`属性。

