组件首次渲染时，`keep-alive`会将组件缓存起来。等到缓存渲染时，`keep-alive`会缓存插槽内容，之后调用`forceUpdate`重新渲染。这样`render`时就获取到最新的组件，如果命中缓存则从缓存中返回`vnode`。

##### 总结

- `keep-alive` 组件是抽象组件，在对应父子关系时会跳过抽象组件，它只对包裹的第一个子组件做处理。
- 主要是根据`LRU策略`缓存组件 `VNode`，最后在 `render` 时返回子组件的 `VNode`。
- 缓存渲染过程会更新 `keep-alive` 插槽，之后调用`$forceUpdate`重新再 `render` 一次，从缓存中读取之前的组件 `VNode` 实现状态缓存。

##### 参考链接

[Vue源码解析，keep-alive是如何实现缓存的？](https://juejin.cn/post/6862206197877964807#comment)