##### vue2与vue3响应式的区别：

1、响应式原理不同

- Object.defineProperty（vue2）：只能劫持对象属性的`getter`和`setter`方法；不支持数组的各种API
- proxy（vue3）

2、tree-shaking



```javascript
let targetMap = new WeakMap()
let activeEffect = null
// 收集
function track (target, key) {
  if (!activeEffect) return
  let depMaps = targetMap.get(target)
  if (!depMaps) {
    targetMap.set(target, depMaps = new Map())
  }
  let dep = depMaps.get(key)
  if (!dep) {
    depMaps.set(key, dep = new Set())
  }
  dep.add(activeEffect)
}

// 触发
function trigger (target, key) {
  let depsMap = targetMap.get(target)
  if (depsMap) {
    let dep = depsMap.get(key)
    if (dep) {
      dep.forEach(effect => effect())
    }
  }
}

function reactive (tarbet) {
  const handler = {
    get (target, key, receiver) {
      track(receiver, key)
      return Reflect.get(target, key, receiver)
    }
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)
      trigger(receiver, key)
    }
  }
  return new Proxy(target, handler)
}

function effect(fn) {
  activeEffect = fn
  activeEffect()
  activeEffect = null
}
```

effect对应属性

dep=>new Set=》多个effect

map(多个)=》多个dep

weakMap=>



#### 参考链接

[林三心画了8张图，最通俗易懂的Vue3响应式核心原理解析](https://juejin.cn/post/7001999813344493581#heading-17)

[关于 Vue3 源码当中的 Proxy 和 Reflect 的那些事儿](https://juejin.cn/post/7100590922760454174#heading-5)