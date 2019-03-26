<!--
 * @Author: caojing
 * @Date: 2019-03-26 14:29:42
 * @LastEditors: caojing
 * @LastEditTime: 2019-03-26 15:17:39
 * @Description: 3d动画交互
 -->
<template>
  <div>
    <div class="sence">
      <div class="box">
        <ul class="ring"></ul>
      </div>
      <div class="item">
        <p>阿斯顿发顺丰大撒旦发射点发射点发射点发阿斯顿发顺丰大撒旦发射点发射点发射点发阿斯顿发顺丰大撒旦发射点发射点发射点发阿斯顿发顺丰大撒旦发射点发射点发射点发</p>
        <i class="fa fa-close itemClose"></i>
      </div>
    </div>
    <ul class="table">
      <li><a href="#">圆球</a></li>
      <li><a href="#">圆锥</a></li>
      <li><a href="#">柱状</a></li>
      <li><a href="#">柱状扭曲</a></li>
    </ul>
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
  .sence {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    transform-style: preserve-3D;
    perspective: 1000px;
    position: relative;
    border:1px solid #000;
  }
  .table{
    width:200px;margin:20px auto 10px;display:flex;justify-content: space-between;
  }

  .box {
    width: 100%;
    height: 100%;
    transform-style: preserve-3D;
  }

  .ring {
    width: 100%;
    height: 100%;
    position: relative;

    li {
      position: absolute;
    }
  }

  .item {
    position: absolute;
    width: 100%;
    border: 1px solid #000;
    top:100px;
    left:0;
    box-sizing:border-box;
    p {
      font: 14px/24px '微软雅黑';
      word-break: break-all;
    }
    .itemClose{
       font-size:18px;
       position:absolute;
       right:5px;
       top:0; 
       cursor: pointer;
    }
  }

</style>
