<template><h3 id="我不知道的一些css技巧"><a class="header-anchor" href="#我不知道的一些css技巧">#</a> 我不知道的一些css技巧</h3>
<h4 id="一、-margin"><a class="header-anchor" href="#一、-margin">#</a> 一、 margin：</h4>
<p>1、作为外边距，<code>margin</code>属性并不参与盒子宽度的计算,但通过设置<code>margin</code>为负值，可以改变元素水平方向上的尺寸，但是这种情况只会发生在<code>常规流布局</code>的时候，即元素<code>width</code>的默认是<code>auto</code>并且可以撑满一行的时候。如果元素设定了宽度或者元素设置了<code>float:left/position:absolute</code>这样的属性改变了常规流体布局，那么<code>margin</code>为负值也无法改变元素的宽度了。。</p>
<p>2、块级元素的垂直方向会发生<code>margin</code>合并</p>
<ul>
<li>相邻兄弟元素之间<code>margin</code>合并</li>
<li>父元素<code>margin-top</code>和子元素<code>margin-top</code>,父元素<code>margin-bottom</code>和子元素<code>margin-bottom</code></li>
<li>空块级元素自身的<code>margin-top</code>和<code>margin-bottom</code>合并</li>
</ul>
<p>解决方案，只需要把发生重叠的两个元素之一生成BFC就可以了：</p>
<ul>
<li>对于上下相邻的两个元素，只要把其中一个设置为<code>display:inline-block</code></li>
<li>给父元素设置<code>border</code>/<code>padding</code>/<code>overflow: hidden</code>/<code>display: inline-block</code>/<code>float</code>/<code>position:absolute</code>等，子元素的<code>margin</code>就不会与父元素重叠。</li>
<li>给子元素设置display: inline-block，子元素的margin就不会与父元素重叠。</li>
</ul>
<p>3、<code>margin</code>的百分比值跟<code>padding</code>一样，垂直方向的<code>margin</code>和水平方向上的一样都是相对于<code>父元素宽度</code>计算的</p>
<p>4、<code>margin:auto</code>能在块级元素设定宽高之后自动填充剩余宽高。自动填充触发的前提是元素在对应的水平或垂直方向具有自动填充的特性，默认情况下块级元素的高度并不具备这个条件。<code>auto</code>的特性是如果两侧都是auto，则两侧均分剩余宽度；如果一侧<code>margin</code>是固定的，另一侧的是<code>auto</code>，则这一侧<code>auto</code>为剩余宽度。如果需要元素在垂直方向上具有自动填充特性，可以利用<code>flex</code>布局或者使用<code>position</code>实现。</p>
<h5 id="注意-在flex布局下设置了margin-auto后再设置父元素的justify-content或者子元素align-self则不生效-这里存在优先级的问题-margin的优先级更高一些-margin实现等分等高"><a class="header-anchor" href="#注意-在flex布局下设置了margin-auto后再设置父元素的justify-content或者子元素align-self则不生效-这里存在优先级的问题-margin的优先级更高一些-margin实现等分等高">#</a> 注意：在flex布局下设置了<code>margin:auto</code>后再设置父元素的<code>justify-content</code>或者子元素<code>align-self</code>则不生效，这里存在优先级的问题，<code>margin</code>的优先级更高一些，<code>margin</code>实现等分等高</h5>
<h4 id="二、-定位"><a class="header-anchor" href="#二、-定位">#</a> 二、 定位</h4>
<h3 id="_1、绝对定位-absolute"><a class="header-anchor" href="#_1、绝对定位-absolute">#</a> 1、绝对定位(<code>absolute</code>)</h3>
<p>定义：和浮动元素一样，绝对定位也具有块状化、BFC、包裹性、脱离文档流、没有<code>margin</code>合并的特性。</p>
<p>注意：但和浮动不同的是，绝对定位是完全的脱离文档流。大家还记得浮动产生的目的就是为了实现文字环绕效果，所以浮动元素虽然脱离了文档流，但是后面的文字还是会环绕在浮动元素周围。而绝对定位一但产生，就不会再对周围元素产生任何影响，并且两者包含块不同，浮动元素包含块只能是父级元素，绝对定位的包含块则是距离最近的<code>position</code>不为<code>static</code>的祖先元素</p>
<h5 id="绝对定位和overflow-hidden的关系"><a class="header-anchor" href="#绝对定位和overflow-hidden的关系">#</a> 绝对定位和<code>overflow:hidden</code>的关系：</h5>
<h6 id="当overflow-hidden元素在绝对定位元素和其包含块之间的时候-绝对定位元素不会被剪裁。"><a class="header-anchor" href="#当overflow-hidden元素在绝对定位元素和其包含块之间的时候-绝对定位元素不会被剪裁。">#</a> 当<code>overflow: hidden</code>元素在绝对定位元素和其包含块之间的时候，绝对定位元素不会被剪裁。</h6>
<p>![image-20191120165207705](/Users/sundong/Library/Application Support/typora-user-images/image-20191120165207705.png)</p>
<h5 id="流体特性"><a class="header-anchor" href="#流体特性">#</a> 流体特性：</h5>
<p>当绝对定位元素的水平方向(<code>left/right</code>)或垂直方向(<code>top/bottom</code>)的两个定位属性同时存在的时候，绝对元素在该方向上便具有了流体特性。此时的<code>width/height</code>属性具有自动撑满的特性，和一个正常流的<code>div</code>元素的<code>width</code>属性别无二致。</p>
<h5 id="_2、固定定位-position-fixed"><a class="header-anchor" href="#_2、固定定位-position-fixed">#</a> 2、固定定位(position:<code>fixed</code>)</h5>
<p>定义：相对于屏幕视口的位置来指定元素位置，祖先元素设置<code>position:relative</code>并不会对其产生影响</p>
<h5 id="注意-position-fixed降级问题-如果父元素中有使用transform-fixed效果会降级为absolute"><a class="header-anchor" href="#注意-position-fixed降级问题-如果父元素中有使用transform-fixed效果会降级为absolute">#</a> 注意： position:fixed降级问题，如果父元素中有使用transform，fixed效果会降级为absolute</h5>
<h5 id="_3、粘性定位position-sticky"><a class="header-anchor" href="#_3、粘性定位position-sticky">#</a> 3、粘性定位<code>position:sticky</code></h5>
<p>定义：可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#one</span> <span class="token punctuation">{</span><span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。须指定 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/top" target="_blank" rel="noopener noreferrer"><code>top</code><OutboundLink/></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/right" target="_blank" rel="noopener noreferrer"><code>right</code><OutboundLink/></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom" target="_blank" rel="noopener noreferrer"><code>bottom</code><OutboundLink/></a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/left" target="_blank" rel="noopener noreferrer"><code>left</code><OutboundLink/></a> 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。</p>
<h5 id="注意-当-position-sticky-的父元素的-overflow-属性设置了默认值-visible-以外的值时-position-sticky-将失效。-兼容性-https-caniuse-com-search-position-3a-20sticky-https-caniuse-com-search-position-3a-sticky-不太好"><a class="header-anchor" href="#注意-当-position-sticky-的父元素的-overflow-属性设置了默认值-visible-以外的值时-position-sticky-将失效。-兼容性-https-caniuse-com-search-position-3a-20sticky-https-caniuse-com-search-position-3a-sticky-不太好">#</a> 注意：当 <code>position: sticky</code> 的父元素的 <code>overflow</code> 属性设置了默认值 <code>visible</code> 以外的值时，<code>position: sticky</code> 将失效。[兼容性]([https://caniuse.com/#search=position%3A%20sticky](https://caniuse.com/#search=position%3A sticky))不太好</h5>
<h4 id="三、相邻兄弟选择器-见demo"><a class="header-anchor" href="#三、相邻兄弟选择器-见demo">#</a> 三、相邻兄弟选择器<code>+</code>(见demo)</h4>
<p>定义：介于两个选择器之间，当第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中</p>
<p>![img-20191117103750328](/Users/sundong/Library/Application Support/typora-user-images/image-20191117103750328.png)</p>
<p>![image-20191117103724187](/Users/sundong/Library/Application Support/typora-user-images/image-20191117103724187.png)</p>
<h4 id="四、target选择器"><a class="header-anchor" href="#四、target选择器">#</a> 四、target选择器</h4>
<p><img src="https://user-gold-cdn.xitu.io/2019/10/10/16db44433839e942?imageslim" alt="img"></p>
<h4 id="五、outline属性"><a class="header-anchor" href="#五、outline属性">#</a> 五、outline属性</h4>
<p>定义：<code>outline</code>属性是用来设置一个或多个单独的轮廓属性的<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties" target="_blank" rel="noopener noreferrer">简写属性<OutboundLink/></a> ， 例如 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-style" target="_blank" rel="noopener noreferrer"><code>outline-style</code><OutboundLink/></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-width" target="_blank" rel="noopener noreferrer"><code>outline-width</code><OutboundLink/></a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-color" target="_blank" rel="noopener noreferrer"><code>outline-color</code><OutboundLink/></a>。多数情况下，简写属性更加可取和便捷</p>
<p>![image-20191117134248981](/Users/sundong/Library/Application Support/typora-user-images/image-20191117134248981.png)</p>
<p>![image-20191117134320172](/Users/sundong/Library/Application Support/typora-user-images/image-20191117134320172.png)</p>
<h4 id="六、元素隐藏方法"><a class="header-anchor" href="#六、元素隐藏方法">#</a> 六、元素隐藏方法</h4>
<p>1.元素不可见、不占据空间、资源会加载，DOM可访问，使用：<code>display:none</code></p>
<p>2.元素不可见、不能点击、但占据空间、资源会加载，使用：<code>visibility:hidden</code></p>
<p>3.元素不可见、不占据空间、显示隐藏时可以有<code>transition</code>的淡入淡出的效果，应该使用<code>visibility:hidden</code>而不是<code>display:none</code>,因为<code>display:none</code>会影响<code>transition</code>的过渡效果，但不会影响<code>animation</code>动画效果</p>
<p>4.元素不可见，可以点击、占据空间，使用：<code>opacity:0</code></p>
<p>5.元素不可见、可以点击。不占据空间，使用：<code>opacity:0 ;position:absolute</code></p>
<p>6.元素不可见、不可以点击、占据空间，可以使用：<code>position:relative; z-index:-1</code></p>
<p>7.元素不可见、不能点击、不占据空间，可以使用： <code>position: absolute ; z-index: -1;</code></p>
<h4 id="七、常用的display-none与visibility-hidden的区别"><a class="header-anchor" href="#七、常用的display-none与visibility-hidden的区别">#</a> 七、常用的<code>display:none</code>与<code>visibility：hidden</code>的区别</h4>
<p>1.前者不占据任何空间，后者元素的空间保留</p>
<p>2.前者会影响<code>transition</code>的过渡效果,后者不会</p>
<p>3.前者隐藏会产生重绘（repaint）与回流（reflow）,后者只会触发重绘</p>
<p>4.株连性：前者设置隐藏，其子孙元素全都不可见，后者的子孙可以通过设置<code>visibility:visible</code>显示其元素，<code>visibility:hidden</code>具有继承性，所以子孙元素默认继承了<code>visibility:hidden</code>,但是当子孙元素重置为<code>visibility:visible</code>时，则不会隐藏</p>
<h4 id="八、使用-valid和-invalid校验表单"><a class="header-anchor" href="#八、使用-valid和-invalid校验表单">#</a> 八、使用:valid和:invalid校验表单</h4>
<p>要点：<code>input</code>使用伪类<code>:valid</code>和<code>:invalid</code>配合pattern校验表单输入的内容</p>
<p>场景：表单校验</p>
<p>兼容：<a href="https://caniuse.com/#search=pattern" target="_blank" rel="noopener noreferrer">pattern<OutboundLink/></a>、<a href="https://caniuse.com/#search=%3Avalid" target="_blank" rel="noopener noreferrer">:valid<OutboundLink/></a>、[:invalid](https://caniuse.com/#search=%3Ainvalid）</p>
<p><img src="https://yangzw.vip/static/article/css-skill/%E4%BD%BF%E7%94%A8valid%E5%92%8Cinvalid%E6%A0%A1%E9%AA%8C%E8%A1%A8%E5%8D%95.gif?imageslim" alt="img"></p>
<h4 id="九、使用attr抓取data"><a class="header-anchor" href="#九、使用attr抓取data">#</a> 九、使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr" target="_blank" rel="noopener noreferrer">attr<OutboundLink/></a>抓取data-*</h4>
<p>要点：在标签上自定义属性data-*，通过attr()获取内容赋值到content上面</p>
<p>兼容：<a href="https://caniuse.com/#search=attr()" target="_blank" rel="noopener noreferrer">data-*,attr()<OutboundLink/></a></p>
<h5 id="注意-attr-理论上能用于所有的css属性但目前支持的仅有伪元素的content属性-其他的属性和高级特性目前仅是实验性的"><a class="header-anchor" href="#注意-attr-理论上能用于所有的css属性但目前支持的仅有伪元素的content属性-其他的属性和高级特性目前仅是实验性的">#</a> 注意：attr()理论上能用于所有的css属性但目前支持的仅有<code>伪元素</code>的<code>content</code>属性，其他的属性和高级特性目前仅是实验性的</h5>
<h4 id="十、color可以改变边框颜色"><a class="header-anchor" href="#十、color可以改变边框颜色">#</a> 十、color可以改变边框颜色</h4>
<p>要点：<code>border</code>没有定义<code>border-color</code>时，设置<code>color</code>后，<code>border-color</code>会被定义成<code>color</code></p>
<p>场景：边框颜色和文字颜色一致时</p>
<h4 id="十一、使用-selection改变文字选择颜色"><a class="header-anchor" href="#十一、使用-selection改变文字选择颜色">#</a> 十一、使用::selection改变文字选择颜色</h4>
<p>要点：通过<code>::selection</code>根据主题颜色自定义文本选择颜色</p>
<p>兼容：<a href="https://caniuse.com/#search=%3A%3Aselection" target="_blank" rel="noopener noreferrer">::selection<OutboundLink/></a></p>
<h4 id="十二、使用-scrollbar改变滚动条样式-不应该在生产环境下使用。。"><a class="header-anchor" href="#十二、使用-scrollbar改变滚动条样式-不应该在生产环境下使用。。">#</a> 十二、使用::scrollbar改变滚动条样式(不应该在生产环境下使用。。)</h4>
<p>要点：通过scrollbar通过<code>scrollbar</code>的<code>scrollbar-track</code>和<code>scrollbar-thumb</code>等属性来自定义滚动条样式</p>
<p>场景：自定义滚动条样式</p>
<p>兼容：<a href="https://www.caniuse.com/#search=scrollbar" target="_blank" rel="noopener noreferrer">scrollbar<OutboundLink/></a></p>
<h4 id="十三、使用text-align-last对齐两端文本"><a class="header-anchor" href="#十三、使用text-align-last对齐两端文本">#</a> 十三、使用text-align-last对齐两端文本</h4>
<p>要点：通过设置text-align-last:justify设置文本两端对齐</p>
<p>场景：位置字数中文对齐</p>
<p>兼容：<a href="https://caniuse.com/#search=text-align-last" target="_blank" rel="noopener noreferrer">text-align-last<OutboundLink/></a></p>
<h4 id="十四、使用overflow-x排版横向列表"><a class="header-anchor" href="#十四、使用overflow-x排版横向列表">#</a> 十四、使用overflow-x排版横向列表</h4>
<p>要点：通过<code>flexbox</code>或<code>inline-block</code>的形式横向排列元素，对父元素设置<code>overflow-x:auto</code>横向滚动查看</p>
<p>兼容：<a href="https://caniuse.com/#search=overflow-x" target="_blank" rel="noopener noreferrer">overflow-x<OutboundLink/></a></p>
<p>注意：![image-20191117142047286](/Users/sundong/Library/Application Support/typora-user-images/image-20191117142047286.png)</p>
<h4 id="十五、使用object-fit规定图像尺寸"><a class="header-anchor" href="#十五、使用object-fit规定图像尺寸">#</a> 十五、使用object-fit规定图像尺寸</h4>
<p>要点：通过<code>object-fit</code>使图像脱离<code>background-size</code>的约束,使用<code>&lt;img&gt;</code>来标记图像背景尺寸，可以通过使用object-position属性来切换被替换元素的内容对象在元素框内的对齐方式。</p>
<p>场景：图片尺寸自适应</p>
<p>兼容：<a href="https://caniuse.com/#search=object-fit" target="_blank" rel="noopener noreferrer">object-fit<OutboundLink/></a></p>
<p><img src="https://user-gold-cdn.xitu.io/2019/7/29/16c3d50c9c447a1a?imageslim" alt="img"></p>
<h4 id="十六、-focus-within伪类"><a class="header-anchor" href="#十六、-focus-within伪类">#</a> 十六、:focus-within伪类</h4>
<p>定义：表示一个元素获得焦点或该元素的后代元素获得焦点。换句话说，元素自身或者它的某个后代匹配:focus伪类。</p>
<p><img src="https://user-gold-cdn.xitu.io/2019/10/10/16db4441c0ff2741?imageslim" alt="img"></p>
</template>