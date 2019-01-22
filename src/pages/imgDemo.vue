<!--
 * @Author: caojing
 * @Date: 2019-01-11 16:22:52
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-22 10:25:05
 * @Description:图片图像
 -->
<template>
  <div class="imgDemo">
    <canvas :width="width" :height="height" id="imgC1" class="imgC"></canvas>
    <canvas :width="width" :height="height" id="imgC2" class="imgC"></canvas>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        width: 250,
        height: 250
      }
    },
    components: {

    },
    methods: {
      drawImg() {
        let c = document.getElementById('imgC1')
        let ctx = c.getContext('2d')
        let yImg = new Image()
        yImg.onload = () => {
          ctx.drawImage(yImg, 0, 0, 100, 50)
          let bg = ctx.createPattern(yImg, 'repeat')
          ctx.fillStyle = bg
          ctx.fillRect(0, 50, 400, 300)
        }
        yImg.src = 'src/assets/logo.png'
      },
      dramRadialGradient() {
        let c = document.getElementById("imgC2");
        let ctx = c.getContext("2d");
        let [x0,y0,r] = [this.width / 2 , this.height / 2, 100]
        let grd = ctx.createRadialGradient(x0, y0, r/2, x0, y0, r);
        grd.addColorStop(0, "white")
        grd.addColorStop(1, "red")

        // Fill with gradient
        ctx.setLineDash([10, 15])
        ctx.lineWidth=5;
        ctx.fillStyle = grd
        ctx.arc(x0, y0, r, 0, 360 * Math.PI / 180)
        ctx.fill()
        ctx.stroke()
      }
    },
    mounted() {
      this.drawImg()
      this.dramRadialGradient() //绘制一个圆形渐变
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imgC {
    background: #fff;
    margin: 10px
  }

</style>
