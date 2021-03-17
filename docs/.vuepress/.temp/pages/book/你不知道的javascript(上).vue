<template><h3 id="lhs与rhs概念以及异常"><a class="header-anchor" href="#lhs与rhs概念以及异常">#</a> LHS与RHS概念以及异常：</h3>
<h4 id="概念-当变量出现在赋值操作的左侧时进行lhs查询-当出现在右侧的为rhs查询"><a class="header-anchor" href="#概念-当变量出现在赋值操作的左侧时进行lhs查询-当出现在右侧的为rhs查询">#</a> 概念：当变量出现在赋值操作的左侧时进行LHS查询，当出现在右侧的为RHS查询</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment">// 实际上是为了查找a并为它赋值为2  这就是LHS查询</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 实际上是为了查找到a并打印出来 这就是RHS查询</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>在非严格模式下，进行LHS查询如果找不到便会Undefined，但如果使用RHS进行查询找不到相应变量则会 ReferenceError，但是在严格模式下，都会报 ReferenceError.</strong></p>
<h3 id="变量提升"><a class="header-anchor" href="#变量提升">#</a> 变量提升：</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// typeError</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// ReferenceError</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 这段程序foo被提升到了全局作用域，因此导致不会产生ReferenceError,但是因为foo并没有赋值，因此会出现undefined错误，所以调用foo()，就相当于对undefined进行函数调用</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="this指向问题"><a class="header-anchor" href="#this指向问题">#</a> this指向问题</h4>
<div class="language-Javascript ext-Javascript line-numbers-mode"><pre v-pre class="language-Javascript"><code>var Obj = function () {
  this.name = '张三'，
  this.age = 20,
  return {
    name: '李四'
  }
}
var newObj = new Obj()
console.log('姓名：' + newObj.name + '年龄：' + newObj.age) // 姓名：李四 年龄：undefined
// ps: 如果构造器显式地返回一个object类型的对象，那么此次运算最终返回这个对象，而不是我们之前期待的this。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>