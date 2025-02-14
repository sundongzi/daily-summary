##### 一、真实DOM和其解析流程

浏览器渲染引擎工作流程大致分为：创建DOM树=》创建Styles Rules=》构建Render树=》页面布局Layout=》绘制

构建DOM树：通过HTML解析器，分析HTML元素，构建一棵DOM树

生成样式表：使用css解析器，分析CSS文件和元素的行内样式，生成页面的样式表

构建render树：将DOM树和样式表进行关联，构建出Render树。每个DOM节点都有attach方法，接受样式信息，返回render对象，这些render对象最终会被构建成一棵Render树。

页面布局：根据Render树结构，为每个Render树上的节点确定一个精确的坐标。

页面绘制：根据Render树和节点的坐标，调用每个节点的paint方法，进行绘制。

参考链接：

[深入剖析：Vue核心之虚拟DOM](https://juejin.cn/post/6844903895467032589#heading-5)

[一文带你了解vue之虚拟dom](https://cloud.tencent.com/developer/article/2070640)