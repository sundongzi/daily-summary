#### CSRF是什么

Cross-site request forgery(跨站请求伪造)。是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起跨站请求。

![image-20201228105636571](/Users/sundong/Library/Application Support/typora-user-images/image-20201228105636571.png)

#### CSRF防御

使用CSRF Token验证

- 在浏览器向服务器发起请求时，服务器生成一个CSRF Token（字符串）发送给浏览器，然后将该字符串放入页面中
- 浏览器请求时需要带上这个CSRF Token。服务器收到请求后，验证CSRF是否合法，如果不合法拒绝即可。

