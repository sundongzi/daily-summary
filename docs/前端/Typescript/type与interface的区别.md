##### `type`使用场景：

1. 定义基本类型
2. 定义元组类型
3. 定义联合类型
4. 定义函数类型
5.  能使用 in 关键字生成映射类型

```typescript
type MyNumber = number  // 基本类型
type StringOrNumber = string | number  // 联合类型
type yuanzu = [number, number]  // 元组类型

type Point = {
  x: number,
  y: number
}
// 声明函数
type SetPoint = (x: number) => void

// type继承
type SuperPoint = Point & {
  z: number
}

// 通过 extends 来扩展类型别名定义的类型
interface interfacePoint extends Point {
  name: string
}
```



##### `interface`使用场景：

1. 需要利用接口自动合并场景的时候
2. 定义对象类型且无需使用 type 的时候

```typescript
interface Point {
  x: number;
  y: number
}
// 同名接口可以自动合并  Point => { x: number; y: number; age: number }
interface Point {
  age: number
}

interface SetPoint {
  (x: number): void
}

// interface继承
interface SuperPoint extends Point {
  z: number
}

// 通过&扩展已定义的接口类型
type typePoint = Point & {
  name: string
}
```

##### 相同点

1. 都可以描述对象或者函数
2. 都支持扩展，也可以互相扩展（注意扩展方式不同，type类型别名通过 & 进行扩展，接口类型通过extends进行扩展）

##### 不同点

1. 类型别名（type）可以定义【基本类型 / 联合类型 / 元组类型 / 映射类型】；接口类型（interface）不行
2. 同名的类型接口（interface）会自动合并；类型别名（type）不会
3. 扩展方式不同：类型别名（type）通过 & 进行扩展，接口类型（interface）通过extends进行扩展