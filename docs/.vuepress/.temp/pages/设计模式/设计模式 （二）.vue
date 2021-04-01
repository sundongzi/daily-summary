<template><h4 id="模块模式-es6已经存在模块的概念-export"><a class="header-anchor" href="#模块模式-es6已经存在模块的概念-export">#</a> 模块模式 （es6已经存在模块的概念 export）</h4>
<h5 id="定义-模块是一段自包含的代码-因此-我们可以在不影响代码其他部分的情况下更新模块。模块还允许我们通过为变量创建单独的作用域来避免命名空间污染。"><a class="header-anchor" href="#定义-模块是一段自包含的代码-因此-我们可以在不影响代码其他部分的情况下更新模块。模块还允许我们通过为变量创建单独的作用域来避免命名空间污染。">#</a> 定义：模块是一段自包含的代码，因此，我们可以在不影响代码其他部分的情况下更新模块。模块还允许我们通过为变量创建单独的作用域来避免命名空间污染。</h5>
<h5 id="主要解决-避免命名空间污染-当模块与其他代码片段松耦合时-我们还可以在其他项目中重用它们。"><a class="header-anchor" href="#主要解决-避免命名空间污染-当模块与其他代码片段松耦合时-我们还可以在其他项目中重用它们。">#</a> 主要解决：避免命名空间污染，当模块与其他代码片段松耦合时，我们还可以在其他项目中重用它们。</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> moudles <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> privateVar <span class="token operator">=</span> <span class="token string">'这是私有的变量'</span>
    <span class="token keyword">let</span> publicVar <span class="token operator">=</span> <span class="token string">'这是公用的变量'</span>
    <span class="token keyword">function</span> <span class="token function">privateFn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'私有的方法'</span> <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> privateVar<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">publicSetName</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      privateVar <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">publicGetName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">privateFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      set<span class="token operator">:</span> publicSetName<span class="token punctuation">,</span>
      get<span class="token operator">:</span> publicGetName<span class="token punctuation">,</span>
      name<span class="token operator">:</span> publicVar
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
moudles<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'我修改了私有的变量'</span><span class="token punctuation">)</span>
moudles<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 私有的方法 我修改了私有的变量</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="工厂模式"><a class="header-anchor" href="#工厂模式">#</a> 工厂模式</h4>
<h5 id="定义-工厂模式使用工厂方法创建对象-而不指定所创建对象的确切类或构造函数"><a class="header-anchor" href="#定义-工厂模式使用工厂方法创建对象-而不指定所创建对象的确切类或构造函数">#</a> 定义：工厂模式使用工厂方法创建对象，而不指定所创建对象的确切类或构造函数</h5>
<h5 id="使用场景-当我们需要根据特定条件生成不同的对象时-可以使用此模式"><a class="header-anchor" href="#使用场景-当我们需要根据特定条件生成不同的对象时-可以使用此模式">#</a> 使用场景：当我们需要根据特定条件生成不同的对象时，可以使用此模式</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>doors <span class="token operator">=</span> options<span class="token punctuation">.</span>doors <span class="token operator">||</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> options<span class="token punctuation">.</span>state <span class="token operator">||</span> <span class="token string">'brand new'</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> options<span class="token punctuation">.</span>color <span class="token operator">||</span> <span class="token string">'white'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Truck</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>doors <span class="token operator">=</span> options<span class="token punctuation">.</span>doors <span class="token operator">||</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> options<span class="token punctuation">.</span>state <span class="token operator">||</span> <span class="token string">'used'</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> options<span class="token punctuation">.</span>color <span class="token operator">||</span> <span class="token string">'black'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">VehicleFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>vehicleType <span class="token operator">===</span> <span class="token string">'car'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>vehicleType <span class="token operator">===</span> <span class="token string">'truck'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Truck</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VehicleFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> car <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  vehicleType<span class="token operator">:</span> <span class="token string">'car'</span><span class="token punctuation">,</span>
  doors<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">'silver'</span><span class="token punctuation">,</span>
  state<span class="token operator">:</span> <span class="token string">'Brand New'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> truck<span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  vehicleType<span class="token operator">:</span> <span class="token string">'truck'</span><span class="token punctuation">,</span>
  doors<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
  state<span class="token operator">:</span> <span class="token string">'used'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 打印 Car {doors: 4, state: "Brand New", color: "silver"}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 打印 Truck {doors: 2, state: "used", color: "white"}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>truck<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h4 id="装饰模式"><a class="header-anchor" href="#装饰模式">#</a> 装饰模式</h4>
<h5 id="定义-动态地给一个对象添加一些额外的职责"><a class="header-anchor" href="#定义-动态地给一个对象添加一些额外的职责">#</a> 定义：动态地给一个对象添加一些额外的职责</h5>
<h5 id="主要解决-一般的-我们为了扩展一个类经常使用继承方式实现-由于继承为类引入静态特征-并且随着扩展功能的增多-子类会很膨胀"><a class="header-anchor" href="#主要解决-一般的-我们为了扩展一个类经常使用继承方式实现-由于继承为类引入静态特征-并且随着扩展功能的增多-子类会很膨胀">#</a> 主要解决：一般的，我们为了扩展一个类经常使用继承方式实现，由于继承为类引入静态特征，并且随着扩展功能的增多，子类会很膨胀</h5>
<h5 id="优点-装饰类和被装饰类可以独立发展-不会相互耦合-装饰模式是继承的一个替代模式-装饰模式可以动态扩展一个实现类的功能"><a class="header-anchor" href="#优点-装饰类和被装饰类可以独立发展-不会相互耦合-装饰模式是继承的一个替代模式-装饰模式可以动态扩展一个实现类的功能">#</a> 优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能</h5>
<h5 id="缺点-多层装饰比较复杂"><a class="header-anchor" href="#缺点-多层装饰比较复杂">#</a> 缺点：多层装饰比较复杂</h5>
<h5 id="使用场景-用于扩展对象的功能-而不修改现有的类或构造函数"><a class="header-anchor" href="#使用场景-用于扩展对象的功能-而不修改现有的类或构造函数">#</a> 使用场景：用于扩展对象的功能，而不修改现有的类或构造函数</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token comment">// 默认值</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">'White'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 新建一个需要装饰的对象</span>
<span class="token keyword">const</span> tesla<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">'Tesla Model 3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用新功能装饰对象</span>
tesla<span class="token punctuation">.</span><span class="token function-variable function">setColor</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
tesla<span class="token punctuation">.</span><span class="token function-variable function">setPrice</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
tesla<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token string">'black'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tesla<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">49000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 打印 black</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tesla<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>