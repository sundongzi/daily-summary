```javascript
const CancelToken = axios.CancelToken
const cancelCollection = new Map()

eport const request = function (reqConfig) {
  // 手动配置当前接口是否需要取消
  let {isCancel} = reqConfig
  return new Promise((resolve, reject) => {
    let isCanceled = false
    const axiosOptions = {
      ...
    }
    // 需要取消，按规则<method:url>暂存
    if (isCancel) {
      axiosOptions.cancelToken = new CancelToken(function (c) {
        cancelCollection.set(`${method.toUpperCase()}:${url.toLowerCase()}`, c)
      })
    }
    // 发送请求
    axios(axiosOptions).then(res => {
      ...
    }, err => {
      if (axios.isCancel(err)) {
        // 标记此请求被取消过了了
        isCanceled = true
        errorMsg = '请求被取消！'
      } 
    }).finally(() => {
      // 开启了取消并且没有并取消过时，删除集合中的 key
      isCancel && !isCanceled && cancelCollection.delete(`${method.toUpperCase()}:${url.toLowerCase()}`)
    })
  })
}

export const requestCancel = function (reqConfig) {
  const { method = 'get', url = '' } = reqConfig
  const key = `${method.toUpperCase()}:${url.toLowerCase()}`
  // 按规则获取对应的cancel函数 ，然后执行取消操作
  typeof cancelCollection.get(key) === 'function' && cancelCollection.get(key)()
  cancelCollection.delete(key)
}
```

