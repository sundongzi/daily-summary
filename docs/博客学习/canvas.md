#### 一.canvas简介：

##### `<canvas>` 是 `HTML5` 新增的，一个可以使用脚本(通常为`JavaScript`)在其中绘制图像的 `HTML` 元素。它可以用来制作照片集或者制作动画，甚至可以进行实时视频处理和渲染。

#### 二.基本使用

##### 2.1`  <canvas>`元素

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

##### 注意：如果不给`<canvas>`设置`widht、height`属性时，则默认 `width`为300、`height`为150,单位都是`px`。也可以使用`css`属性来设置宽高，但是如果宽高属性和初始比例不一致，它会出现扭曲。所以，建议永远不要使用`css`属性来设置`<canvas>`的宽高。

##### 2.2  替换内容(针对比较老的浏览器IE9之前或者压根不支持HTML元素`canvas`)

```html
<canvas id="canvas" width="150" height="150">
  不支持canvas
</canvas>

<canvas id="canvas" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```

##### 2.3 渲染上下文

​	`<canvas>`会创建一个固定大小的画布，会公开一个或多个 **渲染上下文**(画笔)，使用 **渲染上下文**来绘制和处理要展示的内容。它有一个方法`getContext()`，这个方法用来获取上下文以及绘画功能，这个方法也可以用来检查支持性

```javascript
var canvas = document.querySelector('#canvas')
if(!canvas.getContext) return;  // 检查兼容性
//获得 2d 上下文对象
var ctx = canvas.getContext('2d');
```

##### 2.4 绘制

`<canvas>` 元素默认被网格所覆盖。通常来说网格中的一个单元相当于`canvas`元素中的一像素。只支持一种原生的 图形绘制：`矩形`。其他所有图形都至少需要生成一种路径(`path`)。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能

1. fillRect(x, y, width, height)    绘制一个填充的矩形

2. strokeRect(x, y, width, height)  绘制一个矩形的边框

3. clearRect(x, y, widh, height)  清除指定的矩形区域，然后这块区域会变的完全透明。

   `x, y`：指的是矩形的左上角的坐标。(相对于`canvas`的坐标原点)

   `width, height`：指的是绘制的矩形的宽和高。

#### 三.绘制路径

##### 3.1   图形的基本元素是路径，路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合，一个路径，甚至一个子路径，都是闭合的。

##### 使用路径绘制图形的基本方法：

1. 创建路径起始点
2. 调用绘制方法去绘制出路径
3. 把路径封闭
4. 一旦路径生成，通过描边或填充路径区域来渲染图形

##### 需要用到的方法：

1. beginPath()  新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径
2. moveTo(x, y)  把画笔移动到指定的坐标`(x, y)`。相当于设置路径的起始点坐标
3. closePath()  闭合路径之后，图形绘制命令又重新指向到上下文中
4. stroke()  通过线条来绘制图形轮廓
5. fill() 通过填充路径的内容区域生成实心的图形

##### 3.2  绘制简单三角形

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    canvas{
      border:1px solid red
    }
  </style>
</head>
<body>
<canvas id="canvas" width="300" height="300"></canvas>
</body>
</html>
<script>
function draw(){
    let canvas = document.querySelector("#canvas")
    if(!canvas.getContext) return;  // 检查兼容性
    let ctx = canvas.getContext("2d");
    ctx.beginPath();  // 新建一条路径
    ctx.moveTo(50,50);  // 把画笔移动到指定坐标
    ctx.lineTo(200,50);  // 绘制一条从当前位置到指定坐标（200，50）的直线
    ctx.lineTo(200,200)
    ctx.closePath();  // 闭合路径  会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.stroke();  // 绘制路径,并不会自动闭合
    // ctx.fill() //填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。
}
draw()
</script>

