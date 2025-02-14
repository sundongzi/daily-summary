##### v-model本质是语法糖，是双向绑定，但严格来说遵循的是单项数据流。所谓单项数据流指的是：数据向下，事件向上。

### MVVM 双向数据绑定：主要通过数据劫持+发布订阅模式实现

#### 实现MVVM双向数据绑定的原理：

#####     1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。

#####     2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。

#####     3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的      订阅器。

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

#### 响应式原理 VS 双向数据绑定

##### 响应式原理

定义：是Vue的核心特性之一，`数据驱动视图`。遵循`发布订阅`模式，vue通过依赖收集、派发更新原理实现。

Vue2.x通过`Object.defineProperty`进行实现。

Vue3.x通过`proxy`进行实现 

```
1、劫持data Observe(data)
2、模板编译（Complie）：解析{{}}语法或者指令时创建相应的watcher
3、创建dep（依赖收集）：当变量被访问时触发getter，并把watcher添加至dep中
4、派发更新：当data中的数据发生更新时，触发setter，通过对应的dep通知其管理的所有watcher更新

Dep与wathcer之间是【多对多的关系】：
属性多次被访问时，一个dep对应多个watcher
多层表达式时（a.b.c）一个watcher对应多个dep
```



##### 双向数据绑定

通常是指我们使用的`v-model`指令的实现，也就是一个`input`事件和`value`的语法糖。

双向绑定实际上说的就是v-model指令对数据进行了双向绑定。不能说vue是双向绑定的，vue也是单向数据流的。

同时双向数据绑定是要`结合事件监听`的   
