# 介绍
``` html
<!-- 默认：宽300 高150 -->
<canvas>
    不支持canvas的浏览器 
</canvas>
```
## 路径
`beginPath`:开始绘制路径  
`moveTo`:移动到绘制的新目标点  
`lineTo`: 新的目标点  
`closePath`:结束绘制路径，闭合，可以作为起止点闭合的连接  
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
ctx.restore() // 与save()呼应
//2nd part
ctx.beginPath()
ctx.moveTo(100,200)
ctx.lineTo(200,200)
ctx.lineTo(300,100)
ctx.closePath()
ctx.stroke()
```
## 问题
#### `canvas`通过css设置宽高的时候，画布内容大小发生变化
``` html
#canvas{width:600px;height:300px} //这种写法导致，canvas等比例缩放，变成canvas图像默认值的2倍。
```
# canvas
参考文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage
