通过设置`transition`属性 + 监听`transitionend`事件

```html
<div id="test">
  
</div>
```

```css
#id:hover {
  opacity: 0.999;  /* 为了配合transition属性，对元素不产生任务影响的属性 */
  transition: 3s opacity;
}
```

```javascript
let dom = document.getElementById('test')
dom.addEventListener('transitionend', () => {
  // 业务逻辑
})
```

参考链接：[还在用定时器吗？借助CSS来监听事件](https://juejin.cn/post/7143051955810598926)



