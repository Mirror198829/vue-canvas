<!--
 * @Author: caojing
 * @Date: 2019-01-23 16:26:01
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-23 17:41:13
 * @Description: 像素处理
 -->
<template>
  <div class="pixelWrap">
    <canvas :width="width" :height="height" class="pCanvas" id="p1"></canvas>
    <canvas :width="width" :height="height" class="pCanvas" id="p2"></canvas>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        width: 300,
        height: 300
      }
    },
    components: {

    },
    methods: {
      drawP1() {
        let c = document.getElementById('p1')
        let context = c.getContext('2d')
        let [x,y,width,height] = [0,0,50,50]
        context.fillRect(x,y,width,height)
        let imgData = context.getImageData(x, y, width, height);//获取区域内的所有像素值
        context.putImageData(imgData,100,0);//获取到的像素放置在页面 100，50的位置 

        for(let i = 0; i< imgData.width * imgData.height;i++){
          imgData.data[4*i] = 255
          imgData.data[4*i + 1] = 0
          imgData.data[4*i + 2] = 0
          imgData.data[4*i + 3] = 100
        }
        context.putImageData(imgData,200,0);

        let oImg2 = context.createImageData(100, 100)
        for(let i = 0; i< oImg2.width * oImg2.height;i++){
          oImg2.data[4*i] = 255
          oImg2.data[4*i + 1] = 0
          oImg2.data[4*i + 2] = 0
          oImg2.data[4*i + 3] = 100
        }
        context.putImageData(oImg2,50,100)
      },
      drawP2(){
        let c= document.getElementById('p2')
        let context=c.getContext("2d")
        let str ="canvas"
        let h = 60
        context.font=h+'px impact';
        context.textBaseline='top';
        let w = context.measureText(str).width;
        context.fillText(str, (c.width-w)/2, (c.height-h)/2);
        let oImg = context.getImageData((c.width-w)/2, (c.height-h)/2, w, h);
        let [max,min] = [w*h,0]
        let arr = []
        for(let i = 0; i< parseInt(w*h*0.5);i++){
          arr.push(Math.floor(Math.random()*(max-min+1)+min))
        }
        arr.forEach((item,key) => {
          oImg.data[4*item+3] = 0
        })
       context.putImageData(oImg,(c.width-w)/2,50)  
      }
    },
    mounted() {
      this.drawP1()
      this.drawP2()
    },
    created() {}
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>
  .pixelWrap {
    width: 100%;
    height: 100%;
    background: #C2D3E5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pCanvas {
    background: #fff;
    margin:10px;
  }

</style>
