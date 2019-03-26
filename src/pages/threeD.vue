<!--
 * @Author: caojing
 * @Date: 2019-03-26 14:29:42
 * @LastEditors: caojing
 * @LastEditTime: 2019-03-26 17:04:19
 * @Description: 3d动画交互
 -->
<template>
  <div style="position:relative">
    <div class="sence">
      <div class="box">
        <ul class="ring"></ul>
      </div>
      <div class="item">
        <p>阿斯顿发顺丰大撒旦发射点发射点发射点发阿斯顿发顺丰大撒旦发射点发射点发射点发阿斯顿发顺丰大撒旦发射点发射点发射点发阿斯顿发顺丰大撒旦发射点发射点发射点发</p>
        <i class="fa fa-close close"></i>
      </div>
    </div>
    <ul class="table">
      <li><a href="#">圆球</a></li>
      <li><a href="#">圆锥</a></li>
      <li><a href="#">柱状</a></li>
      <li><a href="#">柱状扭曲</a></li>
    </ul>
    <div class="line"></div>
    <div class="btn">
      <button>展开</button>
      <button>自定义文字</button>
    </div>
    <div class="text" v-show="textShow">
      <p>在下面输入你自己的文字</p>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="btn2">
        <button>提交</button>
        <button>重置</button>
        <i class="fa fa-close close" @click="textShow=false"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        textShow:true,
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
  @base-color: #889199;
  @theme-color: #00a0e9;

  .btnClass {
    border: 1px solid #cacaca;
    outline: none;
    transition: all .2s;
    background: linear-gradient(#fff, #d6e1eb);
    cursor: pointer;
    color: @base-color;

    &:hover {
      color: @theme-color;
      background: linear-gradient(#bef5ff, #77c5eb);
      border-color: @theme-color;
    }

    &:active {
      color: @theme-color;
      background: linear-gradient(#77c5eb, #bef5ff);
      border-color: @theme-color;
    }
  }
  .close{
    color:@theme-color;
    position:absolute;
    top:10px;
    right:10px;
    font-size:18px;
    cursor: pointer;
  }

  .sence {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    transform-style: preserve-3D;
    perspective: 1000px;
    position: relative;
    border: 1px solid @base-color;

    .box {
      width: 100%;
      height: 100%;
      transform-style: preserve-3D;

      .ring {
        width: 100%;
        height: 100%;
        position: relative;

        li {
          position: absolute;
        }
      }


    }

    .item {
      position: absolute;
      width: 100%;
      border: 1px solid @base-color;
      top: 100px;
      left: 0;
      box-sizing: border-box;

      p {
        font: 14px/24px '微软雅黑';
        word-break: break-all;
        color: @base-color
      }

      .itemClose {
        font-size: 18px;
        position: absolute;
        right: 5px;
        top: 0;
        cursor: pointer;
      }
    }
  }

  .table {
    width: 200px;
    margin: 20px auto 10px;
    display: flex;
    justify-content: space-between;

    li {
      a {
        color: @base-color;
        text-decoration: none;

        &:hover {
          color: @theme-color;
        }
      }
    }
  }

  .line {
    width: 734px;
    height: 1px;
    margin: 0 auto 14px;
    background: linear-gradient(to right, @theme-color, #8cca94, #fff45c)
  }

  .btn {
    width: 204px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    button {

      width: 100px;
      height: 100%;
      .btnClass;
      &:nth-of-type(1) {
        border-radius: 15px 0 0 15px;
      }

      &:nth-of-type(2) {
        border-radius: 0 15px 15px 0;
        margin-left: -1px;
      }
    }
  }

  .text {
    width: 602px;
    height: 318px;
    padding: 15px 18px;
    border: 1px solid @base-color;
    position: absolute;
    left: 50%;
    margin-left: -329px;
    top: 30px;
    background: #fff;
    border-radius: 8px;

    p {
      font-size: 12px;
      margin-bottom: 15px;
      text-align: left;
    }

    textarea {
      resize: none;
      width: 580px;
      height: 220px;
      padding: 10px;
      border: 1px solid @base-color;
      border-radius: 8px;
      background: #f3f7fa;
      margin-bottom: 15px;
      outline: none;
    }

    .btn2 {
      width: 260px;
      height: 30px;
      margin: 0 auto;
      display: flex;
      justify-content: center;

      button {
        cursor: pointer;
        width: 120px;
        height: 100%;
        border-radius: 15px;
        .btnClass;
        &:nth-of-type(1){
          margin-right:15px;
        }
      }
    }
  }

</style>
