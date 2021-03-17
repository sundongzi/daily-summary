<template><h4 id="响应式对象"><a class="header-anchor" href="#响应式对象">#</a> 响应式对象</h4>
<ol>
<li>
<p>Objetc.definePrototype</p>
<p>主要关心的是提供了<code>get</code>和<code>set</code>方法，<code>get</code>是给一个属性提供<code>getter</code>，当我们访问这个属性的时候就会触发<code>getter</code>，set是给一个属性提供<code>setter</code>方法，当我们对属性进行修改的时候会触发<code>setter</code>方法</p>
</li>
<li>
<p>initState</p>
</li>
<li>
<p>proxy</p>
</li>
<li>
<p>observe</p>
<p>![image-20200520231522053](/Users/sundong/Library/Application Support/typora-user-images/image-20200520231522053.png)</p>
</li>
<li>
<p>Observer</p>
</li>
<li>
<p>defineReactive</p>
<p>定义一个响应式对象，给对象动态添加<code>getter</code>和<code>setter</code></p>
</li>
</ol>
<h4 id="依赖收集"><a class="header-anchor" href="#依赖收集">#</a> 依赖收集</h4>
<ol>
<li>
<h5 id="dep类"><a class="header-anchor" href="#dep类">#</a> Dep类</h5>
</li>
<li>
<h5 id="watcher类"><a class="header-anchor" href="#watcher类">#</a> Watcher类</h5>
</li>
</ol>
<h4 id="派发更新"><a class="header-anchor" href="#派发更新">#</a> 派发更新</h4>
<p>![image-20200520233321462](/Users/sundong/Library/Application Support/typora-user-images/image-20200520233321462.png)</p>
</template>