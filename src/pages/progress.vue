<!--
 * @Author: caojing
 * @Date: 2018-12-12 14:20:12
 * @LastEditors: caojing
 * @LastEditTime: 2018-12-14 15:35:42
 * @Description: 
 -->
<template>
  <div>
    <canvas id="progressCav"></canvas>
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
        this.render(ctx)
      },
      render(){
        let canvas = document.getElementById('progressCav')
        let ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.drawCircle(ctx) //绘制圆圈
        this.drawSin(ctx) //绘制波浪线
        requestAnimationFrame(()=>{
          this.render()
        });
      },
      drawCircle(ctx) {
        let [x, y, r] = [this.canvasW / 2, this.canvasW / 2, this.canvasW / 2 - 20]
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.closePath()
        ctx.stroke()
        ctx.clip();
      },
      drawSin(ctx) {
        let waveH = 250
        let disH = 30
        let cp1x = parseInt(Math.random()*(this.canvasW/2-20-20+1)+20,10)
        let cp1y = parseInt(Math.random()*(2*disH+1)+waveH-disH,10)
        let cp2x = parseInt(Math.random()*(this.canvasW - 20-(this.canvasW/2 + 20)+1)+this.canvasW/2 + 20,10)
        let cp2y = parseInt(Math.random()*(2*disH+1)+waveH-disH,10)
        let endX = this.canvasW
        let endY = waveH 
        ctx.save()
        ctx.beginPath();
        ctx.moveTo(0, waveH)
        ctx.bezierCurveTo(cp1x, cp1y,cp2x, cp2y, endX, endY);
        ctx.lineTo(this.canvasW, this.canvasH)
        ctx.lineTo(0, this.canvasH)
        ctx.lineTo(0, waveH)
        ctx.closePath()
        ctx.stroke();

        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
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
  #progressCav {}
</style>
