<template><h4 id="一-策略模式"><a class="header-anchor" href="#一-策略模式">#</a> 一. 策略模式</h4>
<h5 id="定义-定义一系列算法-把它们一个个封装起来-并且使它们可以相互替换"><a class="header-anchor" href="#定义-定义一系列算法-把它们一个个封装起来-并且使它们可以相互替换">#</a> 定义：定义一系列算法，把它们一个个封装起来，并且使它们可以相互替换</h5>
<h5 id="优点"><a class="header-anchor" href="#优点">#</a> 优点：</h5>
<ol>
<li>
<h5 id="利用组合-委托等-有效避免if条件语句"><a class="header-anchor" href="#利用组合-委托等-有效避免if条件语句">#</a> 利用组合，委托等，有效避免if条件语句</h5>
</li>
<li>
<h5 id="提供开放-封闭原则"><a class="header-anchor" href="#提供开放-封闭原则">#</a> 提供开放-封闭原则</h5>
</li>
<li>
<h5 id="代码复用性比较高"><a class="header-anchor" href="#代码复用性比较高">#</a> 代码复用性比较高</h5>
</li>
</ol>
<h5 id="缺点-必须提前知道所有的策略"><a class="header-anchor" href="#缺点-必须提前知道所有的策略">#</a> 缺点：必须提前知道所有的策略</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过后台传过来的英文，转换成中文显示出来</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">''</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// type假设为后台传过来的数据</span>
  str <span class="token operator">=</span> <span class="token string">'柱图'</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'line'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  str <span class="token operator">=</span> <span class="token string">'折线图'</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'pie'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  str <span class="token operator">=</span> <span class="token string">'饼图'</span>
<span class="token punctuation">}</span> 
<span class="token operator">...</span>

<span class="token comment">// 使用策略模式改造一下</span>
<span class="token keyword">const</span> <span class="token constant">CHARTS_MAP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">'line'</span><span class="token operator">:</span> <span class="token string">'折线图'</span><span class="token punctuation">,</span>
  <span class="token string">'bar'</span><span class="token operator">:</span> <span class="token string">'柱图'</span><span class="token punctuation">,</span>
  <span class="token string">'pie'</span>： <span class="token string">'饼图'</span>
<span class="token punctuation">}</span>
<span class="token constant">CHARTS_MAP</span><span class="token punctuation">[</span>type<span class="token punctuation">]</span>  <span class="token comment">// 获取对应的中文展示出来</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h5 id="使用场景有很多"><a class="header-anchor" href="#使用场景有很多">#</a> 使用场景有很多：</h5>
<ol>
<li>表格状态展示 后台可能会返回（high =&gt; 高，low =&gt; 低）</li>
<li>表格根据不同的类型，动态渲染表头</li>
<li>参照国信项目里面的dictionary.js</li>
</ol>
<h4 id="二-状态模式"><a class="header-anchor" href="#二-状态模式">#</a> 二. 状态模式</h4>
<h5 id="定义-将事物内部的每个状态分别封装成类-内部状态改变会产生不同行为"><a class="header-anchor" href="#定义-将事物内部的每个状态分别封装成类-内部状态改变会产生不同行为">#</a> 定义：将事物内部的每个状态分别封装成类，内部状态改变会产生不同行为</h5>
<h5 id="优点-1"><a class="header-anchor" href="#优点-1">#</a> 优点：</h5>
<ol>
<li>封装了转换规则</li>
<li>允许状态转换逻辑与状态对象合成一体，而不是某一个巨大的条件语句块</li>
<li>可以让多个环境对象共享一个状态对象，从而减少系统中对象的个数</li>
</ol>
<h5 id="缺点"><a class="header-anchor" href="#缺点">#</a> 缺点：</h5>
<ol>
<li>状态模式的使用必然会增加系统类和对象的个数</li>
<li>状态模式的结构与实现都较为复杂，如果使用不当将导致程序结构和代码的混乱</li>
</ol>
<h5 id="运用场景-步骤条-步骤1-》步骤2-》步骤3"><a class="header-anchor" href="#运用场景-步骤条-步骤1-》步骤2-》步骤3">#</a> 运用场景(步骤条 步骤1=》步骤2=》步骤3)</h5>
<ol>
<li>一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为</li>
<li>一个操作中含有大量的分支语句，而且这些分支语句依赖于该对象的状态。</li>
</ol>
<div class="language-markup ext-vue line-numbers-mode"><pre v-pre class="language-markup"><code>// context.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-steps</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>status<span class="token punctuation">"</span></span> <span class="token attr-name">finish-status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">simple</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">marginBottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>步骤 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-step</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>步骤 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-step</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>步骤 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-step</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>步骤 4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-step</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-steps</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 返回上一步 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canGoBack<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goBack<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>返回上一步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 动态渲染当前状态组件 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>statusCom<span class="token punctuation">"</span></span> <span class="token attr-name">@onChangeStatus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeStatus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> step1 <span class="token keyword">from</span> <span class="token string">'./status-components/step1'</span>
<span class="token keyword">import</span> step2 <span class="token keyword">from</span> <span class="token string">'./status-components/step2'</span>
<span class="token keyword">import</span> step3 <span class="token keyword">from</span> <span class="token string">'./status-components/step3'</span>
<span class="token keyword">import</span> step4 <span class="token keyword">from</span> <span class="token string">'./status-components/step4'</span>
<span class="token keyword">const</span> <span class="token constant">DEFAULT_STATUS</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'status-form'</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    step1<span class="token punctuation">,</span>
    step2<span class="token punctuation">,</span>
    step3<span class="token punctuation">,</span>
    step4
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">statusCom</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> statusMap <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token number">1</span><span class="token operator">:</span> step1<span class="token punctuation">,</span>
        <span class="token number">2</span><span class="token operator">:</span> step2<span class="token punctuation">,</span>
        <span class="token number">3</span><span class="token operator">:</span> step3<span class="token punctuation">,</span>
        <span class="token number">4</span><span class="token operator">:</span> step4
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> statusMap<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>status<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">canGoBack</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      status<span class="token operator">:</span> <span class="token constant">DEFAULT_STATUS</span><span class="token punctuation">,</span>
      cache<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeStatus</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">goBack</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 弹出当前状态</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// 改变状态为上一个状态</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token constant">DEFAULT_STATUS</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><div class="language-markup ext-vue line-numbers-mode"><pre v-pre class="language-markup"><code>// step1.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>步骤1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'step1'</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'onChangeStatus'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>1.context具体状态的切换--具体渲染哪一步的组件</p>
