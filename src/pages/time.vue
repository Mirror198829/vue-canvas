<!--
 * @Author: caojing
 * @Date: 2018-11-30 17:02:32
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-08 19:53:25
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
        timer:null,
        storeTime: new Date(),
        RADIUS: 7,
        WIN_WIDTH:0,
        WIN_HEIGHT:0,
        balls: [],
        MARGIN_LEFT:12, 
        MARGIN_TOP:40,
        DIST:15,
        colors: ['red','#33B5E5', '#0099CC', '#AA66CC', '#9933CC', '#99CC00', '#669900', '#FFBB33', '#FF8800', '#FF444']
      }
    },
    components: {

    },
    methods: {
      initConfig(){
        this.WIN_WIDTH = ($('.routerMain').width())
        this.WIN_HEIGHT = $('.routerMain').height() 
        let timeW = this.WIN_WIDTH > 1000 ? 1000 : this.WIN_WIDTH
        this.RADIUS = Math.round(timeW *4 / 5 / 98) -1
        this.MARGIN_LEFT = (this.WIN_WIDTH - timeW) / 2
      },
      initCanvas() {
        let canvas = document.getElementById('canvasTime')
        let context = canvas.getContext('2d')
        canvas.width = this.WIN_WIDTH
        canvas.height = this.WIN_HEIGHT
        this.render(context) //初始启动绘画
        
        this.timer = setInterval(() => {
          this.render(context)
        }, 50)
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
        this.renderBall(nextHours, nextMinutes, nextSeconds,beforeHours, beforeMinutes, beforeSeconds, cxt)//添加小球
       
        this.updateBalls(cxt) //更新小球信息
        this.renderTime(nextHours, nextMinutes, nextSeconds, cxt) //绘制时间
        this.storeTime = nextTime
      },
      renderBall(nextHours, nextMinutes, nextSeconds,beforeHours, beforeMinutes, beforeSeconds, cxt){
        const [MARGIN_LEFT, MARGIN_TOP, DIST] = [this.MARGIN_LEFT, this.MARGIN_TOP, this.DIST]
        const RADIUS = this.RADIUS
        if (parseInt(beforeHours / 10) != parseInt(nextHours / 10))
          this.addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(nextHours / 10))
        if (parseInt(beforeHours % 10) != parseInt(nextHours % 10))
          this.addBalls(MARGIN_LEFT  + 1 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(nextHours % 10))
        if (parseInt(beforeMinutes / 10) != parseInt(nextMinutes / 10))
          this.addBalls(MARGIN_LEFT + 3 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(nextMinutes / 10))
        if (parseInt(beforeMinutes % 10) != parseInt(nextMinutes % 10))
          this.addBalls(MARGIN_LEFT + 4 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(nextMinutes % 10))
        if (parseInt(beforeSeconds / 10) != parseInt(nextSeconds / 10))
          this.addBalls(MARGIN_LEFT + 6 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(nextSeconds / 10))
        if (parseInt(beforeSeconds % 10) != parseInt(nextSeconds % 10))
          this.addBalls(MARGIN_LEFT + 7 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(nextSeconds % 10))
      },
      addBalls(x,y,num) {
        let RADIUS = this.RADIUS
        digit[num].forEach((digit,i) => {
          digit.forEach((item,j) => {
            if(item == 1){
              let aBall = {
                x:x + j*2*(RADIUS+1)+(RADIUS+1),
                y:y + i*2*(RADIUS+1)+(RADIUS+1),
                g:1.5+Math.random(),
                vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
                vy:-10,
                color:this.colors[Math.floor(Math.random()*this.colors.length)]
              }  
              this.balls.push(aBall)
            }
          })
        })
      },
      updateBalls(cxt){
        this.balls.forEach((ball,index) => {
          const [RADIUS,WIN_WIDTH,WIN_HEIGHT] = [this.RADIUS,this.WIN_WIDTH,this.WIN_HEIGHT]
          ball.x += ball.vx
          ball.y += ball.vy
          ball.vy += ball.g
          if(ball.y >= WIN_HEIGHT - RADIUS){
            ball.y = WIN_HEIGHT - RADIUS
            ball.vy = -ball.vy * 0.75
          }

          let cnt = 0
          const MAXNUM = 200
          this.balls.forEach((item,index) => {
            if(item.x + RADIUS > 0 && item.x - RADIUS < WIN_WIDTH)
              this.balls[cnt++] = item
          }) //在这个屏幕内的小球
          while(this.balls.length > cnt ){
              this.balls.pop()
          }//删除屏幕外的小球
          if(this.balls.length - MAXNUM){
            let delLen = this.balls.length - MAXNUM
            for(let i = 0; i < delLen; i ++){
              let max = this.balls.length - 20
              let min = 1
              let num = Math.floor(Math.random()*(max-min+1)+min)
              this.balls.splice(num,1)
            }
          }//随机删除超出200个小球的球
        })
      },
      renderTime(hours, minutes, seconds, cxt) {
        const [MARGIN_LEFT, MARGIN_TOP, DIST] = [this.MARGIN_LEFT, this.MARGIN_TOP, this.DIST]
        const RADIUS = this.RADIUS
        this.renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt) //绘制数字
        this.renderDigit(MARGIN_LEFT + DIST * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt)
        this.renderDigit(MARGIN_LEFT + 2 * DIST * (RADIUS + 1), MARGIN_TOP, 10, cxt)
        this.renderDigit(MARGIN_LEFT + 3 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt)
        this.renderDigit(MARGIN_LEFT + 4 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), cxt)
        this.renderDigit(MARGIN_LEFT + 5 * DIST * (RADIUS + 1), MARGIN_TOP, 10, cxt)
        this.renderDigit(MARGIN_LEFT + 6 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), cxt)
        this.renderDigit(MARGIN_LEFT + 7 * DIST * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), cxt)

        this.balls.forEach((ball,index) => {
          cxt.fillStyle = ball.color
          cxt.beginPath()
          cxt.arc(ball.x,ball.y,this.RADIUS,0,2*Math.PI,true)
          cxt.closePath()
          cxt.fill()
        })        
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
      },
      bindWindow(){
        window.onblur = () =>{
          clearInterval(this.timer)
        }
        window.onfocus = () =>{
          clearInterval(this.timer)
          this.initCanvas()
        }
        window.onresize = () =>{
          clearInterval(this.timer)
          this.initConfig()
          this.initCanvas()
        }
      }
    },
    mounted() {
      this.bindWindow()//绑定win的移入移出事件
      this.initConfig()
      this.initCanvas()
    },
    created() {},
    destroyed() {
      clearInterval(this.timer)
      this.timer = null
    },
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>

</style>
