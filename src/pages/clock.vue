<!--
 * @Author: caojing
 * @Date: 2019-01-04 14:51:43
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-08 19:43:31
 * @Description: clock
 -->
<template>
  <div>
    <canvas id="clock" width="400" height="400"></canvas>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        timer:null
      }
    },
    components: {

    },
    methods: {
      initCanvas() {
        let canvas = document.getElementById('clock')
        let ctx = canvas.getContext('2d')
        let [x, y, r] = [200, 200, 120]
        let oDate = new Date()
        let oHours = oDate.getHours()
        let oMin = oDate.getMinutes()
        let oSen = oDate.getSeconds()
        let oHoursValue = (-90 + oHours * 30 + oMin / 2) * Math.PI / 180
        let oMinValue = (-90 + oMin * 6) * Math.PI / 180
        let oSenValue = (-90 + oSen * 6) * Math.PI / 180
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.drawHandScale(ctx, x, y, r, 60, 1, r - 10) //绘制刻度表盘
        this.drawHandScale(ctx, x, y, r, 12, 3, r - 18)
        this.drawLine(ctx, x, y, 10 / 20 * r, 5, oHoursValue) //时针
        this.drawLine(ctx, x, y, 13 / 20 * r, 3, oMinValue) //分针
        this.drawLine(ctx, x, y, 18 / 20 * r, 1, oSenValue) //秒针
        this.drawDotted(ctx,x,y)
      },
      drawHandScale(ctx, x, y, r, num, lineW, delR) {
        let avgRad = 360 / num
        for (let i = 0; i < num; i++) {
          ctx.save()
          ctx.lineWidth = lineW
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.arc(x, y, r, i * avgRad * Math.PI / 180, (i + 1) * avgRad * Math.PI / 180, false)
          ctx.closePath()
          ctx.stroke()
          ctx.restore()
        }
        ctx.save()
        ctx.fillStyle = "#fff"
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.arc(x, y, delR, 0, 360 * Math.PI / 180, false)
        ctx.fill()
        ctx.restore()
      },
      drawLine(ctx, x, y, r, lineW, rad) {
        ctx.save()
        ctx.lineWidth = lineW
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.arc(x, y, r, rad, rad, false)
        ctx.closePath()
        ctx.stroke()
      },
      drawDotted(ctx,x,y){
        ctx.save()
        ctx.beginPath()
        ctx.arc(x,y,6,0,360,false)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }
    },
    mounted() {
      
      this.initCanvas()
      this.timer = setInterval(() => {
        this.initCanvas()
      }, 1000)

    },
    created() {},
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    },
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>

</style>