```

##### 3.3  绘制圆弧

3.3.1  arc(x, y, r, startAngle, endAngle, anticlockwise) ： 以`(x, y)`为圆心，以`r`为半径，从 `startAngle`弧度开始到`endAngle`弧度结束。`anticlosewise`是布尔值，`true`表示逆时针，`false`表示顺时针。(默认是顺时针)

注意：

1. 这里的度数都是弧度 （弧度 = （Math.PI/180） * 角度）

3.3.2  arcTo(x1, y1, x2, y2, radius) 绘制的弧形是由两条切线所决定，介于两个切线之间的弧：x1 y1表示弧的起点x,y坐标，x2 y2表示弧的终点坐标，radius表示半径.

#### 四.[绘制贝塞尔曲线](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A)

1. 一次贝塞尔曲线（也就是一条直线） 
2. 二次贝塞尔曲线：quadraticCurveTo(cp1x, cp1y, x, y) 参数1和2为控制点坐标，参数3和参数4为结束点坐标
3. 三次贝塞尔曲线：bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)  参数1和2表示控制点1的坐标，参数3和4表示控制点2的坐标，参数5和参数6表示结束点的坐标

#### 五、添加样式

1. ###### `fillStyle = color`：设置图形的填充颜色

2. ###### `strokeStyle = color`：设置图形的轮廓颜色

3. ###### `lineWidth = value`:  线宽（只能是正值，默认为1.0），也就是在路径的两边各绘制线宽的一半。画布的坐标并不和像素直接对应   注意：半个像素会以近似的方式进行渲染，这意味着那些像素只是部分着色，结果就是以实际笔触颜色一半色调的颜色来填充整个区域

   ![image-20181206102321470](/Users/sundong/Library/Application Support/typora-user-images/image-20181206102321470.png)

4. ###### `lineCap = type`：线条末端样式（butt：末端以方形结束与辅助线齐平   round：端点处加上了半径为一半线宽的半圆  square：端点处加上了等宽且高度为一半线宽的方块。）

   ![image-20181206100342844](/Users/sundong/Library/Application Support/typora-user-images/image-20181206100342844.png)

5. ###### `lineJoin`：图形中两线段连接处所显示的样子。（round：连接处被磨圆了，圆的半径等于线宽  bevel、miter）![image-20181210114837707](/Users/sundong/Library/Application Support/typora-user-images/image-20181210114837707.png)

6. ###### 虚线：用 `setLineDash` 方法和 `lineDashOffset` 属性来制定虚线样式. `setLineDash` 方法接受一个数组，来指定线段与间隙的`交替`；`lineDashOffset`属性设置起始偏移量.

7. 阴影 `shadow`：`shadowOffsetX` 和 `shadowOffsetY `用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 `0`。`shadowBlur `用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 `0`。`shadowColor` 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。

#### 六、绘制文本

##### 1.fillText(text, x, y, maxWidth)：在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.

##### 2.strokeText(text, x, y, maxWidth)：在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的

##### 给文本添加样式：

1. `font = value`：当前我们用来绘制文本的样式。这个字符串使用和 `CSS font`属性相同的语法. 默认的字体是 `10px sans-serif`。

2. `textAlign = value`：文本对齐选项. 可选的值包括：`start`, `end`, `left`, `right` or `center`. 默认值是 `start`

3. `textBaseline = value`：基线对齐选项，可选的值包括：`top(文本基线是 em 方框的顶端)`, `hanging(文本基线是悬挂基线)`, `middle(文本基线是 em 方框的正中)`, `alphabetic(文本基线是普通的字母基线)`, `ideographic(文本基线是表意基线)`, `bottom(文本基线是 em 方框的底端)`。默认值是 `alphabetic。`

   ![image-20181213141005913](/Users/sundong/Library/Application Support/typora-user-images/image-20181213141005913.png)

4. `direction = value`：文本方向。可能的值包括：`ltr`, `rtl`, `inherit`。默认值是 `inherit。`

5. `measureText()`：将返回一个 [`TextMetrics`](https://developer.mozilla.org/zh-CN/docs/Web/API/TextMetrics)(使用 CSS 像素计算的内联字符串的宽度,基于当前上下文字体考虑)对象的宽度、所在像素，这些体现文本特性的属性

   ```javascript
   function textWid () {
     var ctx = document.getElementById('canvas').getContext('2d');
     var text = ctx.measureText("guanan"); // TextMetrics object
     text.width; // 33.869964599609375;
   } 
   textWid ()
   ```


#### 七、绘制图片

##### drawImage(image, x, y, width, height)：image表示要绘制的图片，x与y表示在canvas中的位置，`width` 和 `height，`这两个参数用来控制 当canvas画入时应该缩放的大小。

##### drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)：image表示要绘制的图片，其他八个参数（前4个是定义图像源的切片位置和大小，后4个则是定义切片的目标显示位置和大小）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    canvas{
      border:1px solid red
    }
  </style>
</head>
<body>
<img src="../assets/logo.png" alt="" width="300"><br>
<canvas id="canvas" width="300" height="300"></canvas>
</body>
</html>
<script>
let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d");
/*  绘制图片   */
function createImg(){
  var img = document.querySelector("img");
  ctx.drawImage(img, 0, 0,200,200);
}

document.querySelector("img").onclick = function (){
  createImg();
}
</script>

```

#### 八、状态的保存和恢复

##### `save` 和 `restore` 方法是用来保存和恢复 `canvas` 状态的，都没有参数，`Canvas` 的状态就是当前画面应用的所有样式和变形的一个快照

save()：Canvas状态存储在栈中，每当`save()`方法被调用后，当前的状态就被推送到栈中保存。先保存的后恢复，可以调用任意多次 save方法。(类似数组的`push()`)。一个绘画状态包括

1. 当前应用的变形（移动、旋转和缩放）
2. ``fillStyle`,`strokeStyle`,  `globalAlpha`, `lineWidth`, `lineCap`, `lineJoin`, `miterLimit`, `shadowOffsetX`, `shadowOffsetY`, `shadowBlur`, `shadowColor`, `globalCompositeOperation `
3. 当前的裁切路径

restore()：每一次调用 `restore` 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。(类似数组的`pop()`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    canvas{
      border:1px solid red
    }
  </style>
</head>
<body>
<img src="../assets/logo.png" alt="" width="300"><br>
<canvas id="canvas" width="300" height="300"></canvas>
</body>
</html>
<script>
let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d");
/*  状态保存和恢复  */
function saveAndRestore () {
  ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
  ctx.save();                  // 保存默认状态

  ctx.fillStyle = 'red'       // 在原有配置基础上对颜色做改变
  ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

  ctx.save();                  // 保存当前状态
  ctx.fillStyle = '#FFF'       // 再次改变颜色配置
  ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形

  ctx.restore();               // 重新加载之前的颜色状态
  ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形

  ctx.restore();               // 加载默认颜色配置
  ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形
}
saveAndRestore()
</script>

```

#### 九、变形

##### Translate(x,y)：用来移动 `canvas` 的**原点**到指定的位置，`x` 是左右偏移量，`y` 是上下偏移量

在做变形之前先保存状态是一个良好的习惯。大多数情况下，调用 `restore` 方法比手动恢复原先的状态要简单得多。又如果你是在一个循环中做位移但没有保存和恢复`canvas` 的状态，很可能到最后会发现怎么有些东西不见了，那是因为它很可能已经超出 `canvas` 范围以外了。

##### 注意：`translate`移动的是`canvas`的坐标原点

##### rotate(angle)：只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。旋转中心是canvas原点

##### scale(x, y)：`x,y`分别是横轴和纵轴的缩放因子，它们都必须是正值。值比 1.0 小表示缩	小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。