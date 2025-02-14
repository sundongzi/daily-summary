#### 版本说明

```javascript
vue版本：2.6.10
babel版本：7.4.0+
```

#### 具体方案

- ##### 引入相应Babel polyfill

  ```javascript
  在入口main.js开头
  import 'core-js/stable'
  import 'regenerator-runtime/runtime'
  ```

- ##### 修改`babel.config.js`相关配置

  ```javascript
  module.exports = {
    presets: [
      [
        '@vue/cli-plugin-babel/preset',
        { useBuiltIns: 'entry' }  // 增加此配置!!!
      ]
    ],
    plugins: [
      'add-module-exports'
    ]
  }
  
  ```

- ##### 针对Proxy对象进行polyfill，在`index.html`中引入`es6-proxy-polyfill.js`

  ![image-20220223155752265](/Users/sundong/Library/Application Support/typora-user-images/image-20220223155752265.png)

  ```html
  <script src = "https://cdn.jsdelivr.net/npm/proxy-polyfill@0.3.0/proxy.min.js"></script>
  ```

  ps：建议下载到本地，放到`public`文件夹下，然后在`index.html`中进行引入。

- ##### 针对第三方库语法报错问题，需要修改`vue.config.js`

  ```javascript
  // 把第三方相关库添加到transpileDependencies中
  transpileDependencies: [
    [/node_modules[/\\\\](element-ui|fusion-components|)[/\\\\]/]
  ]
  ```

- ##### css变量兼容，通过[ie11CustomProperties](https://github.com/nuxodin/ie11CustomProperties)去适配

  ```javascript
  <script>window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\/script>');</script>
  ```

  ![image-20220216172440479](/Users/sundong/Library/Application Support/typora-user-images/image-20220216172440479.png)

  ps：针对`ie11CustomProperties.min.js`（可以放到`public`文件夹下）也建议下载到本地，然后在`index.html`中进行引入

#### 兼容过程中出现的问题

##### 属性方面：

1、不兼容：`caret-color`  [参考链接](https://blog.csdn.net/u014490083/article/details/82469126)

2、`unset`设置无效，使用`none`代替，例如：`background-color: unset => background: none`

3、`::before`与`::after`设置的属性会作用于元素本身，插件导致的问题  参考链接：https://github.com/nuxodin/ie11CustomProperties/issues/24

4、建议使用CSS`var`变量时，把第二个参数可选值写上，防止页面闪烁

5、`border: none => border: 0`

6、过滤器组件样式未生效？（目前在页面中重新覆盖）

![image-20220216153712977](/Users/sundong/Library/Application Support/typora-user-images/image-20220216153712977.png)

7、`idss-widget`改变herader、main、footer样式时无法在传入的对象中使用变量，引入`ie11CustomProperties插件`不支持

![image-20220222181155952](/Users/sundong/Library/Application Support/typora-user-images/image-20220222181155952.png)

8、如果要让自定义的变量(特别是变量和非变量混合使用的时候)覆盖原本的属性值，可以在变量后面加上`!important`

![image-20220216162238676](/Users/sundong/Library/Application Support/typora-user-images/image-20220216162238676.png)

9、针对变量值根据不同的类名进行切换需要通过`:not`选择器，才能生效（css插件的Bug）

![image-20220222102746177](/Users/sundong/Library/Application Support/typora-user-images/image-20220222102746177.png)

##### 功能方面：

1、下载方法需要兼容

![image-20220216153017432](/Users/sundong/Library/Application Support/typora-user-images/image-20220216153017432.png)

2、使用插槽尽量加上name

![image-20220216153822060](/Users/sundong/Library/Application Support/typora-user-images/image-20220216153822060.png)

![image-20220216165345258](/Users/sundong/Library/Application Support/typora-user-images/image-20220216165345258.png)