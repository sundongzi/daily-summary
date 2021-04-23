### vuePress搭建项目及其自动部署

![image-20210422165446955](/Users/sundong/Library/Application Support/typora-user-images/image-20210422165446955.png)

#### VuePress

`VuePress `由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 Vue 及其子项目的文档需求。`VuePress`能在`Markdown`里使用Vue语法，并且每个页面都会预渲染生成静态的`HTML`，也就是说加载性能好还有非常好的SEO支持，适合用来写文档和博客。

##### 一、项目搭建

1. 依赖安装

   - 全局安装：如果你只是想单纯的尝试一下`vuePress`的话，可以全局进行安装

   - 现有项目安装：如果想在现有项目中使用`vuePress`的话，则应该将其安装在本地依赖中。

     ```javascript
     全局安装
     yarn global add vuepress # 或者：npm install -g vuepress
     
     现有项目安装
     yarn add -D vuepress # 或者：npm install -D vuepress
     ```

2. 在`package.json`中添加一些脚本

   ```json
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   ```

##### 二、基本配置

1. 基本项目结构

   ![image-20210417100349355](/Users/sundong/Library/Application Support/typora-user-images/image-20210417100349355.png)

2. 必要的配置文件`.vuepress/config.js`，它导出的是一个对象

   ```js
   const themeConfig = require('./config/index')
   module.exports = {
      lang: 'zh-CN',
      title: 'DongZi’s blog',
      base: '/daily-summary/',
      serviceWorker: true,
      themeConfig
   }
   ```

   `VuePress`还有很多扩展的配置，在`docs`目录下加新建`.vuepress/config.js`，在这里可以配置标题、主题、语言、导航栏、侧边栏等等，在这里不展开描述。具体请参考 [vuepress基本配置](https://v0.vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)

3. 项目本地启动

   ```js
   yarn docs:dev # 或者：npm run docs:dev
   ```

   然后就可以打开`localhost:8080`看到相关的文章了，并且是支持热更新，因为`vuepress`就是用`webpack-dev-server`驱动的。

   最后部署的时候用`yarn docs:build`命令，会在`docs/.vuepress`生成dist目录，这个目录后面配置workflow会用到。

#### 部署

说了这么多都是在本地进行的，现在我们要把本地的内容推送到某个服务器上，这样只要有网络，就可以随时随地看自己的网站了。一般来说有两种方案可以选择

1. 自己买一个服务器，比如什么阿里云、腾讯云等，这种方式的好处是速度有保证，可以被搜索引擎收录
2. 使用[Github pages](https://pages.github.com/)。什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。

##### 使用Github Pages搭建网站

1. 个人站点
   - 创建个人站点，新建仓库（**注：**仓库名必须是**用户名.github.io**）
   - 在仓库下新建`index.html`的文件即可（里面随便写点内容）注意：`Github Pages`仅支持静态网页
2. 项目站点
   - 进入项目主页，点击`settings`
   - 找到`Pages`，进行站点基础信息设置
   - 选择主题（可选）
   - 生成网页（可选）

##### 使用Github-actions进行部署

简介：actions顾名思义就是一堆动作，是一个持续集成服务，持续集成包含了拉代码、运行测试、编译代码、登录远程服务器，发布到第三方服务等等的操作，GitHub将这些操作称为actions。

不同项目的很多操作可以是一样的，比如拉取分支代码、缓存依赖等，每个也就是一个action脚本是可以共用的，所以GitHub允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。

1. 仓库地址设置（非必须）

   经过`Github Pages`创建仓库后，如果建立的仓库名称是username.github.io，则最后访问的地址[username.github.io/。](https://username.github.io/。) 如果不是这个名称，则最后访问的地址是[username.github.io/repo/](https://username.github.io/repo/) ,repo就是仓库名字，此时还需要先修改`.vuepress/config.js`，该文件导出一个对象，增加base的配置项，值为“/repo/”。

   以下是我本地的配置

   ```js
   module.exports = {
      lang: 'zh-CN',
      title: 'DongZi’s blog',
      base: '/daily-summary/',  // 注意此处的值应当总是以斜杠开始，并以斜杠结束。
      serviceWorker: true,
      themeConfig
   }
   ```

2. 添加.github相关配置文件

   在项目的根目录下新建`.github/workflows`目录，`workflows`就是`GitHub Actions` 的配置文件。随便新建.yml文件就是一个flow，`github`会自动运行`workflows`目录下所有的yml文件。介绍下workflow最重要的几个配置和概念。

   - name

     name字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名

   - on

     on字段指定触发 workflow 的条件，通常是某些事件。我在项目中用的是push，指的就是当git push事件发生时触发该workflow

   - jobs

     jobs是workflow最重要的部分，表示workflow要执行的任务，可以是一个或者多个

   项目中我希望的流程是，本地改完代码以后，上传到github后能自动打包部署到`gh-pages`分支。`gh-pages` 分支，是 GitHub Pages 服务的固定分支，可以通过 HTTP 的方式访问到这个分支的静态文件资源

   配置触发条件on：

   ```js
   on: # 触发条件
     # 每当 push 到 master 分支时触发部署
     push:
       branches: [master]
     # 是否手动触发部署
     workflow_dispatch:
   ```

   接下来就是jobs：

   ```js
   name: docs # workflow名称
   
   on: # 触发条件
     # 每当 push 到 master 分支时触发部署
     push:
       branches: [master]
     # 是否手动触发部署
     workflow_dispatch:
   
   jobs:
     docs:
       runs-on: ubuntu-latest # 指定运行所需要的虚拟机环境（必填）
   
       steps:
         - uses: actions/checkout@v2
           with:
             # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
             fetch-depth: 0
   
         - name: Setup Node.js
           uses: actions/setup-node@v1
           with:
             # 选择要使用的 node 版本
             node-version: "14"
   
         # 缓存 node_modules
         - name: Cache dependencies
           uses: actions/cache@v2
           id: yarn-cache
           with:
             path: |
               **/node_modules
             key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
             restore-keys: |
               ${{ runner.os }}-yarn-
         # 如果缓存没有命中，安装依赖
         - name: Install dependencies
           if: steps.yarn-cache.outputs.cache-hit != 'true'
           run: yarn --frozen-lockfile  // 锁定版本
   
         # 运行构建脚本
         - name: Build VuePress site
           run: yarn docs:build
   
         # 查看 workflow 的文档来获取更多信息
         # @see https://github.com/crazy-max/ghaction-github-pages
         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@4.1.0
           with:
             # 部署到 gh-pages 分支
             BRANCH: gh-pages
             # 部署目录为 VuePress 的默认输出目录
             FOLDER: docs/.vuepress/dist
             ACCESS_TOKEN: ${{ secrets.ACTION_SECRETS }} // 秘钥
   ```

   首先job里配置运行这个脚本需要的虚拟机环境，这个虚拟机环境由github提供，可用的包括windows、linux、macos等环境。在此示例中其实不论哪个系统都是可以的，因为我们需要的是node环境，而node本身就是跨平台的。

   接下里设置获取源码、需要的node版本、增加缓存依赖，这里使用官方提供的actions/setup-node@v1、setup-node@v1、cache@v2。这里的@表示版本，使用别人的action时最好都加上版本，以防后面更新的action不兼容当前的脚本。Github官方的actions都放在[github.com/actions](https://github.com/actions)仓库中。这些前置条件配置好，接下来就是熟悉的yarn install、yarn docs:build，安装依赖使用--frozen-lockfile来锁定版本。最后一步就是将打包的目录更新到`gh-pages`分支。因为要更新github代码，所以还需要配置`github-token`。

   ##### 创建`Github Token`
   
   创建一个有`repo`和`workflow`权限的[Github Token](https://github.com/settings/tokens/new)。创建成功后把生成的`token`只会显示一次，把它保存起来。
   
   ![image-20210422144051946](/Users/sundong/Library/Application Support/typora-user-images/image-20210422144051946.png)
   
   ##### 添加secret
   
   在仓库的setting下找到secert，新建一个secert并将上面新创建的`Token`添加到value里面，然后名字可以随便取，这里取为ACTION_SECERTS。在workflow的环境变量里secerts指的就是这里secert
   
   ![image-20210422144521848](/Users/sundong/Library/Application Support/typora-user-images/image-20210422144521848.png)

最后指定部署的分支名称，和部署到分支的默认输出目录就行。

尝试着push推送代码，可以看到仓库的Actions开始自动运行了，并且能看到运行的日志。如果运行错误，可以查看具体错误原因。

![image-20210417103636679](/Users/sundong/Library/Application Support/typora-user-images/image-20210417103636679.png)

#### 参考链接：

[Github Pages搭建网站](https://zhuanlan.zhihu.com/p/76505295)

[Github Action自动化部署](https://juejin.cn/post/6937532951223599141)

#### 感谢聆听~