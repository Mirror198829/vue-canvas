<!--
 * @Author: caojing
 * @Date: 2019-01-11 16:22:52
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-16 14:30:08
 * @Description:图片处理相关demo 
 -->
<template>
  <div class="imgDemo">
    <!-- <canvas width="400" height="400" id="c1"></canvas> -->
    <canvas width="400" height="400" id="c2"></canvas>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {

      }
    },
    components: {

    },
    methods: {
      initCanvas() {
        let c = document.getElementById('c1')
        let ctx = c.getContext('2d')
        let yImg = new Image()
        yImg.onload = () => {
          ctx.drawImage(yImg, 30, 30, 100, 50)
          let bg = ctx.createPattern(yImg, 'repeat')
          ctx.fillStyle = bg
          ctx.fillRect(20, 100, 400, 300)
        }
        yImg.src = 'src/assets/logo.png'
      },
      drawTimeTxt(ctx, x, y, i) {
        if (i == 0) i = 12
        ctx.save()
        ctx.beginPath()
        ctx.font = '28px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(i, x, y);
        ctx.closePath()
        ctx.restore()
      },
      drawTimeNeedle(ctx, lineW, L, angel,color) {
        let [x, y] = [200 + Math.cos(angel) * L, 200 + Math.sin(angel) * L]
        ctx.save()
        ctx.beginPath()
        ctx.shadowOffsetX = 0; // 设置水平位移
        ctx.shadowOffsetY = 0; // 设置垂直位移
        ctx.shadowBlur = 5; // 设置模糊度
        ctx.shadowColor = "#ccc"
        ctx.lineWidth = lineW;
        ctx.lineCap = "round";
        ctx.strokeStyle=color
        ctx.moveTo(x, y);
        ctx.lineTo(200, 200);
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
      },
      drawSecondDotted(ctx,angel,color){
        let L = 12
        let [x, y] = [200 + Math.cos(angel) * L, 200 + Math.sin(angel) * L]
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle=color
        ctx.arc(x,y,7,0,360*Math.PI/180)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
      },
      drawTime() {
        let c = document.getElementById('c2')
        let ctx = c.getContext('2d')
        let L = 175
        let [x1, y1] = [200, 200]
        let L2 = L + 20
        let L3 = L + 18
        let L4 = L + 10
        let L5 = L - 25


        let angel = 185
        let [x, y] = [200 + Math.cos(angel * Math.PI / 180) * L, 200 + Math.sin(angel * Math.PI / 180) * L]

        ctx.clearRect(0,0,c.width,c.height)
        for (let i = 0; i < 12; i++) {
          let angel = -90 + i * 30
          let [x2, y2] = [x1 + Math.cos(angel * Math.PI / 180) * L, y1 + Math.sin(angel * Math.PI / 180) * L]
          let [x3, y3] = [x1 + Math.cos(angel * Math.PI / 180) * L2, y1 + Math.sin(angel * Math.PI / 180) * L2]
          let [x4, y4] = [x1 + Math.cos(angel * Math.PI / 180) * L5, y1 + Math.sin(angel * Math.PI / 180) * L5]
          ctx.save()
          ctx.beginPath()
          ctx.lineWidth = 8;
          ctx.lineJoin = "round";
          ctx.moveTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.closePath()
          ctx.stroke()
          ctx.restore()
          this.drawTimeTxt(ctx, x4, y4, i)
        }
        for (let i = 0; i < 60; i++) {
          let angel = -90 + i * 6
          let [x2, y2] = [x1 + Math.cos(angel * Math.PI / 180) * L3, y1 + Math.sin(angel * Math.PI / 180) * L3]
          let [x3, y3] = [x1 + Math.cos(angel * Math.PI / 180) * L4, y1 + Math.sin(angel * Math.PI / 180) * L4]
          ctx.fill()
          ctx.save()
          ctx.beginPath()
          ctx.lineWidth = 2;
          ctx.lineJoin = "round";
          ctx.moveTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.closePath()
          ctx.stroke()
          ctx.restore()
        }
        let oDate = new Date()
        let oHours = oDate.getHours()
        let oMin = oDate.getMinutes()
        let oSen = oDate.getSeconds()
        let oHoursValue = (-90 + oHours * 30 + oMin / 2) * Math.PI / 180
        let oMinValue = (-90 + oMin * 6) * Math.PI / 180
        let oSenValue = (-90 + oSen * 6) * Math.PI / 180
        let oSenDotted = (-90-180 + oSen * 6) * Math.PI / 180


        this.drawTimeNeedle(ctx, 15, 135, oHoursValue,"#212121")
        this.drawTimeNeedle(ctx, 7, 170, oMinValue,"#212121")
        this.drawTimeNeedle(ctx, 3, 193, oSenValue,"#f3a829")
        this.drawSecondDotted(ctx,oSenDotted,"#f3a829") //绘制秒针尾部

        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#f3a829"
        ctx.shadowBlur=2;
        ctx.shadowColor = "#000"
        ctx.arc(200, 200, 15, 0, 360 * Math.PI / 180)
        ctx.fill()
        ctx.closePath()
        ctx.restore()  
      }
    },
    mounted() {
     // this.initCanvas()
      setInterval(()=>{
         this.drawTime()
      },20)
    },
    created() {}
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>
  .imgDemo {
    width: 100%;
    height: 100%;
    background: radial-gradient(#fff,#f5f7f4, #b9b8b7);;
  }

  canvas {}

</style>
