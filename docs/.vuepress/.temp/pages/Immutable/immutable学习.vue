<template><h1 id="_1-什么是immutable-data"><a class="header-anchor" href="#_1-什么是immutable-data">#</a> 1.什么是Immutable Data</h1>
<h5 id="immutable-data-就是一旦创建-就不能再被更改的数据。对-immutable-对象的任何修改或添加删除操作都会返回一个新的-immutable-对象。immutable-实现的原理是-persistent-data-structure-持久化数据结构-也就是使用旧数据创建新数据时-要保证旧数据同时可用且不变。同时为了避免-deepcopy-把所有节点都复制一遍带来的性能损耗-immutable-使用了-structural-sharing-结构共享-即如果对象树中一个节点发生变化-只修改这个节点和受它影响的父节点-其它节点则进行共享"><a class="header-anchor" href="#immutable-data-就是一旦创建-就不能再被更改的数据。对-immutable-对象的任何修改或添加删除操作都会返回一个新的-immutable-对象。immutable-实现的原理是-persistent-data-structure-持久化数据结构-也就是使用旧数据创建新数据时-要保证旧数据同时可用且不变。同时为了避免-deepcopy-把所有节点都复制一遍带来的性能损耗-immutable-使用了-structural-sharing-结构共享-即如果对象树中一个节点发生变化-只修改这个节点和受它影响的父节点-其它节点则进行共享">#</a> Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 <strong>Persistent Data Structure</strong>（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 <strong>Structural Sharing</strong>（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享</h5>
<h5 id="缺点-有的时候还是很难区别到底是-immutable-对象还是原生对象-容易混淆操作。"><a class="header-anchor" href="#缺点-有的时候还是很难区别到底是-immutable-对象还是原生对象-容易混淆操作。">#</a> 缺点：有的时候还是很难区别到底是 Immutable 对象还是原生对象，容易混淆操作。</h5>
<h5 id="immutable-中的-map-和-list-虽对应原生-object-和-array-但操作非常不同-比如你要用-map-get-key-而不是-map-key-array-get-0-而不是-array-0-。另外-immutable-每次修改都会返回新对象-也很容易忘记赋值。并且个人感觉如果对现有代码进行改造-成本实在是太大了"><a class="header-anchor" href="#immutable-中的-map-和-list-虽对应原生-object-和-array-但操作非常不同-比如你要用-map-get-key-而不是-map-key-array-get-0-而不是-array-0-。另外-immutable-每次修改都会返回新对象-也很容易忘记赋值。并且个人感觉如果对现有代码进行改造-成本实在是太大了">#</a> Immutable 中的 Map 和 List 虽对应原生 Object 和 Array，但操作非常不同，比如你要用 <code>map.get('key')</code>而不是 <code>map.key</code>，<code>array.get(0)</code> 而不是 <code>array[0]</code>。另外 Immutable 每次修改都会返回新对象，也很容易忘记赋值。并且个人感觉如果对现有代码进行改造，成本实在是太大了.</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Immutable <span class="token keyword">from</span> <span class="token string">'immutable'</span>  <span class="token comment">// 以下默认已经引入，不再重复</span>
<span class="token keyword">function</span> <span class="token function">keyLog</span><span class="token punctuation">(</span><span class="token parameter">touchFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">'value'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> 
  <span class="token function">f</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 猜猜会打印什么？  无法确定</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">keyLog</span><span class="token punctuation">(</span><span class="token parameter">touchFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">'value'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">f</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// value  可以确定 </span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> map1 <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>c<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> map2 <span class="token operator">=</span> map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span>  <span class="token comment">// 2  // 获取</span>
map2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span>  <span class="token comment">// 5</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="_2-值相同但引用不同判断-、is-、equals"><a class="header-anchor" href="#_2-值相同但引用不同判断-、is-、equals">#</a> 2.值相同但引用不同判断  ===、is()、equals</h4>
<div class="language-const ext-const line-numbers-mode"><pre v-pre class="language-const"><code>
#### 3.对象的简单介绍

```javascript
const map1 = Map({a: 1, b: 2,c: 3})
const copyMap1 = map1  // 互不影响
copyMap1.set('d', 10)
map1 // Map({a: 1, b: 2,c: 3})
copyMap1 // Map({a: 1, b: 2,c: 3, d: 10})
copyMap1.toObject()  // {a:1, b:2,c: 3, d: 10}

copyMap1.map((value, key) =&gt; key.toUpperCase.join())  // 'A,B,C,D'  因为Immutable将任何数组或者是对象都视为集合

// 原始对象转换为Immutable集合
const toFromJsObj = {1: 'one'}
console.log(Object.keys(toFromJsObj)) // ['1']
console.log(toFromJsObj[&quot;1&quot;], toFromJsObj[1]); // &quot;one&quot;, &quot;one&quot;

const map = Immutable.fromJS(toFromJsObj);
console.log(map.get(&quot;1&quot;), map.get(1)); // &quot;one&quot;, undefined  注意，当使用JS对象构造不可变映射时，js对象属性始终是字符串

//Immutable集合转换为原始对象
const deep = Immutable.Map({ a: 1, b: 2, c: List([ 3, 4, 5 ]) });
console.log(deep.toObject()); // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
console.log(deep.toArray()); // [ 1, 2, List [ 3, 4, 5 ] ]
console.log(deep.toJS()); // { a: 1, b: 2, c: [ 3, 4, 5 ] }
JSON.stringify(deep); // '{&quot;a&quot;:1,&quot;b&quot;:2,&quot;c&quot;:[3,4,5]}'

// 对象合并
const map2 = Map({a: 1,b: 2,c: 3, d: 4})
const map3 = Map({e: 5,f: 6,g: 7})
const obj = {h:100, i: 200}
const map4 = map2.merge(map3, obj)  // Map{a: 1,b: 2,c: 3, d: 4, e: 5,f: 6,g: 7, h:100, i: 200}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="_3-1-关于merge"><a class="header-anchor" href="#_3-1-关于merge">#</a> 3.1 关于merge</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// merge  作用：浅合并，新数据与旧数据对比，旧数据中不存在的属性直接添加，就数据中已存在的属性用新数据中的覆盖</span>
<span class="token keyword">const</span> mergeObj <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">456</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> mergeObj1 <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>mergeObj<span class="token punctuation">,</span> <span class="token punctuation">{</span>y<span class="token operator">:</span><span class="token number">789</span><span class="token punctuation">,</span> z<span class="token operator">:</span><span class="token string">'abc'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// {x:123，y:789,z:'abc'}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mergeObj<span class="token punctuation">)</span>  <span class="token comment">// {x: 123, y: 456}</span>


<span class="token keyword">const</span> map1 <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">111</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token number">222</span><span class="token punctuation">,</span>c<span class="token operator">:</span><span class="token punctuation">{</span>d<span class="token operator">:</span><span class="token number">333</span><span class="token punctuation">,</span>e<span class="token operator">:</span><span class="token number">444</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> 
<span class="token keyword">const</span> map2 <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">111</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token number">222</span><span class="token punctuation">,</span>c<span class="token operator">:</span><span class="token punctuation">{</span>e<span class="token operator">:</span><span class="token number">444</span><span class="token punctuation">,</span>f<span class="token operator">:</span><span class="token number">555</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// mergrWith 作用：自定义浅合并，可自行设置某些属性的值</span>
<span class="token keyword">const</span> map3 <span class="token operator">=</span> map1<span class="token punctuation">.</span><span class="token function">mergeWith</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">oldData<span class="token punctuation">,</span>newData<span class="token punctuation">,</span>key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">666</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> newData
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>map2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// {a:666,b:222,c:{e:444,f:555}}</span>
<span class="token comment">// mergeIn 作用：对深层数据进行浅合并</span>


<span class="token comment">// mergeDeep 作用：深合并，新旧数据中同时存在的的属性为新旧数据合并之后的数据</span>
 <span class="token keyword">const</span> map4 <span class="token operator">=</span> map1<span class="token punctuation">.</span><span class="token function">mergeDeep</span><span class="token punctuation">(</span>map2<span class="token punctuation">)</span>  <span class="token comment">//Map {a:111,b:222,c:{d:333,e:444,f:555}}</span>

<span class="token comment">// mergeDeepIn 作用：对深层数据进行深合并</span>

<span class="token comment">// mergrDeepWith 作用：自定义深合并，可自行设置某些属性的值</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="_4-对于array也有相对应的immutable-list"><a class="header-anchor" href="#_4-对于array也有相对应的immutable-list">#</a> 4.对于Array也有相对应的Immutable.List</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//push()：在List末尾插入一个元素</span>
<span class="token comment">//pop(): 在List末尾删除一个元素</span>
<span class="token comment">//unshift: 在List首部插入一个元素</span>
<span class="token comment">//shift: 在List首部删除一个元素</span>
<span class="token comment">//insert：在List的index处插入元素</span>
<span class="token keyword">const</span> list1 <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">List</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> list2 <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> list3 <span class="token operator">=</span> list2<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> list4 <span class="token operator">=</span> list1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>list2<span class="token punctuation">,</span> list3<span class="token punctuation">)</span> <span class="token comment">// 数组合并</span>
list4  <span class="token comment">// List[0,1,2,3,4,5]</span>
<span class="token operator">...</span>list4  <span class="token comment">// 0,1,2,3,4  // 支持es5</span>
list4<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// [0,1,2,3,4,5]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="seamless-immutable"><a class="header-anchor" href="#seamless-immutable">#</a> Seamless-immutable</h3>
<h5 id="seamless-immutable是另一套持久化数据结构的库-它并没有实现完整的-persistent-data-structure-而是使用-object-defineproperty-因此只能在-ie9-及以上使用-扩展了-javascript-的-array-和-object-对象来实现-只支持-array-和-object-两种数据类型-api-基于与-array-和-object-因此许多不用改变自己的使用习惯-对代码的入侵非常小。同时-它的代码库也非常小-压缩后下载只有-2k。"><a class="header-anchor" href="#seamless-immutable是另一套持久化数据结构的库-它并没有实现完整的-persistent-data-structure-而是使用-object-defineproperty-因此只能在-ie9-及以上使用-扩展了-javascript-的-array-和-object-对象来实现-只支持-array-和-object-两种数据类型-api-基于与-array-和-object-因此许多不用改变自己的使用习惯-对代码的入侵非常小。同时-它的代码库也非常小-压缩后下载只有-2k。">#</a> <a href="https://github.com/rtfeldman/seamless-immutable" target="_blank" rel="noopener noreferrer">seamless-immutable<OutboundLink/></a>是另一套持久化数据结构的库，它并没有实现完整的 <code>Persistent Data Structure</code>，而是使用 <code>Object.defineProperty</code>（因此只能在 IE9 及以上使用）扩展了 JavaScript 的 Array 和 Object 对象来实现，只支持 Array 和 Object 两种数据类型，API 基于与 Array 和 Object ，因此许多不用改变自己的使用习惯，对代码的入侵非常小。同时，它的代码库也非常小，压缩后下载只有 2K。</h5>
<div class="language-Javascript ext-Javascript line-numbers-mode"><pre v-pre class="language-Javascript"><code>      var array = ['toto', 'immuttable', {hammer: '11111'}]
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></template>