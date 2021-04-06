<template><h4 id="单例模式"><a class="header-anchor" href="#单例模式">#</a> 单例模式</h4>
<h5 id="定义-保证一个类仅有一个实例-并提供一个访问它的全局访问点"><a class="header-anchor" href="#定义-保证一个类仅有一个实例-并提供一个访问它的全局访问点">#</a> 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点</h5>
<h5 id="主要解决-一个全局使用的类频繁地创建与销毁"><a class="header-anchor" href="#主要解决-一个全局使用的类频繁地创建与销毁">#</a> **主要解决：**一个全局使用的类频繁地创建与销毁</h5>
<h5 id="实现原理-用一个变量来标识当前是否已经为某个类创建过对象-如果是-则在下一次获取该类的实例时-直接返回之前创建的对象"><a class="header-anchor" href="#实现原理-用一个变量来标识当前是否已经为某个类创建过对象-如果是-则在下一次获取该类的实例时-直接返回之前创建的对象">#</a> 实现原理：用一个变量来标识当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象.</h5>
<h5 id="优点"><a class="header-anchor" href="#优点">#</a> 优点：</h5>
<ol>
<li>
<h5 id="在内存里只有一个实例-减少了内存的开销-尤其是频繁的创建和销毁实例"><a class="header-anchor" href="#在内存里只有一个实例-减少了内存的开销-尤其是频繁的创建和销毁实例">#</a> 在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例</h5>
</li>
<li>
<h5 id="避免对资源的多重占用"><a class="header-anchor" href="#避免对资源的多重占用">#</a> 避免对资源的多重占用</h5>
</li>
</ol>
<h5 id="缺点-没有接口-不能继承-与单一职责原则冲突-一个类应该只关心内部逻辑-而不关心外面怎么样来实例化"><a class="header-anchor" href="#缺点-没有接口-不能继承-与单一职责原则冲突-一个类应该只关心内部逻辑-而不关心外面怎么样来实例化">#</a> 缺点：没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化</h5>
<h5 id="使用场景"><a class="header-anchor" href="#使用场景">#</a> 使用场景：</h5>
<ol>
<li>
<h5 id="可以用它来划分命名空间"><a class="header-anchor" href="#可以用它来划分命名空间">#</a> 可以用它来划分命名空间</h5>
</li>
<li>
<h5 id="可以把代码组织的更为一致"><a class="header-anchor" href="#可以把代码组织的更为一致">#</a> 可以把代码组织的更为一致</h5>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> single <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> unique<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
　　　　<span class="token comment">// 如果该实例存在，则直接返回，否则就对其实例化</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token operator">!</span>unique <span class="token punctuation">)</span><span class="token punctuation">{</span>
            unique <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> unique<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">Construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'this is single'</span><span class="token punctuation">)</span>
        <span class="token comment">// ... 生成单例的构造函数的代码</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        getInstance <span class="token operator">:</span> getInstance
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="策略模式"><a class="header-anchor" href="#策略模式">#</a> 策略模式</h4>
<h5 id="定义-定义一系列算法-然后逐个封装起来-并且使它们可以相互替换"><a class="header-anchor" href="#定义-定义一系列算法-然后逐个封装起来-并且使它们可以相互替换">#</a> 定义：定义一系列算法，然后逐个封装起来，并且使它们可以相互替换</h5>
<h5 id="主要解决-在有多种算法相似的情况下-使用-if-else-所带来的复杂和难以维护"><a class="header-anchor" href="#主要解决-在有多种算法相似的情况下-使用-if-else-所带来的复杂和难以维护">#</a> 主要解决：在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护</h5>
<h5 id="实现方式-通过一个hash对象-来映射不同的策略"><a class="header-anchor" href="#实现方式-通过一个hash对象-来映射不同的策略">#</a> 实现方式：通过一个hash对象，来映射不同的策略</h5>
<h5 id="优点-算法可以自由切换-避免多重循环-扩展性好"><a class="header-anchor" href="#优点-算法可以自由切换-避免多重循环-扩展性好">#</a> 优点：算法可以自由切换，避免多重循环，扩展性好</h5>
<h5 id="缺点-所有策略类都需要对外暴露-需要了解所有的策略-知道它们之间的不同点"><a class="header-anchor" href="#缺点-所有策略类都需要对外暴露-需要了解所有的策略-知道它们之间的不同点">#</a> 缺点：所有策略类都需要对外暴露，需要了解所有的策略，知道它们之间的不同点</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> strategy <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">'A'</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">4</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">'B'</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">3</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">'C'</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">calculateBonus</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">level<span class="token punctuation">,</span> salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> strategy<span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calculateBonus</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 120000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="命令模式"><a class="header-anchor" href="#命令模式">#</a> 命令模式</h4>
<h5 id="定义-将一个请求封装成一个对象-从而使你可以用不同的请求进行参数化"><a class="header-anchor" href="#定义-将一个请求封装成一个对象-从而使你可以用不同的请求进行参数化">#</a> <strong>定义</strong>：将一个请求封装成一个对象，从而使你可以用不同的请求进行参数化</h5>
<h5 id="主要解决-相互之间的耦合"><a class="header-anchor" href="#主要解决-相互之间的耦合">#</a> **主要解决：**相互之间的耦合</h5>
<h5 id="如何解决-通过调用者调用接受者执行命令-顺序-调用者→接受者→命令"><a class="header-anchor" href="#如何解决-通过调用者调用接受者执行命令-顺序-调用者→接受者→命令">#</a> 如何解决：通过调用者调用接受者执行命令，顺序：调用者→接受者→命令</h5>
<h5 id="使用场景-发布一些命令-但不清楚接受者和请求的操作。命令是指执行某些事情的指令。即只用知道发布了一个指令就行-具体做什么谁来做不用关心。其实是回调函数面向对象的替代品。最常见的例子就是事件绑定了"><a class="header-anchor" href="#使用场景-发布一些命令-但不清楚接受者和请求的操作。命令是指执行某些事情的指令。即只用知道发布了一个指令就行-具体做什么谁来做不用关心。其实是回调函数面向对象的替代品。最常见的例子就是事件绑定了">#</a> 使用场景：发布一些命令，但不清楚接受者和请求的操作。命令是指执行某些事情的指令。即只用知道发布了一个指令就行，具体做什么谁来做不用关心。其实是回调函数面向对象的替代品。最常见的例子就是事件绑定了</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 发送者：不关心给哪个button绑定，也不关心绑定的是什么方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">setCommand</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">button<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    button<span class="token punctuation">.</span><span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// --------------------  上面的界面逻辑由A完成，下面的由B完成</span>

