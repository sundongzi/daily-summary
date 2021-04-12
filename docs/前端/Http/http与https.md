---
title: http与https
date: 2021-04-06 15:05:05
permalink: /pages/c7f24e/
categories:
  - 前端
  - HTTP
tags:
  - 
---
[参考链接](https://mp.weixin.qq.com/s/uF3bJrjGbGCAzCuCWk18BA)

#### http 与 https

##### http: http协议运行在TCP上，明文传输，客户端与服务器端都无法验证对方的身份

##### https:身披ssl外壳的http,运行于ssl上面，ssl运行于tcp之上，是添加了加密和认证的http.

##### 区别：

1. 端口不同：http与https使用不同的连接方式,用的端口也不一样，前者端口是80，后者端口是443
2. 资源消耗，与http相比，https通信会因为加减密处理消耗更多的cpu和内存资源
3. 开销：https通信需要证书，而证书一般需要向认证机构购买
4. https加密机制是一种共享 密钥加密和公开密钥加密并用的混合加密机制

#### http缓存机制：

##### 原理：主要通过Cache-control和Etag配合来实现http的缓存机制

##### Cache-control主要包含以下几个字段

1. private：只有客户端可以缓存
2. public：客户端和代理服务器都可以缓存
3. max-age：缓存过期的时间
4. no-cache：需要使用对比缓存来验证缓存数据
5. no-store：所有内存都不会进行缓存

##### Etag：是服务器端资源的一个标识符，用来进行对比缓存

1. 当客户端第一次请求服务端时，服务端会下发当前请求资源的标识码Etag，下次在请求时，客户端则会通过header里面的if-none-match将这个标识码Etag带上，服务器端将客户端传来的Etag与最新的Etag做对比，如果一样，则表示资源没更新，返回304.

![image-20191106191244335](/Users/sundong/Library/Application Support/typora-user-images/image-20191106191244335.png)

![640.jpg](/Users/sundong/Library/Application Support/typora-user-images/640.jpg)