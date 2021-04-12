---
title: vue父子组件传值的三种方式
date: 2021-04-06 15:05:05
permalink: /pages/d1621b/
categories:
  - 前端
  - VUE
tags:
  - 
---
##### 方式一: props

```javascript
// 父组件
<template>
  <div class="overview-contianer">
    <sub-overview :val="total" @addNum="addTotal"></sub-overview>
    <el-button @click="reduce">递减</el-button>
  </div>
</template>
<script>
// import mixin from '@/mixins/mixin'
import subOverview from './subOverview'
export default {
  data () {
    return {
      total: 0
    }
  },
  methods: {
    addTotal(newNum){
        console.log(newNum)  // 1234
    },
    reduce () {
      this.total--
    }
  },
  components: {
    subOverview
  }
}
</script>
<style scoped>
</style>

// 子组件
<template>
  <div class="sub-overview-container">
   
    <el-input v-model="val"></el-input>
    <button @click="add"></button>
  </div>
</template>
<script type="text/x-template" id="sub">
export default {
  props: ['val'],
  data() {
    return {
      iptVal: ''
    }
  },
  methods: { 
    add(){
        this.$emit('addNum','1234') // 通过emit
    }
  },
  created() {
    
  }
}
</script>
<style scoped>

</style>
```

##### 第二种方式  通过v-model

```javascript
// 父组件
<template>
  <div class="overview-contianer">
    <sub-overview v-model="val"></sub-overview> // 相当于 <sub-overview :value="val" @input="addTotal"></sub-overview> 
   
    <el-button @click="reduce">递减</el-button>
  </div>
</template>
<script>
// import mixin from '@/mixins/mixin'
import subOverview from './subOverview'
export default {
  data () {
    return {
      total: 0
    }
  },
  methods: {
    addTotal(newNum){
        console.log(newNum)  // 1234
    },
    reduce () {
      this.total--
    }
  },
  components: {
    subOverview
  }
}
</script>
<style scoped>
</style>

// 子组件
<template>
  <div class="sub-overview-container">
   
    <el-input v-model="val"></el-input>
    <button @click="add"></button>
  </div>
</template>
<script type="text/x-template" id="sub">
export default {
  props: ['value'],   // 通过v-model方式  这个地方的props必须是value
  data() {
    return {
      iptVal: ''
    }
  },
  methods: { 
    add(){
        this.$emit('input','1234') // 这个地方的事件也必须是input
    }
  },
  created() {
    
  }
}
</script>
<style scoped>

</style>
```

##### 方式3：.sync方式

```javascript
// 父组件
<template>
  <div class="overview-contianer">
    <sub-overview :val.sync="total" @addNum="addTotal"></sub-overview>  // 相当于 <sub-overview :val="total" @update:val="newVal => total=newVal"></sub-overview>
    <el-button @click="reduce">递减</el-button>
  </div>
</template>
<script>
// import mixin from '@/mixins/mixin'
import subOverview from './subOverview'
export default {
  data () {
    return {
      total: 0
    }
  },
  methods: {
    addTotal(newNum){
        console.log(newNum)  // 1234
    },
    reduce () {
      this.total--
    }
  },
  components: {
    subOverview
  }
}
</script>
<style scoped>
</style>

// 子组件
<template>
  <div class="sub-overview-container">
   
    <el-input v-model="val"></el-input>
    <button @click="add"></button>
  </div>
</template>
<script type="text/x-template" id="sub">
export default {
  props: ['val'],
  data() {
    return {
      iptVal: ''
    }
  },
  methods: { 
    add(){
        this.$emit('update:val','1234') // 此处必须是update
    }
  },
  created() {
    
  }
}
</script>
<style scoped>

</style>
```

##### attrs 与  listeners  

参考链接：[https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651553978&idx=1&sn=54774865de805bfb5c695ac85637c4b4&chksm=8025577bb752de6d0737ab0de92bda71df49f97b713a4b2d68719e9f8f13878f7b156a9cbba2&mpshare=1&scene=1&srcid=0516IEQxgNV2YO1t2Md2b5D6#rd]()

```javascript
// 父组件
<template>
  <div class="overview-contianer">
    <sub-overview :val="total" @addNum="addTotal" :placeholder="请输入" :content="total"></sub-overview>
    <el-button @click="reduce">递减</el-button>
  </div>
</template>
<script>
// import mixin from '@/mixins/mixin'
import subOverview from './subOverview'
export default {
  data () {
    return {
      total: 0
    }
  },
  methods: {
    addTotal(newNum){
        console.log(newNum)  // 1234
    },
    reduce () {
      this.total--
    }
  },
  components: {
    subOverview
  }
}
</script>
<style scoped>
</style>

// 子组件
<template>
  <div class="sub-overview-container">
   
    <el-input v-model="$attrs.val"></el-input>
    <button @click="add"></button>
  </div>
</template>
<script type="text/x-template" id="sub">
export default {
  // props: ['val'],   如果props过多就可以不写
  data() {
    return {
      iptVal: ''
    }
  },
  methods: { 
    add(){
        this.$emit(this.$listeners.addNum,'1234')
    }
  },
  created() {
    console.log(this.$attrs) // {"val":'0',"content":"0","placeholder":"请输入"}  此处包括了所有父组件绑定给子组件的属性,类似于placeholder这种dom原生的prototype可以直接传过来
    console.log(this.$listeners) // $listeners包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on=”$listeners” 传入内部组件——在创建更高层次的组件时非常有用。

// 需要注意的是，由于我们input并不是BaseInput这个组件的根节点，而默认情况下父作用域的不被认作 props 的特性绑定将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。所以我们需要设置inheritAttrs:false，这些默认行为将会被去掉, 以上两点的优化才能成功
  }
}
</script>
<style scoped>

</style>
```

