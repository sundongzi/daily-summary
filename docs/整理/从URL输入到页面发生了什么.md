1. DNS解析域名获取IP地址（先读取DNS缓存）
2. 建立tcp连接（三次握手）
3. 发起http请求（查找http缓存，如果命中强缓存则不会发起）
4. 服务器返回HTTP报文
5. 浏览器页面渲染
6. 断开连接（四次挥手）

![HTTP协议1](/Users/sundong/Downloads/HTTP协议1.png)

[从输入URL开始建立前端知识体系](https://juejin.cn/post/6935232082482298911)

[从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系](http://www.dailichun.com/2018/03/12/whenyouenteraurl.html)

