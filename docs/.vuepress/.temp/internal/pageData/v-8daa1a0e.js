export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "tagline": "Hero 副标题",
    "actions": [
      {
        "link": "/book/关于回调的一些理解.md",
        "text": "马上进入"
      }
    ],
    "features": [
      {
        "title": "简洁至上",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "Vue驱动",
        "details": "享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "高性能",
        "details": "VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Evan You"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1616053247000,
    "contributors": [
      {
        "name": "sundong",
        "email": "sundong@idss-cn.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updatePageData(data)
}
