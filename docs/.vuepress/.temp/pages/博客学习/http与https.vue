<template><p><a href="https://mp.weixin.qq.com/s/uF3bJrjGbGCAzCuCWk18BA" target="_blank" rel="noopener noreferrer">参考链接<OutboundLink/></a></p>
<h4 id="http-与-https"><a class="header-anchor" href="#http-与-https">#</a> http 与 https</h4>
<h5 id="http-http协议运行在tcp上-明文传输-客户端与服务器端都无法验证对方的身份"><a class="header-anchor" href="#http-http协议运行在tcp上-明文传输-客户端与服务器端都无法验证对方的身份">#</a> http: http协议运行在TCP上，明文传输，客户端与服务器端都无法验证对方的身份</h5>
<h5 id="https-身披ssl外壳的http-运行于ssl上面-ssl运行于tcp之上-是添加了加密和认证的http"><a class="header-anchor" href="#https-身披ssl外壳的http-运行于ssl上面-ssl运行于tcp之上-是添加了加密和认证的http">#</a> https:身披ssl外壳的http,运行于ssl上面，ssl运行于tcp之上，是添加了加密和认证的http.</h5>
<h5 id="区别"><a class="header-anchor" href="#区别">#</a> 区别：</h5>
<ol>
<li>端口不同：http与https使用不同的连接方式,用的端口也不一样，前者端口是80，后者端口是443</li>
<li>资源消耗，与http相比，https通信会因为加减密处理消耗更多的cpu和内存资源</li>
<li>开销：https通信需要证书，而证书一般需要向认证机构购买</li>
<li>https加密机制是一种共享 密钥加密和公开密钥加密并用的混合加密机制</li>
</ol>
<h4 id="http缓存机制"><a class="header-anchor" href="#http缓存机制">#</a> http缓存机制：</h4>
<h5 id="原理-主要通过cache-control和etag配合来实现http的缓存机制"><a class="header-anchor" href="#原理-主要通过cache-control和etag配合来实现http的缓存机制">#</a> 原理：主要通过Cache-control和Etag配合来实现http的缓存机制</h5>
<h5 id="cache-control主要包含以下几个字段"><a class="header-anchor" href="#cache-control主要包含以下几个字段">#</a> Cache-control主要包含以下几个字段</h5>
<ol>
<li>private：只有客户端可以缓存</li>
<li>public：客户端和代理服务器都可以缓存</li>
<li>max-age：缓存过期的时间</li>
<li>no-cache：需要使用对比缓存来验证缓存数据</li>
<li>no-store：所有内存都不会进行缓存</li>
</ol>
<h5 id="etag-是服务器端资源的一个标识符-用来进行对比缓存"><a class="header-anchor" href="#etag-是服务器端资源的一个标识符-用来进行对比缓存">#</a> Etag：是服务器端资源的一个标识符，用来进行对比缓存</h5>
<ol>
<li>当客户端第一次请求服务端时，服务端会下发当前请求资源的标识码Etag，下次在请求时，客户端则会通过header里面的if-none-match将这个标识码Etag带上，服务器端将客户端传来的Etag与最新的Etag做对比，如果一样，则表示资源没更新，返回304.</li>
</ol>
<p>![image-20191106191244335](/Users/sundong/Library/Application Support/typora-user-images/image-20191106191244335.png)</p>
<p>![640.jpg](/Users/sundong/Library/Application Support/typora-user-images/640.jpg)</p>
</template>