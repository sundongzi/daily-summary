#### Web worker

##### 一、常规使用

```html
// index.html
const worker = new Worker('./worker.js')
```

```javascript
// worker.js
let prev = performance.now()

setInterval(() => {
  const offset = performance.now() - prev
  prev = performance.now()
  console.log('__SY__🎄 ~ setInterval ~ offset:', offset)
}, 1000)

```

##### 二、Vue中使用

`PS：需要注意的是需要把【worker.js】文件放在【public】目录下`

```js
// worker.js (vue项目 需要放在 public 中)

// 处理定时器逻辑
self.onmessage = function (event) {
  /// 收到clear消息后, 清除定时器
  if (event.data === 'clear') {
    clearInterval(self.intervalID)
  } else {
    const delay = event.data
    self.intervalID ||= setInterval(() => {
      self.postMessage({}) // 定时通知主线程,即上文中的 xxx
    }, delay)
  }
}

```

```js
// setWorkerInteraval.js
export default function(callback, delay) {
  const worker = new Worker('/worker.js');

    worker.postMessage(delay) // 传递 delay 延时参数
    // 接收 Web Worker 的消息
    worker.onmessage = function(event) {
      callback() // 执行业务逻辑
    }
  const clear = () => {worker.postMessage('clear')}
  return clear
}
```

```js
// 使用如下
import setWorkerInteraval from './setWorkerInteraval.js'
const clear = setWorkerInteraval(() => console.log(1), 1000)
// 清除定时器
clear()
```

##### 三、参考链接

[什么?你的 interval 定时器并不靠谱?](https://juejin.cn/post/7418391732163182607)