<!--
 * @Author: caojing
 * @Date: 2019-01-08 11:25:47
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-08 11:50:08
 * @Description: canvas变换示例
 -->
<template>
  <div class="tranformDemo">
    <div class="canvasWrap">
      <div class="canvasItem">
        <canvas width="300" height="300"></canvas>
      </div>
      <div class="canvasItem">
        <canvas width="300" height="300"></canvas>
      </div>
      <div class="canvasItem">
        <canvas width="300" height="300"></canvas>
      </div>
    </div>
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

    },
    mounted() {

    },
    created() {}
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>
  .tranformDemo {
    height: 100%;
    width: 100%;
    background: #333;
    display: flex;
    align-items: center;
    justify-content:center;
  }

  .canvasWrap {
    width: 950px;
    display: flex;
    align-items: start;
    justify-content:space-between;
  }

  .canvasItem {
    background: #fff;
  }

</style>
