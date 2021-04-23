module.exports = {
    '/前端/': [
        {
            title: '安全相关',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                ['安全相关/CSRF攻击', 'CSRF攻击'],
                ['安全相关/XSS攻击', 'XSS攻击']
            ]
        },
        {
            title: '闭包',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                ['闭包/你不知道的闭包', '你不知道的闭包']
            ]

        },
        {
            title: '设计模式',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                ['设计模式/设计模式 (三)', '设计模式 (三)'],
                ['设计模式/设计模式 （二）', '设计模式 （二）'],
                ['设计模式/设计模式--前奏', '设计模式--前奏'],
                ['设计模式/设计模式（一）', '设计模式（一）'],
                ['设计模式/设计模式--观察者模式', '设计模式--观察者模式']
            ]

        },
        {
            title: 'Es6',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                ['Es6/es6', 'es6']
            ]

        },
        {
            title: 'Http',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                ['Http/Https加密', 'Https加密'],
                ['Http/XMLHttpRequest对象', 'XMLHttpRequest对象'],
                ['Http/http与https', 'http与https'],
                ['Http/http常用方法', 'http常用方法'],
                ['Http/跨域', '跨域'],
                ['Http/重定向 && 转发', '重定向 && 转发']
            ]
        },
        {
            title: 'Immutable',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                ['Immutable/immutable学习', 'immutable学习']
            ]
        },
        {
            title: 'Vscode',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                ['Vscode/保存时校验eslint', '保存时校验eslint'],
                ['Vscode/标签属性格式化换行', '标签属性格式化换行']
            ]
        },
        {
            title: 'Webpack',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                ['Webpack/webpack基础了解', 'webpack基础了解']
            ]
        }
    ],
    '/项目积累/': [
        ['菜单过多处理', '菜单过多处理'],
        ['权限树过滤', '权限树过滤'],
        ['el-popover单例', 'el-popover单例']
    ],
    '/页面/': [
        {
            title: 'Css',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                ['Css/css技巧', 'css技巧'],
                ['Css/opacity && visibility && display', 'opacity && visibility && display']
            ]
        },
        {
            title: 'Html',
            collapsable: true,
            sidebarDepth: 2,
            children: [
            ]
        }
    ],
    '/Git/': [
        ['github操作文件以及文件命令', 'github操作文件以及文件命令'],
        ['git本地分支与远程分支关联', 'git本地分支与远程分支关联'],
        ['git本地文件与远程文件关联', 'git本地文件与远程文件关联'],
        ['删除分支', '删除分支']
    ],
    '/更多/': [
        ['canvas', 'canvas'],
        ['chrome-extension', 'chrome-extension'],
        ['promise', 'promise'],
        ['你不知道的javascript(上)', '你不知道的javascript(上)'],
        ['关于回调的一些理解', '关于回调的一些理解'],
        ['前后端分离', '前后端分离'],
        ['单点登录', '单点登录'],
        ['原型到原型链', '原型到原型链'],
        ['数字格式化', '数字格式化'],
        ['求多个数组之间的交集', '求多个数组之间的交集'],
        ['浏览器缓存', '浏览器缓存'],
        ['类型检测方法总结', '类型检测方法总结'],
        ['节流与防抖', '节流与防抖'],
        ['Vuepress搭建静态博客', 'Vuepress搭建静态博客']
    ]
}