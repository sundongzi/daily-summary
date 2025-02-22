#### 什么是xss攻击

Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。

为了和 CSS 区分，这里把攻击的第一个字母改成了 X，于是叫做 XSS。

xss的本质：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信的，导致恶意脚本被执行。而由于直接在用户的终端执行，恶意代码能够直接获取用户的信息，或者利用这些信息冒充用户向网站发起攻击者定义的请求。

#### xss的分类

![image-20201228113247133](/Users/sundong/Library/Application Support/typora-user-images/image-20201228113247133.png)

![image-20201228114714206](/Users/sundong/Library/Application Support/typora-user-images/image-20201228114714206.png)

#### xss攻击防御

![image-20201228132346765](/Users/sundong/Library/Application Support/typora-user-images/image-20201228132346765.png)

#### 参考链接

https://segmentfault.com/a/1190000016551188#articleHeader7

