##### 一、http

- 超文本传输协议

- 无状态

  对于客户端请求状态没有进行存储，比如每次请求都需要重新登录

- 无连接

  每次连接只处理一个请求，通过`三次握手`连接与`四次挥手`断开连接

  为了解决客户端和服务端保持会话连接，通常通过`cookie`与`session`来记录http状态

`cookie`与`session`区别：

- 安全性：session比cookie安全，cookie存在客户端；seesion存在服务端，通过`sessionId(存在cookie中或者跟在URL参数后面)`进行连接
- 存取值类型不同：cookie只能存字符串类型；session可以存任意数据类型
- 有效期不同：cookie可以设置长时间保持；session一般失效时间短，客户端关闭或者session超时都会失效
- 存储大小不同：cookie保存的数据不能超过4k；session远高于cookie，但如果访问量过多，会占用过多的服务器资源

[傻傻分不清之Cookie、Session、Token、JWT](https://juejin.cn/post/6844904034181070861#comment)

[cookie、session、localStorage分别是什么？有什么作用](https://zhuanlan.zhihu.com/p/22388743)

##### 二、https

- http + ssl（安全层）/ tsl（传输层），传输的不再是文本，而是二进制流，传输更高效且加密处理更加安全

- https的连接过程

  1. 客户端发起`https`请求并连接到服务器的默认`443`端口，同样采用`三次握手`

  2. 服务端收到请求后，向客户端发送数字证书（包括公钥、证书颁发者、到期日期）

     （加密方式：对称加密、非对称加密、）

  3. 客户端收到证书后，需要验证证书的有效性。验证通过后会生成一个随机的`pre-master key`。然后将密钥通过接收到的公钥加密然后发送给服务端。

  4. 服务端通过私钥进行解密获取到``pre-master key`

  5. 获得``pre-master key`后，服务端和客户端通过主密钥进行通信

##### 三、区别

- 加密：http传输的是文本；https通过使用SSL/TSL进行加密传输的数据
- 连接方式：HTTP（三次握手）；HTTPS（三次握手+数字证书）连接方式不一样
- 端口：http默认的端口是80；https默认端口是443