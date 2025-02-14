考虑内存回收的问题

`WeakMap`保持了对键名所引用的对象的弱引用，即垃圾回收机制不将该引用考虑在内。只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。`WeakMap`里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

```javascript
let map = new Map()
let key = new Array(5*1024*1024)
// 建立 map 对 key 所引用对象的强引用
map.set(key,1)
// 并不会导致 key 的原引用对象被回收
key = null
```

通过Node来证明一下这个问题：

```javascript
// 允许手动执行垃圾回收机制
node --expose-gc

global.gc();
// 返回 Nodejs 的内存占用情况，单位是 bytes
process.memoryUsage(); // heapUsed: 4640360 ≈ 4.4M

let map = new Map();
let key = new Array(5 * 1024 * 1024);
map.set(key, 1);
global.gc();
process.memoryUsage(); // heapUsed: 46751472 注意这里大约是 44.6M

key = null;
global.gc();
process.memoryUsage(); // heapUsed: 46754648 ≈ 44.6M

// 这句话其实是无用的，因为 key 已经是 null 了
map.delete(key);
global.gc();
process.memoryUsage(); // heapUsed: 46755856 ≈ 44.6M
```

如果想要让obj被回收掉，需要先`delete(key)`然后再`key=null`

```javascript
let map = new Map();
let key = new Array(5 * 1024 * 1024);
map.set(key, 1);
map.delete(key);
key = null;
```

```javascript
node --expose-gc

global.gc();
process.memoryUsage(); // heapUsed: 4638376 ≈ 4.4M

let map = new Map();
let key = new Array(5 * 1024 * 1024);
map.set(key, 1);
global.gc();
process.memoryUsage(); // heapUsed: 46727816 ≈ 44.6M

map.delete(key);
global.gc();
process.memoryUsage(); // heapUsed: 46748352 ≈ 44.6M

key = null;
global.gc();
process.memoryUsage(); // heapUsed: 4808064 ≈ 4.6M
```

##### 参考链接

[ES6系列之WeakMap](https://github.com/mqyqingfeng/Blog/issues/92)