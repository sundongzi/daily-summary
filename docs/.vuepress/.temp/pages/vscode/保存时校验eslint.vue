<template><p>1.安装eslint插件</p>
<p>2.进入文件 &gt; 首选项 &gt; 设置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"eslint.autoFixOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"javascript"</span><span class="token punctuation">,</span>
    <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string">"language"</span><span class="token operator">:</span> <span class="token string">"html"</span><span class="token punctuation">,</span>
      <span class="token string">"autoFix"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string">"language"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
      <span class="token string">"autoFix"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>==<strong>eslint.autoFixOnSave</strong> 用来进行保存时自动格式化，但是默认只支持 javascript .js 文件。==
==<strong>eslint.validate</strong> 用来配置作用的文件类型==</p>
</template>