##### 什么是跨域

浏览器中有一个很重要的安全策略，叫做`同源策略`。

所谓的同源策略中的`源`指的是：`协议` +`域名`+`端口`。如果两个源不同，则就称为`跨源`或`跨域`。

同源策略对于`ajax`的限制最为严重。

##### 跨域常见的解决办法

1. nginx服务器反向代理

   - 配置nginx

     ```nginx
     server {
             listen 80;
             server_name local.test;
             location /api {
                 proxy_pass http://localhost:8080;
             }
             location / {
                 proxy_pass http://localhost:8000;
             }
     }
     ```

   - 启动nginx：`sudo nginx`

   - 重启nginx：`sudo nginx -s reload`

2. JSONP

   原理：当需要跨域请求时，不使用`ajax`请求，而是动态生成一个`script`标签去请求服务器，由于浏览器并不阻止`script`请求，因此可以保证请求顺利到达服务器端。服务器收到请求后，会向客户端返回一段`JS代码`，这段代码其实是一个`函数调用`，调用的是客户端事先定义好的函数，并把客户端需要的数据作为函数参数传递回去，从而实现间接的从服务端获取数据。

   ![image-20230709101306157](/Users/sundong/Library/Application Support/typora-user-images/image-20230709101306157.png)

   ##### 缺点：需要注意的是JSONP解解决跨域的方式只能支持`GET`请求。

3. CORS，全称为`Cross-Origin Resource Sharing`(跨域资源共享)。

   它的实现方式主要是：`如果浏览器要跨域访问服务器的资源，首先需要获取服务器的允许。`

   当浏览器发送`ajax`请求时，浏览器会先判断该请求属于哪一种请求。

   - 简单请求

     - 请求方式为：`GET`、`POST`、`HEAD`

     - 请求头中仅包含安全的字段，常见的安全字段包括：

       ```javascript
       Accept
       Accept-Language
       Content-Language
       Content-Type
       DPR
       Downlink
       Save-Data
       Viewport-Width
       Width
       ```

     - 请求头中包含**`Content-Type`**，且值为：`text/plain`、`multipart/form-data`、`application/x-www-form-urlencoded`

     - 请求中没有使用 [`ReadableStream`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FReadableStream) 对象。

     - 请求中的任意[`XMLHttpRequestUpload`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FXMLHttpRequestUpload) 对象均没有注册任何事件监听器；[`XMLHttpRequestUpload`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FXMLHttpRequestUpload) 对象可以使用 [`XMLHttpRequest.upload`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FXMLHttpRequest%2Fupload) 属性访问。

     ```http
     // 简单请求
     fetch('http://crossdomain.com/api/news');
     
     // 请求方法不满足要求，不是简单请求
     fetch('http://crossdomain.com/api/news', {
       method: 'PUT',
     });
     
     // 加入了额外的请求头，不是简单请求
     fetch('http://crossdomain.com/api/news', {
       headers: {
         a: 1,
       },
     });
     
     // 简单请求
     fetch('http://crossdomain.com/api/news', {
       method: 'post',
     });
     
     // content-type不满足要求，不是简单请求
     fetch('http://crossdomain.com/api/news', {
       method: 'post',
       headers: {
         'content-type': 'application/json',
       },
     });
     
     ```

     ##### 简单请求的交互规范：

     1. 请求头中自动添加**`origin`**字段
     2. 服务器响应头中应包含**`Access-Control-Allow-Origin`**，其值有以下两种情况：
        - *：表示我很开放，什么人我都允许访问
        - 具体的源：比如`http://my.com`，表示我就允许你访问

     <img src="/Users/sundong/Library/Application Support/typora-user-images/image-20230709102946672.png" alt="image-20230709102946672" style="zoom:50%;" />

   - 非简单请求

     ##### 非简单请求的交互规范：

     1. **浏览器发送预检请求，询问服务器是否允许**。

        预设请求有如下几个特征：

        - 请求方法为`OPTIONS`

        - 没有请求体

        - 请求头中包含

        ```http
        Origin：请求的源，和简单请求的含义一致
        Access-Control-Request-Method：后续的真实请求将使用的请求方法
        Access-Control-Request-Headers：后续的真实请求会改动的请求头
        ```

     2. **服务器允许**

        对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：

        ```http
        Access-Control-Allow-Origin：和简单请求一样，表示允许的源
        Access-Control-Allow-Methods：表示允许的后续真实的请求方法
        Access-Control-Allow-Headers：表示允许改动的请求头
        Access-Control-Max-Age：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了
        ```

     3. **浏览器发送真实请求**

     4. **服务器完成真实的响应**

     <img src="/Users/sundong/Library/Application Support/typora-user-images/image-20230709103547922.png" alt="image-20230709103547922" style="zoom:50%;" />

   - 携带身份凭证的请求，比如：cookie，需要满足以下三个条件

     1. web 请求设置`withCredentials`

        ```http
        // xhr
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        // fetch api
        fetch(url, {
          credentials: 'include',
        });
        ```

     2. 响应头中添加`Access-Control-Allow-Credentials`值为`true`

     3. **服务器不得设置 `Access-Control-Allow-Origin 的值为*`**

4. Websocket

   这种方式本质上没有使用`HTTP`请求头，因此没有跨域的限制。

##### 为什么服务端不存在跨域？

- 因为跨域属于`浏览器`的限制，不仅服务端没有域名，客户端也没有，因此不存在跨域。准确的说是前端网页（页面）有域名，存在跨域。

- 跨域本质是服务器的信任问题，因为数据都存在服务器，所以服务器的安全性需要保障，如何保障安全性，就在于有个机制让服务器判断是否应该信任请求方，那首先就是标识请求方，前端页面可以用域名标识，后端和客户端没有域名，可以有其他的方式解决信任问题，比如access_token等。

##### 为什么生产环境下不存在跨域？

- 生产环境下由于客户端网址和服务端接口地址路径同源，所以不用跨域。

##### 参考链接

[前端面试必会网络之跨域问题解决](https://juejin.cn/post/7094162429310926855#heading-3)

[10种跨域解决方案（附终极大招）](https://juejin.cn/post/6844904126246027278#heading-5)

