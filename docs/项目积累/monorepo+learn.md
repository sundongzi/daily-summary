#### monorepo

##### 什么是monorepo？

monorepo是一种将多个项目代码存储在一个仓库里面的软件开发策略，指在一个项目仓库中管理多个模块/包，不同于常见的每个模块建一个repo

项目的目录结构大致如下：

![image-20210426184829798](/Users/sundong/Library/Application Support/typora-user-images/image-20210426184829798.png)

##### 存在的问题

虽然拆分子npm包管理项目简单了很多，但是当仓库内容有关联时，调试变的困难。比如A依赖于B，通常我们需要将B link到A的node_module里面，一旦仓库很多的话，手动的管理这些link操作负担很大，因此需要自动化的link操作，按照拓扑排序将各个依赖进行link。**所以理想的开发环境应该是只关心业务代码，可以直接跨业务复用而不关心复用方式，调试时所有代码都在源码中**

目前最常见的`monorepo`解决方案是lerna和yarn的workspaces特性。用yarn处理依赖问题，lerna处理发布问题。

#### learn

#### yarn workspace

#### 提交规范

```node
yarn add commitizen cz-lerna-changelog -D -W
```

```javascript
// package.json
{
  ...
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-lerna-changelog"
    }
  }
  ...
}
```

##### eslint && lint-staged

```javascript
yarn add -D -W standard lint-staged
```

eslint：是完整的一套 JavaScript 代码规范，自带 linter & 代码自动修正。自动格式化代码并修正，提前发现风格以及程序问题, 同时也支持javascript的代码规范校验

lint-staged: 是 Git 里的概念，表示暂存区，lint-staged 表示只检查并矫正暂存区中的文件。一来提高校验效率，二来可以为老的项目带去巨大的方便。

```javascript
// package.json
{
  ...,
  "gitHooks": {
    "commit-msg": "npm run verify-commit-message",
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,vue}": [
      "vue-cli-service lint",
      "git add"
    ]
  },
  ...
}
```

#### lerna构建和发布

#### 清理环境

##### 在依赖混乱或者工程混乱的情况下，清理依赖

- 普通项目：直接删除node_modules以及编译后的产物

- monorepo模式：不仅需要删除根目录的node_modules及其编译后的产物还需要删除各个package里面的node_modules及其编译产物

  ```javascript
  // 解决方案：使用lerna clean来删除所有的node_modules，使用yarn workspaces run clean来执行所有的package的清理工作
  lerna clean
  yarn workspaces run clean
  ```

  

#### 参考链接

[项目级monorepo策略最佳实践](https://juejin.cn/post/6924854598268108807#heading-14)

[lerna优雅管理多个package](https://www.zhihu.com/search?type=content&q=leran)

[基于lerna和yarn workspace的monorepo工作流](https://github.com/hardfist/stackoverflow/issues/24)

[带你了解更全面的 Monorepo - 优劣、踩坑、选型](https://juejin.cn/post/7215886869199896637#comment)
