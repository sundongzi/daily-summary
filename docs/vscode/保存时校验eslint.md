1.安装eslint插件

2.进入文件 > 首选项 > 设置

```javascript
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ]
}
```

==**eslint.autoFixOnSave** 用来进行保存时自动格式化，但是默认只支持 javascript .js 文件。== 
==**eslint.validate** 用来配置作用的文件类型==