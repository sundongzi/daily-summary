##### hash模式

- 监听`hashChange`事件
- hash虽然出现在url中，但是它不会被包含在`HTTP`请求里面。它只是用来指导浏览器动作的，对服务端完全没有影响，因此改变hash值不会重新加载页面

##### history模式

- `history.pushState`与`history.replaceState`两个方法修改了浏览器历史记录栈后只是URL发生变化，但不会重新发起页面请求

##### 参考链接

[vue-router的几种模式](https://www.cnblogs.com/zhilili/p/14721911.html)