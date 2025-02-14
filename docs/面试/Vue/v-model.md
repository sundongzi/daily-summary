##### 普通表单元素

```javascript
addProp(el, 'value', `(${value})`)
addHandler(el, event, code, null, true)
```

原理：通过修改AST元素，给`el`添加一个`prop`，相当于在`input`上动态绑定了`value`，又给`el`添加了事件处理，相当于添加了`input`事

件。

```heml
<input
  v-bind:value="message"
  v-on:input="message=$event.target.value" />
```

其实就是动态绑定了 `input` 的 `value` 指向了 `messgae` 变量，并且在触发 `input` 事件的时候去动态把 `message` 设置为目标值，这样实际上就完成了数据双向绑定了，所以说 `v-model` 实际上就是语法糖。

##### 组件

```vue
let Child = {
  template: '<div>'
  + '<input :value="value" @input="updateValue" placeholder="edit me">' +
  '</div>',
  props: ['value'],
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
    }
  }
}

let vm = new Vue({
  el: '#app',
  template: '<div>' +
  '<child v-model="message"></child>' +
  '<p>Message is: {{ message }}</p>' +
  '</div>',
  data() {
    return {
      message: ''
    }
  },
  components: {
    Child
  }
})
```

通过上述可以看到，子组件中定义了一个`value`的`prop`，并且在`input`事件的回调函数中，通过`this.$emit`派发了一个事件，为了让父组件的`v-model`生效。

在定义子组件的时候通过`model`选项配置子组件接受`prop`名以及派发的事件名。

```vue
let Child = {
  template: '<div>'
  + '<input :value="msg" @input="updateValue" placeholder="edit me">' +
  '</div>',
  props: ['msg'], // 由原本默认的value自定义成了msg
  model: {
    prop: 'msg',
    event: 'change'
  },
  methods: {
    updateValue(e) {
      this.$emit('change', e.target.value) // 由默认的input事件自定义成了change
    }
  }
}

let vm = new Vue({
  el: '#app',
  template: '<div>' +
  '<child v-model="message"></child>' +
  '<p>Message is: {{ message }}</p>' +
  '</div>',
  data() {
    return {
      message: ''
    }
  },
  components: {
    Child
  }
})
```

