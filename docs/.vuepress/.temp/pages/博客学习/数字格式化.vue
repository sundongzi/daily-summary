<template><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">//str</span>
    
<span class="token comment">//size-每隔几个字符进行分割 默认3</span>
    
<span class="token comment">//delimiter-分割符 默认','</span>
    
<span class="token keyword">function</span> <span class="token function">formatText</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span>size<span class="token punctuation">,</span>delimiter</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> _str<span class="token operator">=</span>str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       
  <span class="token keyword">var</span> _size<span class="token operator">=</span>size<span class="token operator">||</span><span class="token number">3</span><span class="token punctuation">,</span>_delimiter<span class="token operator">=</span>delimiter<span class="token operator">||</span><span class="token string">','</span><span class="token punctuation">;</span>      
  <span class="token comment">/* 
     如果_size是3
     "\d{1,3}(?=(\d{3})+$)" 
  */</span>
  <span class="token keyword">var</span> regText<span class="token operator">=</span><span class="token string">'\\d{1,'</span><span class="token operator">+</span>_size<span class="token operator">+</span><span class="token string">'}(?=(\\d{'</span><span class="token operator">+</span>_size<span class="token operator">+</span><span class="token string">'})+$)'</span><span class="token punctuation">;</span>        
  <span class="token comment">/*   
    /\d{1,3}(?=(\d{3})+$)/g     这个正则的意思：匹配连续的三个数字，但是这些三个数字不能是字符串的开头1-3个字符  
  */</span>      
  <span class="token keyword">var</span> reg<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>regText<span class="token punctuation">,</span><span class="token string">'g'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       
  <span class="token comment">/* 
     (-?) 匹配前面的-号   (\d+)匹配中间的数字   ((\.\d+)?)匹配小数点后面的数字
     //$0-匹配结果，$1-第一个括号返回的内容----(-?)    $2,$3如此类推  
  */</span>     
  <span class="token keyword">return</span> _str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(-?)(\d+)((\.\d+)?)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$<span class="token number">0</span><span class="token punctuation">,</span> $<span class="token number">1</span><span class="token punctuation">,</span> $<span class="token number">2</span><span class="token punctuation">,</span> $<span class="token number">3</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> $<span class="token number">1</span> <span class="token operator">+</span> $<span class="token number">2.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">'$&amp;,'</span><span class="token punctuation">)</span> <span class="token operator">+</span> $<span class="token number">3</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>![image-20200603171104739](/Users/sundong/Library/Application Support/typora-user-images/image-20200603171104739.png)</p>
</template>