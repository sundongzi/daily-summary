![image-20220112212735232](/Users/sundong/Library/Application Support/typora-user-images/image-20220112212735232.png)

### 前言

`Pinia`是新一代的状态管理器，由`Vue`团队中核心成员所开发的，同时也被认为是下一代的`Vuex`，也就是`Vuex5.x`。

`Pinia`的特点如下：

- 完全支持`typescript`
- 足够轻量，压缩后的体积只有1.6kb
- 模块化设计，引入的每一个`store`在打包时可以自动拆分它们
- 没有模块嵌套，只有`store`概念，`store`之间可以自由使用，更好的代码分割

### 安装

```javascript
yarn add pinia
// or
npm install pinia
```

### 使用

目前在`vue3`中是通过`createPinia`创建`Pinia`实例，在`main.ts`中，使用`app.use(pinia)`加载`pinia`

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App).use(pinia) 
app.mount('#app')
```

但如果想在`Vue2`中使用的话，需要注册`PiniaVuePlugin`插件并安装最新的`@vue/composition-api`依赖包

```javascript
// https://github.com/vuejs/pinia
npm install pinia @vue/composition-api

// https://pinia.vuejs.org/getting-started.html#installation
import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // other options...
  pinia,
})
```

其他差异请参考[官网 pinia](https://pinia.vuejs.org/getting-started.html#installation)

### 创建Store(`defineStore`)

### state

##### 定义State

```javascript
// 创建store有两种方式
import { defineStore } from 'pinia'

export const userStore = defineStore({
    id: 'name',
    state: () => {
        return {
            name: '李四'
        }
    }
})


export const userStore = defineStore('name', {
    state: () => {
        return {
            name: '李四'
        }
    }
})
```

##### 获取`state`

```vue
<template>
  <div>
    普通获取：{{user.name}}
    computed: {{_name}}
    解构：{{name}}
  </div>
</template>
<script lang="ts" setup>
import { userStore } from '../store/user'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

// 普通获取
const user = userStore()

// computed获取
const _name = computed(() => user.name)

// 解构，但是会失去响应，可以用pinia的 storeToRefs避免失去响应
const { name } = storeToRefs(user)

</script>
```

##### 修改`state`

直接修改（不推荐）

```vue
...
<script lang="ts" setup>
import { userStore } from '../store/user'

const user = userStore()
// 修改state(不建议)
user.name = '张三'
</script>
```

通常建议通过`actions`去修改state，下面会讲到。

### Getters

```javascript
import { defineStore } from 'pinia'

export const userStore = defineStore({
    id: 'name',
    state: () => {
        return {
            name: '李四'
        }
    },
    getters: {
      fullName: (state) => {
          return `${state.name}娃`
      }
    }
})

// 获取时：userStore.fullName
```

### Actions

对比`vuex`，`Pinia`让`Actions`更加灵活：

- 可以通过组件或其他`action`调用
- 直接在`store`的`action`中调用
- 支持同步或异步
- 去掉了`mutations`，但`state`的变化依然记录在`devtools`中

异步`action`

```javascript
import { defineStore } from 'pinia'

export const userStore = defineStore({
    id: 'name',
    state: () => {
        return {
            name: '李四'
        }
    },
    actions: {
      // 修改state里面的属性值
      updateUserName (name) {
          this.name = name
      },
      // 异步
      async getUserName (name) {
          const {name} = await 后端请求
          return name
      }
    }
})


