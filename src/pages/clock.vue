<!--
 * @Author: caojing
 * @Date: 2019-01-04 14:51:43
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-07 14:52:11
 * @Description: clock
 -->
<template>
<div>
     <canvas id="clock" width="400" height="400"></canvas>           
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
      let canvas = document.getElementById('clock')
      let ctx = canvas.getContext('2d')
      
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

</style>