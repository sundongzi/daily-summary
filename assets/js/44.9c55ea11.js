(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{400:function(s,t,a){"use strict";a.r(t);var e=a(45),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"vuepress搭建项目及其自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建项目及其自动部署"}},[s._v("#")]),s._v(" vuePress搭建项目及其自动部署")]),s._v(" "),a("p",[s._v("![image-20210422165446955](/Users/sundong/Library/Application Support/typora-user-images/image-20210422165446955.png)")]),s._v(" "),a("h4",{attrs:{id:"vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[s._v("#")]),s._v(" VuePress")]),s._v(" "),a("p",[a("code",[s._v("VuePress")]),s._v("由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 Vue 及其子项目的文档需求。"),a("code",[s._v("VuePress")]),s._v("能在"),a("code",[s._v("Markdown")]),s._v("里使用Vue语法，并且每个页面都会预渲染生成静态的"),a("code",[s._v("HTML")]),s._v("，也就是说加载性能好还有非常好的SEO支持，适合用来写文档和博客。")]),s._v(" "),a("h5",{attrs:{id:"一、项目搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、项目搭建"}},[s._v("#")]),s._v(" 一、项目搭建")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("依赖安装")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("全局安装：如果你只是想单纯的尝试一下"),a("code",[s._v("vuePress")]),s._v("的话，可以全局进行安装")])]),s._v(" "),a("li",[a("p",[s._v("现有项目安装：如果想在现有项目中使用"),a("code",[s._v("vuePress")]),s._v("的话，则应该将其安装在本地依赖中。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("全局安装\nyarn global add vuepress # 或者：npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g vuepress\n\n现有项目安装\nyarn add "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" vuepress # 或者：npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" vuepress\n")])])])])])]),s._v(" "),a("li",[a("p",[s._v("在"),a("code",[s._v("package.json")]),s._v("中添加一些脚本")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),a("h5",{attrs:{id:"二、基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、基本配置"}},[s._v("#")]),s._v(" 二、基本配置")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("基本项目结构")]),s._v(" "),a("p",[s._v("![image-20210417100349355](/Users/sundong/Library/Application Support/typora-user-images/image-20210417100349355.png)")])]),s._v(" "),a("li",[a("p",[s._v("必要的配置文件"),a("code",[s._v(".vuepress/config.js")]),s._v("，它导出的是一个对象")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" themeConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./config/index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zh-CN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DongZi’s blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   base"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/daily-summary/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   serviceWorker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   themeConfig\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("code",[s._v("VuePress")]),s._v("还有很多扩展的配置，在"),a("code",[s._v("docs")]),s._v("目录下加新建"),a("code",[s._v(".vuepress/config.js")]),s._v("，在这里可以配置标题、主题、语言、导航栏、侧边栏等等，在这里不展开描述。具体请参考 "),a("a",{attrs:{href:"https://v0.vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress基本配置"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("项目本地启动")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("yarn docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("dev # 或者：npm run docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("dev\n")])])]),a("p",[s._v("然后就可以打开"),a("code",[s._v("localhost:8080")]),s._v("看到相关的文章了，并且是支持热更新，因为"),a("code",[s._v("vuepress")]),s._v("就是用"),a("code",[s._v("webpack-dev-server")]),s._v("驱动的。")]),s._v(" "),a("p",[s._v("最后部署的时候用"),a("code",[s._v("yarn docs:build")]),s._v("命令，会在"),a("code",[s._v("docs/.vuepress")]),s._v("生成dist目录，这个目录后面配置workflow会用到。")])])]),s._v(" "),a("h4",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("p",[s._v("说了这么多都是在本地进行的，现在我们要把本地的内容推送到某个服务器上，这样只要有网络，就可以随时随地看自己的网站了。一般来说有两种方案可以选择")]),s._v(" "),a("ol",[a("li",[s._v("自己买一个服务器，比如什么阿里云、腾讯云等，这种方式的好处是速度有保证，可以被搜索引擎收录")]),s._v(" "),a("li",[s._v("使用"),a("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github pages"),a("OutboundLink")],1),s._v("。什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。")])]),s._v(" "),a("h5",{attrs:{id:"使用github-pages搭建网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用github-pages搭建网站"}},[s._v("#")]),s._v(" 使用Github Pages搭建网站")]),s._v(" "),a("ol",[a("li",[s._v("个人站点\n"),a("ul",[a("li",[s._v("创建个人站点，新建仓库（"),a("strong",[s._v("注："),a("strong",[s._v("仓库名必须是")]),s._v("用户名.github.io")]),s._v("）")]),s._v(" "),a("li",[s._v("在仓库下新建"),a("code",[s._v("index.html")]),s._v("的文件即可（里面随便写点内容）注意："),a("code",[s._v("Github Pages")]),s._v("仅支持静态网页")])])]),s._v(" "),a("li",[s._v("项目站点\n"),a("ul",[a("li",[s._v("进入项目主页，点击"),a("code",[s._v("settings")])]),s._v(" "),a("li",[s._v("找到"),a("code",[s._v("Pages")]),s._v("，进行站点基础信息设置")]),s._v(" "),a("li",[s._v("选择主题（可选）")]),s._v(" "),a("li",[s._v("生成网页（可选）")])])])]),s._v(" "),a("h5",{attrs:{id:"使用github-actions进行部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用github-actions进行部署"}},[s._v("#")]),s._v(" 使用Github-actions进行部署")]),s._v(" "),a("p",[s._v("简介：actions顾名思义就是一堆动作，是一个持续集成服务，持续集成包含了拉代码、运行测试、编译代码、登录远程服务器，发布到第三方服务等等的操作，GitHub将这些操作称为actions。")]),s._v(" "),a("p",[s._v("不同项目的很多操作可以是一样的，比如拉取分支代码、缓存依赖等，每个也就是一个action脚本是可以共用的，所以GitHub允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("仓库地址设置（非必须）")]),s._v(" "),a("p",[s._v("经过"),a("code",[s._v("Github Pages")]),s._v("创建仓库后，如果建立的仓库名称是username.github.io，则最后访问的地址"),a("a",{attrs:{href:"https://username.github.io/%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[s._v("username.github.io/。"),a("OutboundLink")],1),s._v(" 如果不是这个名称，则最后访问的地址是"),a("a",{attrs:{href:"https://username.github.io/repo/",target:"_blank",rel:"noopener noreferrer"}},[s._v("username.github.io/repo/"),a("OutboundLink")],1),s._v(" ,repo就是仓库名字，此时还需要先修改"),a("code",[s._v(".vuepress/config.js")]),s._v("，该文件导出一个对象，增加base的配置项，值为“/repo/”。")]),s._v(" "),a("p",[s._v("以下是我本地的配置")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zh-CN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DongZi’s blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   base"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/daily-summary/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意此处的值应当总是以斜杠开始，并以斜杠结束。")]),s._v("\n   serviceWorker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   themeConfig\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("添加.github相关配置文件")]),s._v(" "),a("p",[s._v("在项目的根目录下新建"),a("code",[s._v(".github/workflows")]),s._v("目录，"),a("code",[s._v("workflows")]),s._v("就是"),a("code",[s._v("GitHub Actions")]),s._v(" 的配置文件。随便新建.yml文件就是一个flow，"),a("code",[s._v("github")]),s._v("会自动运行"),a("code",[s._v("workflows")]),s._v("目录下所有的yml文件。介绍下workflow最重要的几个配置和概念。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("name")]),s._v(" "),a("p",[s._v("name字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名")])]),s._v(" "),a("li",[a("p",[s._v("on")]),s._v(" "),a("p",[s._v("on字段指定触发 workflow 的条件，通常是某些事件。我在项目中用的是push，指的就是当git push事件发生时触发该workflow")])]),s._v(" "),a("li",[a("p",[s._v("jobs")]),s._v(" "),a("p",[s._v("jobs是workflow最重要的部分，表示workflow要执行的任务，可以是一个或者多个")])])]),s._v(" "),a("p",[s._v("项目中我希望的流程是，本地改完代码以后，上传到github后能自动打包部署到"),a("code",[s._v("gh-pages")]),s._v("分支。"),a("code",[s._v("gh-pages")]),s._v(" 分支，是 GitHub Pages 服务的固定分支，可以通过 HTTP 的方式访问到这个分支的静态文件资源")]),s._v(" "),a("p",[s._v("配置触发条件on：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" # 触发条件\n  # 每当 push 到 master 分支时触发部署\n  push"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    branches"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  # 是否手动触发部署\n  workflow_dispatch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n")])])]),a("p",[s._v("接下来就是jobs：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" docs # workflow名称\n\non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" # 触发条件\n  # 每当 push 到 master 分支时触发部署\n  push"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    branches"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  # 是否手动触发部署\n  workflow_dispatch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n\njobs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    runs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("latest # 指定运行所需要的虚拟机环境（必填）\n\n    steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" uses"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" actions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("checkout@v2\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录\n          fetch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Setup Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n        uses"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" actions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("setup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node@v1\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n          # 选择要使用的 node 版本\n          node"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"14"')]),s._v("\n\n      # 缓存 node_modules\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Cache dependencies\n        uses"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" actions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cache@v2\n        id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" yarn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n          path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules\n          key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" runner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("yarn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hashFiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'**/yarn.lock'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          restore"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("keys"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n            $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" runner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("yarn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n      # 如果缓存没有命中，安装依赖\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Install dependencies\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yarn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("outputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("hit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n        run"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" yarn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("frozen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lockfile  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 锁定版本")]),s._v("\n\n      # 运行构建脚本\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Build VuePress site\n        run"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" yarn docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("build\n\n      # 查看 workflow 的文档来获取更多信息\n      # @see https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("crazy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("max"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ghaction"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pages\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Deploy to GitHub Pages\n        uses"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" JamesIves"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pages"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("deploy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("action@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n          # 部署到 gh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pages 分支\n          "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" gh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pages\n          # 部署目录为 VuePress 的默认输出目录\n          "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dist\n          "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ACTION_SECRETS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 秘钥")]),s._v("\n")])])]),a("p",[s._v("首先job里配置运行这个脚本需要的虚拟机环境，这个虚拟机环境由github提供，可用的包括windows、linux、macos等环境。在此示例中其实不论哪个系统都是可以的，因为我们需要的是node环境，而node本身就是跨平台的。")]),s._v(" "),a("p",[s._v("接下里设置获取源码、需要的node版本、增加缓存依赖，这里使用官方提供的actions/setup-node@v1、setup-node@v1、cache@v2。这里的@表示版本，使用别人的action时最好都加上版本，以防后面更新的action不兼容当前的脚本。Github官方的actions都放在"),a("a",{attrs:{href:"https://github.com/actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("github.com/actions"),a("OutboundLink")],1),s._v("仓库中。这些前置条件配置好，接下来就是熟悉的yarn install、yarn docs:build，安装依赖使用--frozen-lockfile来锁定版本。最后一步就是将打包的目录更新到"),a("code",[s._v("gh-pages")]),s._v("分支。因为要更新github代码，所以还需要配置"),a("code",[s._v("github-token")]),s._v("。")]),s._v(" "),a("h5",{attrs:{id:"创建github-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建github-token"}},[s._v("#")]),s._v(" 创建"),a("code",[s._v("Github Token")])]),s._v(" "),a("p",[s._v("创建一个有"),a("code",[s._v("repo")]),s._v("和"),a("code",[s._v("workflow")]),s._v("权限的"),a("a",{attrs:{href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github Token"),a("OutboundLink")],1),s._v("。创建成功后把生成的"),a("code",[s._v("token")]),s._v("只会显示一次，把它保存起来。")]),s._v(" "),a("p",[s._v("![image-20210422144051946](/Users/sundong/Library/Application Support/typora-user-images/image-20210422144051946.png)")]),s._v(" "),a("h5",{attrs:{id:"添加secret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加secret"}},[s._v("#")]),s._v(" 添加secret")]),s._v(" "),a("p",[s._v("在仓库的setting下找到secert，新建一个secert并将上面新创建的"),a("code",[s._v("Token")]),s._v("添加到value里面，然后名字可以随便取，这里取为ACTION_SECERTS。在workflow的环境变量里secerts指的就是这里secert")]),s._v(" "),a("p",[s._v("![image-20210422144521848](/Users/sundong/Library/Application Support/typora-user-images/image-20210422144521848.png)")])])]),s._v(" "),a("p",[s._v("最后指定部署的分支名称，和部署到分支的默认输出目录就行。")]),s._v(" "),a("p",[s._v("尝试着push推送代码，可以看到仓库的Actions开始自动运行了，并且能看到运行的日志。如果运行错误，可以查看具体错误原因。")]),s._v(" "),a("p",[s._v("![image-20210417103636679](/Users/sundong/Library/Application Support/typora-user-images/image-20210417103636679.png)")]),s._v(" "),a("h4",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/76505295",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github Pages搭建网站"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6937532951223599141",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github Action自动化部署"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"感谢聆听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#感谢聆听"}},[s._v("#")]),s._v(" 感谢聆听~")])])}),[],!1,null,null,null);t.default=r.exports}}]);