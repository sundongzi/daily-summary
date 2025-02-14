在控制台运行以下代码，便会出现`vue-devtool`(目前仅限于vue2.x版本)

```javascript
var Vue, walker, node;
walker = document.createTreeWalker(document.body,1);
while ((node = walker.nextNode())) {
  if (node.__vue__) {
    Vue = node.__vue__.$options._base;
    if (!Vue.config.devtools) {
      Vue.config.devtools = true;
      if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init", Vue);
        console.log("==> vue devtools now is enabled");
      }
    }
    break;
  }
}

```

参考链接：

[什么,你还不会调试线上 vue 组件?](https://juejin.cn/post/7324643000700502031)