#### webpack的作用

- 模块打包

  可以将不同模块的文件打包到一起，并且能确保彼此之间正确的引用关系。利用打包我们就可以在开发的时候根据我们自己的业务自由划分文件模块，保证项目结构的清晰和可读性。

- 编译兼容（loader）

  通过webpack的`loader`机制，可以帮助我们对代码做`polyfill`，还可以编译转换`.less`、`.vue`等文件格式

- 能力扩展（plugin）

  通过webpack插件机制，可以进一步实现`代码压缩`、`按需加载`等一系列功能。

#### webpack的打包原理

webpack的运行是个串行的过程，从启动到结束依次会执行一下流程：

- 初始化参数：从配置文件以及shell语句中读取并合并参数，得出最终参数。
- 开始编译：用得到的初始化参数初始化`compile`对象，加载所有配置的插件，执行对象的`run`方法
- 确定入口：根据配置文件中的`entry`找到入口文件
- 编译模块：从入口文件出发，调用所有配置的loader对模块进行编译，然后找到该模块依赖的模块，递归遍历分析，形成依赖关系树（AST），webpack通过`acorn`库生成`AST语法树` 。
- 完成模板编译：使用`loader`编译完所有模块以后，得到每个模块被编译后的内容以及确定他们之间的依赖关系。
- 输出资源：根据入口文件和模块之间的依赖关系，组成一个个包含多个模块的`chunk`文件，把每个chunk文件转换成单独的`JS文件`加入到输出列表。
- 整个过程中webpack会通过发布订阅模式，向外抛出一些`hooks`，而webpack可以通过`plugin`监听这些关键的事件节点，执行插件任务进而达到干预输出结果的目的。
- 输出完成：在确定好输出内容后，根据配置确定输出的文件名以及路径，把文件内容写入到文件系统中。

#### 异步加载（动态加载）

入口文件：index.js

```javascript
let importBtn = document.getElementById('import');
importBtn.addEventListener('click', () => {
  import(/* webpackChunkName: 'title' */'./title').then(result => {
    console.log(result);
  })
})
```

 被入口文件导入的文件：title.js

```javascript
exports.name = 'title_name';
exports.age = 'title_age';
```

打包后的文件main.js（自执行函数部分）

```javascript
{
  './src/index.js': function (module, exports, __webpack_require__) {
    let importBtn = document.getElementById('import');
    importBtn.addEventListener('click', () => {
      // 下面代码就是 import('./title')
      __webpack_require__
        .e('title')
        .then(
          __webpack_require__.t.bind(null, /*! ./title */ './src/title.js', 7)
        )
        .then((result) => {
          // result就是这个title的导出对象
          console.log(result);
        });
    });
  },
}
```

打包后的文件（chunk）title.js

```javascript
(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['title'],
  {
    './src/title.js': function (module, exports) {
      exports.name = 'title_name';
      exports.age = 'title_age';
    },
  },
]);

```

实际上dynamic import会被编译为*`_webpack_require.e`，这个函数*显然是为每个IIFE注入的*`_webpack_require`上面* 的一个静态属性。一旦遇到一个dymanic import，它所调用的其实就是这个函数。

这个函数只做了几件事情，创建promise，动态创建`script`加载对应的chunk（很显然chunk是在这里被动态加载的），chunk执行成功后触发resolve以执行后续流程。其中你可能会疑惑的一点是，chunk load完毕后是如何触发当前pending的resolve的，实际上webpack会创建一个全局的`webpackJsonp`用以辅助执行每个异步chunk的加载，你对应的异步chunk的也会被打包成符合webpackJsonp所执行的IIFE。

所以事实非常清楚，`webpack`根本没有把按需加载的chunk打包进bundle，也没有在运行时同步阻塞加载（像cjs那样），实际上它就是利用动态script的onload来在浏览器环境下运行时加载这么简单，没有任何黑科技。

##### 参考链接

[当面试官问Webpack的时候他想知道什么](https://juejin.cn/post/6943468761575849992)

[吐血整理」再来一打Webpack面试题](https://juejin.cn/post/6844904094281236487#heading-2)

[Webpack是怎么实现按需异步加载的？](https://www.zhihu.com/question/58460116#:~:text=%E5%85%B7%E4%BD%93%E6%9D%A5%E8%AF%B4%EF%BC%8C%E5%BD%93%20Webpack%20%E6%89%93%E5%8C%85%E4%BB%A3%E7%A0%81%E6%97%B6%EF%BC%8C%E9%81%87%E5%88%B0%E5%8A%A8%E6%80%81%E5%AF%BC%E5%85%A5%E8%AF%AD%E5%8F%A5%E6%97%B6%E4%B8%8D%E4%BC%9A%E5%B0%86%E5%85%B6%E6%89%93%E5%8C%85%E8%BF%9B%E5%85%A5%E4%B8%BB%E6%96%87%E4%BB%B6%EF%BC%8C%E8%80%8C%E6%98%AF%E5%B0%86%E5%85%B6%E5%8D%95%E7%8B%AC%E6%89%93%E5%8C%85%E4%B8%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84%E6%96%87%E4%BB%B6%E3%80%82,%E5%9C%A8%E8%BF%90%E8%A1%8C%E6%97%B6%EF%BC%8C%E5%BD%93%E4%BB%A3%E7%A0%81%E9%9C%80%E8%A6%81%E5%8A%A0%E8%BD%BD%E8%AF%A5%E7%BB%84%E4%BB%B6%E6%97%B6%EF%BC%8C%E4%BC%9A%E9%80%9A%E8%BF%87%E7%BD%91%E7%BB%9C%E8%AF%B7%E6%B1%82%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E8%AF%A5%E6%96%87%E4%BB%B6%E3%80%82%20%E8%BF%99%E6%A0%B7%E5%81%9A%E7%9A%84%E5%A5%BD%E5%A4%84%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%87%8F%E5%B0%8F%E4%B8%BB%E6%96%87%E4%BB%B6%E7%9A%84%E4%BD%93%E7%A7%AF%EF%BC%8C%E4%BB%8E%E8%80%8C%E5%8A%A0%E5%BF%AB%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%8A%A0%E8%BD%BD%E9%80%9F%E5%BA%A6%EF%BC%8C%E5%B9%B6%E4%B8%94%E4%B9%9F%E5%8F%AF%E4%BB%A5%E6%8F%90%E9%AB%98%E4%BB%A3%E7%A0%81%E7%9A%84%E7%81%B5%E6%B4%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7%E3%80%82%20%E5%90%8C%E6%97%B6%EF%BC%8CWebpack%20%E8%BF%98%E5%8F%AF%E4%BB%A5%E5%AF%B9%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%96%87%E4%BB%B6%E8%BF%9B%E8%A1%8C%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2%E5%92%8C%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD%EF%BC%8C%E8%BF%9B%E4%B8%80%E6%AD%A5%E4%BC%98%E5%8C%96%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%80%A7%E8%83%BD%E3%80%82)