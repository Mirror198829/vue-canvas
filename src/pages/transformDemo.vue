<!--
 * @Author: caojing
 * @Date: 2019-01-08 11:25:47
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-08 16:33:59
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
        }
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
        ctx.fillStyle = "#ccc"
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
        ctx.closePath()
        ctx.restore()
      },
      initC1() {
        let c1 = document.getElementById('c1')
        let ctx = c1.getContext('2d')
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "red"
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
        ctx.fillStyle = "red"
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
        ctx.fillStyle = "red"
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
        ctx.closePath()
        ctx.restore()
      },
      initC4(){
        let c4 = document.getElementById('c4')
        let ctx = c4.getContext('2d')
        let num = 0
      ctx.translate(105,105)
        setInterval(()=>{
        num ++
        ctx.save()
        ctx.beginPath()
        ctx.clearRect(-105,-105,c4.width,c4.height)
        ctx.rotate( num *Math.PI/ 180)
      ctx.translate(-40,-40)
      ctx.fillStyle = "yellow"
        ctx.fillRect(0,0,100,100)
        ctx.closePath()
        ctx.restore()
        },10)  
      }
    },
    mounted() {
      this.initC0()
      this.initC1()
      this.initC2()
      this.initC3()
      this.initC4()
    },
    created() {}
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>
  .tranformDemo {
    height: 100%;
    width: 100%;
    background: #999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .canvasWrap {
    width: 1100px;
    display: flex;
    align-items: start;
    justify-content:start;
    flex-wrap:wrap;
  }

  .canvasItem {
    background: #fff;
    width:250px;
    margin:10px;
  }

</style>
