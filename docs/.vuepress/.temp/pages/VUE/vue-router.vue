<template><h4 id="问题描述"><a class="header-anchor" href="#问题描述">#</a> 问题描述：</h4>
<p>通过<code>this.router.push</code>方式进行跳转，如果参数是对象（不止是对象），第一次跳转到目标页面是正常的，刷新后参数就变成了<code>[object Object]</code>,原因是路由参数跳转的时候第一次由于vue-router对于参数进行了缓存处理，因此第一次是正确的，刷新页面之后，由于浏览器地址参数默认是字符串，所以对于参数会进行字符串拼接，从而调用了<code>toString()</code>方法，因此参数也进行了<code>toString()</code>转换</p>
<h5 id="解决方案"><a class="header-anchor" href="#解决方案">#</a> 解决方案：</h5>
<p>把需要传的参数先进行<code>JSON.stringify()</code>序列化，接受的时候在通过<code>JSON.parse()</code>反序列化，不用考虑<code>encodeURIComponent</code>编码和<code>decodeURIComponent()</code>解码，起码谷歌浏览器会自动处理</p>
<h5 id="扩展一下编码方式"><a class="header-anchor" href="#扩展一下编码方式">#</a> 扩展一下编码方式</h5>
<ol>
<li><code>escape()</code> vs <code>unescape()</code></li>
</ol>
<p><code>escape()</code>:不能直接用于URL编码，真正目的是返回一个字符的<code>Unicode编码</code></p>
<p>![image-20200519140812626](/Users/sundong/Library/Application Support/typora-user-images/image-20200519140812626.png)</p>
<p>2.<code>encodeURI()</code> VS <code>decodeURL()</code></p>
<p><code>encodeURI()</code>用于对URL编码的函数</p>
<p>![image-20200519140945762](/Users/sundong/Library/Application Support/typora-user-images/image-20200519140945762.png)</p>
<p>3.<code>encodeURIComponent()</code>VS<code>decodeURIComponent()</code></p>
<p><code>encodeURIComponent()</code>:它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码</p>
<p>![image-20200519141539559](/Users/sundong/Library/Application Support/typora-user-images/image-20200519141539559.png)</p>
</template>