##### 原理

当数据发生变化之后，`Vue`不会立即更新DOM而是开启一个队列把更新函数放入到队列中，然后刷新队列，这里是使用了`promise`也就是当同步任务执行完成以后才刷新队列然后执行里面的更新函数。`nextTick`就是获取刚才的`promise`，然后用`then`方法执行`nextTick`的回调函数。在dom更新完成以后才会调用`nextTick`的回调函数。



setter=>notify=>watcher update()=>queueWatcher队列=>通过promise开启微任务=>执行更新操作=>nextTick.then就能获取最新的DOM