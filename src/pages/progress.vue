<!--
 * @Author: caojing
 * @Date: 2018-12-12 14:20:12
 * @LastEditors: caojing
 * @LastEditTime: 2018-12-12 15:16:01
 * @Description: 
 -->
<template>
  <div>
    <canvas id="progressCav">

    </canvas>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        canvasW: 300,
        canvasH: 300,
        color: '#1080d0'
      }
    },
    components: {

    },
    methods: {
      initCanvas() {
        let canvas = document.getElementById('progressCav')
        let ctx = canvas.getContext('2d')
        canvas.width = this.canvasW
        canvas.height = this.canvasH
        this.drawCircle(ctx) //绘制圆圈
        this.drawSin(0, this.color, 230,ctx)
      },
      drawCircle(ctx) {
        let [x, y, r] = [this.canvasW / 2, this.canvasW / 2, this.canvasW / 2 - 20]
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
      },
      drawSin(ctx) {
        
      }
    },
    mounted() {
      this.initCanvas()
    },
    created() {}
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>
  #progressCav {
    border: 1px solid red
  }

</style>
