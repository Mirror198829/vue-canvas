<template>
  <div class="hello">
    <canvas id="canvas" :width="canvas.width" :height="canvas.height"></canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      canvas:{
        width:0,
        height:0
      }
    }
  },
  methods:{
    drawCanvas(){
      let canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        // setInterval(()=>{
        // let reactW = 50
        // let reactH = 50
        // let maxW = this.canvas.width - reactW
        // let maxH = this.canvas.height - reactH
        // let ctx = canvas.getContext("2d");
        // ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        // ctx.fillStyle = "rgb(200,0,0)";
        // ctx.fillRect (Math.random()*maxW,Math.random()*maxH, reactW, reactH);
        // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        // ctx.fillRect (Math.random()*maxW, Math.random()*maxH, reactW, reactH);
        // },800)
        
        //笑脸
        // ctx.beginPath();
        // ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
        // ctx.moveTo(110,75);
        // ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
        // ctx.moveTo(65,65);
        // ctx.stroke();
        // ctx.closePath()
        // ctx.beginPath()
        // ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
        // ctx.fill()
        // ctx.closePath()
        // ctx.beginPath()
        // ctx.moveTo(95,65);
        // ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
        // ctx.stroke();
        
        //贝塞尔曲线
       
        //三次贝塞尔曲线
        setInterval(()=>{
              //let randomNum =  Math.random()
              let Num  = parseInt(Math.random()*(20-10+1)+10,10)
              ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
              for(var i=0;i<Num;i++){
                  let x = parseInt(Math.random()*(this.canvas.width+1),10)
                  let y = parseInt(Math.random()*(this.canvas.height+1),10)
                  let alpha = Math.random()*((0.9-0.1)+1)+0.1
                  ctx.beginPath();
                  ctx.moveTo(x,y);
                  ctx.bezierCurveTo(x,y-3,x-5,y-15,x-25,y-15);
                  ctx.bezierCurveTo(x-55,y-15,x-55,y+22.5,x-55,y+22.5);
                  ctx.bezierCurveTo(x-55,y+40,x-35,y+62,x,y+80);
                  ctx.bezierCurveTo(x+35,y+62,x+55,y+40,x+56,y+22.5);
                  ctx.bezierCurveTo(x+55,y+22.5,x+55,y-15,x+25,y-15);
                  ctx.bezierCurveTo(x+10,y-15,x,y-3,x,y);
                  ctx.fillStyle = "rgba(220,20,60,"+alpha+")";
                  ctx.fill();
              }          
        },500) 
        
       // let rW = 0
       // setInterval(()=>{
       //    ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
       //    ctx.beginPath()
       //    rW ++ 
       //    ctx.fillStyle = "#fff"
       //    ctx.translate(rW,0)
       //    ctx.fillRect(0,0,50,50)
       // },100) 

        // 创建渐变
  
      }
      // let canvas = document.getElementById("canvas")
      // let ctx = canvas.getContext('2d')
      // let Heart = function(x, y, a) {
      //       this.x = x;
      //       this.y = y;
      //       this.a = a;
      //       this.vertices = [];
      //       for(let i=0; i<50; i++) {
      //           var step = i/50*(Math.PI*2);//设置心上面两点之间的角度，具体分成多少份，好像需要去试。
      //           var vector = {
      //               x : this.a*(16 * Math.pow(Math.sin(step), 3)),
      //               y : this.a*(13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step))
      //           }
      //           this.vertices.push(vector);
      //       }
      //   }
      //   Heart.prototype.draw = function() {
      //       ctx.save()
      //       ctx.beginPath();
      //       ctx.translate(this.x,this.y);
      //       ctx.rotate(Math.PI);
      //       for(let i=0; i<50; i++) {
      //           var vector = this.vertices[i];
      //           ctx.lineTo(vector.x, vector.y);
                
      //       }
      //       ctx.fillStyle = "red";
      //       ctx.fill();
      //       ctx.closePath()
      //   }

      //     new Heart(200,100,5).draw();
    }
  },
  mounted(){
    this.canvas.width = $('.routerMain').width()
    this.canvas.height = $('.routerMain').height()
    this.drawCanvas()
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>