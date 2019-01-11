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
# 变换
## translate  
  —— 偏移:从起始点为基准点，移动当前坐标位置  
## rotate  
  —— 旋转：参数为弧度  
  围绕画布（0，0）进行旋转
## scale  
  —— 缩放
## 问题
#### `canvas`通过css设置宽高的时候，画布内容大小发生变化
``` html
#canvas{width:600px;height:300px} //这种写法导致，canvas等比例缩放，变成canvas图像默认值的2倍。
```
canvas标签内设置的宽高才是真正画布的宽高
# canvas
参考文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage
