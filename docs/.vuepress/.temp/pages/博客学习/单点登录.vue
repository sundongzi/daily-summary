<template><h4 id="单点登录原理与实现"><a class="header-anchor" href="#单点登录原理与实现">#</a> 单点登录原理与实现</h4>
<h5 id="一、什么是单点登录"><a class="header-anchor" href="#一、什么是单点登录">#</a> 一、什么是单点登录？</h5>
<p>单点登录全称Single Sign On（以下简称SSO），是指在多系统应用群中登录一个系统，便可在其他所有系统中得到授权而无需再次登录，包括单点登录与单点注销两部分</p>
<h5 id="二、单系统登录机制"><a class="header-anchor" href="#二、单系统登录机制">#</a> 二、单系统登录机制</h5>
<p>1、http无状态协议</p>
<p>http作为通信协议，它是无状态协议，浏览器的每一次请求，服务器都会进行独立处理，与之前或者之后的请求并无关联。</p>
<p><img src="https://pic4.zhimg.com/80/v2-29434d06740dec55a1b287c2bd6121e0_1440w.jpg?source=1940ef5c" alt="img"></p>
<p>也就是说每个人都可以都可以通过浏览器去访问服务器端的资源，因此如果要保护服务器资源，就要限制浏览器请求，要限制浏览器请求，就要过滤掉非法请求，由于http请求是无状态的，因此要想过滤掉非法请求，就需要浏览器与服务器共同维护一个状态，也就是所谓的会话机制。</p>
<p>2、会话机制</p>
<p>所谓的会话机制就是，当浏览器第一次请求服务器的时候，服务器会创建一个会话标识返回给浏览器，浏览器接收到以后去存储这个会话标识，在接下来的每次请求中都要把这个会话标识带上，服务器通过这个会话标识去判断是不是同一个用户。</p>
<p>服务器端在内存中保存会话标识，那么浏览器端呢？</p>
<p>Cookie是浏览器用来存储少量数据的一种机制，通过key/value的形式，浏览器在发送请求时自动附带上cookie信息。</p>
<p>tomcat会话机制当然也实现了cookie，访问tomcat服务器时，浏览器中可以看到一个名为“JSESSIONID”的cookie，这就是tomcat会话机制维护的会话id，使用了cookie的请求响应过程如下：</p>
<p><img src="https://pic2.zhimg.com/80/v2-474d9a5805c296fbfe2b5c2855e1bf22_1440w.jpg?source=1940ef5c" alt="img"></p>
<p>3、登录状态</p>
<p><img src="https://pic3.zhimg.com/80/v2-09055e52f0c7f4e46c619dd94dc378a6_1440w.jpg?source=1940ef5c" alt="img"></p>
<h5 id="三、多系统登录机制"><a class="header-anchor" href="#三、多系统登录机制">#</a> 三、多系统登录机制</h5>
<p>Q：单系统登录主要是通过session进行保存用户信息的。但对于多系统来说，很有可能会存在多个Tomcat,而对于session主要是针对当前系统的Tomcat,因此系统1和系统2之间的session是不共享的</p>
<p>A：1、将登陆功能抽取为一个系统（sso）,其他系统请求sso进行登录</p>
<ul>
<li>sso系统会生成一个token，并将用户信息存在Redis里面，并设置过期时间</li>
<li>其他系统请求sso系统进行登录，得到sso返回的token，存在cookie里面</li>
<li>每次请求都会带上cookie，拦截器得到token，判断是否已经登录</li>
</ul>
<p>​      2、本来将用户信息存到session，现在将用户信息存在Redis里面</p>
<p>Q：Cookie跨域问题？</p>
<p>A：</p>
</template>