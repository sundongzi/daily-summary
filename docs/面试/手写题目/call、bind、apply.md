##### call

```javascript
Function.prototype.myCall = function (context = window) {
  if (typeof this !== 'function') {
    throw new Error('error type')
  }
  let result = null
  let args = [...arguments].slice(1)
  let _symbol = Symbol()
  context[_symbol] = this
  result = context[_symbol](...args)
  delete context[_symbol]
  return result
}
```

##### apply

```javascript
Function.prototype.myApply = function (context = window) {
  if (typeof this !== 'function') {
    throw new Error('error type')
  }
  let result = null
  let _symbol = Symbol()
  context[_symbol] = this
  if (arguments[1]) {
    result = context[_symbol](...arguments[1])
  } else {
    result = context[_symbol]()
  }
  delete context[_symbol]
  return result
}
```

##### bind

```javascript
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('error type')
  }
  const args = [...arguments].slice(1)
  const fn = this
  return function Fn () {
    return fn.apply(
    	this instanceof Fn ? this : context,
      // 此时的arguments指的是Fn函数的参数
      args.concat(...arguments)
    )
  }
}
```



