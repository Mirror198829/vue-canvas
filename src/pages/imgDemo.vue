<!--
 * @Author: caojing
 * @Date: 2019-01-11 16:22:52
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-14 15:59:48
 * @Description:图片处理相关demo 
 -->
<template>
<div class="imgDemo">
    <input type="button" value="->">
    <canvas width="400" height="400" id="c1"></canvas>
</div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  },
  components: {

  },
  methods:{
    initCanvas(){
      let c = document.getElementById('c1')
      let ctx = c.getContext('2d')
      let yImg = new Image()
      yImg.onload = ()=>{
        ctx.drawImage(yImg,30,30,200,40)
      }
      yImg.src = 'src/assets/logo.png'  
    }
  },
  mounted(){
    this.initCanvas()
  },
  created(){}
}
</script>

<style lang="less">

</style>
<style lang="less" scoped>
.imgDemo{
    width:100%;
    height:100%;
    background:#C2D3E5;
}
canvas{
  background:#fff
}
</style>