// userStore.updateUserName('新名字')
```

### 源码解析

##### 入口`createPinia`

从源码中可以看出，`pinia`是基于`rollup`打包的，所以找到`rollup.config.js`，发现入口是`src/index.ts`

![image-20220112141848797](/Users/sundong/Library/Application Support/typora-user-images/image-20220112141848797.png)

在`packages/pinia/src/index.ts`中找到`createPinia`方法

```javascript
export function createPinia(): Pinia {
  const scope = effectScope(true)
  // NOTE: here we could check the window object for a state and directly set it
  // if there is anything like it with Vue 3 SSR
  const state = scope.run(() => ref<Record<string, StateTree>>({}))!
  ...
  // 当前的pinia实例 
  const pinia: Pinia = markRaw({
    // vue的插件机制，对外暴露install方法
    install(app: App) {
      // this allows calling useStore() outside of a component setup after
      // installing pinia's plugin
      // 设置当前活跃的 pinia，当存在多个活跃的pinia时，方便获取
      setActivePinia(pinia)
      if (!isVue2) {
        pinia._a = app
        // 通过provide传递pinia实例，提供给后续使用
        app.provide(piniaSymbol, pinia)
        // 设置全局属性 $pinia
        app.config.globalProperties.$pinia = pinia
        /* istanbul ignore else */
        if (__DEV__ && IS_CLIENT) {
          // @ts-expect-error: weird type in devtools api
          registerPiniaDevtools(app, pinia)
        }
        toBeInstalled.forEach((plugin) => _p.push(plugin)) // 加载pinia插件
        toBeInstalled = []
      }
    },

    // pinia对外暴露的插件用法
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin)
      } else {
        _p.push(plugin)
      }
      return this
    },

    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: new Map<string, StoreGeneric>(),
    state, // 所有状态
  })

  // pinia devtools rely on dev only features so they cannot be forced unless
  // the dev build of Vue is used
  if (__DEV__ && IS_CLIENT) {
    // 集成 vue devtools
    pinia.use(devtoolsPlugin)
  }

  return pinia
}
```

##### 定义`defineStore`(路径：packages/pinia/src/store.ts  822)

主要是返回了`useStore`，并标记唯一`$id`

```javascript
export function defineStore(
  // TODO: add proper types from above
  idOrOptions: any,
  setup?: any,
  setupOptions?: any
): StoreDefinition {
  let id: string
  let options
  const isSetupStore = typeof setup === 'function'
  // 根据传参格式，获取id和otions，可以defineStore(id, options)，也可以defineStore({id: '唯一值', ...})
  if (typeof idOrOptions === 'string') {
    id = idOrOptions
    // the option store setup will contain the actual options in this case
    options = isSetupStore ? setupOptions : setup
  } else {
    options = idOrOptions
    id = idOrOptions.id
  }

  function useStore(pinia?: Pinia | null, hot?: StoreGeneric): StoreGeneric {
    // 通过vue的getCurrentInstance方法获取vue实例
    const currentInstance = getCurrentInstance()
    pinia =
      // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      (__TEST__ && activePinia && activePinia._testing ? null : pinia) ||
      (currentInstance && inject(piniaSymbol))  // 判断pinia是否存在，不存在的话通过inject(piniaSymbol)获取（install时提供的app.provide(piniaSymbol, pinia）
    
    // 设置当前活跃的pinia实例，有多个pinia实例时，方便获取当前活跃的pinia实例
    if (pinia) setActivePinia(pinia)  // 路径：packages/pinia/src/rootStore.ts

    // activePinia不存在时，报错提示入口use(pinia)
    if (__DEV__ && !activePinia) {
      throw new Error(
        `[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?\n` +
          `\tconst pinia = createPinia()\n` +
          `\tapp.use(pinia)\n` +
          `This will fail in production.`
      )
    }
    pinia = activePinia!
      
    // 初始化时pinia._s.has(id)没有值
    if (!pinia._s.has(id)) {
      // creating the store registers it in `pinia._s`
      //  const isSetupStore = typeof setup === 'function'
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia)
      } else {
        createOptionsStore(id, options as any, pinia)
      }

      /* istanbul ignore else */
      if (__DEV__) {
        // @ts-expect-error: not the right inferred type
        useStore._pinia = pinia
      }
    }

    const store: StoreGeneric = pinia._s.get(id)!

    if (__DEV__ && hot) {
      const hotId = '__hot:' + id
      const newStore = isSetupStore
        ? createSetupStore(hotId, setup, options, pinia, true)
        : createOptionsStore(hotId, assign({}, options) as any, pinia, true)

      hot._hotUpdate(newStore)

      // cleanup the state properties and the store from the cache
      delete pinia.state.value[hotId]
      pinia._s.delete(hotId)
    }

    // save stores in instances to access them devtools
    if (
      __DEV__ &&
      IS_CLIENT &&
      currentInstance &&
      currentInstance.proxy &&
      // avoid adding stores that are just built for hot module replacement
      !hot
    ) {
      const vm = currentInstance.proxy
      const cache = '_pStores' in vm ? vm._pStores! : (vm._pStores = {})
      cache[id] = store
    }

    // StoreGeneric cannot be casted towards Store
    return store as any
  }

  useStore.$id = id

  return useStore
}
```

根据传参，进行初始化数据，如果传参不是函数，则会走`createOptionsStore`方法

##### createOptionsStore（路径：packages/pinia/src/store.ts  105）

主要通过`setUp`函数去整合`state、getters`成响应式数据，最后在整合`actions`合并后返回

```javascript
function createOptionsStore<
  Id extends string,
  S extends StateTree,
  G extends _GettersTree<S>,
  A extends _ActionsTree
