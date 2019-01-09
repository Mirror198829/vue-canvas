<!--
 * @Author: caojing
 * @Date: 2019-01-08 11:25:47
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-09 11:32:20
 * @Description: canvas变换示例
 -->
<template>
  <div class="tranformDemo">
    <div class="canvasWrap">
      <div class="canvasItem">
        <canvas :width="canvas.width" :height="canvas.height" id="c0"></canvas>
      </div>
      <div class="canvasItem">
        <canvas :width="canvas.width" :height="canvas.height" id="c1"></canvas>
      </div>
      <div class="canvasItem">
        <canvas :width="canvas.width" :height="canvas.height" id="c2"></canvas>
      </div>
      <div class="canvasItem">
        <canvas :width="canvas.width" :height="canvas.height" id="c3"></canvas>
      </div>
      <div class="canvasItem">
        <canvas :width="canvas.width" :height="canvas.height" id="c4"></canvas>
      </div>
      <div class="canvasItem">
        <canvas :width="canvas.width" :height="canvas.height" id="c5"></canvas>
      </div>
      <div class="canvasItem">
        <canvas :width="canvas.width" :height="canvas.height" id="c6"></canvas>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: '',
    data() {
      return {
        canvas: {
          width: 250,
          height: 250
        },
        rect: {
          x: 85,
          y: 85,
          width: 80,
          height: 80
        },
        timer: null,
        timer1: null,
        timer2: null
      }
    },
    components: {

    },
    methods: {
      initC0() {
        let c0 = document.getElementById('c0')
        let ctx = c0.getContext('2d')
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#38472D"
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
        ctx.closePath()
        ctx.restore()
      },
      initC1() {
        let c1 = document.getElementById('c1')
        let ctx = c1.getContext('2d')
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#60B6FF"
        ctx.translate(50, 0) //x移动150 y移动150
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
        ctx.closePath()
        ctx.restore()
      },
      initC2() {
        let c2 = document.getElementById('c2')
        let ctx = c2.getContext('2d')
        ctx.save()
        ctx.beginPath()
        ctx.rotate(20 * Math.PI / 360) //旋转的中心点 为左上角的中心点
        ctx.fillStyle = "#60B6FF"
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
        ctx.closePath()
        ctx.restore()
      },
      initC3() {
        let c3 = document.getElementById('c3')
        let ctx = c3.getContext('2d')
        ctx.save()
        ctx.beginPath()
        ctx.scale(1.5, 1.5) //旋转的中心点 为左上角的中心点
        ctx.fillStyle = "#60B6FF"
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
        ctx.closePath()
        ctx.restore()
      },
      initC4() {
        let c4 = document.getElementById('c4')
        let ctx = c4.getContext('2d')
        let num = 0
        let [width, height] = [100, 100]

        this.timer = setInterval(() => {
          num++
          ctx.save()
          ctx.beginPath()
          ctx.clearRect(0, 0, c4.width, c4.height)
          ctx.translate(this.canvas.width / 2, this.canvas.height / 2)
          ctx.rotate(num * Math.PI / 180)
          ctx.translate(-width / 2, -height / 2)
          ctx.fillStyle = "#2F7EE2"
          ctx.fillRect(0, 0, width, height)
          ctx.closePath()
          ctx.restore()
        }, 10)
      },
      initC5() {
        let c5 = document.getElementById('c5')
        let ctx = c5.getContext('2d')
        let num = 0
        let scaleNum = 0
        let [width, height] = [100, 100]
        let isPlus = true
        this.timer1 = setInterval(() => {
          num++
          if (scaleNum >= 2) isPlus = false
          if (scaleNum <= 0) isPlus = true
          scaleNum = isPlus ? scaleNum + 0.01 : scaleNum - 0.01
          ctx.save()
          ctx.beginPath()
          ctx.clearRect(0, 0, c4.width, c4.height)
          ctx.translate(this.canvas.width / 2, this.canvas.height / 2)
          ctx.rotate(num * Math.PI / 180)
          ctx.translate(-width * scaleNum / 2, -height * scaleNum / 2)
          ctx.scale(scaleNum, scaleNum)
          ctx.fillStyle = "#DE3A00"
          ctx.fillRect(0, 0, width, height)
          ctx.closePath()
          ctx.restore()
        }, 10)
      },
      initC6() {
        let c6 = document.getElementById('c6')
        let ctx = c6.getContext('2d')
        let [x, y] = [0, 0]

        let [width, height] = [50, 50]
        let isPlus = true
        this.timer2 = setInterval(() => {

          if (x < c6.width - width && y == 0) {
            x++
          } else if (x == c6.width - width && y < c6.height - height) {
            x = c6.width - width
            y++
          } else if (y >= c6.height - height && x > 0) {
            y = c6.height - height
            x--
          } else if (x <= 0 && y <= c6.height - height) {
            x = 0
            y--
          }

          ctx.save()
          ctx.beginPath()
          ctx.clearRect(0, 0, c6.width, c6.height)

          ctx.fillStyle = "#DE3A00"
          ctx.fillRect(x, y, width, height)
          ctx.closePath()
          ctx.restore()
        }, 10)
      }
    },
    mounted() {
      this.initC0() //目标方块
      this.initC1() //移动
      this.initC2() //旋转
      this.initC3() //放大
      this.initC4() //围绕中心旋转
      this.initC5() //自动选装放大
      this.initC6() //自动移动
    },
    created() {},
    destroyed() {
      clearInterval(this.timer)
      this.timer = null
      clearInterval(this.timer1)
      this.timer1 = null
    },
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>
  .tranformDemo {
    height: 100%;
    width: 100%;
    background: #C2D3E5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .canvasWrap {
    width: 1100px;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-wrap: wrap;
  }

  .canvasItem {
    background: #fff;
    width: 250px;
    margin: 10px;
    height:250px;
  }

</style>
