<template><h3 id="参考链接-https-juejin-im-post-5adea0106fb9a07a9d6ff6de"><a class="header-anchor" href="#参考链接-https-juejin-im-post-5adea0106fb9a07a9d6ff6de">#</a> 参考链接：https://juejin.im/post/5adea0106fb9a07a9d6ff6de</h3>
<h4 id="webpack的打包原理"><a class="header-anchor" href="#webpack的打包原理">#</a> webpack的<a href="https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308" target="_blank" rel="noopener noreferrer">打包原理<OutboundLink/></a></h4>
<ol>
<li>识别入口文件</li>
<li>通过逐层识别模块依赖(Commonjs、amd或者es6的import,webpack都会对其进行分析，来获取代码的依赖)</li>
<li>webpack做的就是分析代码、转换代码、编译代码、输出代码</li>
<li>最终形成打包后的代码</li>
</ol>
<h4 id="基础"><a class="header-anchor" href="#基础">#</a> 基础：</h4>
<p>首先在项目下创建一个webpack.config.js文件来进行配置webpack</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  entry<span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>    <span class="token comment">// 入口文件</span>
  output<span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>   <span class="token comment">// 出口文件</span>
  module<span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>   <span class="token comment">// 处理对应模块</span>
  plugins<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 对应的插件</span>
  devServer<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// 开发服务器配置</span>
  mode<span class="token operator">:</span><span class="token string">"developelement"</span>  <span class="token comment">// 模式配置</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// webpack.config.js文件</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  entry<span class="token operator">:</span><span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span><span class="token punctuation">{</span>
    filename<span class="token operator">:</span><span class="token string">'bundle.js'</span><span class="token punctuation">,</span>   <span class="token comment">// 打包后的文件名称</span>
    path<span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'dist'</span><span class="token punctuation">)</span> <span class="token comment">// 打包后的目录，必须是绝对路径</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="多文件打包"><a class="header-anchor" href="#多文件打包">#</a> 多文件打包</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 第一种方式，即使是没有关系的也都一起打包进去，入口文件可以写一个数组，实现多文件打包</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  entry<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'./src/login.js'</span><span class="token punctuation">,</span><span class="token string">'./src/index.js'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span><span class="token punctuation">{</span>
    filename<span class="token operator">:</span><span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第二种方式，就是把每个文件都单独打成一个包</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    entry<span class="token operator">:</span><span class="token punctuation">{</span>
      login<span class="token operator">:</span><span class="token string">'./src/login.js'</span><span class="token punctuation">,</span>
      index<span class="token operator">:</span><span class="token string">'./src/index.js'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span><span class="token punctuation">{</span>
      filename<span class="token operator">:</span><span class="token string">'[name].js'</span><span class="token punctuation">,</span>   <span class="token comment">// 打包完之后会生成login.js和index.js两个js文件</span>
    path<span class="token operator">:</span>path<span class="token punctuation">.</span>resolve<span class="token punctuation">[</span><span class="token string">'dist'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>