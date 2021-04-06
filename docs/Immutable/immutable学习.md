# 1.什么是Immutable Data

##### Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 **Persistent Data Structure**（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 **Structural Sharing**（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享

##### 缺点：有的时候还是很难区别到底是 Immutable 对象还是原生对象，容易混淆操作。

##### Immutable 中的 Map 和 List 虽对应原生 Object 和 Array，但操作非常不同，比如你要用 `map.get('key')`而不是 `map.key`，`array.get(0)` 而不是 `array[0]`。另外 Immutable 每次修改都会返回新对象，也很容易忘记赋值。并且个人感觉如果对现有代码进行改造，成本实在是太大了.

```javascript
import Immutable from 'immutable'  // 以下默认已经引入，不再重复
function keyLog(touchFn) {
  let data = { key: 'value' }; 
  f(data);
  console.log(data.key); // 猜猜会打印什么？  无法确定
}

function keyLog(touchFn) {
  let data = Immutable.Map({ key: 'value' });
  f(data);
  console.log(data.get('key'));  // value  可以确定 
}

const map1 = Immutable.Map({a: 1, b: 2,c: 3})
const map2 = map1.set('b', 5)
map1.get('b')  // 2  // 获取
map2.get('b')  // 5

```

#### 2.值相同但引用不同判断  ===、is()、equals

```const map1 = Immutable.Map({a: 1, b: 2,c: 3})const map2 = map1.set('b', 5)  // 虽然操作完之后值相同，但每次都会创建一个新的引用map1 === map2  // false   是对引用地址的比较而不是‘值比较’map1.equals(map2)  // true 只要值相同就可以Immutable.is(map1, map2)  // true 仅仅比较值是否相同

#### 3.对象的简单介绍

```javascript
const map1 = Map({a: 1, b: 2,c: 3})
const copyMap1 = map1  // 互不影响
copyMap1.set('d', 10)
map1 // Map({a: 1, b: 2,c: 3})
copyMap1 // Map({a: 1, b: 2,c: 3, d: 10})
copyMap1.toObject()  // {a:1, b:2,c: 3, d: 10}

copyMap1.map((value, key) => key.toUpperCase.join())  // 'A,B,C,D'  因为Immutable将任何数组或者是对象都视为集合

// 原始对象转换为Immutable集合
const toFromJsObj = {1: 'one'}
console.log(Object.keys(toFromJsObj)) // ['1']
console.log(toFromJsObj["1"], toFromJsObj[1]); // "one", "one"

const map = Immutable.fromJS(toFromJsObj);
console.log(map.get("1"), map.get(1)); // "one", undefined  注意，当使用JS对象构造不可变映射时，js对象属性始终是字符串

//Immutable集合转换为原始对象
const deep = Immutable.Map({ a: 1, b: 2, c: List([ 3, 4, 5 ]) });
console.log(deep.toObject()); // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
console.log(deep.toArray()); // [ 1, 2, List [ 3, 4, 5 ] ]
console.log(deep.toJS()); // { a: 1, b: 2, c: [ 3, 4, 5 ] }
JSON.stringify(deep); // '{"a":1,"b":2,"c":[3,4,5]}'

// 对象合并
const map2 = Map({a: 1,b: 2,c: 3, d: 4})
const map3 = Map({e: 5,f: 6,g: 7})
const obj = {h:100, i: 200}
const map4 = map2.merge(map3, obj)  // Map{a: 1,b: 2,c: 3, d: 4, e: 5,f: 6,g: 7, h:100, i: 200}
```

#### 3.1 关于merge

```javascript
// merge  作用：浅合并，新数据与旧数据对比，旧数据中不存在的属性直接添加，就数据中已存在的属性用新数据中的覆盖
const mergeObj = {x: 123, y: 456}
const mergeObj1 = Immutable.merge(mergeObj, {y:789, z:'abc'})  // {x:123，y:789,z:'abc'}
console.log(mergeObj)  // {x: 123, y: 456}


const map1 = Immutable.fromJS({a:111,b:222,c:{d:333,e:444}}) 
const map2 = Immutable.fromJS({a:111,b:222,c:{e:444,f:555}})
// mergrWith 作用：自定义浅合并，可自行设置某些属性的值
const map3 = map1.mergeWith((oldData,newData,key) => {
      if(key === 'a'){
        return 666;
      }else{
        return newData
      }
    },map2);  // {a:666,b:222,c:{e:444,f:555}}
// mergeIn 作用：对深层数据进行浅合并


// mergeDeep 作用：深合并，新旧数据中同时存在的的属性为新旧数据合并之后的数据
 const map4 = map1.mergeDeep(map2)  //Map {a:111,b:222,c:{d:333,e:444,f:555}}

// mergeDeepIn 作用：对深层数据进行深合并

// mergrDeepWith 作用：自定义深合并，可自行设置某些属性的值
```



#### 4.对于Array也有相对应的Immutable.List

```javascript
//push()：在List末尾插入一个元素
//pop(): 在List末尾删除一个元素
//unshift: 在List首部插入一个元素
//shift: 在List首部删除一个元素
//insert：在List的index处插入元素
const list1 = Immutable.List([1, 2])
const list2 = Immutable.push(3,4,5)
const list3 = list2.unshift(0)
const list4 = list1.concat(list2, list3) // 数组合并
list4  // List[0,1,2,3,4,5]
...list4  // 0,1,2,3,4  // 支持es5
list4.toArray()  // [0,1,2,3,4,5]
```

### Seamless-immutable

##### [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)是另一套持久化数据结构的库，它并没有实现完整的 `Persistent Data Structure`，而是使用 `Object.defineProperty`（因此只能在 IE9 及以上使用）扩展了 JavaScript 的 Array 和 Object 对象来实现，只支持 Array 和 Object 两种数据类型，API 基于与 Array 和 Object ，因此许多不用改变自己的使用习惯，对代码的入侵非常小。同时，它的代码库也非常小，压缩后下载只有 2K。

```Javascript
      var array = ['toto', 'immuttable', {hammer: '11111'}]
      var array1 = Immutable.from(array) // var array1 = Immutable(['toto', 'immuttable', {hammer: '11111'}])
      array[1] = 'subn' // 不可更改
      console.log('array', array[1])
      console.log('array1', array1)  // ['toto', 'immuttable', {hammer: '11111'}]

      var obj = {}
      console.log('123456', Immutable.setIn(obj, ['key'], 'data'))

      var flatMap = Immutable.flatMap(array, function (str) {
        return [str, str, str]
      })
      console.log('flatMap', flatMap)

      var array2 = ['a', 'b', 'c', 'd']
      let asObject = Immutable.asObject(array2, function (str) {
        return [str, str.toUpperCase()]
      })
      console.log('asObject', asObject)

      // 返回数组的可变副本
      let asMutableArr = Immutable(['hello', 'world', {a: 1}])
      let asMutableArr1 = Immutable.asMutable(asMutableArr)
      asMutableArr1.push('11111')
      // asMutableObj.a
      console.log('asMutableArr', asMutableArr)
      console.log('asMutableArr1', asMutableArr1) // 互不影响
```

