##### 语义区别（根据RFC规范）

- `GET`的语义是从服务器获取指定的资源
- `POST`的语义是根据请求负荷（报文body）对指定的资源做出处理

##### 缓存区别

- `GET`请求会被浏览器主动缓存下来，这个缓存可以做到浏览器本身上（彻底避免浏览器发请求），也可以做到代理上（如nginx），而且在浏览器中 GET 请求可以保存为书签。
- 浏览器一般不会缓存 POST 请求，也不能把 POST 请求保存为书签。

##### 编码区别

`GET`只能进行URL编码，只能接收ASCII字符，而`POST`没有限制

##### 幂等性区别

定义：多次执行相同的操作，结果都是相同的

`GET`是幂等的，而`POST`不是

##### TCP区别

- `GET`请求会把报文一次性发出去
- `POST`会分为两个TCP数据包，首先发header部分，如果服务器相应100，继续发body部分（火狐浏览器除外，它的`POST`请求只发一个TCP包）

##### 安全性区别

定义：在HTTP协议里，所谓的安全是指请求方法不会破坏服务器上的资源。

- `GET`请求是安全的，因为它是只读操作
- `POST`是不安全的，因为它会涉及新增、删除或提交数据的操作，会修改服务器上面的资源，并且多次提交数据就会创建多个资源。