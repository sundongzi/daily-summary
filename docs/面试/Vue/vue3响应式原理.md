#### 一、reactive

##### effect

- activeEffect

##### track

- dep (new set)，有几个属性就对应几个dep
- Map：管理多个dep
- weakMap：处理多个对象

##### trigger

- 层层寻找`dep`，执行dep中的`effect`方法

#### ref

#### 二、Reflect.get优势

1. 确保默认行为不被破坏

   在proxy中直接使用`target[key]`访问属性可能会触发额外的逻辑，而使用`Reflect.get`保证了对目标对象的标准化访问，避免了意外的副作用。

   ```javascript
   const obj = {
     get value() {
       console.log('Getter called');
       return 42;
     }
   };
   
   const proxy = new Proxy(obj, {
     get(target, key) {
       // 直接访问 target[key]
       return target[key];
     }
   });
   
   console.log(proxy.value); // 输出：Getter called, 42
   
   ```

   直接使用 `target[key]` 会显式调用原对象的 getter 方法，这可能导致循环引用问题或意外行为。

2. 支持继承上下文（this指向）

   在 JavaScript 中，`this` 的绑定可能会因为调用方式而丢失。而 `Reflect.get` 会正确地将 `this` 绑定到 `receiver` 上。

   ```javascript
   const obj = {
     get value() {
       return this._value || 0;
     }
   };
   
   const proxy = new Proxy(obj, {
     get(target, key, receiver) {
       return Reflect.get(target, key, receiver);
     }
   });
   
   proxy._value = 10;
   console.log(proxy.value); // 输出：10
   
   ```

   如果使用 `target[key]` 直接访问，由于 `this` 的绑定指向 `target`，而非代理对象，可能导致行为不符合预期。

3. 避免递归代理问题

   在 Vue 3 中，响应式系统可能会嵌套代理，例如嵌套对象也会被代理化。`Reflect.get` 能够更好地处理嵌套代理情况。

   ```javascript
   const nested = { inner: 42 };
   const proxy = new Proxy(nested, {
     get(target, key, receiver) {
       console.log('Accessing:', key);
       return Reflect.get(target, key, receiver);
     }
   });
   
   const outer = new Proxy({ nested: proxy }, {
     get(target, key, receiver) {
       return Reflect.get(target, key, receiver);
     }
   });
   
   console.log(outer.nested.inner); 
   // 输出：
   // Accessing: nested
   // Accessing: inner
   // 42
   
   ```

#### 三、Reflect.get在vue3中解决的问题

1. 解决Proxy嵌套代理问题
   - 通过 `receiver` 参数，将 `this` 正确绑定到代理对象。
2. 避免直接访问目标对象导致的副作用
   - 避免直接触发目标对象的 getter 方法，保证响应式追踪逻辑不被破坏。
3. 更灵活的上下文处理
   - 支持继承结构，能正确处理复杂场景下的 `this` 指向。
4. 增强代码的可读性和维护性
   - 使用标准 Reflect API，让代码行为更明确，降低潜在问题的复杂性。
