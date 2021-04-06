#### 一.XMLHttpRequest对象

##### 1.创建XHR对象

```javascript
function createXhr(){
    // 处理兼容问题
  if(typeof XMLHttpRequest !== undefined){
      return new XMLHttpRequest()
  } else if (typeof ActiveXObject !== undefined){
      return new ActiveXObject("")
  }
}
```

##### 2.xhr用法

```javascript
xhr.open('get/post','请求的地址URL','是否是异步请求') // 第三个参数为true则表示为异步请求,如果为false则为同步请求，需要等到服务器响应之后在执行剩下的代码
//（1）URL相对于执行代码的当前页面（当然也可以使用绝对路径） 
//（2）open()方法并不会真正发送请求，而只是启动一个请求以备发送

xhr.send('请求主体发送的数据')
//（1）如果不需要通过请求主体发送数据（比如get请求），则必须传入null，因为这个参数对有些浏览器来说是必需的 
//（2）调用send()之后，请求就会被分派到服务器
```

