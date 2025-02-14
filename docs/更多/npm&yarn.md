#### npm安装机制

![image-20220225154353203](/Users/sundong/Library/Application Support/typora-user-images/image-20220225154353203.png)

`npm install`执行之后，首先会检查和获取`npm配置`，其优先级为：

`项目级的.npmrc文件 > 用户级的.npmrc文件 > 全局级的.npmrc文件 > npm内置的.npmrc文件`

然后检查项目中是否有`package-lock.json`文件

- 有，检查`package-lock.json`和`package.json`声明的依赖是否一致

​        1、一致，直接使用`package-lock.json`中的信息，从网络或者缓存中加载依赖

​        2、不一致，参照上图

-  没有，那么会根据`package.json`递归构建依赖树，然后就会根据构建好的依赖下载完整的依赖资源，在下载的时候会检查有没有相关的资源缓存

  1、存在，直接解压到`node_modules`中

  2、不存在，`解析依赖包的版本区间为某个具体的版本号=》下载对应版本依赖的 tar 包到本地离线镜像 =》将依赖从离线镜像解压到本地缓存 =》 将依赖从缓存拷贝到当前目录的 node_modules 目录`

最终会生成`package-lock`文件以及`node_modules`文件。

#### npm缓存机制

首先可以通过以下命令来查看本地缓存：

```
npm config get cache
```

![image-20220225160950145](/Users/sundong/Library/Application Support/typora-user-images/image-20220225160950145.png)

通过打开.npm文件可以看到`_cacache`的目录有三个文件

![image-20220225161058244](/Users/sundong/Library/Application Support/typora-user-images/image-20220225161058244.png)

其中`content-v2`文件夹里面是tar包的缓存，`index-v5`里面是meta信息的缓存。

##### 那这里缓存的文件是如何存储并且被利用的呢？

当执行`npm install`时，会`解析依赖包的版本区间为某个具体的版本号=》下载对应版本依赖的 tar 包到本地离线镜像 =》将依赖从离线镜像解压到本地缓存 =》 将依赖从缓存拷贝到当前目录的 node_modules 目录`

紧接着，当我们每次去安装资源的时候，会根据`package-lock.json`中的相关信息

![image-20220328145736474](/Users/sundong/Library/Application Support/typora-user-images/image-20220328145736474.png)

用`pacote:range-manifest:{resolved}:{intergrity}`生成一个唯一的Key，然后就去index-v5目录里面搜索了一下

![image-20220328140123215](/Users/sundong/Library/Application Support/typora-user-images/image-20220328140123215.png)

