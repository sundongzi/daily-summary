<template><h5 id="方式一-props"><a class="header-anchor" href="#方式一-props">#</a> 方式一: props</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overview-contianer"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>sub<span class="token operator">-</span>overview <span class="token operator">:</span>val<span class="token operator">=</span><span class="token string">"total"</span> @addNum<span class="token operator">=</span><span class="token string">"addTotal"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>sub<span class="token operator">-</span>overview<span class="token operator">></span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"reduce"</span><span class="token operator">></span>递减<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// import mixin from '@/mixins/mixin'</span>
<span class="token keyword">import</span> subOverview <span class="token keyword">from</span> <span class="token string">'./subOverview'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      total<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addTotal</span><span class="token punctuation">(</span><span class="token parameter">newNum</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNum<span class="token punctuation">)</span>  <span class="token comment">// 1234</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">reduce</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>total<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    subOverview
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

<span class="token comment">// 子组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sub-overview-container"</span><span class="token operator">></span>
   
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"val"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>input<span class="token operator">></span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"add"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/x-template"</span> id<span class="token operator">=</span><span class="token string">"sub"</span><span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'val'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      iptVal<span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'addNum'</span><span class="token punctuation">,</span><span class="token string">'1234'</span><span class="token punctuation">)</span> <span class="token comment">// 通过emit</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h5 id="第二种方式-通过v-model"><a class="header-anchor" href="#第二种方式-通过v-model">#</a> 第二种方式  通过v-model</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overview-contianer"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>sub<span class="token operator">-</span>overview v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"val"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>sub<span class="token operator">-</span>overview<span class="token operator">></span> <span class="token comment">// 相当于 &lt;sub-overview :value="val" @input="addTotal">&lt;/sub-overview> </span>
   
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"reduce"</span><span class="token operator">></span>递减<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// import mixin from '@/mixins/mixin'</span>
<span class="token keyword">import</span> subOverview <span class="token keyword">from</span> <span class="token string">'./subOverview'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      total<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addTotal</span><span class="token punctuation">(</span><span class="token parameter">newNum</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNum<span class="token punctuation">)</span>  <span class="token comment">// 1234</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">reduce</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>total<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    subOverview
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

<span class="token comment">// 子组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sub-overview-container"</span><span class="token operator">></span>
   
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"val"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>input<span class="token operator">></span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"add"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/x-template"</span> id<span class="token operator">=</span><span class="token string">"sub"</span><span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'value'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">// 通过v-model方式  这个地方的props必须是value</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      iptVal<span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span><span class="token string">'1234'</span><span class="token punctuation">)</span> <span class="token comment">// 这个地方的事件也必须是input</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><h5 id="方式3-sync方式"><a class="header-anchor" href="#方式3-sync方式">#</a> 方式3：.sync方式</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overview-contianer"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>sub<span class="token operator">-</span>overview <span class="token operator">:</span>val<span class="token punctuation">.</span>sync<span class="token operator">=</span><span class="token string">"total"</span> @addNum<span class="token operator">=</span><span class="token string">"addTotal"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>sub<span class="token operator">-</span>overview<span class="token operator">></span>  <span class="token comment">// 相当于 &lt;sub-overview :val="total" @update:val="newVal => total=newVal">&lt;/sub-overview></span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"reduce"</span><span class="token operator">></span>递减<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// import mixin from '@/mixins/mixin'</span>
<span class="token keyword">import</span> subOverview <span class="token keyword">from</span> <span class="token string">'./subOverview'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      total<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addTotal</span><span class="token punctuation">(</span><span class="token parameter">newNum</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNum<span class="token punctuation">)</span>  <span class="token comment">// 1234</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">reduce</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>total<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    subOverview
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

<span class="token comment">// 子组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sub-overview-container"</span><span class="token operator">></span>
   
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"val"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>input<span class="token operator">></span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"add"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/x-template"</span> id<span class="token operator">=</span><span class="token string">"sub"</span><span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'val'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      iptVal<span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'update:val'</span><span class="token punctuation">,</span><span class="token string">'1234'</span><span class="token punctuation">)</span> <span class="token comment">// 此处必须是update</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h5 id="attrs-与-listeners"><a class="header-anchor" href="#attrs-与-listeners">#</a> attrs 与  listeners</h5>
<p>参考链接：<a href="">https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&amp;mid=2651553978&amp;idx=1&amp;sn=54774865de805bfb5c695ac85637c4b4&amp;chksm=8025577bb752de6d0737ab0de92bda71df49f97b713a4b2d68719e9f8f13878f7b156a9cbba2&amp;mpshare=1&amp;scene=1&amp;srcid=0516IEQxgNV2YO1t2Md2b5D6#rd</a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overview-contianer"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>sub<span class="token operator">-</span>overview <span class="token operator">:</span>val<span class="token operator">=</span><span class="token string">"total"</span> @addNum<span class="token operator">=</span><span class="token string">"addTotal"</span> <span class="token operator">:</span>placeholder<span class="token operator">=</span><span class="token string">"请输入"</span> <span class="token operator">:</span>content<span class="token operator">=</span><span class="token string">"total"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>sub<span class="token operator">-</span>overview<span class="token operator">></span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"reduce"</span><span class="token operator">></span>递减<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// import mixin from '@/mixins/mixin'</span>
<span class="token keyword">import</span> subOverview <span class="token keyword">from</span> <span class="token string">'./subOverview'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      total<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addTotal</span><span class="token punctuation">(</span><span class="token parameter">newNum</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNum<span class="token punctuation">)</span>  <span class="token comment">// 1234</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">reduce</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>total<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    subOverview
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

<span class="token comment">// 子组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sub-overview-container"</span><span class="token operator">></span>
   
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"$attrs.val"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>input<span class="token operator">></span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"add"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/x-template"</span> id<span class="token operator">=</span><span class="token string">"sub"</span><span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// props: ['val'],   如果props过多就可以不写</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      iptVal<span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$listeners<span class="token punctuation">.</span>addNum<span class="token punctuation">,</span><span class="token string">'1234'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">)</span> <span class="token comment">// {"val":'0',"content":"0","placeholder":"请输入"}  此处包括了所有父组件绑定给子组件的属性,类似于placeholder这种dom原生的prototype可以直接传过来</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$listeners<span class="token punctuation">)</span> <span class="token comment">// $listeners包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on=”$listeners” 传入内部组件——在创建更高层次的组件时非常有用。</span>

<span class="token comment">// 需要注意的是，由于我们input并不是BaseInput这个组件的根节点，而默认情况下父作用域的不被认作 props 的特性绑定将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。所以我们需要设置inheritAttrs:false，这些默认行为将会被去掉, 以上两点的优化才能成功</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div></template>