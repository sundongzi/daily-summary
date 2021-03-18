(self.webpackChunkdaily_summary=self.webpackChunkdaily_summary||[]).push([[9352],{404:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-2e7636e1",path:"/%E5%8D%9A%E5%AE%A2%E5%AD%A6%E4%B9%A0/%E8%8A%82%E6%B5%81%E4%B8%8E%E9%98%B2%E6%8A%96.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"博客学习/节流与防抖.md",git:{updatedTime:1615448503e3,contributors:[{name:"sundong",email:"sundong@idss-cn.com",commits:1}]}}},7390:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var p=a(6252);const t=(0,p.uE)('<h4 id="防抖与节流"><a class="header-anchor" href="#防抖与节流">#</a> 防抖与节流:</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>waittime<span class="token punctuation">,</span>immediate</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> perTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>     <span class="token comment">// 之前的时间</span>\n  <span class="token keyword">let</span> context<span class="token punctuation">;</span>\n  <span class="token keyword">let</span> args\n  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">let</span> nowTime <span class="token operator">=</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   context <span class="token operator">=</span>  <span class="token keyword">this</span>       <span class="token comment">// 如果不缓存的话，this将指向window</span>\n   args <span class="token operator">=</span> argument\n  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>\n   <span class="token keyword">if</span><span class="token punctuation">(</span>nowTime<span class="token operator">-</span>perTime <span class="token operator">&gt;</span> immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span>\n   perTime <span class="token operator">=</span> nowTime\n   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n         timer <span class="token operator">=</span> <span class="token keyword">null</span>\n         <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>waittime<span class="token punctuation">)</span>\n   <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>\n<span class="token keyword">function</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n   a<span class="token operator">++</span>\n<span class="token punctuation">}</span>\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span><span class="token function">throttle</span><span class="token punctuation">(</span>aa<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 使用方式</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>',2),e={id:"参考链接-https-github-com-mqyqingfeng-blog-issues-26"},o=(0,p.Wm)("a",{class:"header-anchor",href:"#参考链接-https-github-com-mqyqingfeng-blog-issues-26"},"#",-1),c=(0,p.Uk)(" 参考链接："),l={href:"https://github.com/mqyqingfeng/Blog/issues/26",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("https://github.com/mqyqingfeng/Blog/issues/26"),r={id:"防抖参考链接-https-github-com-mqyqingfeng-blog-issues-22"},i=(0,p.Wm)("a",{class:"header-anchor",href:"#防抖参考链接-https-github-com-mqyqingfeng-blog-issues-22"},"#",-1),k=(0,p.Uk)(" 防抖参考链接："),m={href:"https://github.com/mqyqingfeng/Blog/issues/22",target:"_blank",rel:"noopener noreferrer"},b=(0,p.Uk)("https://github.com/mqyqingfeng/Blog/issues/22"),d={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("h5",e,[o,c,(0,p.Wm)("a",l,[u,(0,p.Wm)(a)])]),(0,p.Wm)("h5",r,[i,k,(0,p.Wm)("a",m,[b,(0,p.Wm)(a)])])],64)}}}}]);