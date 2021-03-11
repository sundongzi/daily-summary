#### 问题描述：

通过`this.router.push`方式进行跳转，如果参数是对象（不止是对象），第一次跳转到目标页面是正常的，刷新后参数就变成了`[object Object]`,原因是路由参数跳转的时候第一次由于vue-router对于参数进行了缓存处理，因此第一次是正确的，刷新页面之后，由于浏览器地址参数默认是字符串，所以对于参数会进行字符串拼接，从而调用了`toString()`方法，因此参数也进行了`toString()`转换

##### 解决方案：

把需要传的参数先进行`JSON.stringify()`序列化，接受的时候在通过`JSON.parse()`反序列化，不用考虑`encodeURIComponent`编码和`decodeURIComponent()`解码，起码谷歌浏览器会自动处理

##### 扩展一下编码方式

1. `escape()` vs `unescape()`

`escape()`:不能直接用于URL编码，真正目的是返回一个字符的`Unicode编码`

![image-20200519140812626](/Users/sundong/Library/Application Support/typora-user-images/image-20200519140812626.png)

2.`encodeURI()` VS `decodeURL()`

`encodeURI()`用于对URL编码的函数

![image-20200519140945762](/Users/sundong/Library/Application Support/typora-user-images/image-20200519140945762.png)

3.`encodeURIComponent()`VS`decodeURIComponent()`

`encodeURIComponent()`:它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码

![image-20200519141539559](/Users/sundong/Library/Application Support/typora-user-images/image-20200519141539559.png)

