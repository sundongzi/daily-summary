### 参考链接：https://juejin.im/post/5adea0106fb9a07a9d6ff6de

#### webpack的[打包原理](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308)

1. 识别入口文件
2. 通过逐层识别模块依赖(Commonjs、amd或者es6的import,webpack都会对其进行分析，来获取代码的依赖)
3. webpack做的就是分析代码、转换代码、编译代码、输出代码
4. 最终形成打包后的代码

#### 基础：

首先在项目下创建一个webpack.config.js文件来进行配置webpack

```javascript
module.exports = {
  entry:'',    // 入口文件
  output:'',   // 出口文件
  module:'',   // 处理对应模块
  plugins:[],  // 对应的插件
  devServer:{},// 开发服务器配置
  mode:"developelement"  // 模式配置
}
```

```javascript
// webpack.config.js文件
const path = require('path');
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',   // 打包后的文件名称
    path:path.resolve('dist') // 打包后的目录，必须是绝对路径
  }
}
```

#### 多文件打包

```javascript
// 第一种方式，即使是没有关系的也都一起打包进去，入口文件可以写一个数组，实现多文件打包
module.exports = {
  entry:['./src/login.js','./src/index.js'],
  output:{
    filename:'bundle.js',
    path:path.resolve('dist')
  }
}

// 第二种方式，就是把每个文件都单独打成一个包
module.exports = {
    entry:{
      login:'./src/login.js',
      index:'./src/index.js'
    },
  output:{
      filename:'[name].js',   // 打包完之后会生成login.js和index.js两个js文件
    path:path.resolve['dist']
  }
}
```

