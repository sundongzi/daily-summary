#### Opacity:0 && visibility: hidden && display: none的区别

结构：

- display: none：会让元素完全从渲染树中消失，渲染的时候不占据任何空间，不能点击。
- visibility: 0 不会让元素从渲染树中消失，渲染元素继续占据空间，只是内容不可见，不能点击。
- opacity: 0 不会让元素从渲染树中消失，渲染元素继续占据空间，只是内容不可见，可以点击 

继承（株连性）：

- display:none && opacity:0 都是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
- visibility: hidden 是继承属性，子孙节点消失由于继承了hidden,通过设置visibility: visible可以让子孙节点显示

性能：

- display:none修改元素会造成文档回流，读屏器不会读取display:none元素内容，性能消耗较大。
- Visibility:hidden修改元素只会造成元素的重绘，性能消耗较少读屏器读取visibility:hidden元素内容。
- opacity:0修改元素会造成重绘，性能消耗较少。