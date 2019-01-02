<!--
 * @Author: caojing
 * @Date: 2019-01-02 14:02:18
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-02 16:39:18
 * @Description: draw by mouse
 -->
<template>
  <div class="printWrap">
    <div class="ropeWrap">
      <div class="ropeItem"></div>
      <div class="ropeItem"></div>
    </div>
    <div class="blackboard">
      <div class="innerBlackboard">
        <canvas id="bbCanvas" width="600" height="300">
          浏览器不支持canvas
        </canvas>
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
      initCavas() {
        let canvas = document.getElementById('bbCanvas')
        let ctx = canvas.getContext('2d')
        let offsetL = $('#bbCanvas').offset().left
        let offsetT = $('#bbCanvas').offset().top         
        canvas.onmousedown = function(ev){
            var ev = ev || window.event
            ctx.strokeStyle = '#fff'
            ctx.moveTo(ev.clientX - offsetL,ev.clientY - offsetT)
            console.log(ev.clientX - offsetL)
            document.onmousemove = function(event) {
               var event = event || window.event
               ctx.lineTo(event.clientX - offsetL,event.clientY - offsetT)
               ctx.stroke() 
            }
            document.onmouseup = ()=>{
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
        flex: 1;
        background: #e0b19f;

        &:last-child {
          transform: rotate(25deg);
          transform-origin: 0 0;
        }

        &:first-child {
          transform: rotate(335deg);
          transform-origin: 100% 0;
        }
      }
    }

    .blackboard {
      position: relative;
      box-sizing: border-box;
      background: #be7840;
      padding: @paddingW;
      box-shadow: -10px 10px 5px #59351a;
      @innerH: 330px;

      .innerBlackboard {
        width: @innerW;
        height: @innerH;
        background: #333;
        border-radius: 4px;

        #bbCanvas {
         
        }
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
