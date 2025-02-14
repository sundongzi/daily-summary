```javascript
Array.prototype.myReduce = function (callback, initValue) {
  let accumulator = initValue === undefined ? undefined : initValue
  for (let i = 0; i < this.length; i++) {
    if (accumulator === undefined) {
      accumulator = this[i]
    } else {
      accumulator = callback(accumulator, this[i], i, this)
    }
  }
  return accumulator
}
```