通过[SHA-256算法](https://zhuanlan.zhihu.com/p/94619052)得到相应的hash值

![image-20220328142012138](/Users/sundong/Library/Application Support/typora-user-images/image-20220328142012138.png)

![image-20220328141956705](/Users/sundong/Library/Application Support/typora-user-images/image-20220328141956705.png)

然后就可以找到`index-v5`目录下对应的文件进而拿到基本的`meta`信息

![image-20220328142446272](/Users/sundong/Library/Application Support/typora-user-images/image-20220328142446272.png)

通过`meta`信息中的`_shasum`值（前四位用来分路径）就可以从`content-v2`里面获取到相应的`tar`包，然后通过[pacote](https://www.npmjs.com/package/pacote)将二进制文件解压缩进我们项目的`node_modules`目录中，这样就省去了资源下载的网络开销。

![image-20220225162229270](/Users/sundong/Library/Application Support/typora-user-images/image-20220225162229270.png)

上面说的缓存策略是在`npm V5`开始的，对于`v5`版本之前，每个缓存模块是在我们之前提到的`~./npmrc`文件中以模块名的格式进行存储的

`存储格式：{cache}{name}{version}`

#### 在`npm1版本`和`npm2版本`中`node_modules`的内部结构

```javascript
node_modules
└─ foo
   ├─ index.js
   ├─ package.json
   └─ node_modules
      └─ bar
         ├─ index.js
         └─ package.json

```

此时如果`bar`当中又有其他依赖，那么又会继续嵌套下去。就会引发以下问题：

1. 依赖层级太深，会导致文件路径过长，特别是在windows系统下，删除`node_modules`文件会出现删除不掉的情况
2. 大量重复的包被安装，文件体积比较大，安装时间比较长。比如有一个跟`foo`同一层级的依赖`baz`，两者都依赖同一版本的`element-ui`，那么`element-ui`会分别在两者的`node_modules`中重复安装。
2. 模块实例不能共享。比如 React 有一些内部变量，在两个不同包引入的 React 不是同一个模块实例，因此无法共享内部变量，导致一些不可预知的 bug。

#### yarn安装机制

![image-20220225164039230](/Users/sundong/Library/Application Support/typora-user-images/image-20220225164039230.png)

检测包 =》 解析包 =》获取包 =》链接包 =》构建包

##### 检测包

主要目的是检测项目是否存在和`npm`等相关的文件，比如`package-lock.json`。如果存在的话则会提示用户，这些文件可能会产生冲突。同时在这一步骤中，也会检测系统OS、CPU等信息。

##### 解析包

通过项目`package.json`文件定义的`dependencies`、`devDependencies`、`optionalDependencies`的内容，获取到`首层依赖`。

紧接着会采用遍历首层依赖的方式获取包的依赖信息，以及递归查找每个依赖下嵌套依赖的版本信息，并将解析过的包和正在进行解析的包`用Set数据结构进行存储`，这样就避免重复解析`同一版本范围内的包`。

举个例子：

- 对于没有解析过的包A, 首次尝试从 `yarn.lock`中获取版本信息,并且标记为已解析
- 如果在`yarn.lock`中没有找到包A， 则向`Registry`发起请求获取满足版本范围内的已知的最高版本的包信息,获取之后将该包标记为已解析。

因此，通过解析包之后，可以得到包的具体版本信息和包的下载地址

![image-20220225165046891](/Users/sundong/Library/Application Support/typora-user-images/image-20220225165046891.png)

##### 获取包

首先会检查缓存中是否有当前依赖的包，同时将缓存中不存在的包下载的缓存目录中去。

此时如何去判断缓存中有当前的依赖包呢？

![image-20220225165318089](/Users/sundong/Library/Application Support/typora-user-images/image-20220225165318089.png)

##### 链接包

`yarn`会先解析`peerDepdencies`，如果找不到符合要求的`peerDepdencies`的包，会有`warning`提示，然后把缓存中的依赖包拷贝到`node_modules`中

![image-20220225165653733](/Users/sundong/Library/Application Support/typora-user-images/image-20220225165653733.png)

##### 构建包

如果依赖包中存在二进制包需要进行编译，那么会在这一步进行。

#### 在`npm3`版本以及`yarn`中，通过`扁平化依赖`的方式去解决。但会出现的问题是，明明只装了`express`包，为什么`node_modules`多了很多依赖包呢？



![image-20220225152902501](/Users/sundong/Library/Application Support/typora-user-images/image-20220225152902501.png)

相比之前的`嵌套结构`，现在的目录结构类似下面：

```javascript
node_modules
├─ foo
|  ├─ index.js
|  └─ package.json
└─ bar
   ├─ index.js
   └─ package.json

```

所有的依赖都会被拍平到`node_modules`目录下，不再有很深层次的嵌套关系。这样在安装新包时，根据node require的机制，就会在`node_modules`中逐级往上寻找，如果找到相同版本的依赖就不会在安装。这样解决了大量包的重复安装以及层级太深的问题。但同样会存在以下问题：

1. 依赖结构的不确定性
2. 扁平化算法本身的复杂性很高，耗时比较长
3. 项目中仍然可以访问到没有声明过依赖的包

对于依赖结构的不确定性该怎么理解呢，假如现在项目依赖foo和bar两个包，并且里面分别依赖了不同版本的`base64-js`

![image-20220225153526439](/Users/sundong/Library/Application Support/typora-user-images/image-20220225153526439.png)

那么yarn install的时候会出现两种情况

情况1：

![image-20220225153556069](/Users/sundong/Library/Application Support/typora-user-images/image-20220225153556069.png)

情况2：

![image-20220225153616769](/Users/sundong/Library/Application Support/typora-user-images/image-20220225153616769.png)

无论是情况1还是情况2，都是有可能发生的，这取决于foo和bar在`package.json`中的位置，如果foo在前面，那么就会出现情况1，如果bar在前面就会出现情况2。因此慢慢的出现了`package-lock.json`和`yarn.lock`文件，这都是为了保证install时可以产生确定的`node_modules`结构。

#### 参考链接：

[字节的一个小问题 npm 和 yarn不一样吗？](https://juejin.cn/post/7060844948316225572)

[关于现代包管理器的深度思考——为什么现在我更推荐 pnpm 而不是 npm/yarn?](https://juejin.cn/post/6932046455733485575)
