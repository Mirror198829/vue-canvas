<!--
 * @Author: caojing
 * @Date: 2019-01-11 16:22:52
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-16 14:35:35
 * @Description:图片处理相关demo 
 -->
<template>
  <div class="imgDemo">
    <canvas width="400" height="400" id="imgC1"></canvas>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {

      }
    },
    components: {

    },
    methods: {
      initCanvas() {
        let c = document.getElementById('imgC1')
        let ctx = c.getContext('2d')
        let yImg = new Image()
        yImg.onload = () => {
          ctx.drawImage(yImg, 30, 30, 100, 50)
          let bg = ctx.createPattern(yImg, 'repeat')
          ctx.fillStyle = bg
          ctx.fillRect(20, 100, 400, 300)
        }
        yImg.src = 'src/assets/logo.png'
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
  .imgDemo {
    width: 100%;
    height: 100%;
    background: #C2D3E5;
  }

  canvas {
    background: #fff
  }

</style>
