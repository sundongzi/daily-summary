(self.webpackChunkdaily_summary=self.webpackChunkdaily_summary||[]).push([[190],{6357:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>r});const r={key:"v-41793c02",path:"/%E5%8D%9A%E5%AE%A2%E5%AD%A6%E4%B9%A0/http%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"博客学习/http常用方法.md",git:{updatedTime:1615448503e3,contributors:[{name:"sundong",email:"sundong@idss-cn.com",commits:1}]}}},3413:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});const r=(0,a(6252).uE)('<h4 id="http方法"><a class="header-anchor" href="#http方法">#</a> http方法:</h4><ol><li><h5 id="get-请求服务器发送某个资源-只是读取"><a class="header-anchor" href="#get-请求服务器发送某个资源-只是读取">#</a> get:请求服务器发送某个资源，只是读取</h5></li><li><h5 id="head-get方法的行为很类似-但服务器在响应中只返回首部。不会返回实体的主体部分。这就允许客户端在未获取实际资源的情况下-对资源的首部进行检査。使用head-可以-1、在不获取资源的情况下了解资源的情况-比如-判断其类型-2、通过査看响应中的状态码-看看某个对象是否存在-3、通过査看首部-测试资源是否被修改"><a class="header-anchor" href="#head-get方法的行为很类似-但服务器在响应中只返回首部。不会返回实体的主体部分。这就允许客户端在未获取实际资源的情况下-对资源的首部进行检査。使用head-可以-1、在不获取资源的情况下了解资源的情况-比如-判断其类型-2、通过査看响应中的状态码-看看某个对象是否存在-3、通过査看首部-测试资源是否被修改">#</a> HEAD: GET方法的行为很类似，但服务器在响应中只返回首部。不会返回实体的主体部分。这就允许客户端在未获取实际资源的情况下，对资源的首部进行检査。使用HEAD，可以：1、在不获取资源的情况下了解资源的情况(比如，判断其类型)；2、通过査看响应中的状态码，看看某个对象是否存在；3、通过査看首部，测试资源是否被修改</h5></li><li><h5 id="put-与get从服务器读取文档相反-put方法会向服务器写入文档。就像ftp协议的文件上传一样-要求在请求报文的主体中包含文件内容-然后保存到请求uri指定的位置"><a class="header-anchor" href="#put-与get从服务器读取文档相反-put方法会向服务器写入文档。就像ftp协议的文件上传一样-要求在请求报文的主体中包含文件内容-然后保存到请求uri指定的位置">#</a> put:与GET从服务器读取文档相反，PUT方法会向服务器写入文档。就像FTP协议的文件上传一样，要求在请求报文的主体中包含文件内容，然后保存到请求URI指定的位置</h5></li><li><h5 id="post-post方法起初是用来向服务器输入数据的。实际上-通常会用它来支持html的表单"><a class="header-anchor" href="#post-post方法起初是用来向服务器输入数据的。实际上-通常会用它来支持html的表单">#</a> post:POST方法起初是用来向服务器输入数据的。实际上，通常会用它来支持HTML的表单</h5></li><li><h5 id="options-options方法请求web服务器告知其支持的各种功能。可以询问服务器通常支持哪些方法-或者对某些特殊资源支持哪些方法"><a class="header-anchor" href="#options-options方法请求web服务器告知其支持的各种功能。可以询问服务器通常支持哪些方法-或者对某些特殊资源支持哪些方法">#</a> <strong>OPTIONS</strong>:OPTIONS方法请求Web服务器告知其支持的各种功能。可以询问服务器通常支持哪些方法，或者对某些特殊资源支持哪些方法</h5></li><li><h5 id="delete-delete方法所做的事情就是请服务器删除请求url所指定的资源"><a class="header-anchor" href="#delete-delete方法所做的事情就是请服务器删除请求url所指定的资源">#</a> DELETE:DELETE方法所做的事情就是请服务器删除请求URL所指定的资源</h5></li><li><h5 id="connect-connect方法要求在与代理服务器通信时建立隧道-实现用隧道协议进行tcp通信。主要使用ssl-secure-sockets-layer-安全套接层-和tls-transport-layer-security-传输层安全-协议把通信内容加密后经网络隧道传输"><a class="header-anchor" href="#connect-connect方法要求在与代理服务器通信时建立隧道-实现用隧道协议进行tcp通信。主要使用ssl-secure-sockets-layer-安全套接层-和tls-transport-layer-security-传输层安全-协议把通信内容加密后经网络隧道传输">#</a> <strong>CONNECT</strong>:CONNECT方法要求在与代理服务器通信时建立隧道，实现用隧道协议进行TCP通信。主要使用SSL(Secure Sockets Layer，安全套接层)和TLS(Transport Layer Security，传输层安全)协议把通信内容加密后经网络隧道传输</h5></li><li><h5 id="trace-trace请求会在目的服务器端发起一个-环回-诊断。行程最后一站的服务器会弹回一条trace响应-并在响应主体中携带它收到的原始请求报文。这样客户端就可以査看在所有中间http应用程序组成的请求-响应链上-原始报文是否-以及如何被毁坏或修改过。发送请求时-在max-forwards首部字段中填入数值-每经过一个服务器端就将该数字减-1-当数值刚好减到0时-就停止继续传输-最后接收到请求的服务器端则返回状态码-200-ok-的响应。但是-trace方法本来就不怎么常用-再加上它容易引发xst-cross-site-tracing-跨站追踪-攻击-通常就更不会用到了"><a class="header-anchor" href="#trace-trace请求会在目的服务器端发起一个-环回-诊断。行程最后一站的服务器会弹回一条trace响应-并在响应主体中携带它收到的原始请求报文。这样客户端就可以査看在所有中间http应用程序组成的请求-响应链上-原始报文是否-以及如何被毁坏或修改过。发送请求时-在max-forwards首部字段中填入数值-每经过一个服务器端就将该数字减-1-当数值刚好减到0时-就停止继续传输-最后接收到请求的服务器端则返回状态码-200-ok-的响应。但是-trace方法本来就不怎么常用-再加上它容易引发xst-cross-site-tracing-跨站追踪-攻击-通常就更不会用到了">#</a> TRACE：TRACE请求会在目的服务器端发起一个“环回”诊断。行程最后一站的服务器会弹回一条TRACE响应，并在响应主体中携带它收到的原始请求报文。这样客户端就可以査看在所有中间HTTP应用程序组成的请求/响应链上，原始报文是否，以及如何被毁坏或修改过。发送请求时，在Max-Forwards首部字段中填入数值，每经过一个服务器端就将该数字减 1，当数值刚好减到0时，就停止继续传输，最后接收到请求的服务器端则返回状态码 200 OK 的响应。但是，TRACE方法本来就不怎么常用，再加上它容易引发XST(Cross-Site Tracing，跨站追踪)攻击，通常就更不会用到了</h5><p>​</p><p>参考链接：http://www.cnblogs.com/xiaohuochai/p/6156435.html#anchor3</p></li></ol>',2),s={render:function(e,t){return r}}}}]);