##### web分包规则

一、entry入口文件

```javascript
module.exports = {
  entry: {
    main: 'src/index',
    home: 'src/home'
  }
}
// 以上会生成两个chunk文件
```

![image-20220715150231250](/Users/sundong/Library/Application Support/typora-user-images/image-20220715150231250.png)

假设`index.js`中同步引入了`a.js`、`b.js`、`c.js`、`d.js`

![image-20220715150755896](/Users/sundong/Library/Application Support/typora-user-images/image-20220715150755896.png)

二、模块动态引入

针对`webpack 4`之后，只需要使用异步语句`require('./xx.js')`或`import('./xx.js')`方式引入模块，就可以实现模板的动态加载，这种能力本职也是基于Chunk实现。

Index.js同步引入a.js和b.js，异步引入c.js和d.js

![image-20220715152730911](/Users/sundong/Library/Application Support/typora-user-images/image-20220715152730911.png)

c.js和d.js会单独生成chunk

三、`entry.runtime`单独组织生成一个chunk

`webpack 5`之后支持基于`runtime`的分包规则。

```javascript
module.exports = {
  entry: {
    index: {
      import: './src/index.js', runtime: 'test-runtime'
    }
  }
}
```

以上会生成`test-runtime`的chunk文件，如果每个entry都设定相同的`runtime`值，那就会集中生成到一个chunk文件中

##### ps：如果觉得拆分后的chunk文件还是比较大，可以使用`runtimeChunk: "single"`配置，可以把`webpack`的运行文件单独抽离成一个chunk。

##### webpack默认优化（通过SplitChunksPlugin配置实现）

```javascript
module.exports = {
  //...
  optimization: {
    splitChunks: {
      //在cacheGroups外层的属性设定适用于所有缓存组，不过每个缓存组内部可以重设这些属性
      chunks: "async", //将什么类型的代码块用于分割，三选一： "initial"：入口代码块 | "all"：全部 | "async"：按需加载的代码块
      minSize: 30000, //大小超过30kb的模块才会被提取
      maxSize: 0, //只是提示，可以被违反，会尽量将chunk分的比maxSize小，当设为0代表能分则分，分不了不会强制
      minChunks: 1, //某个模块至少被多少代码块引用，才会被提取成新的chunk
      maxAsyncRequests: 5, //分割后，按需加载的代码块最多允许的并行请求数，在webpack5里默认值变为6
      maxInitialRequests: 3, //分割后，入口代码块最多允许的并行请求数，在webpack5里默认值变为4
      automaticNameDelimiter: "~", //代码块命名分割符
      name: true, //每个缓存组打包得到的代码块的名称
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, //匹配node_modules中的模块
          priority: -10, //优先级，当模块同时命中多个缓存组的规则时，分配到优先级高的缓存组
        },
        default: {
          minChunks: 2, //覆盖外层的全局属性
          priority: -20,
          reuseExistingChunk: true, //是否复用已经从原代码块中分割出来的模块
        },
      },
    },
  },
};
```

`SplitChunksPlugin`引入缓存组（cacheGroups）对模块进行分组，每个缓存组根据规则将匹配到的模块分配到代码块（chunk）中，<u>每个缓存组的打包结果都是一个或者多个chunk</u>

```javascript
// index.js
const lodash = require("lodash");

// home.js
const $ = require("jquery");

// vue.config.js
module.exports = {
  ...
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          // 需要注意一下如果没有设置name属性，则有可能打包出来多个chunk
          vendors: {    // 属性名即是缓存的名称，改成common看看
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            priority: 2  // 优先级
          }
        }
      }
    }
  }
}
```

![image-20220715160031129](/Users/sundong/Library/Application Support/typora-user-images/image-20220715160031129.png)

![image-20220715160051685](/Users/sundong/Library/Application Support/typora-user-images/image-20220715160051685.png)

```javascript
// index.js
const lodash = require("lodash");

// home.js
const $ = require("jquery");

// vue.config.js
module.exports = {
  ...
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          // 此处设置name属性，会把符合
          vendors: {    // 属性名即是缓存的名称，改成common看看
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            name: 'common',
            priority: 2  // 优先级
          }
        }
      }
    }
  }
}
```

![image-20220715160459011](/Users/sundong/Library/Application Support/typora-user-images/image-20220715160459011.png)



`cacheGroups`中`name`属性的说明：

![image-20220715160516932](/Users/sundong/Library/Application Support/typora-user-images/image-20220715160516932.png)

![image-20220715161035051](/Users/sundong/Library/Application Support/typora-user-images/image-20220715161035051.png)



```
webpack.DllPlugin  // 生成资源清单（json文件）
DllReferencePlugin  // 索引和链接的作用
__webpack_require__
add-asset-html-webpack-plugin  // 自动导入打包后的html文件中
```





##### 参考链接：

[一步一步的了解webpack4的splitChunk插件](https://juejin.cn/post/6844903614759043079#comment)

[在淘宝优化了一个大型项目，分享一些干货（Webpack，SplitChunk代码实例，图文结合）](https://juejin.cn/post/6844904183917871117#heading-6)

[Webpack Chunk 分包规则详解](https://zhuanlan.zhihu.com/p/371999555)