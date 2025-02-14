##### 如何建立websocket连接？

1. 客户端向服务端发起`HTTP`请求，同时在请求中带上一些特殊的`header`头，其中包括：

   - 升级协议（Connection：Upgrade）

   - 想升级成`websocket`协议（Upgrade：Websocket）

   - 随机生成的Base码（Sec-Websocket-Key）

     ```http
     Connection: Upgrade
     Upgrade: WebSocket
     Sec-WebSocket-Key: T2a6wZlAwhgQNqruZ2YUyg==\r\n
     ```

2. 服务端如果支持`Websocket`协议，就会走Websocket流程，同时根据客户端生成的base64码，用`某个公开的算法`生成另一段字符串，放在`HTTP`响应的`Sec-Websocket-Accept`头里，同时带上`101`状态返回给客户端

   ```http
   HTTP/1.1 101 Switching Protocols\r\n
   Sec-WebSocket-Accept: iBJKv/ALIW2DobfoA4dmr3JHBCY=\r\n
   Upgrade: WebSocket\r\n
   Connection: Upgrade\r\n
   ```

3. 浏览器收到返回值后，根据同样的算法将`base64`码转成另一段字符串，如果这段字符串与服务端返回的字符串相同，那就验证通过。

<img src="/Users/sundong/Library/Application Support/typora-user-images/image-20230705211003338.png" alt="image-20230705211003338" style="zoom:50%;" />

##### 参考链接

[怎么建立Websocket连接](https://xiaolincoding.com/network/2_http/http_websocket.html#%E6%80%8E%E4%B9%88%E5%BB%BA%E7%AB%8Bwebsocket%E8%BF%9E%E6%8E%A5)