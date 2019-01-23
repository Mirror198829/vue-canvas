# 介绍
``` html
<!-- 默认：宽300 高150 -->
<canvas>
    不支持canvas的浏览器 
</canvas>
```
# 绘图方法
## 路径
`beginPath`:开始绘制路径  
`moveTo`:移动到绘制的新目标点  
`lineTo`: 新的目标点  
`closePath`:关闭路径，闭合，可以作为起止点闭合的连接  
`save`
  
`ctx.rect(100,100,100,100)`:绘制一个方块路径

``` javascript
ctx.save() //保存路径
//1st part
ctx.fillStyle = 'red' //after ctx.save() , this will not dirty 2nd part
ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(200,200)
ctx.lineTo(300,100)
ctx.closePath()
ctx.fill()
ctx.restore() // 与save()呼应，恢复路径
//2nd part
ctx.beginPath()
ctx.moveTo(100,200)
ctx.lineTo(200,200)
ctx.lineTo(300,100)
ctx.closePath()
ctx.stroke()
```
## 绘制圆
`arc(x,y,半径,起始弧度，结束弧度，旋转方向)`  
  -x,y：起始位置  
  -弧度与角度的关系：弧度 = 角度*Math.PI/180  
  -旋转方向：顺时针（默认:false）、逆时针(true) 
## 其他曲线
* arcTo(x1,y1,x2,y2,r)  
   —— 第一组坐标、第二组坐标、半径  
   —— arcTo() 方法在画布上创建介于两个切线之间的弧/曲线。
## 插入图片
drawImage(olmg,x,y,w,h)
* 设置背景  
createPattern(oImg,平铺方式)  
  —— 参数：repeat/repeat-x/repeat-y/no-repeat
# 变换
## translate  
  —— 偏移:从起始点为基准点，移动当前坐标位置  
## rotate  
  —— 旋转：参数为弧度  
  围绕画布（0，0）进行旋转
## scale  
  —— 缩放
  
# 背景色
## 径向渐变  
`context.createRadialGradient(x0,y0,r0,x1,y1,r1)`  

| 参数 | 描述 |
|---|---|
| x0 | 渐变开始圆的x坐标 |
| y0 | 渐变开始圆的y坐标 |
| r0 | 开始圆的半径 |
| x1 | 渐变结束圆的x坐标 |
| y1 | 渐变结束圆的y坐标 |
| r1 | 结束圆的半径 |

# 文本
`measureText()`  
-- measureText(str).width 只有宽度，没有高度  
-- 作用：文字居中

# 像素
`getImageData(x,y,w,h)` 获取图像数据  
`putImageData(获取图像,x,y)`设置新的图像数据  
属性：  
* data一个数组，包含每个像素的rgba四个值，注意每个值都是0~255之间的整数
* width：一行的像素个数  
* height：一列的像素个数  
`createImageData(w,h)`  生成新的像素矩阵，初始值为全透明的黑色  

## 问题
#### `canvas`通过css设置宽高的时候，画布内容大小发生变化
``` html
#canvas{width:600px;height:300px} //这种写法导致，canvas等比例缩放，变成canvas图像默认值的2倍。
```
canvas标签内设置的宽高才是真正画布的宽高
# canvas
参考文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage  


# 作品说明  
![avatar](https://mirror198829.github.io/static/github/clock.png)
## canvas绘制步骤思路
1. 绘制表盘的（时针）刻度  
2. 绘制表盘的（分针）刻度  
3. 绘制表盘数字刻度  
4. 绘制时针、分针、秒针  
5. 绘制中心点  
6. 绘制秒针的尾部（优化部分）  
## 实现所需要的知识点  
* 画圆 `ctx.arc(x,y,r,开始弧度,结束弧度)`
* 画线  `ctx.moveTo(x,y)` `ctx.lineTo(x1,y1)`
* 直角坐标系的计算方法  
    `x = x0 + Math.cos(角度)*长度`  
    `y = y0 + Math.sin(角度)*长度`   
* 定时器   
## 如何实现（时针）刻度盘的绘制  
思路：  
1. 已知直角坐标系的中心点坐标（x0,y0）即canvas画布中心点位置。设定L = 长度  
2. 计算出时针的角度，通过直角坐标系的计算方法便得出时针刻度的位置。 （12个刻度进行循环便可全部绘制） 
计算时针角度的方法：  
`-90 + i * (360 / 12)`
代码如下：
``` javascript
drawHoursScale(ctx, x0, y0, scaleNum, scaleW, maxL, minL) {
    for (let i = 0; i < scaleNum; i++) {
      let angel = -90 + i * (360 / scaleNum) //角度
      let [x1, y1] = [x0 + Math.cos(angel * Math.PI / 180) * maxL, y0 + Math.sin(angel * Math.PI / 180) * maxL]
      let [x2, y2] = [x0 + Math.cos(angel * Math.PI / 180) * minL, y0 + Math.sin(angel * Math.PI / 180) * minL]
      ctx.save()
      ctx.beginPath()
      ctx.lineWidth = scaleW
      ctx.lineCap = "round"
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
    }
   }
```
## 如何绘制时针/分针/秒针  
思路：  
1. 已知指针的起点坐标（x0,y0）  
2. 计算出指针的终点坐标（x1,y1）,便可通过`lineTo`的方式进行绘制  
如何计算终点坐标 与绘制刻度的思想式类似的  

代码如下：
``` javascript
drawTimeNeedle(ctx, x0, y0, lineW, L, angel, color = '#000') {
    let [x, y] = [x0 + Math.cos(angel * Math.PI / 180) * L, y0 + Math.sin(angel * Math.PI / 180) * L]
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = lineW
    ctx.lineCap = "round"
    ctx.moveTo(x0, y0)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  },
```
