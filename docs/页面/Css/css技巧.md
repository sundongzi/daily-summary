### 我不知道的一些css技巧

#### 一、 margin：

1、作为外边距，`margin`属性并不参与盒子宽度的计算,但通过设置`margin`为负值，可以改变元素水平方向上的尺寸，但是这种情况只会发生在`常规流布局`的时候，即元素`width`的默认是`auto`并且可以撑满一行的时候。如果元素设定了宽度或者元素设置了`float:left/position:absolute`这样的属性改变了常规流体布局，那么`margin`为负值也无法改变元素的宽度了。。

2、块级元素的垂直方向会发生`margin`合并

- 相邻兄弟元素之间`margin`合并
- 父元素`margin-top`和子元素`margin-top`,父元素`margin-bottom`和子元素`margin-bottom`
- 空块级元素自身的`margin-top`和`margin-bottom`合并

解决方案，只需要把发生重叠的两个元素之一生成BFC就可以了：

- 对于上下相邻的两个元素，只要把其中一个设置为`display:inline-block`
- 给父元素设置`border`/`padding`/`overflow: hidden`/`display: inline-block`/`float`/`position:absolute`等，子元素的`margin`就不会与父元素重叠。
- 给子元素设置display: inline-block，子元素的margin就不会与父元素重叠。

3、`margin`的百分比值跟`padding`一样，垂直方向的`margin`和水平方向上的一样都是相对于`父元素宽度`计算的

4、`margin:auto`能在块级元素设定宽高之后自动填充剩余宽高。自动填充触发的前提是元素在对应的水平或垂直方向具有自动填充的特性，默认情况下块级元素的高度并不具备这个条件。`auto`的特性是如果两侧都是auto，则两侧均分剩余宽度；如果一侧`margin`是固定的，另一侧的是`auto`，则这一侧`auto`为剩余宽度。如果需要元素在垂直方向上具有自动填充特性，可以利用`flex`布局或者使用`position`实现。

##### 注意：在flex布局下设置了`margin:auto`后再设置父元素的`justify-content`或者子元素`align-self`则不生效，这里存在优先级的问题，`margin`的优先级更高一些，`margin`实现等分等高

#### 二、 定位

### 1、绝对定位(`absolute`)

定义：和浮动元素一样，绝对定位也具有块状化、BFC、包裹性、脱离文档流、没有`margin`合并的特性。

注意：但和浮动不同的是，绝对定位是完全的脱离文档流。大家还记得浮动产生的目的就是为了实现文字环绕效果，所以浮动元素虽然脱离了文档流，但是后面的文字还是会环绕在浮动元素周围。而绝对定位一但产生，就不会再对周围元素产生任何影响，并且两者包含块不同，浮动元素包含块只能是父级元素，绝对定位的包含块则是距离最近的`position`不为`static`的祖先元素

##### 绝对定位和`overflow:hidden`的关系：

###### 当`overflow: hidden`元素在绝对定位元素和其包含块之间的时候，绝对定位元素不会被剪裁。

![image-20191120165207705](/Users/sundong/Library/Application Support/typora-user-images/image-20191120165207705.png)

##### 流体特性：

 当绝对定位元素的水平方向(`left/right`)或垂直方向(`top/bottom`)的两个定位属性同时存在的时候，绝对元素在该方向上便具有了流体特性。此时的`width/height`属性具有自动撑满的特性，和一个正常流的`div`元素的`width`属性别无二致。

##### 2、固定定位(position:`fixed`)

定义：相对于屏幕视口的位置来指定元素位置，祖先元素设置`position:relative`并不会对其产生影响

##### 注意： position:fixed降级问题，如果父元素中有使用transform，fixed效果会降级为absolute

##### 3、粘性定位`position:sticky`

定义：可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位

```css
#one {position: sticky;top: 10px}
```

在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。须指定 [`top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top), [`right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right), [`bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom) 或 [`left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left) 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

##### 注意：当 `position: sticky` 的父元素的 `overflow` 属性设置了默认值 `visible` 以外的值时，`position: sticky` 将失效。[兼容性]([https://caniuse.com/#search=position%3A%20sticky](https://caniuse.com/#search=position%3A sticky))不太好

#### 三、相邻兄弟选择器`+`(见demo)

定义：介于两个选择器之间，当第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中

![img-20191117103750328](/Users/sundong/Library/Application Support/typora-user-images/image-20191117103750328.png)

![image-20191117103724187](/Users/sundong/Library/Application Support/typora-user-images/image-20191117103724187.png)

#### 四、target选择器

