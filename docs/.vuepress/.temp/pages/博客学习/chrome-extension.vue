<template><h3 id="chrome-extensions-谷歌扩展程序介绍"><a class="header-anchor" href="#chrome-extensions-谷歌扩展程序介绍">#</a> chrome-extensions 谷歌扩展程序介绍</h3>
<h4 id="什么是chrome扩展程序"><a class="header-anchor" href="#什么是chrome扩展程序">#</a> 什么是chrome扩展程序？</h4>
<p><code>chrome</code>扩展程序是一个用<code>web</code>技术开发、用来增强浏览器功能的软件。它其实就是一个由<code>html</code>、<code>css</code>、<code>js</code>、<code>图片</code>等资源组成的一个<a href="https://developer.chrome.com/extensions/hosting" target="_blank" rel="noopener noreferrer">.crx<OutboundLink/></a>后缀的压缩包。<code>chrome</code>扩展程序本质上是网页，可以使用浏览器为网页提供的所有<code>API</code>。</p>
<h4 id="开发与调试"><a class="header-anchor" href="#开发与调试">#</a> 开发与调试</h4>
<p>只要保证项目目录有一个<code>manifest.json</code>即可，不需要专门的<code>IDE</code></p>
<p>从谷歌浏览器右上角菜单=》更多工具=》扩展程序可以进入 扩展程序管理页面，也可以直接在地址栏输入<code>chrome://extensions</code>访问。</p>
<p>![image-20201110095647580](/Users/sundong/Library/Application Support/typora-user-images/image-20201110095647580.png)</p>
<p>勾选<code>开发者模式</code>即可按照文件夹的形式直接加载插件，否则只能安装<code>.crx</code>格式的文件、Chrome要求扩展程序必须从它的Chrome应用商店安装，其他任何网站下载的都无法直接安装，所以我们也可以把<code>.crx</code>文件解压，然后通过开发者模式直接加载。</p>
<p>![image-20201110095602659](/Users/sundong/Library/Application Support/typora-user-images/image-20201110095602659.png)</p>
<h4 id="核心介绍"><a class="header-anchor" href="#核心介绍">#</a> 核心介绍</h4>
<h5 id="manifest-json"><a class="header-anchor" href="#manifest-json">#</a> manifest.json</h5>
<p>这是一个Chrome扩展程序最重要也必不可少的文件，用来配置所有和扩展程序相关的配置，必须放在<u>根目录</u>。其中，<code>manifest_version</code>、<code>name</code>、<code>version</code>3个是必不可少的，<code>description</code>和<code>icons</code>是推荐的。</p>
<p>以下是常见的配置项，完整的配置文档请点<a href="https://developer.chrome.com/extensions/manifest" target="_blank" rel="noopener noreferrer">这里<OutboundLink/></a></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token comment">// 清单文件的版本，这个必须写，而且必须是2</span>
	<span class="token property">"manifest_version"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token comment">// 扩展程序的名称</span>
	<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
	<span class="token comment">// 扩展程序的版本</span>
	<span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
	<span class="token comment">// 扩展程序的描述</span>
	<span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"简单的Chrome扩展demo"</span><span class="token punctuation">,</span>
	<span class="token comment">// 图标，一般偷懒全部用一个尺寸的也没问题</span>
	<span class="token property">"icons"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">"16"</span><span class="token operator">:</span> <span class="token string">"img/icon.png"</span><span class="token punctuation">,</span>
		<span class="token property">"48"</span><span class="token operator">:</span> <span class="token string">"img/icon.png"</span><span class="token punctuation">,</span>
		<span class="token property">"128"</span><span class="token operator">:</span> <span class="token string">"img/icon.png"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// 会一直常驻的后台JS或后台页面</span>
	<span class="token property">"background"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token comment">// 2种指定方式，如果指定JS，那么会自动生成一个背景页</span>
		<span class="token property">"page"</span><span class="token operator">:</span> <span class="token string">"background.html"</span>
		<span class="token comment">//"scripts": ["js/background.js"]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// 浏览器右上角图标设置，browser_action、page_action、app必须三选一</span>
	<span class="token property">"browser_action"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"default_icon"</span><span class="token operator">:</span> <span class="token string">"img/icon.png"</span><span class="token punctuation">,</span>
		<span class="token comment">// 图标悬停时的标题，可选</span>
		<span class="token property">"default_title"</span><span class="token operator">:</span> <span class="token string">"这是一个示例Chrome"</span><span class="token punctuation">,</span>
		<span class="token property">"default_popup"</span><span class="token operator">:</span> <span class="token string">"popup.html"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// 当某些特定页面打开才显示的图标</span>
	<span class="token comment">/*"page_action":
	{
		"default_icon": "img/icon.png",
		"default_title": "我是pageAction",
		"default_popup": "popup.html"
	},*/</span>
	<span class="token comment">// 需要直接注入页面的JS</span>
	<span class="token property">"content_scripts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
			<span class="token comment">//"matches": ["http://*/*", "https://*/*"],</span>
			<span class="token comment">// "&lt;all_urls>" 表示匹配所有地址</span>
			<span class="token property">"matches"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"&lt;all_urls>"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token comment">// 多个JS按顺序注入</span>
			<span class="token property">"js"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js/jquery-1.8.3.js"</span><span class="token punctuation">,</span> <span class="token string">"js/content-script.js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token comment">// JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式</span>
			<span class="token property">"css"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"css/custom.css"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token comment">// 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle</span>
			<span class="token property">"run_at"</span><span class="token operator">:</span> <span class="token string">"document_start"</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// 这里仅仅是为了演示content-script可以配置多个规则</span>
		<span class="token punctuation">{</span>
			<span class="token property">"matches"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"*://*/*.png"</span><span class="token punctuation">,</span> <span class="token string">"*://*/*.jpg"</span><span class="token punctuation">,</span> <span class="token string">"*://*/*.gif"</span><span class="token punctuation">,</span> <span class="token string">"*://*/*.bmp"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">"js"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js/show-image-content-size.js"</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">// 权限申请</span>
	<span class="token property">"permissions"</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token string">"contextMenus"</span><span class="token punctuation">,</span> <span class="token comment">// 右键菜单</span>
		<span class="token string">"tabs"</span><span class="token punctuation">,</span> <span class="token comment">// 标签</span>
		<span class="token string">"notifications"</span><span class="token punctuation">,</span> <span class="token comment">// 通知</span>
		<span class="token string">"webRequest"</span><span class="token punctuation">,</span> <span class="token comment">// web请求</span>
		<span class="token string">"webRequestBlocking"</span><span class="token punctuation">,</span>
		<span class="token string">"storage"</span><span class="token punctuation">,</span> <span class="token comment">// 本地存储</span>
		<span class="token string">"http://*/*"</span><span class="token punctuation">,</span> <span class="token comment">// 可以通过executeScript或者insertCSS访问的网站</span>
		<span class="token string">"https://*/*"</span> <span class="token comment">// 可以通过executeScript或者insertCSS访问的网站</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">// 普通页面能够直接访问的扩展程序资源列表，如果不设置是无法直接访问的</span>
	<span class="token property">"web_accessible_resources"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js/inject.js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">// 插件主页，这个很重要，不要浪费了这个免费广告位</span>
	<span class="token property">"homepage_url"</span><span class="token operator">:</span> <span class="token string">"https://www.baidu.com"</span><span class="token punctuation">,</span>
	<span class="token comment">// 覆盖浏览器默认页面</span>
	<span class="token property">"chrome_url_overrides"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token comment">// 覆盖浏览器默认的新标签页</span>
		<span class="token property">"newtab"</span><span class="token operator">:</span> <span class="token string">"newtab.html"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// Chrome40以前的插件配置页写法</span>
	<span class="token property">"options_page"</span><span class="token operator">:</span> <span class="token string">"options.html"</span><span class="token punctuation">,</span>
	<span class="token comment">// Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个</span>
	<span class="token property">"options_ui"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">"page"</span><span class="token operator">:</span> <span class="token string">"options.html"</span><span class="token punctuation">,</span>
		<span class="token comment">// 添加一些默认的样式，推荐使用</span>
		<span class="token property">"chrome_style"</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字</span>
	<span class="token property">"omnibox"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"keyword"</span> <span class="token operator">:</span> <span class="token string">"go"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// 默认语言</span>
	<span class="token property">"default_locale"</span><span class="token operator">:</span> <span class="token string">"zh_CN"</span><span class="token punctuation">,</span>
	<span class="token comment">// devtools页面入口，注意只能指向一个HTML文件，不能是JS文件</span>
	<span class="token property">"devtools_page"</span><span class="token operator">:</span> <span class="token string">"devtools.html"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><h5 id="content-scripts"><a class="header-anchor" href="#content-scripts">#</a> content_scripts</h5>
<p><a href="https://developer.chrome.com/extensions/content_scripts" target="_blank" rel="noopener noreferrer">content_scripts<OutboundLink/></a>,就是Chrome扩展程序向页面注入脚本的一种形式(虽然名为script，其实还可以包括css的)，借助<code>content_scripts</code>我们可以实现通过配置的方式轻松向指定页面注入JS和CSS。最常见的比如：广告屏蔽、页面CSS定制，等等</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token comment">// 需要直接注入页面的JS</span>
	<span class="token property">"content_scripts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token comment">//"matches": ["http://*/*", "https://*/*"],</span>
			<span class="token comment">// "&lt;all_urls>" 表示匹配所有地址</span>
			<span class="token property">"matches"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"&lt;all_urls>"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token comment">// 多个JS按顺序注入</span>
			<span class="token property">"js"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js/vue.js"</span><span class="token punctuation">,</span> <span class="token string">"js/content-script.js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token comment">// JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式</span>
			<span class="token property">"css"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"css/custom.css"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token comment">// 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle</span>
			<span class="token property">"run_at"</span><span class="token operator">:</span> <span class="token string">"document_start"</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>content_scripts</code>和原始页面共享DOM，但是不共享JS，如果要访问页面JS，可以通过<code>injected-js</code>来实现。并且<code>content_scripts</code>只能访问以下4种api:</p>
<ul>
<li>chrome.extension(getURL , inIncognitoContext , lastError , onRequest , sendRequest)</li>
<li>chrome.i18n</li>
<li>chrome.runtime(connect , getManifest , getURL , id , onConnect , onMessage , sendMessage)</li>
<li>chrome.storage</li>
</ul>
<h5 id="injected-script"><a class="header-anchor" href="#injected-script">#</a> injected-script</h5>
<p><code>injected-script</code>指的是通过DOM操作的方式向页面注入的一种JS。因为<code>content_scripts</code>有一个很大的缺陷，也就是无法访问页面中的JS，虽然可以操作DOM，但是DOM却不能调动它，也就是无法在DOM中通过绑定事件的方式调用<code>content_scripts</code>中的代码（包括直接写<code>onclick</code>和<code>addEventListener</code>），但是，在页面上添加一个按钮并调用插件的扩展API是一个很常见的需求。</p>
<p>在<code>content_scripts</code>中通过DOM方式向页面注入<code>inject-script</code>代码示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 向页面注入JS</span>
<span class="token keyword">function</span> <span class="token function">injectCustomJs</span><span class="token punctuation">(</span><span class="token parameter">jsPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	jsPath <span class="token operator">=</span> jsPath <span class="token operator">||</span> <span class="token string">'js/inject.js'</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> temp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	temp<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">,</span> <span class="token string">'text/javascript'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js</span>
	temp<span class="token punctuation">.</span>src <span class="token operator">=</span> chrome<span class="token punctuation">.</span>extension<span class="token punctuation">.</span><span class="token function">getURL</span><span class="token punctuation">(</span>jsPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
	temp<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 放在页面不好看，执行完后移除掉</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>需要注意的是，如果你想要在web中直接访问扩展程序中的资源的话必须显示声明才行，配置文件中增加如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token comment">// 普通页面能够直接访问的扩展程序资源列表，如果不设置是无法直接访问的</span>
  ...
	<span class="token property">"web_accessible_resources"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js/inject.js"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="background"><a class="header-anchor" href="#background">#</a> background</h5>
<p><code>background</code>是一个常驻的页面，它的生命周期是插件中所有类型页面中最长的，它随着浏览器的打开而打开，随着浏览器的关闭而关闭，所以通常把需要一直运行的、启动就运行的、全局的代码放在<code>background</code>里面。</p>
<p>background的权限非常高，几乎可以调用所有的Chrome扩展API（除了devtools），而且它可以无限制跨域，也就是可以跨域访问任何网站而无需要求对方设置<code>CORS</code></p>
<p>配置中，<code>background</code>可以通过<code>page</code>指定一张网页，也可以通过<code>scripts</code>直接指定一个JS，Chrome会自动为这个JS生成一个默认的网页：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token comment">// 会一直常驻的后台JS或后台页面</span>
	<span class="token property">"background"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token comment">// 2种指定方式，如果指定JS，那么会自动生成一个背景页</span>
		<span class="token property">"page"</span><span class="token operator">:</span> <span class="token string">"background.html"</span>
		<span class="token comment">//"scripts": ["js/background.js"]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>需要特别说明的是，虽然你可以通过<code>chrome-extension://xxx/background.html</code>直接打开后台页，但是你打开的后台页和真正一直在后台运行的那个页面不是同一个，换句话说，你可以打开无数个<code>background.html</code>，但是真正在后台常驻的只有一个，而且这个你永远看不到它的界面，只能调试它的代码。</p>
<h5 id="event-pages"><a class="header-anchor" href="#event-pages">#</a> event-pages</h5>
<p>鉴于background生命周期太长，长时间挂载后台可能会影响性能，所以Google又弄一个<code>event-pages</code>，在配置文件上，它与<code>background</code>的唯一区别就是多了一个<code>persistent</code>参数：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"background"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"event-page.js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"persistent"</span><span class="token operator">:</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>它的生命周期是：在被需要时加载，在空闲时被关闭，什么叫被需要时呢？比如第一次安装、插件更新、有<code>content_scripts</code>向它发送消息，等等</p>
<h5 id="popup"><a class="header-anchor" href="#popup">#</a> popup</h5>
<p><code>popup</code>是点击<code>browser_action</code>或者<code>page_action</code>图标时打开的一个小窗口网页，焦点离开网页就立即关闭，一般用来做一些临时性的交互。</p>
<p>![image-20201103111407848](/Users/sundong/Library/Application Support/typora-user-images/image-20201103111407848.png)</p>
<p><code>popup</code>可以包含任意你想要的HTML内容，并且会自适应大小。可以通过<code>default_popup</code>字段来指定popup页面，也可以调用<code>setPopup()</code>方法。</p>
<p>配置方式：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// manifest.json</span>
<span class="token punctuation">{</span>
	<span class="token property">"browser_action"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"default_icon"</span><span class="token operator">:</span> <span class="token string">"img/icon.png"</span><span class="token punctuation">,</span>
		<span class="token comment">// 图标悬停时的标题，可选</span>
		<span class="token property">"default_title"</span><span class="token operator">:</span> <span class="token string">"这是一个示例Chrome插件"</span><span class="token punctuation">,</span>
		<span class="token property">"default_popup"</span><span class="token operator">:</span> <span class="token string">"popup.html"</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="其他补充"><a class="header-anchor" href="#其他补充">#</a> 其他补充</h4>
<h5 id="关于通信"><a class="header-anchor" href="#关于通信">#</a> 关于通信</h5>
<p>使用页面按钮和弹窗窗口<code>popup</code>的扩展程序可以使用<code>declarative content</code>API在后台脚本<code>background.js</code>中设置规则，以供用户确定弹窗窗口何时可用。满足条件后，后台脚本可以与弹出窗口进行通信，以使用户可以点击其图标</p>
<p>![image-20201106102953869](/Users/sundong/Library/Application Support/typora-user-images/image-20201106102953869.png)</p>
<p>如果扩展程序需要与用户加载的网页进行交互，需要使用内容脚本。内容脚本可以修改网页。内容脚本中是一些 <code>JS</code> 代码，在已加载到浏览器的页面的上下文中执行，可以读取和修改浏览器访问的网页的 <code>DOM</code>。应该将内容脚本视为已加载网页的一部分，而不是扩展程序的一部分。</p>
<p>![image-20201106103122632](/Users/sundong/Library/Application Support/typora-user-images/image-20201106103122632.png)</p>
<p>内容脚本可以通过通信并使用存储API来与其父扩展进行通信</p>
<p>![image-20201106103234719](/Users/sundong/Library/Application Support/typora-user-images/image-20201106103234719.png)</p>
<table>
<thead>
<tr>
<th></th>
<th>injected-script</th>
<th>Content-script</th>
<th>Popup-js</th>
<th>Background-js</th>
</tr>
</thead>
<tbody>
<tr>
<td>injected-script</td>
<td>-</td>
<td>window.postMessage</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Content-script</td>
<td>window.postMessage</td>
<td>-</td>
<td>chrome.runtime.sendMessage（短连接） chrome.runtime.connect（长连接）</td>
<td>chrome.runtime.sendMessage（短连接） chrome.runtime.connect（长连接）</td>
</tr>
<tr>
<td>Popup-js</td>
<td>-</td>
<td>chrome.tabs.sendMessage（短连接） chrome.tabs.connect（长连接）</td>
<td>-</td>
<td>chrome.extension. getBackgroundPage()</td>
</tr>
<tr>
<td>Background-js</td>
<td>-</td>
<td>chrome.tabs.sendMessage （短连接）chrome.tabs.connect（长连接）</td>
<td>chrome.extension.getViews</td>
<td>-</td>
</tr>
</tbody>
</table>
<h5 id="动态注入或执行js"><a class="header-anchor" href="#动态注入或执行js">#</a> 动态注入或执行JS</h5>
<p>虽然在<code>background</code>和<code>popup</code>中无法直接访问页面DOM，但是可以通过<code>chrome.tabs.executeScript</code>来执行脚本，从而实现访问web页面的DOM（注意，这种方式也不能直接访问页面JS）。</p>
<p>示例<code>manifest.json</code>配置：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	...
	<span class="token property">"permissions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">"tabs"</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>JS:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 动态执行JS代码</span>
chrome<span class="token punctuation">.</span>tabs<span class="token punctuation">.</span><span class="token function">executeScript</span><span class="token punctuation">(</span>tabId<span class="token punctuation">,</span> <span class="token punctuation">{</span>code<span class="token operator">:</span> <span class="token string">'document.body.style.backgroundColor="red"'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 动态执行JS文件</span>
chrome<span class="token punctuation">.</span>tabs<span class="token punctuation">.</span><span class="token function">executeScript</span><span class="token punctuation">(</span>tabId<span class="token punctuation">,</span> <span class="token punctuation">{</span>file<span class="token operator">:</span> <span class="token string">'some-script.js'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="本地存储"><a class="header-anchor" href="#本地存储">#</a> 本地存储</h5>
<p>本地存储建议用<code>chrome.storage</code>而不是普通的<code>localStorage</code>。个人认为几点区别如下：</p>
<ol>
<li><code>Chrome.storage</code>是针对扩展程序全局的，即使你在<code>background</code>中保存的数据，<strong>在<code>content_scripts</code>也能获取到</strong></li>
<li><code>Chrome.storage.sync</code>可以跟随当前登录用户自动同步，这台电脑修改的设置会自动同步到其它电脑，很方便，如果没有登录或者未联网则先保存到本地，等登录了再同步至网络</li>
<li>异步批量读写操作，比起阻塞和串行的<code>localStorage</code>更快</li>
</ol>
<p>首先localStorage是基于域名的，而content_scripts是注入到用户当前浏览页面中的，如果content_scripts直接读取localStorage，所读取到的数据是用户当前浏览页面所在域中的。所以通常的解决办法是content_scripts通过runtime.sendMessage和background通信，由background读写扩展所在域（通常是chrome-extension://extension-id/）的localStorage，然后再传递给content_scripts。</p>
<p>Chrome存储API提供了2种储存区域，分别是sync和local。两种储存区域的区别在于，sync储存的区域会根据用户当前在Chrome上登陆的Google账户自动同步数据，当无可用网络连接可用时，sync区域对数据的读写和local区域对数据的读写行为一致</p>
<p>使用存储API需要声明<code>storage</code>权限，示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	...
	<span class="token property">"permissions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">"storage"</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 保存数据</span>
chrome<span class="token punctuation">.</span>storage<span class="token punctuation">.</span>sync<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'保存成功！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 读取数据，第一个参数是指定要读取的key以及设置默认值</span>
chrome<span class="token punctuation">.</span>storage<span class="token punctuation">.</span>sync<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'color'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {color:  'blue'}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 保存数据</span>
chrome<span class="token punctuation">.</span>storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'保存成功！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 读取数据，第一个参数是指定要读取的key以及设置默认值</span>
chrome<span class="token punctuation">.</span>storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {age: 18}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="如何打包生成自己的扩展程序"><a class="header-anchor" href="#如何打包生成自己的扩展程序">#</a> 如何打包生成自己的扩展程序</h4>
<p>点击右上角的<code>开发者模式</code>后，再点击<code>打包扩展程序</code>，就会弹出<code>打包扩展程序</code>对话框。</p>
<p>![image-20201102143425899](/Users/sundong/Library/Application Support/typora-user-images/image-20201102143425899.png)</p>
<p>![image-20201102143441053](/Users/sundong/Library/Application Support/typora-user-images/image-20201102143441053.png)</p>
<p>根据提示，选择扩展程序根目录，点击打包扩展程序就会生成<a href="https://developer.chrome.com/extensions/hosting" target="_blank" rel="noopener noreferrer">.crx<OutboundLink/></a>文件了。</p>
<p>如果第一次生成<code>.crx</code>文件，Chrome会在其根目录下生成一个<code>.pem</code>密钥文件</p>
<p>![image-20201102144123037](/Users/sundong/Library/Application Support/typora-user-images/image-20201102144123037.png)</p>
<p>对于<code>.pem</code>文件主要用于生成扩展程序ID，区分扩展程序。如果想要保证新生成的<code>.crx</code>文件,与原有的<code>.crx</code>文件的id是一样，可以把生成的<code>.pem</code>文件上传上去。</p>
<p>![image-20201102144256597](/Users/sundong/Library/Application Support/typora-user-images/image-20201102144256597.png)</p>
<h4 id="参考链接"><a class="header-anchor" href="#参考链接">#</a> 参考链接：</h4>
<p><a href="https://developer.chrome.com/extensions" target="_blank" rel="noopener noreferrer">谷歌官网<OutboundLink/></a>(需翻墙)</p>
<p><a href="https://github.com/wwhyes/chrome-extension-vue-demo" target="_blank" rel="noopener noreferrer">chrome-extesnion-vue-demo<OutboundLink/></a></p>
<p><a href="https://blog.csdn.net/wanwuguicang/article/details/79742017" target="_blank" rel="noopener noreferrer">如何打包生成自己的插件<OutboundLink/></a></p>
</template>