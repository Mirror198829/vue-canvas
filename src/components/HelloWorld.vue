<template>
  <div class="hello">
    <canvas id="canvas" :width="canvas.width" :height="canvas.height" style="border:1px solid #000"></canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      canvas:{
        width:500,
        height:500
      }
    }
  },
  methods:{
    drawCanvas(){
      // let canvas = document.getElementById("canvas");
      // if (canvas.getContext) {
      //   setInterval(()=>{
      //   let reactW = 50
      //   let reactH = 50
      //   let maxW = this.canvas.width - reactW
      //   let maxH = this.canvas.height - reactH
      //   let ctx = canvas.getContext("2d");
      //   ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
      //   ctx.fillStyle = "rgb(200,0,0)";
      //   ctx.fillRect (Math.random()*maxW,Math.random()*maxH, reactW, reactH);
      //   ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      //   ctx.fillRect (Math.random()*maxW, Math.random()*maxH, reactW, reactH);
      //   },800)
        
      // }
      let canvas = document.getElementById("canvas")
      let ctx = canvas.getContext('2d')
      let Heart = function(x, y, a) {
            this.x = x;
            this.y = y;
            this.a = a;
            this.vertices = [];
            for(let i=0; i<50; i++) {
                var step = i/50*(Math.PI*2);//设置心上面两点之间的角度，具体分成多少份，好像需要去试。
                var vector = {
                    x : this.a*(16 * Math.pow(Math.sin(step), 3)),
                    y : this.a*(13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step))
                }
                this.vertices.push(vector);
            }
        }
        Heart.prototype.draw = function() {
            ctx.save()
            ctx.beginPath();
            ctx.translate(this.x,this.y);
            ctx.rotate(Math.PI);
            for(let i=0; i<50; i++) {
                var vector = this.vertices[i];
                ctx.lineTo(vector.x, vector.y);
                
            }
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath()
        }

          new Heart(200,100,5).draw();
    }
  },
  mounted(){
    this.drawCanvas()
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
