<template><h3 id="mvvm-双向数据绑定-主要通过数据劫持-发布订阅模式实现"><a class="header-anchor" href="#mvvm-双向数据绑定-主要通过数据劫持-发布订阅模式实现">#</a> MVVM 双向数据绑定：主要通过数据劫持+发布订阅模式实现</h3>
<h4 id="实现mvvm双向数据绑定的原理"><a class="header-anchor" href="#实现mvvm双向数据绑定的原理">#</a> 实现MVVM双向数据绑定的原理：</h4>
<h5 id="_1-实现一个监听器observer-用来劫持并监听所有属性-如果有变动的-就通知订阅者。"><a class="header-anchor" href="#_1-实现一个监听器observer-用来劫持并监听所有属性-如果有变动的-就通知订阅者。">#</a> ==1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。==</h5>
<h5 id="_2-实现一个订阅者watcher-可以收到属性的变化通知并执行相应的函数-从而更新视图。"><a class="header-anchor" href="#_2-实现一个订阅者watcher-可以收到属性的变化通知并执行相应的函数-从而更新视图。">#</a> ==2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。==</h5>
<h5 id="_3-实现一个解析器compile-可以扫描和解析每个节点的相关指令-并根据初始化模板数据以及初始化相应的-订阅器。"><a class="header-anchor" href="#_3-实现一个解析器compile-可以扫描和解析每个节点的相关指令-并根据初始化模板数据以及初始化相应的-订阅器。">#</a> ==3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的      订阅器。==</h5>
<h4 id="一-数据劫持-es5里面的object-defineproperty"><a class="header-anchor" href="#一-数据劫持-es5里面的object-defineproperty">#</a> 一.数据劫持  es5里面的Object.defineProperty()</h4>
<h5 id="为什么要数据劫持"><a class="header-anchor" href="#为什么要数据劫持">#</a> 为什么要数据劫持?</h5>
<ol>
<li>
<h5 id="观察对象-给对象增加object-defineproperty"><a class="header-anchor" href="#观察对象-给对象增加object-defineproperty">#</a> 观察对象，给对象增加Object.defineProperty()</h5>
</li>
<li>
<h5 id="vue特点是不能新增不存在的属性-不存在的属性没有get和set属性"><a class="header-anchor" href="#vue特点是不能新增不存在的属性-不存在的属性没有get和set属性">#</a> vue特点是不能新增不存在的属性 不存在的属性没有get和set属性</h5>
</li>
<li>
<h5 id="深度响应-因为每次赋予一个新对象时会给这个新对象增加defineproperty-数据劫持"><a class="header-anchor" href="#深度响应-因为每次赋予一个新对象时会给这个新对象增加defineproperty-数据劫持">#</a> 深度响应 因为每次赋予一个新对象时会给这个新对象增加defineProperty(数据劫持)</h5>
</li>
</ol>
<h5 id="_1-实现一个observer-植入一个消息订阅器"><a class="header-anchor" href="#_1-实现一个observer-植入一个消息订阅器">#</a> 1.实现一个Observer,植入一个消息订阅器</h5>
<p>Observer是一个数据监听器，其实现核心方法就是前文所说的Object.defineProperty( )。如果要对所有属性都进行监听的话，那么可以通过递归方法遍历所有属性值，并对其进行Object.defineProperty( )处理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineReative</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>key<span class="token punctuation">,</span>val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> val <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token function">Observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>    <span class="token comment">// 递归继续往下找</span>
      <span class="token keyword">var</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>key<span class="token punctuation">,</span><span class="token punctuation">{</span>
        configurable<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        enumberable<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>是否需要添加订阅者<span class="token punctuation">)</span><span class="token punctuation">{</span>
                dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token keyword">return</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">set</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">===</span> newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token keyword">return</span> 
          <span class="token punctuation">}</span>
          val <span class="token operator">=</span> newVal
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">''</span> <span class="token operator">+</span> newVal<span class="token punctuation">)</span>
          dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Observe</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>data <span class="token operator">||</span> <span class="token keyword">typeof</span> data <span class="token operator">!==</span> <span class="token string">'Object'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       <span class="token function">defineReative</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>key<span class="token punctuation">,</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token class-name">Dep</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">addSub</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newSub</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newSub<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">notify</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            sub<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> library <span class="token operator">=</span> <span class="token punctuation">{</span>
  book1<span class="token operator">:</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">''</span>
  <span class="token punctuation">}</span>
  book2<span class="token operator">:</span><span class="token string">''</span>
<span class="token punctuation">}</span>
<span class="token function">Observe</span><span class="token punctuation">(</span>library<span class="token punctuation">)</span>
library<span class="token punctuation">.</span>book1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'vue'</span>       <span class="token comment">// console.log(name vue)</span>
library<span class="token punctuation">.</span>book2 <span class="token operator">=</span> <span class="token string">'你不知道的javascript'</span>  <span class="token comment">// console.log(book2 你不知道的javascript)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div></template>