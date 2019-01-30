<!--
 * @Author: caojing
 * @Date: 2019-01-11 16:22:52
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-30 10:53:31
 * @Description:图片图像
 -->
<template>
  <div class="imgDemo">
    <canvas title="设置canvas背景" :width="width" :height="height" id="imgC1" class="imgC"></canvas>
    <canvas title="径向渐变" :width="width" :height="height" id="imgC2" class="imgC"></canvas>
    <canvas title="线性渐变横向" :width="width" :height="height" id="l1" class="imgC"></canvas>
    <canvas title="线性渐变纵向" :width="width" :height="height" id="l2" class="imgC"></canvas>
    <canvas title="线性渐变对角线" :width="width" :height="height" id="l3" class="imgC"></canvas>
  </div>
</template>

<script>
  import logo from '../../src/assets/logo.png'
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
        yImg.src = logo
      },
      dramRadialGradient() {
        let c = document.getElementById("imgC2");
        let ctx = c.getContext("2d");
        let [x0, y0, r] = [this.width / 2, this.height / 2, 100]
        let grd = ctx.createRadialGradient(x0, y0, r / 2, x0, y0, r);
        grd.addColorStop(0, "white")
        grd.addColorStop(1, "red")

        // Fill with gradient
        ctx.setLineDash([10, 15])
        ctx.lineWidth = 5;
        ctx.fillStyle = grd
        ctx.arc(x0, y0, r, 0, 360 * Math.PI / 180)
        ctx.fill()
        ctx.stroke()
      },
      drawLinearGradient1() {
        let c = document.getElementById('l1')
        let ctx = c.getContext('2d')
        let [x0, y0] = [50, 80]
        let [width, height] = [150, 80]
        let [x1, y1] = [x0 + width, y0 + height]
        let grd = ctx.createLinearGradient(x0, 0, x1, 0);
        this.drawRect(ctx, x0, y0, width, height, grd)
      },
      drawLinearGradient2() {
        let c = document.getElementById('l2')
        let ctx = c.getContext('2d')
        let [x0, y0] = [50, 80]
        let [width, height] = [150, 80]
        let [x1, y1] = [x0 + width, y0 + height]
        let grd = ctx.createLinearGradient(x0, y0, x0, y1)
        this.drawRect(ctx, x0, y0, width, height, grd)
      },
      drawLinearGradient3() {
        let c = document.getElementById('l3')
        let ctx = c.getContext('2d')
        let [x0, y0] = [50, 80]
        let [width, height] = [150, 80]
        let [x1, y1] = [x0 + width, y0 + height]
        let grd = ctx.createLinearGradient(x0, y0, x1, y1)
        this.drawRect(ctx, x0, y0, width, height, grd)
      },
      drawRect(ctx, x, y, width, height, grd) {
        grd.addColorStop(0, "blue")
        grd.addColorStop(0.5, 'yellow')
        grd.addColorStop(1, "red")
        ctx.fillStyle = grd
        ctx.fillRect(x, y, width, height)
      }
    },
    mounted() {
      this.drawImg()
      this.dramRadialGradient() //绘制一个径向渐变
      this.drawLinearGradient1() //绘制一个线性渐变横向
      this.drawLinearGradient2() //绘制一个线性纵向
      this.drawLinearGradient3() //绘制一个线性对对角线
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
