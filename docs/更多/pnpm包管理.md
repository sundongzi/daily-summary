#### 依赖管理

pnpm 是通过 `硬链接（hardlink）` 在全局里面生成` store` 目录来存储` node_modules` 依赖里面的`硬链接 hard link`地址。在引用依赖的时候则是通过 `软链接（symlink）` 去找到对应`虚拟磁盘目录下(.pnpm 目录)`的依赖地址。

1、采用软链接（soft link）+ 硬链接（hard link）

2、node_modules/包名 =》软链node_modues/.pnpm/包名

3、node_modues/.pnpm/包名=》硬链接全局store目录下

##### store目录

主要用于存储依赖的hard links，它一般默认会生成在`${os.homedir}/.pnpm-store`目录下，当然你也可以在`.npmrc`设置这个store目录位置，但一般而言这个目录对于用户来说感知程度是比较小的。但因为这个机制的存在，导致每次安装依赖的时候，如果是相同的依赖即使多个项目都用到这个依赖（版本相同）也只会安装一次，避免了二次安装带来的时间消耗。但如果是npm或yarn，那么同一个依赖在多个项目中使用，每次安装的时候都会被重新安装一次。

store存在的问题，随着依赖的不断安装，该目录会变得越来越大。例如有个包a@1.0.0被一个项目所引用了，但是某次修改导致这个包被更新到了1.0.1，那么1.0.0版本的包就变成了不被引用的包。当然官网也提供了一种方式，你可以通过执行`pnpm store prune`命令去删掉没有被引用的包。

##### node_modules结构

例如在项目中使用 pnpm 安装了一个叫做 `express` 的依赖，那么最后会在 node_modules 中形成这样两个目录结构:

```javascript
node_modules/express/...
node_modules/.pnpm/express@4.17.1/node_modules/xxx
```

其中第一个路径是 nodejs 正常寻找路径会去找的一个目录，这个文件实际上只是个软链接，它会形成一个到第二个目录的一个软链接，这样 node 在找路径的时候，最终会找到 .pnpm 这个目录下的内容。

其中这个 `.pnpm` 是个虚拟磁盘目录，然后 express 这个依赖的一些依赖会被平铺到 `.pnpm/express@4.17.1/node_modules/` 这个目录下面，这样保证了依赖能够 require 到，同时也不会形成很深的依赖层级。

通过硬链 + 软链的方式，假如有一个项目依赖了 `bar@1.0.0` 和 `foo@1.0.0` ，那么最后的 node_modules 结构呈现出来的依赖结构可能会是这样的:

```
node_modules
└── bar // symlink to .pnpm/bar@1.0.0/node_modules/bar
└── foo // symlink to .pnpm/foo@1.0.0/node_modules/foo
└── .pnpm
    ├── bar@1.0.0
    │   └── node_modules
    │       └── bar -> <store>/bar
    │           ├── index.js
    │           └── package.json
    └── foo@1.0.0
        └── node_modules
            └── foo -> <store>/foo
                ├── index.js
                └── package.json
```

`node_modules` 中的 bar 和 foo 两个目录会软连接到 .pnpm 这个目录下的真实依赖中，而这些真实依赖则是通过 hard link 存储到全局的 store 目录中。

#### 解决痛点

1、幽灵依赖

所谓的幽灵依赖指的就是某个依赖包并没有被安装（package.json中并没有，但是用户却能够引用到这个包），引发这一现象的原因一般是因为`node_modules`的结构所导致的。假如你通过`yarn`去安装依赖a，同时依赖a内部又需要依赖b，由于`yarn`会对`node_modules`中的依赖进行扁平化处理（npm v3之后也是这么处理的）,这就导致依赖a和依赖b位于同一层。那么根据nodejs的寻径原理，用户既能require到a也能require到b。带来的问题就是如果某一天依赖a内部不在需要依赖b了，那么引用依赖b的模块部分就会报错。

针对pnpm生成`node_modules`依赖结构，这种现象是显然不会发生的，因为被打平的依赖会被放到 `.pnpm` 这个虚拟磁盘目录下面去，用户通过 require 是根本找不到的。

PS：pnpm 本身其实也提供了将依赖提升并且按照 yarn 那种形式组织的 node_modules 结构的 Option，作者将其命名为 `--shamefully-hoist`

2、依赖重复安装

例如有个 package，下面依赖有 lib_a、lib_b、lib_c、lib_d，其中 a 和 b 依赖 [util_e@1.0.0](mailto:util_e@1.0.0)，而 c 和 d 依赖 [util_e@2.0.0](mailto:util_e@2.0.0)。

早起的npm结构应该是这样的：

```
- package
- package.json
- node_modules
- lib_a
  - node_modules <- util_e@1.0.0
- lib_b
  - node_modules <- util_e@1.0.0
_ lib_c
  - node_modules <- util_e@2.0.0
- lib_d
  - node_modules <- util_e@2.0.0
```

这样就导致了很多依赖被重复安装，于是就有了扁平依赖的操作：

```
- package
- package.json
- node_modules
- util_e@1.0.0
- lib_a
- lib_b
_ lib_c
  - node_modules <- util_e@2.0.0
- lib_d
  - node_modules <- util_e@2.0.0
```

但是这样也只能提升一个依赖，如果两个依赖都提升了会导致冲突，这样同样会导致一些不同版本的依赖被重复安装多次，这里就会导致使用 npm 和 yarn 的性能损失。

如果是 pnpm 的话，这里因为依赖始终都是存在 store 目录下的 hard links ，一份不同的依赖始终都只会被安装一次，因此这个是能够被彻彻底底的消除的。

#### pnpm优势

综上所述，pnpm相比于npm/yarn的主要优势在于：

1、包安装速度极快

![image-20220726102146526](/Users/sundong/Library/Application Support/typora-user-images/image-20220726102146526.png)

2、磁盘空间利用非常高效

[pnpm最先进的包管理](https://zhuanlan.zhihu.com/p/404784010)