<p>2.step负责处理当前状态的实现和切换下一个状态---每一步逻辑的具体实现</p>
<h4 id="三-外观模式-门面模式"><a class="header-anchor" href="#三-外观模式-门面模式">#</a> 三. 外观模式(门面模式)</h4>
<h5 id="定义-外观模式提供一个高层接口-这个接口使得这一子系统更加容易使用。引入外观角色之后-用户只需要直接与外观角色交互-用户与子系统之间的复杂关系由外观角色来实现-从而降低了系统的耦合度"><a class="header-anchor" href="#定义-外观模式提供一个高层接口-这个接口使得这一子系统更加容易使用。引入外观角色之后-用户只需要直接与外观角色交互-用户与子系统之间的复杂关系由外观角色来实现-从而降低了系统的耦合度">#</a> 定义：外观模式提供一个高层接口，这个接口使得这一子系统更加容易使用。引入外观角色之后，用户只需要直接与外观角色交互，用户与子系统之间的复杂关系由外观角色来实现，从而降低了系统的耦合度.</h5>
<h5 id="优点-2"><a class="header-anchor" href="#优点-2">#</a> 优点：</h5>
<ol>
<li>简化复杂接口</li>
<li>解耦合，屏蔽使用者对子系统的直接访问</li>
<li>对用户隐藏真正的实现细节，用户只关心最高层的接口</li>
</ol>
<h5 id="缺点-门面模式不符合开闭原则"><a class="header-anchor" href="#缺点-门面模式不符合开闭原则">#</a> 缺点：门面模式不符合开闭原则</h5>
<p><img src="https://img-blog.csdn.net/20170111093841197?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvVHlyb25lUmVuZWt0b24=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="img"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">firstName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'zhang'</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">lastName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'san'</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 类似于最高层的一个接口，保证函数或者对象在一个合理的粒度</span>
  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">firstName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">lastName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>![image-20190517104417707](/Users/sundong/Library/Application Support/typora-user-images/image-20190517104417707.png)</p>
<h4 id="一种简单思路-不知道是啥模式"><a class="header-anchor" href="#一种简单思路-不知道是啥模式">#</a> 一种简单思路(不知道是啥模式)</h4>
<h5 id="使用场景-假如点击一个新增按钮-有的地方需要弹窗-有的地方需要跳转到一个新页面-但是不管是页面还是弹窗里面内容都是一样的-比如都是一个form表单-。区别在于-弹窗的话点击保存之后需要关闭弹窗刷新列表-而页面的话需要先跳回到列表页然后在进行刷新。"><a class="header-anchor" href="#使用场景-假如点击一个新增按钮-有的地方需要弹窗-有的地方需要跳转到一个新页面-但是不管是页面还是弹窗里面内容都是一样的-比如都是一个form表单-。区别在于-弹窗的话点击保存之后需要关闭弹窗刷新列表-而页面的话需要先跳回到列表页然后在进行刷新。">#</a> 使用场景：假如点击一个新增按钮，有的地方需要弹窗，有的地方需要跳转到一个新页面，但是不管是页面还是弹窗里面内容都是一样的(比如都是一个form表单)。区别在于：弹窗的话点击保存之后需要关闭弹窗刷新列表，而页面的话需要先跳回到列表页然后在进行刷新。</h5>
<p>// base.vue</p>
<p>![image-20190516220226948](/Users/sundong/Library/Application Support/typora-user-images/image-20190516220226948.png)</p>
<p>// servies.js</p>
<p>![image-20190516215833495](/Users/sundong/Library/Application Support/typora-user-images/image-20190516215833495.png)</p>
<p>// dialog.vue</p>
<p>![image-20190515231153870](/Users/sundong/Library/Application Support/typora-user-images/image-20190515231153870.png)</p>
<p>// page.vue</p>
<p>![image-20190515231419354](/Users/sundong/Library/Application Support/typora-user-images/image-20190515231419354.png)</p>
<h3 id="ps-使用设计模式最好给自己一个理由-不要滥用-不要滥用-不要滥用"><a class="header-anchor" href="#ps-使用设计模式最好给自己一个理由-不要滥用-不要滥用-不要滥用">#</a> PS: 使用设计模式最好给自己一个理由，不要滥用！不要滥用！不要滥用！.</h3>
</template>