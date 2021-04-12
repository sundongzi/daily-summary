### chrome-extensions 谷歌扩展程序介绍

#### 什么是chrome扩展程序？

`chrome`扩展程序是一个用`web`技术开发、用来增强浏览器功能的软件。它其实就是一个由`html`、`css`、`js`、`图片`等资源组成的一个[.crx](https://developer.chrome.com/extensions/hosting)后缀的压缩包。`chrome`扩展程序本质上是网页，可以使用浏览器为网页提供的所有`API`。

#### 开发与调试

只要保证项目目录有一个`manifest.json`即可，不需要专门的`IDE`

从谷歌浏览器右上角菜单=》更多工具=》扩展程序可以进入 扩展程序管理页面，也可以直接在地址栏输入`chrome://extensions`访问。

![image-20201110095647580](/Users/sundong/Library/Application Support/typora-user-images/image-20201110095647580.png)

勾选`开发者模式`即可按照文件夹的形式直接加载插件，否则只能安装`.crx`格式的文件、Chrome要求扩展程序必须从它的Chrome应用商店安装，其他任何网站下载的都无法直接安装，所以我们也可以把`.crx`文件解压，然后通过开发者模式直接加载。

![image-20201110095602659](/Users/sundong/Library/Application Support/typora-user-images/image-20201110095602659.png)

#### 核心介绍

##### manifest.json

这是一个Chrome扩展程序最重要也必不可少的文件，用来配置所有和扩展程序相关的配置，必须放在<u>根目录</u>。其中，`manifest_version`、`name`、`version`3个是必不可少的，`description`和`icons`是推荐的。

以下是常见的配置项，完整的配置文档请点[这里](https://developer.chrome.com/extensions/manifest)

```json
{
	// 清单文件的版本，这个必须写，而且必须是2
	"manifest_version": 2,
	// 扩展程序的名称
	"name": "demo",
	// 扩展程序的版本
	"version": "1.0.0",
	// 扩展程序的描述
	"description": "简单的Chrome扩展demo",
	// 图标，一般偷懒全部用一个尺寸的也没问题
	"icons":{
		"16": "img/icon.png",
		"48": "img/icon.png",
		"128": "img/icon.png"
	},
	// 会一直常驻的后台JS或后台页面
	"background":{
		// 2种指定方式，如果指定JS，那么会自动生成一个背景页
		"page": "background.html"
		//"scripts": ["js/background.js"]
	},
	// 浏览器右上角图标设置，browser_action、page_action、app必须三选一
	"browser_action": {
		"default_icon": "img/icon.png",
		// 图标悬停时的标题，可选
		"default_title": "这是一个示例Chrome",
		"default_popup": "popup.html"
	},
	// 当某些特定页面打开才显示的图标
	/*"page_action":
	{
		"default_icon": "img/icon.png",
		"default_title": "我是pageAction",
		"default_popup": "popup.html"
	},*/
	// 需要直接注入页面的JS
	"content_scripts": [{
			//"matches": ["http://*/*", "https://*/*"],
			// "<all_urls>" 表示匹配所有地址
			"matches": ["<all_urls>"],
			// 多个JS按顺序注入
			"js": ["js/jquery-1.8.3.js", "js/content-script.js"],
			// JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
			"css": ["css/custom.css"],
			// 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle
			"run_at": "document_start"
		},
		// 这里仅仅是为了演示content-script可以配置多个规则
		{
			"matches": ["*://*/*.png", "*://*/*.jpg", "*://*/*.gif", "*://*/*.bmp"],
			"js": ["js/show-image-content-size.js"]
		}
	],
	// 权限申请
	"permissions":[
		"contextMenus", // 右键菜单
		"tabs", // 标签
		"notifications", // 通知
		"webRequest", // web请求
		"webRequestBlocking",
		"storage", // 本地存储
		"http://*/*", // 可以通过executeScript或者insertCSS访问的网站
		"https://*/*" // 可以通过executeScript或者insertCSS访问的网站
	],
	// 普通页面能够直接访问的扩展程序资源列表，如果不设置是无法直接访问的
	"web_accessible_resources": ["js/inject.js"],
	// 插件主页，这个很重要，不要浪费了这个免费广告位
	"homepage_url": "https://www.baidu.com",
	// 覆盖浏览器默认页面
	"chrome_url_overrides":{
		// 覆盖浏览器默认的新标签页
		"newtab": "newtab.html"
	},
	// Chrome40以前的插件配置页写法
	"options_page": "options.html",
	// Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个
	"options_ui":{
		"page": "options.html",
		// 添加一些默认的样式，推荐使用
		"chrome_style": true
	},
	// 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字
	"omnibox": { "keyword" : "go" },
	// 默认语言
	"default_locale": "zh_CN",
	// devtools页面入口，注意只能指向一个HTML文件，不能是JS文件
	"devtools_page": "devtools.html"
}
```

##### content_scripts

[content_scripts](https://developer.chrome.com/extensions/content_scripts),就是Chrome扩展程序向页面注入脚本的一种形式(虽然名为script，其实还可以包括css的)，借助`content_scripts`我们可以实现通过配置的方式轻松向指定页面注入JS和CSS。最常见的比如：广告屏蔽、页面CSS定制，等等

```json
{
	// 需要直接注入页面的JS
	"content_scripts": [
		{
			//"matches": ["http://*/*", "https://*/*"],
			// "<all_urls>" 表示匹配所有地址
			"matches": ["<all_urls>"],
			// 多个JS按顺序注入
			"js": ["js/vue.js", "js/content-script.js"],
			// JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
			"css": ["css/custom.css"],
			// 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle
			"run_at": "document_start"
		}
	]
}
```

`content_scripts`和原始页面共享DOM，但是不共享JS，如果要访问页面JS，可以通过`injected-js`来实现。并且`content_scripts`只能访问以下4种api:

- chrome.extension(getURL , inIncognitoContext , lastError , onRequest , sendRequest)
- chrome.i18n
- chrome.runtime(connect , getManifest , getURL , id , onConnect , onMessage , sendMessage)
- chrome.storage

##### injected-script

`injected-script`指的是通过DOM操作的方式向页面注入的一种JS。因为`content_scripts`有一个很大的缺陷，也就是无法访问页面中的JS，虽然可以操作DOM，但是DOM却不能调动它，也就是无法在DOM中通过绑定事件的方式调用`content_scripts`中的代码（包括直接写`onclick`和`addEventListener`），但是，在页面上添加一个按钮并调用插件的扩展API是一个很常见的需求。

在`content_scripts`中通过DOM方式向页面注入`inject-script`代码示例：

```javascript
// 向页面注入JS
function injectCustomJs(jsPath) {
	jsPath = jsPath || 'js/inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function(){
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.head.appendChild(temp);
}
```

需要注意的是，如果你想要在web中直接访问扩展程序中的资源的话必须显示声明才行，配置文件中增加如下：

```json
{
	// 普通页面能够直接访问的扩展程序资源列表，如果不设置是无法直接访问的
  ...
	"web_accessible_resources": ["js/inject.js"]
}
```

##### background

`background`是一个常驻的页面，它的生命周期是插件中所有类型页面中最长的，它随着浏览器的打开而打开，随着浏览器的关闭而关闭，所以通常把需要一直运行的、启动就运行的、全局的代码放在`background`里面。

background的权限非常高，几乎可以调用所有的Chrome扩展API（除了devtools），而且它可以无限制跨域，也就是可以跨域访问任何网站而无需要求对方设置`CORS`

配置中，`background`可以通过`page`指定一张网页，也可以通过`scripts`直接指定一个JS，Chrome会自动为这个JS生成一个默认的网页：

```json
{
	// 会一直常驻的后台JS或后台页面
	"background":{
		// 2种指定方式，如果指定JS，那么会自动生成一个背景页
		"page": "background.html"
		//"scripts": ["js/background.js"]
	},
}
```

需要特别说明的是，虽然你可以通过`chrome-extension://xxx/background.html`直接打开后台页，但是你打开的后台页和真正一直在后台运行的那个页面不是同一个，换句话说，你可以打开无数个`background.html`，但是真正在后台常驻的只有一个，而且这个你永远看不到它的界面，只能调试它的代码。

##### event-pages

鉴于background生命周期太长，长时间挂载后台可能会影响性能，所以Google又弄一个`event-pages`，在配置文件上，它与`background`的唯一区别就是多了一个`persistent`参数：

```json
{
	"background":{
		"scripts": ["event-page.js"],
		"persistent": false
	}
}
```

它的生命周期是：在被需要时加载，在空闲时被关闭，什么叫被需要时呢？比如第一次安装、插件更新、有`content_scripts`向它发送消息，等等

##### popup

`popup`是点击`browser_action`或者`page_action`图标时打开的一个小窗口网页，焦点离开网页就立即关闭，一般用来做一些临时性的交互。

![image-20201103111407848](/Users/sundong/Library/Application Support/typora-user-images/image-20201103111407848.png)

`popup`可以包含任意你想要的HTML内容，并且会自适应大小。可以通过`default_popup`字段来指定popup页面，也可以调用`setPopup()`方法。

配置方式：

```json
// manifest.json
{
	"browser_action": {
		"default_icon": "img/icon.png",
		// 图标悬停时的标题，可选
		"default_title": "这是一个示例Chrome插件",
		"default_popup": "popup.html"
	}
}
```

#### 其他补充

##### 关于通信

使用页面按钮和弹窗窗口`popup`的扩展程序可以使用`declarative content`API在后台脚本`background.js`中设置规则，以供用户确定弹窗窗口何时可用。满足条件后，后台脚本可以与弹出窗口进行通信，以使用户可以点击其图标

![image-20201106102953869](/Users/sundong/Library/Application Support/typora-user-images/image-20201106102953869.png)

如果扩展程序需要与用户加载的网页进行交互，需要使用内容脚本。内容脚本可以修改网页。内容脚本中是一些 `JS` 代码，在已加载到浏览器的页面的上下文中执行，可以读取和修改浏览器访问的网页的 `DOM`。应该将内容脚本视为已加载网页的一部分，而不是扩展程序的一部分。

![image-20201106103122632](/Users/sundong/Library/Application Support/typora-user-images/image-20201106103122632.png)

内容脚本可以通过通信并使用存储API来与其父扩展进行通信

![image-20201106103234719](/Users/sundong/Library/Application Support/typora-user-images/image-20201106103234719.png)

|                 | injected-script    | Content-script                                               | Popup-js                                                     | Background-js                                                |
| --------------- | ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| injected-script | -                  | window.postMessage                                           | -                                                            | -                                                            |
| Content-script  | window.postMessage | -                                                            | chrome.runtime.sendMessage（短连接） chrome.runtime.connect（长连接） | chrome.runtime.sendMessage（短连接） chrome.runtime.connect（长连接） |
| Popup-js        | -                  | chrome.tabs.sendMessage（短连接） chrome.tabs.connect（长连接） | -                                                            | chrome.extension. getBackgroundPage()                        |
| Background-js   | -                  | chrome.tabs.sendMessage （短连接）chrome.tabs.connect（长连接） | chrome.extension.getViews                                    | -                                                            |

##### 动态注入或执行JS

虽然在`background`和`popup`中无法直接访问页面DOM，但是可以通过`chrome.tabs.executeScript`来执行脚本，从而实现访问web页面的DOM（注意，这种方式也不能直接访问页面JS）。

示例`manifest.json`配置：

```json
{
	...
	"permissions": [
		"tabs"
	],
	...
}
```

JS:

```javascript
// 动态执行JS代码
chrome.tabs.executeScript(tabId, {code: 'document.body.style.backgroundColor="red"'});
// 动态执行JS文件
chrome.tabs.executeScript(tabId, {file: 'some-script.js'});
```

##### 本地存储

本地存储建议用`chrome.storage`而不是普通的`localStorage`。个人认为几点区别如下：

1. `Chrome.storage`是针对扩展程序全局的，即使你在`background`中保存的数据，**在`content_scripts`也能获取到**
2. `Chrome.storage.sync`可以跟随当前登录用户自动同步，这台电脑修改的设置会自动同步到其它电脑，很方便，如果没有登录或者未联网则先保存到本地，等登录了再同步至网络
3. 异步批量读写操作，比起阻塞和串行的`localStorage`更快

首先localStorage是基于域名的，而content_scripts是注入到用户当前浏览页面中的，如果content_scripts直接读取localStorage，所读取到的数据是用户当前浏览页面所在域中的。所以通常的解决办法是content_scripts通过runtime.sendMessage和background通信，由background读写扩展所在域（通常是chrome-extension://extension-id/）的localStorage，然后再传递给content_scripts。

Chrome存储API提供了2种储存区域，分别是sync和local。两种储存区域的区别在于，sync储存的区域会根据用户当前在Chrome上登陆的Google账户自动同步数据，当无可用网络连接可用时，sync区域对数据的读写和local区域对数据的读写行为一致

使用存储API需要声明`storage`权限，示例：

```json
{
	...
	"permissions": [
		"storage"
	],
	...
}
```

```javascript
// 保存数据
chrome.storage.sync.set({color: 'blue'}, function() {
	console.log('保存成功！');
});
// 读取数据，第一个参数是指定要读取的key以及设置默认值
chrome.storage.sync.get('color', function(result) {
	console.log(result); // {color:  'blue'}
});

// 保存数据
chrome.storage.local.set({age: 18}, function() {
	console.log('保存成功！');
});
// 读取数据，第一个参数是指定要读取的key以及设置默认值
chrome.storage.local.get('age', function(result) {
	console.log(result); // {age: 18}
});

```

#### 如何打包生成自己的扩展程序

点击右上角的`开发者模式`后，再点击`打包扩展程序`，就会弹出`打包扩展程序`对话框。

![image-20201102143425899](/Users/sundong/Library/Application Support/typora-user-images/image-20201102143425899.png)

![image-20201102143441053](/Users/sundong/Library/Application Support/typora-user-images/image-20201102143441053.png)

根据提示，选择扩展程序根目录，点击打包扩展程序就会生成[.crx](https://developer.chrome.com/extensions/hosting)文件了。

如果第一次生成`.crx`文件，Chrome会在其根目录下生成一个`.pem`密钥文件

![image-20201102144123037](/Users/sundong/Library/Application Support/typora-user-images/image-20201102144123037.png)

对于`.pem`文件主要用于生成扩展程序ID，区分扩展程序。如果想要保证新生成的`.crx`文件,与原有的`.crx`文件的id是一样，可以把生成的`.pem`文件上传上去。

![image-20201102144256597](/Users/sundong/Library/Application Support/typora-user-images/image-20201102144256597.png)

#### 参考链接：

[谷歌官网](https://developer.chrome.com/extensions)(需翻墙)

[chrome-extesnion-vue-demo](https://github.com/wwhyes/chrome-extension-vue-demo)

[如何打包生成自己的插件](https://blog.csdn.net/wanwuguicang/article/details/79742017)