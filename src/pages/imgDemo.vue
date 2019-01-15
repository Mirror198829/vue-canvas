<!--
 * @Author: caojing
 * @Date: 2019-01-11 16:22:52
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-15 20:37:12
 * @Description:图片处理相关demo 
 -->
<template>
  <div class="imgDemo">
    <input type="button" value="->">
    <canvas width="400" height="400" id="c1"></canvas>
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
      drawTime() {
        let c = document.getElementById('c2')
        let ctx = c.getContext('2d')
        let L = 150
        let [x1, y1] = [200, 200]
        let L2 = 170

        for (let i = 0; i < 12; i++) {
          let angel = -90 + i * 30
          let [x2, y2] = [x1 + Math.cos(angel * Math.PI / 180) * L, y1 + Math.sin(angel * Math.PI / 180) * L]
          let [x3, y3] = [x1 + Math.cos(angel * Math.PI / 180) * L2, y1 + Math.sin(angel * Math.PI / 180) * L2]
          ctx.arc(200, 200, 20, 0, 360 * Math.PI / 180)
          ctx.fill()
          ctx.save()
          ctx.beginPath()
          ctx.lineWidth = 10;
          ctx.lineJoin = "round";
          ctx.moveTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.closePath()
          ctx.stroke()
        }

      }
    },
    mounted() {
      this.initCanvas()
      this.drawTime()
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
    background: #C2D3E5;
  }

  canvas {
    background: #fff
  }

</style>
