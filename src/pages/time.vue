<!--
 * @Author: caojing
 * @Date: 2018-11-30 17:02:32
 * @LastEditors: caojing
 * @LastEditTime: 2018-12-06 16:47:48
 * @Description: 时间的canvas
 -->
<template>
  <div>
    <canvas id="canvasTime">

    </canvas>
  </div>
</template>

<script>
  import digit from '../data/digit'
  export default {
    name: '',
    data() {
      return {
        RADIUS:5,
      }
    },
    components: {

    },
    methods: {
      initCanvas() {
        const WIN_WIDTH = 1024
        const WIN_HEIGHT = 768
        let canvas = document.getElementById('canvasTime')
        let context = canvas.getContext('2d')
        canvas.width = WIN_WIDTH
        canvas.height = WIN_HEIGHT
        setInterval(() => {
          context.clearRect(0,0,WIN_WIDTH,WIN_HEIGHT);
          this.render(context)
        },1000)
      },
      render(cxt){
         let [curTime,endTime] = [0,0]
         let [hour,minutes,seconds]=[0,0,0]
         let RADIUS = this.RADIUS
         const MARGIN_LEFT = 12
         const MARGIN_TOP = 40
         const DIST = 15
         endTime = new Date(2018,11,6,17,50,12)
         curTime = new Date()
         let ret = endTime.getTime() - curTime.getTime()
         ret = Math.round(ret / 1000)
         ret > 0 ? ret : 0
         hour = parseInt(ret/3600)
         minutes = parseInt((ret - hour*3600)/60)
         seconds = ret % 60
         this.renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hour/10),cxt) //绘制数字
         this.renderDigit(MARGIN_LEFT + DIST*(RADIUS+1),MARGIN_TOP,parseInt(hour%10),cxt)
         this.renderDigit(MARGIN_LEFT + 2*DIST*(RADIUS+1),MARGIN_TOP,10,cxt)
         this.renderDigit(MARGIN_LEFT + 3*DIST*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt)
         this.renderDigit(MARGIN_LEFT + 4*DIST*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt)
         this.renderDigit(MARGIN_LEFT + 5*DIST*(RADIUS+1),MARGIN_TOP,10,cxt)
         this.renderDigit(MARGIN_LEFT + 6*DIST*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt)
         this.renderDigit(MARGIN_LEFT + 7*DIST*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt)
      },
      renderDigit(x,y,num,cxt){
        cxt.fillStyle = 'rgb(0,102,153)'
        digit[num].forEach((item,i) => {
          item.forEach((dig,j) => {
            if(dig == 1) {
              let R = this.RADIUS
              let centerX = x + j*2*(R+1) + (R+1)
              let centerY = y + i*2*(R+1) + (R+1)
              cxt.beginPath()
              cxt.arc(centerX,centerY,R,0,2*Math.PI)
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
