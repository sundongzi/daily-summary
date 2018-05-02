#### 创建ssh免密

##### 1.生成指定名称的密钥

```javascript
ssh-keygen
```

首先 `ssh-keygen` 会确认密钥的存储位置（默认是 `.ssh/id_rsa`），然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空即可（直接回车）。

**需要注意的是这里必须输入指定的名称，不能使用默认名称，否则会相互覆盖（这是配置多个key的重点），如：id_rsa_idss**

##### 2.生成配置config文件   进入到电脑的.ssh  比如我的是 c/Users/David/.ssh    然后使用vi config

| 子段           | 名称                                       |
| ------------ | ---------------------------------------- |
| Host         | 远程主机地址（github.com）                       |
| IdentityFile | 私钥的文件路径以及文件名称  可以通过pwd查看完整路径   然后后面加上文件名称 |
| User         | 用户名                                      |
| Port         | 远程主机上连接的端口号                              |
| HostName     | 要登录的真实主机名称                               |

==PS：以上配置需要注意顺序问题==

##### 3.复制生成的公钥到服务器上面，进入到.ssh里面，然后通过ls查看一下存在文件，然后通过cat进入到.pub的文件拷贝出来放到远程服务器上面

##### 4.然后进入到本地需要关联的文件夹 git push git@github.com:sundongzi/daily-summary.git   ==注意是以git开头的地址==

##### 详细链接：https://blog.csdn.net/ligang2585116/article/details/79964976

