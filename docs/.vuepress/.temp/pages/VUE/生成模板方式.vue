<template><h4 id="vue-cli-vscode-snippet"><a class="header-anchor" href="#vue-cli-vscode-snippet">#</a> Vue-cli &amp;&amp; Vscode-snippet</h4>
<h4 id="一、vue-cli"><a class="header-anchor" href="#一、vue-cli">#</a> 一、vue-cli</h4>
<p><a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer"><code>vue-cli</code><OutboundLink/></a> 是 <a href="https://github.com/vuejs/vue" target="_blank" rel="noopener noreferrer">vuejs<OutboundLink/></a> 官方提供的基于 vuejs 的项目脚手架工具，其中<code>vue init（针对vue-cli@2.x版本）</code> 是基于第三方模板生成项目的命令，简单说下生成模板的流程：</p>
<p>![image-20200630160825955](/Users/sundong/Library/Application Support/typora-user-images/image-20200630160825955.png)</p>
<h5 id="具体如何生成模板如下"><a class="header-anchor" href="#具体如何生成模板如下">#</a> 具体如何生成模板如下：</h5>
<p>前提：</p>
<p>1.模板仓库的根目录下必须有<code>template</code>目录，在该目录下定义你的模板文件</p>
<p>2.模板仓库的根目录下必须有<code>meta.{js,json}</code>文件，该文件必须导出为一个对象，用于定义模板的<code>meta</code>信息</p>
<h5 id="对于meta-js-json-文件-目前可定义的字段如下"><a class="header-anchor" href="#对于meta-js-json-文件-目前可定义的字段如下">#</a> 对于<code>meta.{js,json}</code>文件，目前可定义的字段如下</h5>
<ul>
<li><code>prompts&lt;Object&gt;</code>：收集用户自定义数据</li>
<li><code>filters&lt;Object&gt;</code>:根据条件过滤文件</li>
<li><code>completeMessage&lt;String&gt;</code>:模板渲染完成后给予的提示信息，支持<a href="https://www.handlebarsjs.cn/guide/#%E4%BB%80%E4%B9%88%E6%98%AF-handlebars%EF%BC%9F" target="_blank" rel="noopener noreferrer">handlebars<OutboundLink/></a>（一种简单的模板语言，使用模板和输入对象来生成HTML或其他文本格式）的表达式</li>
<li><code>complete&lt;Function&gt;</code>:模板渲染完成后的回调函数，优先于<code>completeMessage</code></li>
<li><code>helpers&lt;Object&gt;</code>:自定义<code>Handlebars</code>辅助函数</li>
</ul>
<h5 id="prompts"><a class="header-anchor" href="#prompts">#</a> prompts</h5>
<p><code>prompts</code>是一个对象，每个<code>prompts</code>都是一个<a href="https://github.com/SBoudrias/Inquirer.js/#question" target="_blank" rel="noopener noreferrer">Inquirer.js<OutboundLink/></a></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// meta.{js,json}</span>
<span class="token punctuation">{</span>
  <span class="token property">"prompts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"projectName"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
      <span class="token property">"required"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"项目名称"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"confirm"</span><span class="token punctuation">,</span>
      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"test?"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>所有的用户输入完成之后，<code>template</code>目录底下的所有文件将会用<a href="https://www.handlebarsjs.cn/guide/#%E4%BB%80%E4%B9%88%E6%98%AF-handlebars%EF%BC%9F" target="_blank" rel="noopener noreferrer">Handlebars<OutboundLink/></a>进行渲染。用户输入的数据会作为模板渲染时的使用数据：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// template/package.json</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>#test<span class="token punctuation">}</span><span class="token punctuation">}</span>
 <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"npm run test"</span>
 <span class="token punctuation">{</span><span class="token punctuation">{</span>/test<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在上述示例中，只有用户在<code>test</code>中的回答是<code>yes</code>时，<code>test</code>脚本才会在<code>package.json</code>文件中生成</p>
<p><code>prompt</code>可以添加一个<code>when</code>字段，该字段表示此<code>prompt</code>会根据<code>when</code>的值判断是否出现在终端提示用户进行输入.在<code>vue-cli</code>中，会根据<code>when</code>进行<code>eval</code>运算</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>prompt<span class="token punctuation">.</span>when <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">evaluate</span><span class="token punctuation">(</span>prompt<span class="token punctuation">.</span>when<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>示例如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// meta.{js,json}</span>
<span class="token punctuation">{</span>
  <span class="token property">"prompts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"confirm"</span><span class="token punctuation">,</span>
        <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">""</span>Use ESLint to lint your code?"
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"when"</span><span class="token operator">:</span> <span class="token string">"lint"</span><span class="token punctuation">,</span>  <span class="token comment">// 只有lint为yes时才会在终端触发显示eslint</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"list"</span><span class="token punctuation">,</span>
      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"是否使用eslint？"</span><span class="token punctuation">,</span>
      <span class="token property">"choices"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"standard"</span><span class="token punctuation">,</span>
        <span class="token string">"airbnb"</span><span class="token punctuation">,</span>
        <span class="token string">"none"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>注意：针对<code>prompts</code>默认终端会显示<code>name（用户git昵称）</code>和<code>当前作者（用户邮箱）</code>两个交互让用户去输入，这个是<code>vue-cli</code>的问题，<a href="*https://github.com/vuejs/vue-cli/issues/1570*">具体请参考</a></p>
<h5 id="filters"><a class="header-anchor" href="#filters">#</a> filters</h5>
<p><code>filters</code>字段是一个包含文件过滤规则的对象，键用于定义符合<code>minimatch glob pattern</code>规则的过滤器，键值是<code>prompts</code>中用户的输入值或表达式。比如：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// meta.{js,json}</span>
<span class="token punctuation">{</span>
  <span class="token property">"prompts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"unit"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"confirm"</span><span class="token punctuation">,</span>
          <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Setup unit tests with Mocha?"</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token property">"filters"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"test/*"</span><span class="token operator">:</span> <span class="token string">"unit"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在上述示例中,<code>template</code>目录下<code>test</code>目录只有在用户<code>unit</code>中的回答是<code>yes</code>时才会生成，反之会被删除</p>
<p>如果要匹配以<code>.</code>开头的文件，则需要将<a href="https://github.com/isaacs/minimatch" target="_blank" rel="noopener noreferrer">minimatch<OutboundLink/></a>的 <code>dot</code>选项设置成<code>true</code></p>
<h5 id="helpers"><a class="header-anchor" href="#helpers">#</a> helpers</h5>
<p><code>helpers</code>字段是一个包含自定义的<code>Handlebars</code>辅助函数的对象，自定义的函数可以在<code>template</code>中使用：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// meta.{js,json}</span>
<span class="token punctuation">{</span>
	<span class="token property">"helpers"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	    <span class="token property">"if_or"</span><span class="token operator">:</span> function (v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> options) <span class="token punctuation">{</span>
	      if (v1 || v2) <span class="token punctuation">{</span>
	        return options.fn(this);
	      <span class="token punctuation">}</span>
	
	      return options.inverse(this);
	    <span class="token punctuation">}</span>
  	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在<code>template</code>的文件使用该<code>if_or</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span>#if_or val1 val2<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment">// 当 val1 或者 val2 为 true 时, 这里才会被渲染</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">/</span>if_or<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="complete"><a class="header-anchor" href="#complete">#</a> complete</h5>
<p>在渲染完成后的<code>complete</code>回调：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string">"complete"</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> helpers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>data</code>和<code>helpers</code>由<code>vue cli</code>传入：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vue-cli/lib/generate.js</span>
<span class="token comment">// vue-cli/lib/generate.js</span>

<span class="token comment">// ...</span>
<span class="token keyword">var</span> data <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>metalsmith<span class="token punctuation">.</span><span class="token function">metadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	destDirName<span class="token operator">:</span> name<span class="token punctuation">,</span>
	inPlace<span class="token operator">:</span> dest <span class="token operator">===</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	noEscape<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ...</span>

<span class="token comment">// files 是 metalsmith build 之后的文件对象</span>
<span class="token keyword">var</span> helpers <span class="token operator">=</span> <span class="token punctuation">{</span>chalk<span class="token punctuation">,</span> logger<span class="token punctuation">,</span> files<span class="token punctuation">}</span>

<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>如果<code>complete</code>有定义，则调用<code>complete</code>，反之会输出<code>completeMessage</code></p>
<p><a href="https://zhuanlan.zhihu.com/p/32894283" target="_blank" rel="noopener noreferrer">参考链接<OutboundLink/></a></p>
<p><a href="https://github.com/dwqs/blog/issues/56" target="_blank" rel="noopener noreferrer">vue-cli源码学习<OutboundLink/></a></p>
<h4 id="二、使用vscode生成代码片段"><a class="header-anchor" href="#二、使用vscode生成代码片段">#</a> 二、使用vscode生成代码片段</h4>
<h5 id="代码片段分为两种"><a class="header-anchor" href="#代码片段分为两种">#</a> 代码片段分为两种：</h5>
<ol>
<li>
<p>全局代码片段（每种语言环境下都能触发代码块），新建全局代码片段会在<code>snippets</code>目录下生成<code>.code-snippets</code>为后缀的配置文件，</p>
</li>
<li>
<p>对应语言的局部代码片段，新建对应语言的片段会在<code>snippets</code>目录下生成<code>对应语言 + .json</code>的配置文件</p>
<p>![image-20200630165848188](/Users/sundong/Library/Application Support/typora-user-images/image-20200630165848188.png)</p>
</li>
</ol>
<h5 id="新建片段方式"><a class="header-anchor" href="#新建片段方式">#</a> 新建片段方式</h5>
<ul>
<li>
<p>文件 =》首选项=》用户代码片段=》选择<code>代码段应显示的语言</code>，比如输入<code>vue</code>就会生成<code>vue.json</code></p>
</li>
<li>
<p><code>ctrl + shift + p</code>打开命令窗口，输入<code>snippet</code>，点选配置「用户代码片段」</p>
</li>
<li>
<p>点击界面最左侧竖栏（也即活动栏）最下方的<strong>齿轮</strong>按钮，在弹出来的菜单中点选「用户代码片段」</p>
<p>![image-20200630151853178](/Users/sundong/Library/Application Support/typora-user-images/image-20200630151853178.png)</p>
<h5 id="ps-对于全局代码片段-带有后缀-code-snippets的json文件-可以限定到项目中-只需要把相关文件放到-vscode文件夹中项目的根目录下即可。"><a class="header-anchor" href="#ps-对于全局代码片段-带有后缀-code-snippets的json文件-可以限定到项目中-只需要把相关文件放到-vscode文件夹中项目的根目录下即可。">#</a> PS：对于全局代码片段（带有后缀.code-snippets的json文件）可以限定到项目中，只需要把相关文件放到.vscode文件夹中项目的根目录下即可。</h5>
<p>![image-20200630164324524](/Users/sundong/Library/Application Support/typora-user-images/image-20200630164324524.png)</p>
</li>
</ul>
<h5 id="语法结构"><a class="header-anchor" href="#语法结构">#</a> 语法结构</h5>
<h5 id="prefix-前缀-代码从intellisence中呼出的关键字"><a class="header-anchor" href="#prefix-前缀-代码从intellisence中呼出的关键字">#</a> prefix：前缀，代码从<code>IntelliSence</code>中呼出的关键字</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>支持N:1,也就是允许多条前缀对应同一条代码片段，只需把前缀定义为数组即可
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>![image-20200630162101770](/Users/sundong/Library/Application Support/typora-user-images/image-20200630162101770.png)</p>
<h5 id="scope-域。代码片段适用的语言模式-不填代表适用于所有语言模式"><a class="header-anchor" href="#scope-域。代码片段适用的语言模式-不填代表适用于所有语言模式">#</a> scope：域。代码片段适用的<code>语言模式</code>,不填代表适用于所有语言模式</h5>
<h5 id="body-主体。代码片的布局与控制-每个字符串表示一行"><a class="header-anchor" href="#body-主体。代码片的布局与控制-每个字符串表示一行">#</a> body：主体。代码片的<code>布局与控制</code>，每个字符串表示一行</h5>
<ul>
<li>
<p>Tabstops：制表符。可以让编辑器的指针在<code>snippet</code>内跳转。使用 <code>$1</code>，<code>$2</code> 等指定光标位置。这些数字指定了光标跳转的顺序。特别地，<code>$0</code>表示最终光标位置。</p>
</li>
<li>
<p>Placeholders：占位符。带有默认的<code>Tabstops</code>,还支持嵌套</p>
</li>
<li>
<p>Choice:可选项。是提供可选值的「Placeholder」。其语法为一系列用逗号隔开，并最终被两个竖线圈起来的枚举值，比如 <code>${1|one,two,three|}</code>。当光标跳转到该位置的时候，用户将会被提供多个值（one 或 two 或 three）以供选择</p>
<p>![image-20200630162946295](/Users/sundong/Library/Application Support/typora-user-images/image-20200630162946295.png)</p>
</li>
<li>
<p>Variables：变量。<a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noopener noreferrer">官方链接<OutboundLink/></a></p>
</li>
</ul>
<h5 id="description-描述。代码在intellisence中的描述。"><a class="header-anchor" href="#description-描述。代码在intellisence中的描述。">#</a> description：描述。代码在<code>IntelliSence</code>中的描述。</h5>
<h5 id="举个🌰"><a class="header-anchor" href="#举个🌰">#</a> 举个🌰：</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">"vue template"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"prefix"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
        <span class="token string">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"&lt;template>"</span><span class="token punctuation">,</span>
            <span class="token string">"  &lt;div class=\"page\">"</span><span class="token punctuation">,</span>
            <span class="token string">"    &lt;el-row type=\"flex\">"</span><span class="token punctuation">,</span>
            <span class="token string">"    &lt;/el-row>"</span><span class="token punctuation">,</span>
            <span class="token string">"  &lt;/div>"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;/template>"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;script>"</span><span class="token punctuation">,</span>
			<span class="token string">"export default {"</span><span class="token punctuation">,</span>
		    <span class="token string">"  name: '',"</span><span class="token punctuation">,</span>
            <span class="token string">"  data () {"</span><span class="token punctuation">,</span>
            <span class="token string">"    return {"</span><span class="token punctuation">,</span>
            <span class="token string">"    }"</span><span class="token punctuation">,</span>
            <span class="token string">"  },"</span><span class="token punctuation">,</span>
            <span class="token string">"  components: {"</span><span class="token punctuation">,</span>
            <span class="token string">"  }"</span><span class="token punctuation">,</span>
            <span class="token string">"}"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;/script>"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;style scoped lang=\"postcss\">"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;/style>"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">"vue相关代码片段"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noopener noreferrer">官方参考链接<OutboundLink/></a></p>
<h5 id="多叨叨一点-关于有些插件是否真的需要"><a class="header-anchor" href="#多叨叨一点-关于有些插件是否真的需要">#</a> 多叨叨一点（关于有些插件是否真的需要？）</h5>
<h5 id="可以先通过ctrl-shift-p调出命令面板-然后输入show-running-extensions-查看各个扩展在vscode启动时的加载时间"><a class="header-anchor" href="#可以先通过ctrl-shift-p调出命令面板-然后输入show-running-extensions-查看各个扩展在vscode启动时的加载时间">#</a> 可以先通过ctrl + shift + p调出命令面板，然后输入<code>Show Running Extensions</code>，查看各个扩展在vscode启动时的加载时间</h5>
<p>![image-20200623110959563](/Users/sundong/Library/Application Support/typora-user-images/image-20200623110959563.png)</p>
<p><a href="https://zhuanlan.zhihu.com/p/125773296" target="_blank" rel="noopener noreferrer">应该考虑卸载的vscode扩展<OutboundLink/></a></p>
<p>理由如下：</p>
<ol>
<li>
<p>启动慢，很多扩展是启动 VSCode 的时候就开始加载的，所以不一定是 VSCode 自身变慢了，可能是你扩展装多了。</p>
</li>
<li>
<p>扩展之间的冲突</p>
</li>
<li>
<p>功能重复</p>
</li>
<li>
<p>cpu占用过高</p>
</li>
<li>
<h5 id="功能已经被vscode内置-比如document-this插件-vscode已经内置自动生成jsdoc和注释补全功能"><a class="header-anchor" href="#功能已经被vscode内置-比如document-this插件-vscode已经内置自动生成jsdoc和注释补全功能">#</a> 功能已经被vscode内置，比如<code>Document This</code>插件，VSCode已经内置自动生成jsdoc和注释补全功能</h5>
</li>
<li>
<p>维护不积极的扩展，好多扩展作者已经n多年前没有维护了</p>
</li>
</ol>
<h5 id="建议多参考一下vscode官网-尽量避免乱装插件"><a class="header-anchor" href="#建议多参考一下vscode官网-尽量避免乱装插件">#</a> 建议多参考一下<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode官网<OutboundLink/></a>，尽量避免乱装插件~</h5>
</template>