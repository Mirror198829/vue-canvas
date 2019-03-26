<!--
 * @Author: caojing
 * @Date: 2019-01-23 16:26:01
 * @LastEditors: caojing
 * @LastEditTime: 2019-01-30 14:06:17
 * @Description: 像素处理
 -->
<template>
  <div class="pixelWrap">
    <div class="pixelTop">
      <canvas :width="width" :height="height" class="pCanvas" id="p1"></canvas>
      <canvas :width="width" :height="height" class="pCanvas" id="p2"></canvas>
      <canvas :width="width" :height="height" class="pCanvas" id="p3"></canvas>
    </div>
    <div class="pixelBottom">
      <canvas width="1000" height="281" style="background:#fff" id="p4"></canvas>
    </div>
  </div>
</template>

<script>
  import webImg from '../../src/assets/web.jpg'
  export default {
    name: '',
    data() {
      return {
        width: 290,
        height: 240,
        timer: null
      }
    },
    components: {

    },
    methods: {
      drawP4(){
        let c = document.getElementById('p4')
        let context = c.getContext('2d')
        let yImg = new Image()
        yImg.onload = () => {
          console.log(yImg.width)
          console.log(yImg.height)
          context.drawImage(yImg, 0, 0, yImg.width,yImg.height)
        }
        yImg.src = webImg
      },
      drawP1() {
        let c = document.getElementById('p1')
        let context = c.getContext('2d')
        let [x, y, width, height] = [0, 0, 50, 50]
        context.fillRect(x, y, width, height)
        let imgData = context.getImageData(x, y, width, height); //获取区域内的所有像素值
        context.putImageData(imgData, 100, 0); //获取到的像素放置在页面 100，50的位置 

        for (let i = 0; i < imgData.width * imgData.height; i++) {
          imgData.data[4 * i] = 255
          imgData.data[4 * i + 1] = 0
          imgData.data[4 * i + 2] = 0
          imgData.data[4 * i + 3] = 100
        }
        context.putImageData(imgData, 200, 0);

        let oImg2 = context.createImageData(100, 100)
        for (let i = 0; i < oImg2.width * oImg2.height; i++) {
          oImg2.data[4 * i] = 255
          oImg2.data[4 * i + 1] = 0
          oImg2.data[4 * i + 2] = 0
          oImg2.data[4 * i + 3] = 100
        }
        context.putImageData(oImg2, 100, 100)
      },
      randomArr(iAll, iNow) {
        let arr = []
        let newArr = []
        for (let i = 0; i < iAll; i++) {
          arr.push(i)
        }
        for (let i = 0; i < iNow; i++) {
          let randomIndex = Math.floor(Math.random() * arr.length, 1)
          newArr.push(arr.splice(randomIndex, 1))
        }
        return newArr
      },
      randomAllArr(iAll, iNow) {
        let arr = []
        let allArr = []
        for (let i = 0; i < iAll; i++) {
          arr.push(i)
        }
        for (let i = 0; i < iAll / iNow; i++) {
          let newArr = []
          for (let j = 0; j < iNow; j++) {
            newArr.push(arr.splice(Math.random() * arr .length, 1))
          }
          allArr.push(newArr)
        }
        return allArr
      },
      drawP2(NUM) {
        let c = document.getElementById('p2')
        let context = c.getContext("2d")
        let str = "FRONT END"
        let h = 50
        context.clearRect(0, 0, c.width, c.height);
        context.font = h + 'px impact';
        context.textBaseline = 'top';
        let w = context.measureText(str).width;
        context.fillText(str, (c.width - w) / 2, (c.height - h) / 2);
        let oImg = context.getImageData((c.width - w) / 2, (c.height - h) / 2, w, h);
        let [max, min] = [w * h, 0]
        let newArr = this.randomArr(w * h, w * h * NUM)
        newArr.forEach((item, key) => {
          oImg.data[4 * item + 3] = 0
        })
        context.putImageData(oImg, (c.width - w) / 2, 50)
      },
      drawP3() {
        let c = document.getElementById('p3')
        let context = c.getContext("2d")
        let str = "前端"
        let h = 80
        context.clearRect(0, 0, c.width, c.height);
        context.font = h + 'px impact';
        context.textBaseline = 'top';
        context.fillStyle = "red"
        let w = context.measureText(str).width;
        context.fillText(str, (c.width - w) / 2, (c.height - h) / 2);
        let oImg = context.getImageData((c.width - w) / 2, (c.height - h) / 2, w, h + 80);
        let newImg = context.createImageData(w, h + 80)
        context.clearRect(0, 0, c.width, c.height)
        let [max, min] = [w * h, 0]
        let arr = this.randomAllArr(w * h, w * h / 5)
        let iNow = 0
        let timer = setInterval(() => {
          for (let i = 0; i < arr[iNow].length; i++) {
            newImg.data[4 * arr[iNow][i]] = oImg.data[4 * arr[iNow][i]]
            newImg.data[4 * arr[iNow][i] + 1] = oImg.data[4 * arr[iNow][i] + 1]
            newImg.data[4 * arr[iNow][i] + 2] = oImg.data[4 * arr[iNow][i] + 2]
            newImg.data[4 * arr[iNow][i] + 3] = oImg.data[4 * arr[iNow][i] + 3]
          }
          context.putImageData(newImg, (c.width - w) / 2, (c.height - h) / 2)
          if (iNow == 4) {
            iNow = 0
            clearInterval(timer)
          } else {
            iNow++
          }
        }, 1000)

      }
    },
    mounted() {
      this.drawP1()
      this.timer = setInterval(() => {
        let max = 70
        let min = 10
        let NUM = Math.floor(Math.random() * (max - min + 1) + min);
        NUM = NUM / 100
        this.drawP2(NUM)
      }, 1000)
      this.drawP3()
      this.drawP4()
    },
    created() {},
    destroyed() {
      clearInterval(this.timer)
      this.timer = null
    },
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>
  .pixelWrap {
    width: 100%;
    height: 100%;
    background: #C2D3E5;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .pixelTop{
      display:flex;
      justify-content:center;
      width:1000px;
      background:#fff;
    }
    .pixelBottom{
      display:flex;
      justify-content:center;
      margin:10px;
      margin-top:20px;
    }
  }

  .pCanvas {
    background: #fff;
    margin: 20px 10px;
    border-right:1px dashed #ccc;
    &:nth-child(3){
      border-right:0
    }
  }

</style>
