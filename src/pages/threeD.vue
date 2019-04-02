<!--
 * @Author: caojing
 * @Date: 2019-03-26 14:29:42
 * @LastEditors: caojing
 * @LastEditTime: 2019-04-02 14:46:41
 * @Description: 3d动画交互
 -->
<template>
  <div style="position:relative">
    <div class="sence" id="sence">
      <div class="box">
        <ul class="ring"></ul>
      </div>
      <div class="item" style="display:none">
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
  import word from './word/word'
  export default {
    name: '',
    data() {
      return {
        textShow: false,
      }
    },
    components: {

    },
    methods: {
      draw() {
        var oSence = document.getElementById('sence')
        var oBox = oSence.getElementsByClassName('box')[0]
        var oUl = oBox.getElementsByTagName('ul')[0]
        var aLi = oUl.getElementsByTagName('li')
        var num = 0
        var layer = 0 //圆形层数
        var wordNum = -1
        var circleArr = [] //球形数组
        var coneArr = [] //锥形数组
        var coneNum = 0;
        var liNum = 0;
        /**
         * 动态文字生成
         */
        var s = word
        for (let i = 4; i < 12; i++) {
          num = i * i + (i + 1) * (i + 1)
          if (num >= s.length) {
            layer = (i - 1) * 2 + 1
            break
          }
          layer = (i - 1) * 2 + 1
        }
        for (let i = 0; i < layer; i++) {
          if (i < (layer + 1) / 2) {
            wordNum += 2
          } else {
            wordNum -= 2
          }
          circleArr.push(wordNum)
        }
        /**
         * 绘制圆形
         */
        var theta = Math.PI / (circleArr.length - 1) //角度
        var phi = 0
        var r = 150
        num = 0
        
        for (var i = 0; i < circleArr.length; i++) {
          phi = 2 * Math.PI / circleArr[i]
          for (var j = 0; j < circleArr[i]; j++) {
            var li = document.createElement('li')
            li.innerHTML = s[num]
            num++
            drawCircle(li, theta, phi, i, j)
            oUl.appendChild(li)
          }
        }
        
        for (let k = 0; k < aLi.length; k++) {
          aLi[k].style.position = "absolute"
          aLi[k].style.color = "#00a0e9"
          aLi[k].style.fontSize = '14px'
          aLi[k].style.transform = 'translate3D(' + aLi[k].circleX + 'px,' + aLi[k].circleY + 'px,' + aLi[k].circleZ +
            'px) rotateY(' + aLi[k].circlePhi + 'rad) rotateX(' + aLi[k].circleTheta + 'rad)';

        } 
        /**
         * 绘制圆锥形
         */
        for(let i=0;i<aLi.length;i++){
          coneNum += 2*i - 1 //获取一共用到的文字数
          if(coneNum > aLi.length){
            coneNum-=2*i-1
            break
          }
          coneArr.push(2*i-1)
        }
        //确认圆锥的属性
        for(let i=0;i<coneArr.length;i++){
          phi = 2*Math.PI/coneArr[i]
          for(let j=0;j<coneArr[i];j++){
            drawCone(aLi[liNum],phi,i,j)
            liNum++
          }
        }
        //绘制圆锥
        for(let i=0;i<aLi.length;i++){
          aLi[i].style.display="none"
        }
        for(let i=0;i<coneNum;i++){
          aLi[i].style.display="block"
          aLi[i].style.transform = 'translate3D(' + aLi[i].coneX + 'px,' + aLi[i].coneY + 'px,' + aLi[i].coneZ +
            'px) rotateY(' + aLi[i].conePhi + 'rad) rotateX(' + aLi[i].coneTheta + 'rad)';
        }
        var angleX = 0
        setInterval(() => {
          angleX++
          oBox.style.transform = "rotateX(0deg) rotateY(" + angleX + "deg)"
        }, 100)

        function drawCircle(obj, theta, phi, i, j) {
          obj.circleX = r * Math.sin(theta * i) * Math.sin(phi * j) + 200 //200的目的是使得整个圆球朝着画布中心方向，否则是以画布左上角为圆心
          obj.circleY = -r * Math.cos(theta * i) + 200
          obj.circleZ = r * Math.sin(theta * i) * Math.cos(phi * j)
          obj.circleTheta = theta * (circleArr.length - i) - Math.PI / 2 //使得文字都是朝向圆形的方向
          obj.circlePhi = phi * j //使得文字都是朝向圆形的方向
        }
        function drawCone(obj,phi,i,j){
          obj.coneX = (2*r/coneArr.length)*i*Math.tan(Math.PI/6)*Math.sin(phi*j)+200
          obj.coneY = (2*r/coneArr.length)*i
          obj.coneZ = (2*r/coneArr.length)*i*Math.cos(phi*j)
          obj.coneTheta = Math.PI/6
          obj.conePhi = phi*j

        }
      },

    },
    mounted() {
      this.draw()
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

  .close {
    color: @theme-color;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
  }

  .sence {
    width: 400px;
    height: 400px;
    margin: 30px auto 0;
    transform-style: preserve-3d;
    perspective: 1000px;
    position: relative;
    border: 1px solid @base-color;

    .box {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;

      .ring {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: left;

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

        &:nth-of-type(1) {
          margin-right: 15px;
        }
      }
    }
  }

</style>