>(
  id: Id,
  options: DefineStoreOptions<Id, S, G, A>,
  pinia: Pinia,
  hot?: boolean
): Store<Id, S, G, A> {
  const { state, actions, getters } = options

  const initialState: StateTree | undefined = pinia.state.value[id]

  let store: Store<Id, S, G, A>

  function setup() {
    if (!initialState && (!__DEV__ || !hot)) {
      /* istanbul ignore if */
      if (isVue2) {
        set(pinia.state.value, id, state ? state() : {})
      } else {
        pinia.state.value[id] = state ? state() : {}
      }
    }

    // avoid creating a state in pinia.state.value
    // 主要是把传入的state变成响应式
    const localState =
      __DEV__ && hot
        ? // use ref() to unwrap refs inside state TODO: check if this is still necessary
          toRefs(ref(state ? state() : {}).value)
        : toRefs(pinia.state.value[id])

    return assign(
      localState,
      actions,
      // 把getters的value值由原本的普通函数转成计算属性
      Object.keys(getters || {}).reduce((computedGetters, name) => {
        computedGetters[name] = markRaw(
          computed(() => {
            setActivePinia(pinia)
            // it was created just before
            const store = pinia._s.get(id)!

            // allow cross using stores
            /* istanbul ignore next */
            if (isVue2 && !store._r) return

            // @ts-expect-error
            // return getters![name].call(context, context)
            // TODO: avoid reading the getter while assigning with a global variable
            // 返回回调函数中带有store参数，因此使用的时候可以getters:{test: (state) => state + 1}
            return getters![name].call(store, store)
          })
        )
        return computedGetters
      }, {} as Record<string, ComputedRef>)
    )
  }

 
  store = createSetupStore(id, setup, options, pinia, hot)

  store.$reset = function $reset() {
    const newState = state ? state() : {}
    // we use a patch to group all changes into one single subscription
    this.$patch(($state) => {
      assign($state, newState)
    })
  }

  return store as any
}
```

##### `createSetupStore`核心逻辑

`$patch方法`

```javascript
function $patch(
    partialStateOrMutator:
      | _DeepPartial<UnwrapRef<S>>
      | ((state: UnwrapRef<S>) => void)
  ): void {
    let subscriptionMutation: SubscriptionCallbackMutation<S>
    isListening = isSyncListening = false
    // reset the debugger events since patches are sync
    /* istanbul ignore else */
    if (__DEV__) {
      debuggerEvents = []
    }
    if (typeof partialStateOrMutator === 'function') {
      partialStateOrMutator(pinia.state.value[$id] as UnwrapRef<S>)
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents as DebuggerEvent[],
      }
    } else {
      /*
       ** 合并partialStateOrMutator 到 state中。
       ** 比如：counter.$patch({ count: counter.count + 1 })，
       ** { count: counter.count + 1 } 更新到 state中
      */
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator)
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents as DebuggerEvent[],
      }
    }
    nextTick().then(() => {
      isListening = true
    })
    isSyncListening = true
    // because we paused the watcher, we need to manually call the subscriptions
    triggerSubscriptions(
      subscriptions,
      subscriptionMutation,
      pinia.state.value[$id] as UnwrapRef<S>
    )
  }
```

定义`$dispose`，处理清除逻辑

```javascript
 function $dispose() {
    scope.stop()
    subscriptions = []
    actionSubscriptions = []
    pinia._s.delete($id)
  }
```

`partialStore`整合`_p、$id、$onAction、$patch、$subscribe(callback, options = {})、$dispose`,后续会合并到`useStore()`

![image-20220112200313118](/Users/sundong/Library/Application Support/typora-user-images/image-20220112200313118.png)

然后整合`store`，挂载到`pinia._s.set($id, store)`

```javascript
const store: Store<Id, S, G, A> = reactive(
    assign(
      __DEV__ && IS_CLIENT
        ? // devtools custom properties
          {
            _customProperties: markRaw(new Set<string>()),
            _hmrPayload,
          }
        : {},
      partialStore
      // must be added later
      // setupStore
    )
  ) as unknown as Store<Id, S, G, A>

  // store the partial store now so the setup of stores can instantiate each other before they are finished without
  // creating infinite loops.
  pinia._s.set($id, store)

```

接着调用`assign(store, setupStore)`,把setupStore值（state,getters，actions等）值合并进来（因为store是引用类型，所以会改变）

![image-20220112200931111](/Users/sundong/Library/Application Support/typora-user-images/image-20220112200931111.png)

最后`useStore`函数返回如下：

```javascript
const store: StoreGeneric = pinia._s.get(id)! // pinia._s.get(id)值就是上面pinia._s.set($id, store)设置的
return store as any
```