![img](https://user-gold-cdn.xitu.io/2019/10/10/16db44433839e942?imageslim)

#### 五、outline属性

定义：`outline`属性是用来设置一个或多个单独的轮廓属性的[简写属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties) ， 例如 [`outline-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-style), [`outline-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-width) 和 [`outline-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-color)。多数情况下，简写属性更加可取和便捷

![image-20191117134248981](/Users/sundong/Library/Application Support/typora-user-images/image-20191117134248981.png)

![image-20191117134320172](/Users/sundong/Library/Application Support/typora-user-images/image-20191117134320172.png)

#### 六、元素隐藏方法

1.元素不可见、不占据空间、资源会加载，DOM可访问，使用：`display:none`

2.元素不可见、不能点击、但占据空间、资源会加载，使用：`visibility:hidden`

3.元素不可见、不占据空间、显示隐藏时可以有`transition`的淡入淡出的效果，应该使用`visibility:hidden`而不是`display:none`,因为`display:none`会影响`transition`的过渡效果，但不会影响`animation`动画效果

4.元素不可见，可以点击、占据空间，使用：`opacity:0`

5.元素不可见、可以点击。不占据空间，使用：`opacity:0 ;position:absolute`

6.元素不可见、不可以点击、占据空间，可以使用：`position:relative; z-index:-1`

7.元素不可见、不能点击、不占据空间，可以使用： `position: absolute ; z-index: -1;`

#### 七、常用的`display:none`与`visibility：hidden`的区别

1.前者不占据任何空间，后者元素的空间保留

2.前者会影响`transition`的过渡效果,后者不会

3.前者隐藏会产生重绘（repaint）与回流（reflow）,后者只会触发重绘

4.株连性：前者设置隐藏，其子孙元素全都不可见，后者的子孙可以通过设置`visibility:visible`显示其元素，`visibility:hidden`具有继承性，所以子孙元素默认继承了`visibility:hidden`,但是当子孙元素重置为`visibility:visible`时，则不会隐藏

#### 八、使用:valid和:invalid校验表单

要点：`input`使用伪类`:valid`和`:invalid`配合pattern校验表单输入的内容

场景：表单校验

兼容：[pattern](https://caniuse.com/#search=pattern)、[:valid](https://caniuse.com/#search=%3Avalid)、[:invalid](https://caniuse.com/#search=%3Ainvalid）

![img](https://yangzw.vip/static/article/css-skill/%E4%BD%BF%E7%94%A8valid%E5%92%8Cinvalid%E6%A0%A1%E9%AA%8C%E8%A1%A8%E5%8D%95.gif?imageslim)

#### 九、使用[attr](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr)抓取data-*

要点：在标签上自定义属性data-*，通过attr()获取内容赋值到content上面

兼容：[data-*,attr()](https://caniuse.com/#search=attr())

##### 注意：attr()理论上能用于所有的css属性但目前支持的仅有`伪元素`的`content`属性，其他的属性和高级特性目前仅是实验性的

#### 十、color可以改变边框颜色

要点：`border`没有定义`border-color`时，设置`color`后，`border-color`会被定义成`color`

场景：边框颜色和文字颜色一致时

#### 十一、使用::selection改变文字选择颜色

要点：通过`::selection`根据主题颜色自定义文本选择颜色

兼容：[::selection](https://caniuse.com/#search=%3A%3Aselection)

#### 十二、使用::scrollbar改变滚动条样式(不应该在生产环境下使用。。)

要点：通过scrollbar通过`scrollbar`的`scrollbar-track`和`scrollbar-thumb`等属性来自定义滚动条样式

场景：自定义滚动条样式

兼容：[scrollbar](https://www.caniuse.com/#search=scrollbar)

#### 十三、使用text-align-last对齐两端文本

要点：通过设置text-align-last:justify设置文本两端对齐

场景：位置字数中文对齐

兼容：[text-align-last](https://caniuse.com/#search=text-align-last)

#### 十四、使用overflow-x排版横向列表

要点：通过`flexbox`或`inline-block`的形式横向排列元素，对父元素设置`overflow-x:auto`横向滚动查看

兼容：[overflow-x](https://caniuse.com/#search=overflow-x)

注意：![image-20191117142047286](/Users/sundong/Library/Application Support/typora-user-images/image-20191117142047286.png)

#### 十五、使用object-fit规定图像尺寸

要点：通过`object-fit`使图像脱离`background-size`的约束,使用`<img>`来标记图像背景尺寸，可以通过使用object-position属性来切换被替换元素的内容对象在元素框内的对齐方式。

场景：图片尺寸自适应

兼容：[object-fit](https://caniuse.com/#search=object-fit)

![img](https://user-gold-cdn.xitu.io/2019/7/29/16c3d50c9c447a1a?imageslim)

#### 十六、:focus-within伪类

定义：表示一个元素获得焦点或该元素的后代元素获得焦点。换句话说，元素自身或者它的某个后代匹配:focus伪类。

![img](https://user-gold-cdn.xitu.io/2019/10/10/16db4441c0ff2741?imageslim)