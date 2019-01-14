<!--
 * @Author: caojing
 * @Date: 2019-01-02 14:02:18
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-14 17:12:43
 * @Description: draw by mouse
 -->
<template>
  <div class="printWrap">
    <div class="ropeWrap">
      <div class="ropeItem"></div>
      <div class="ropeItem ropeRightItem"></div>
      <i class="nail"></i>
    </div>
    <div class="blackboard">
      <div class="innerBlackboard">
        <canvas id="bbCanvas" width="600" height="340">
          浏览器不支持canvas
        </canvas>
        <!-- 黑板擦 -->
        <div class="blackEraser" 
          @mousedown="eraserBlackboard()">
          <div class="blackEraserInner"></div>
          <div class="diveLine"></div>
        </div>
      </div>
      <div class="woodBase"></div>
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
      eraserBlackboard(ev){
        var ev = ev || window.event
        let [x1,y1] = [ev.clientX,ev.clientY]
        let t1 = $('.blackEraser').position().top
        let l1 = $('.blackEraser').position().left
        let eraserW = $('.blackEraser').outerWidth()
        let eraserH = $('.blackEraser').outerHeight()
        document.onmousemove = (ev) => {
          var ev =  ev || window.event
          let [x2,y2] = [ev.clientX,ev.clientY]
          let [disX,disY] = [x2-x1,y2-y1]
          let t2 = t1 + disY
          let l2 = l1 + disX
          let canvas = document.getElementById('bbCanvas')
          let ctx = canvas.getContext('2d')
          let [minX,maxX,minY,maxY] = [0,canvas.width,0,canvas.height]
          //边界检测
          l2 = l2 < minX ? minX : l2
          l2 = l2 + eraserW  > maxX ? maxX - eraserW : l2
          t2 = t2 < minY ? minY : t2
          t2 = t2 + eraserH > maxY ? maxY - eraserH : t2
          $('.blackEraser').css({
            left:l2,
            top:t2
          })
          ctx.clearRect(l2,t2,eraserW,eraserH) //橡皮擦删除区域
        }
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseoup = null
        }
      },
      initCavas() {
        let canvas = document.getElementById('bbCanvas')
        let ctx = canvas.getContext('2d')
        let offsetL = $('#bbCanvas').offset().left
        let offsetT = $('#bbCanvas').offset().top
        canvas.onmousedown = function (ev) {
          var ev = ev || window.event
          ctx.save()
          ctx.strokeStyle = '#fff'
          ctx.beginPath()
          ctx.moveTo(ev.clientX - offsetL, ev.clientY - offsetT)
          document.onmousemove = function (event) {
            var event = event || window.event
            ctx.lineTo(event.clientX - offsetL, event.clientY - offsetT)
            ctx.stroke()
          }
          document.onmouseup = () => {
            ctx.restore()
            document.onmousemove = null
            document.onmouseoup = null
          }
        }
      }
    },
    mounted() {
      this.initCavas()
    },
    created() {}
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>
  .printWrap {
    @innerW: 600px;
    @overW: 7px;
    @paddingW: 15px;
    @woodH: 17px;
    height: 100%;
    width: 100%;
    background: #5174ac;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .ropeWrap {
      margin-top: 50px;
      position: relative;
      width: @innerW;
      height: 15px;
      display: flex;
      height: 100px;

      .ropeItem {
        height: 5px;
        width: calc( 100% / 2);
        background: #a6a394;

        &.ropeRightItem {
          transform: rotate(25deg);
          transform-origin: 0 0;
        }

        &:first-child {
          transform: rotate(335deg);
          transform-origin: 100% 0;
        }
      }
      .nail{
        position: absolute;
        width:18px;
        height:18px;
        background:#a6a394;
        border-radius:45% 35% 50% 30%;
        left:50%;
        transform:translate(-50%,0);
        top:-7px;
      }
    }

    .blackboard {
      position: relative;
      box-sizing: border-box;
      background: #be7840;
      padding: @paddingW;
      box-shadow: -10px 10px 5px #59351a;
      @innerH: 360px;

      .innerBlackboard {
        position: relative;
        width: @innerW;
        height: @innerH;
        background: #5f7479;
        border-radius: 4px;

        .blackEraser {
          @eraserPadding:6px;
          @eraserInnerH:28px;
          @eraserInnerW:53px;
          cursor: pointer;
          position: absolute;
          bottom: @woodH + 5;
          left:5px;
          z-index:10;
          height:@eraserInnerH;
          padding: @eraserPadding;
          border-radius: 4px;
          background: #eee1d9;
          user-select:none;
          box-shadow:3px 3px 3px 3px #333;
          .diveLine{
            height:@eraserInnerH + 2*@eraserPadding + 2;
            width:14px;
            background:#d3cdad;
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            box-shadow:1px 0 1px #8a8679; 
          }
          .blackEraserInner {
            width:@eraserInnerW;
            height:@eraserInnerH;
            border-radius: 4px;
            background: #fef9f3;
          }
        }

        #bbCanvas {}
      }

      .woodBase {
        position: absolute;
        height: @woodH;
        width: @innerW + 2*@overW;
        background: #8c4e24;
        border-radius: 5px;
        box-shadow: 0px 3px 0px #613415;
        bottom: @woodH;
        left: @paddingW - @overW;
      }
    }
  }

</style>
