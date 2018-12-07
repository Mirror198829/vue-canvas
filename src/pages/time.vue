<!--
 * @Author: caojing
 * @Date: 2018-11-30 17:02:32
 * @LastEditors: caojing
 * @LastEditTime: 2018-12-07 11:46:49
 * @Description: 时间的canvas
 -->
<template>
  <div>
    <canvas id="canvasTime"></canvas>
  </div>
</template>

<script>
  import digit from '../data/digit'
  export default {
    name: '',
    data() {
      return {
        storeTime: new Date(),
        RADIUS: 7,
        WIN_WIDTH: 1024,
        WIN_HEIGHT: 768,
        balls: [],
        colors: ['#33B5E5', '#0099CC', '#AA66CC', '#9933CC', '#99CC00', '#669900', '#FFBB33', '#FF8800', '#FF444']
      }
    },
    components: {

    },
    methods: {
      initCanvas() {
        const WIN_WIDTH = this.WIN_WIDTH
        const WIN_HEIGHT = this.WIN_HEIGHT
        let timer = null
        let canvas = document.getElementById('canvasTime')
        let context = canvas.getContext('2d')
        canvas.width = WIN_WIDTH
        canvas.height = WIN_HEIGHT
        this.render(context) //初始启动绘画
        clearInterval(timer)
        timer = setInterval(() => {
          this.render(context)
        }, 1000)
      },
      render(cxt) {
        let nextTime = new Date()
        let storeTime = this.storeTime
        let [nextHours, nextMinutes, nextSeconds] = [0, 0, 0]
        let [beforeHours, beforeMinutes, beforeSeconds] = [0, 0, 0]
        

        nextHours = nextTime.getHours()
        nextMinutes = nextTime.getMinutes()
        nextSeconds = nextTime.getSeconds()

        beforeHours = storeTime.getHours()
        beforeMinutes = storeTime.getMinutes()
        beforeSeconds = storeTime.getSeconds()

        
        cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height); //清除画布
        this.renderBall(nextHours, nextMinutes, nextSeconds,beforeHours, beforeMinutes, beforeSeconds, cxt)
        this.renderTime(nextHours, nextMinutes, nextSeconds, cxt) //回执时间
        this.storeTime = nextTime
      },
      renderBall(nextHours, nextMinutes, nextSeconds,beforeHours, beforeMinutes, beforeSeconds, cxt){
        const [MARGIN_LEFT, MARGIN_TOP, DIST] = [12, 40, 15]
        if (parseInt(beforeHours / 10) != parseInt(nextHours / 10))
          this.addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(beforeHours / 10))
        if (parseInt(beforeMinutes / 10) != parseInt(nextMinutes / 10))
          this.addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(beforeHours / 10))
      },
      addBalls() {},
      renderTime(hours, minutes, seconds, cxt) {
        const [MARGIN_LEFT, MARGIN_TOP, DIST] = [12, 40, 15]
        const RADIUS = this.RADIUS
        this.renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt) //绘制数字
        this.renderDigit(MARGIN_LEFT + DIST * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt)
        this.renderDigit(MARGIN_LEFT + 2 * DIST * (RADIUS + 1), MARGIN_TOP, 10, cxt)
        this.renderDigit(MARGIN_LEFT + 3 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt)
        this.renderDigit(MARGIN_LEFT + 4 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), cxt)
        this.renderDigit(MARGIN_LEFT + 5 * DIST * (RADIUS + 1), MARGIN_TOP, 10, cxt)
        this.renderDigit(MARGIN_LEFT + 6 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), cxt)
        this.renderDigit(MARGIN_LEFT + 7 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), cxt)
      },
      renderDigit(x, y, num, cxt) {
        cxt.fillStyle = 'rgb(0,102,153)'
        digit[num].forEach((item, i) => {
          item.forEach((dig, j) => {
            if (dig == 1) {
              let R = this.RADIUS
              let centerX = x + j * 2 * (R + 1) + (R + 1)
              let centerY = y + i * 2 * (R + 1) + (R + 1)
              cxt.beginPath()
              cxt.arc(centerX, centerY, R, 0, 2 * Math.PI)
              cxt.closePath()
              cxt.fill()
            }
          })
        })
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

</style>