<span class="token comment">// 执行命令者：无需关心在哪里调用被谁调用，只需要按需执行就好</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">updateMenu</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'更新菜单'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 命令对象：只需要接收到接受者的参数，当发送者发出命令执行就好</span>
<span class="token keyword">const</span> <span class="token function-variable function">UpdateCommand</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">receive</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> receive<span class="token punctuation">.</span><span class="token function">updateMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> updateCommand <span class="token operator">=</span> <span class="token function">UpdateCommand</span><span class="token punctuation">(</span>menu<span class="token punctuation">)</span> <span class="token comment">// 创建命令</span>

<span class="token keyword">const</span> button1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'button1'</span><span class="token punctuation">)</span>
<span class="token function">setCommand</span><span class="token punctuation">(</span>button1<span class="token punctuation">,</span> updateCommand<span class="token punctuation">)</span>   <span class="token comment">// 更新菜单</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="代理模式"><a class="header-anchor" href="#代理模式">#</a> 代理模式</h4>
<h5 id="定义-为其他对象提供一种代理以控制对这个对象的访问"><a class="header-anchor" href="#定义-为其他对象提供一种代理以控制对这个对象的访问">#</a> 定义：为其他对象提供一种代理以控制对这个对象的访问</h5>
<h5 id="主要解决-在直接访问对象时带来的问题-比如说-要访问的对象在远程的机器上。在面向对象系统中-有些对象由于某些原因-比如对象创建开销很大-或者某些操作需要安全控制-或者需要进程外的访问-直接访问会给使用者或者系统结构带来很多麻烦-我们可以在访问此对象时加上一个对此对象的访问层。"><a class="header-anchor" href="#主要解决-在直接访问对象时带来的问题-比如说-要访问的对象在远程的机器上。在面向对象系统中-有些对象由于某些原因-比如对象创建开销很大-或者某些操作需要安全控制-或者需要进程外的访问-直接访问会给使用者或者系统结构带来很多麻烦-我们可以在访问此对象时加上一个对此对象的访问层。">#</a> 主要解决：在直接访问对象时带来的问题，比如说：要访问的对象在远程的机器上。在面向对象系统中，有些对象由于某些原因（比如对象创建开销很大，或者某些操作需要安全控制，或者需要进程外的访问），直接访问会给使用者或者系统结构带来很多麻烦，我们可以在访问此对象时加上一个对此对象的访问层。</h5>
<h5 id="优点-1、职责清晰。-2、高扩展性。-3、智能化。"><a class="header-anchor" href="#优点-1、职责清晰。-2、高扩展性。-3、智能化。">#</a> 优点： 1、职责清晰。 2、高扩展性。 3、智能化。</h5>
<p><strong>缺点：</strong></p>
<ol>
<li>
<h5 id="由于在客户端和真实主体之间增加了代理对象-因此有些类型的代理模式可能会造成请求的处理速度变慢。"><a class="header-anchor" href="#由于在客户端和真实主体之间增加了代理对象-因此有些类型的代理模式可能会造成请求的处理速度变慢。">#</a> 由于在客户端和真实主体之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。</h5>
</li>
<li>
<h5 id="实现代理模式需要额外的工作-有些代理模式的实现非常复杂"><a class="header-anchor" href="#实现代理模式需要额外的工作-有些代理模式的实现非常复杂">#</a> 实现代理模式需要额外的工作，有些代理模式的实现非常复杂</h5>
</li>
</ol>
<h5 id="使用场景-按职责来划分-通常有以下使用场景-1、远程代理。-2、虚拟代理。-3、保护-protect-or-access-代理。-4、cache代理。-5、防火墙-firewall-代理。-6、同步化-synchronization-代理等"><a class="header-anchor" href="#使用场景-按职责来划分-通常有以下使用场景-1、远程代理。-2、虚拟代理。-3、保护-protect-or-access-代理。-4、cache代理。-5、防火墙-firewall-代理。-6、同步化-synchronization-代理等">#</a> **使用场景：**按职责来划分，通常有以下使用场景： 1、远程代理。 2、虚拟代理。 3、保护（Protect or Access）代理。 4、Cache代理。 5、防火墙（Firewall）代理。 6、同步化（Synchronization）代理等</h5>
<ol>
<li>
<h5 id="远程代理-为一个对象在不同的地址空间提供局部代表-在java中-远程代理可以是另一个虚拟机中的对象"><a class="header-anchor" href="#远程代理-为一个对象在不同的地址空间提供局部代表-在java中-远程代理可以是另一个虚拟机中的对象">#</a> 远程代理：为一个对象在不同的地址空间提供局部代表，在Java中，远程代理可以是另一个虚拟机中的对象</h5>
</li>
<li>
<h5 id="防火墙代理-控制网络资源的访问-保护主题不让-坏人-接近"><a class="header-anchor" href="#防火墙代理-控制网络资源的访问-保护主题不让-坏人-接近">#</a> 防火墙代理：控制网络资源的访问，保护主题不让“坏人”接近</h5>
</li>
<li>
<h5 id="保护代理-用于对象应该有不同访问权限的情况"><a class="header-anchor" href="#保护代理-用于对象应该有不同访问权限的情况">#</a> 保护代理：用于对象应该有不同访问权限的情况</h5>
</li>
<li>
<h5 id="智能引用代理-取代了简单的指针-在访问对象时执行一些附加操作-比如计算一个对象被引用的次数"><a class="header-anchor" href="#智能引用代理-取代了简单的指针-在访问对象时执行一些附加操作-比如计算一个对象被引用的次数">#</a> 智能引用代理：取代了简单的指针，在访问对象时执行一些附加操作，比如计算一个对象被引用的次数</h5>
</li>
<li>
<h5 id="同步化-synchronization-代理-使几个用户能够同时使用一个对象而没有冲突"><a class="header-anchor" href="#同步化-synchronization-代理-使几个用户能够同时使用一个对象而没有冲突">#</a> 同步化（Synchronization）代理：使几个用户能够同时使用一个对象而没有冲突</h5>
</li>
</ol>
<h5 id="虚拟代理实现图片懒加载"><a class="header-anchor" href="#虚拟代理实现图片懒加载">#</a> 虚拟代理实现图片懒加载</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建图片DOM</span>
<span class="token keyword">const</span> myImage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> imgNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>imgNode<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">setSrc</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      imgNode<span class="token punctuation">.</span>src <span class="token operator">=</span> src
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 代理</span>
<span class="token keyword">const</span> proxyImage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// http 图片加载完毕后才会执行</span>
    myImage<span class="token punctuation">.</span><span class="token function">setSrc</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>src<span class="token punctuation">)</span> <span class="token comment">// 此处的this指的是img,当img加载完成后，将img.src传递给myImage</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">setSrc</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      myImage<span class="token punctuation">.</span><span class="token function">setSrc</span><span class="token punctuation">(</span><span class="token string">'loading.jpg'</span><span class="token punctuation">)</span> <span class="token comment">// 本地 loading 图片</span>
      img<span class="token punctuation">.</span>src <span class="token operator">=</span> src
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
proxyImage<span class="token punctuation">.</span><span class="token function">setSrc</span><span class="token punctuation">(</span><span class="token string">'http://loaded.jpg'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h5 id="缓存代理"><a class="header-anchor" href="#缓存代理">#</a> 缓存代理</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">mult</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token operator">=</span> result <span class="token operator">*</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">proxyFactory</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> args <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span>
        <span class="token comment">// 判断当前是否存在缓存里面</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>args <span class="token keyword">in</span> cache<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> cache<span class="token punctuation">[</span>args<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> cache<span class="token punctuation">[</span>args<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">proxyFactory</span><span class="token punctuation">(</span>mult<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="模板模式"><a class="header-anchor" href="#模板模式">#</a> 模板模式</h4>
<h5 id="定义-定义一个操作中的算法的骨架-而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤"><a class="header-anchor" href="#定义-定义一个操作中的算法的骨架-而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤">#</a> 定义：定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤</h5>
<h5 id="主要解决-一些方法通用-却在每一个子类都重新写了这一方法"><a class="header-anchor" href="#主要解决-一些方法通用-却在每一个子类都重新写了这一方法">#</a> **主要解决：**一些方法通用，却在每一个子类都重新写了这一方法</h5>
<h5 id="优点-1"><a class="header-anchor" href="#优点-1">#</a> 优点：</h5>
<ol>
<li>
<h5 id="封装不变部分-扩展可变部分。"><a class="header-anchor" href="#封装不变部分-扩展可变部分。">#</a> 封装不变部分，扩展可变部分。</h5>
</li>
<li>
<h5 id="提取公共代码-便于维护。"><a class="header-anchor" href="#提取公共代码-便于维护。">#</a> 提取公共代码，便于维护。</h5>
</li>
<li>
<h5 id="行为由父类控制-子类实现。"><a class="header-anchor" href="#行为由父类控制-子类实现。">#</a> 行为由父类控制，子类实现。</h5>
</li>
</ol>
<h5 id="缺点"><a class="header-anchor" href="#缺点">#</a> 缺点：</h5>
<ol>
<li>
<h5 id="每一个不同的实现都需要一个子类来实现-导致类的个数增加-使得系统更加庞大"><a class="header-anchor" href="#每一个不同的实现都需要一个子类来实现-导致类的个数增加-使得系统更加庞大">#</a> 每一个不同的实现都需要一个子类来实现，导致类的个数增加，使得系统更加庞大</h5>
</li>
</ol>
<h5 id="应用场景-主要应用在一些代码刚开始要一次性实现不变的部分。但是将来页面有修改-需要更改业务逻辑的部分或者重新添加新业务的情况。主要是通过子类来改写父类的情况-其他不需要改变的部分继承父类。"><a class="header-anchor" href="#应用场景-主要应用在一些代码刚开始要一次性实现不变的部分。但是将来页面有修改-需要更改业务逻辑的部分或者重新添加新业务的情况。主要是通过子类来改写父类的情况-其他不需要改变的部分继承父类。">#</a> 应用场景：主要应用在一些代码刚开始要一次性实现不变的部分。但是将来页面有修改，需要更改业务逻辑的部分或者重新添加新业务的情况。主要是通过子类来改写父类的情况，其他不需要改变的部分继承父类。</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Interview</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 笔试</span>
<span class="token class-name">Interview</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">writtenTest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"这里是前端笔试题"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 技术面试</span>
<span class="token class-name">Interview</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">technicalInterview</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"这里是技术面试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token comment">// 领导面试</span>
<span class="token class-name">Interview</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">leader</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"领导面试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// HR面试</span>
<span class="token class-name">Interview</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">HR</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"HR面试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 代码初始化</span>
<span class="token class-name">Interview</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">writtenTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">technicalInterview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">leader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">HR</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 阿里巴巴的笔试和技术面不同，重写父类方法，其他继承父类方法。</span>
<span class="token keyword">var</span> <span class="token function-variable function">AliInterview</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">AliInterview</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Interview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 子类重写方法 实现自己的业务逻辑</span>
<span class="token class-name">AliInterview</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">writtenTest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"阿里的技术题就是难啊"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">AliInterview</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">technicalInterview</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"阿里的技术面就是牛皮啊"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> AliInterview <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AliInterview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
AliInterview<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 阿里的技术题就是难啊</span>
<span class="token comment">// 阿里的技术面就是牛皮啊</span>
<span class="token comment">// 领导面试</span>
<span class="token comment">// HR面试</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div></template>