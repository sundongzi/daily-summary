---
title: vue数据双向绑定
date: 2021-04-06 15:05:05
permalink: /pages/e4ae07/
categories:
  - 前端
  - VUE
tags:
  - 
---
### MVVM 双向数据绑定：主要通过数据劫持+发布订阅模式实现

#### 实现MVVM双向数据绑定的原理：

#####     ==1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。==

#####     ==2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。==

#####     ==3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的      订阅器。==

#### 一.数据劫持  es5里面的Object.defineProperty()

##### 为什么要数据劫持?

1. ##### 观察对象，给对象增加Object.defineProperty()

2. ##### vue特点是不能新增不存在的属性 不存在的属性没有get和set属性

3. ##### 深度响应 因为每次赋予一个新对象时会给这个新对象增加defineProperty(数据劫持)                                                                 

##### 1.实现一个Observer,植入一个消息订阅器

  Observer是一个数据监听器，其实现核心方法就是前文所说的Object.defineProperty( )。如果要对所有属性都进行监听的话，那么可以通过递归方法遍历所有属性值，并对其进行Object.defineProperty( )处理

```javascript
function defineReative(data,key,val){
    for(let key of data){
      let val = data[key]
      Observe(val)    // 递归继续往下找
      var dep = new Dep()
      Object.defineProperty(data,key,{
        configurable:true,
        enumberable:true,
        get:function(){
            if(是否需要添加订阅者){
                dep.addSub(watcher)
            }
          return val
        },
        set:function(newVal){
          if(val === newVal){
              return 
          }
          val = newVal
          console.log(key + '' + newVal)
          dep.notify()
        }
      })
    }
}
function Observe(data){
   if(!data || typeof data !== 'Object'){
      return
   }
   Object.keys(data).forEach((key) => {
       defineReative(data,key,data[key])
   })
}

function Dep(){
    this.subs = []
}
Dep.prototype = {
    addSub:function(newSub){
        this.subs.push(newSub)
    },
    notify:function(){
        this.subs.forEach((sub) => {
            sub.update()
        })
    }
}
var library = {
  book1:{
    name:''
  }
  book2:''
}
Observe(library)
library.book1.name = 'vue'       // console.log(name vue)
library.book2 = '你不知道的javascript'  // console.log(book2 你不知道的javascript)
```

