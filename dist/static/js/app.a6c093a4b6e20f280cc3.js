webpackJsonp([1],{"06kK":function(t,e){},"8Bey":function(t,e){},EcvU:function(t,e){},KThd:function(t,e){},LicG:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("IvJb"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"foot"},[e("div",{staticClass:"foot-txt"},[e("a",{attrs:{href:"https://github.com/Mirror198829",target:"_blank"}},[this._v("\n    江苏南京 前端开发工程师 曹静\n    ")])]),this._v(" "),e("div",{staticClass:"foot-txt"},[e("a",{attrs:{href:"https://github.com/Mirror198829",target:"_blank"}},[this._v("\n    Github：https://github.com/Mirror198829\n    ")])])])}]};var s={name:"app",components:{vFooter:a("C7Lr")({name:"vFooter",data:function(){return{}}},i,!1,function(t){a("dI1x")},"data-v-3105031d",null).exports},data:function(){return{activeIndex2:"1"}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("el-menu",{staticClass:"elMenu",attrs:{router:!0,"default-active":t.$route.path,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[a("el-menu-item",{attrs:{index:"/mouseDraw"}},[t._v("小黑板")]),t._v(" "),a("el-menu-item",{attrs:{index:"/time"}},[t._v("会动的时钟")]),t._v(" "),a("el-menu-item",{attrs:{index:"/transformDemo"}},[t._v("变换")]),t._v(" "),a("el-menu-item",{attrs:{index:"/coolClock"}},[t._v("炫酷时钟")]),t._v(" "),a("el-menu-item",{attrs:{index:"/imgDemo"}},[t._v("背景色彩")])],1)],1),t._v(" "),a("router-view",{staticClass:"routerMain"})],1)},staticRenderFns:[]};var o=a("C7Lr")(s,r,!1,function(t){a("xZV1")},null,null).exports,c=a("KGCO"),h=a("xSfu"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("canvas",{attrs:{id:"canvas",width:this.canvas.width,height:this.canvas.height}})])},staticRenderFns:[]};var d=function(t){a("PdLf")},v=a("C7Lr")(h.a,l,!1,d,"data-v-9004c826",null).exports,u=a("tB7W"),f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"canvasTime"}})])}]};var m=function(t){a("OLwk"),a("06kK")},g=a("C7Lr")(u.a,f,!1,m,"data-v-13adc740",null).exports,C={name:"",data:function(){return{canvasW:300,canvasH:300,color:"#1080d0"}},components:{},methods:{initCanvas:function(){var t=document.getElementById("progressCav"),e=t.getContext("2d");t.width=this.canvasW,t.height=this.canvasH,this.render(e)},render:function(){var t=this,e=document.getElementById("progressCav").getContext("2d");e.clearRect(0,0,e.canvas.width,e.canvas.height),this.drawCircle(e),this.drawSin(e),requestAnimationFrame(function(){t.render()})},drawCircle:function(t){var e=this.canvasW/2,a=this.canvasW/2,n=this.canvasW/2-20;t.beginPath(),t.strokeStyle=this.color,t.arc(e,a,n,0,2*Math.PI),t.closePath(),t.stroke(),t.clip()},drawSin:function(t){var e=parseInt(Math.random()*(this.canvasW/2-20-20+1)+20,10),a=parseInt(61*Math.random()+250-30,10),n=parseInt(Math.random()*(this.canvasW-20-(this.canvasW/2+20)+1)+this.canvasW/2+20,10),i=parseInt(61*Math.random()+250-30,10),s=this.canvasW;t.save(),t.beginPath(),t.moveTo(0,250),t.bezierCurveTo(e,a,n,i,s,250),t.lineTo(this.canvasW,this.canvasH),t.lineTo(0,this.canvasH),t.lineTo(0,250),t.closePath(),t.stroke(),t.fillStyle=this.color,t.fill(),t.restore()}},mounted:function(){this.initCanvas()},created:function(){}},I={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"progressCav"}})])}]};var w=a("C7Lr")(C,I,!1,function(t){a("8Bey"),a("gQRQ")},"data-v-2f83d56e",null).exports,p=a("W7wP"),_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"printWrap"},[t._m(0),t._v(" "),a("div",{staticClass:"blackboard"},[a("div",{staticClass:"innerBlackboard"},[a("canvas",{attrs:{id:"bbCanvas",width:"600",height:"340"}},[t._v("\n        浏览器不支持canvas\n      ")]),t._v(" "),a("div",{staticClass:"blackEraser",on:{mousedown:function(e){t.eraserBlackboard()}}},[a("div",{staticClass:"blackEraserInner"}),t._v(" "),a("div",{staticClass:"diveLine"})])]),t._v(" "),a("div",{staticClass:"woodBase"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ropeWrap"},[e("div",{staticClass:"ropeItem"}),this._v(" "),e("div",{staticClass:"ropeItem ropeRightItem"}),this._v(" "),e("i",{staticClass:"nail"})])}]};var b=function(t){a("ryYC"),a("d4Ik")},P=a("C7Lr")(p.a,_,!1,b,"data-v-134cb00b",null).exports,M={name:"",data:function(){return{timer:null}},components:{},methods:{initCanvas:function(){var t=document.getElementById("clock"),e=t.getContext("2d"),a=200,n=200,i=120,s=new Date,r=s.getHours(),o=s.getMinutes(),c=s.getSeconds(),h=(30*r-90+o/2)*Math.PI/180,l=(6*o-90)*Math.PI/180,d=(6*c-90)*Math.PI/180;e.clearRect(0,0,t.width,t.height),this.drawHandScale(e,a,n,i,60,1,110),this.drawHandScale(e,a,n,i,12,3,102),this.drawLine(e,a,n,60,5,h),this.drawLine(e,a,n,78,3,l),this.drawLine(e,a,n,108,1,d),this.drawDotted(e,a,n)},drawHandScale:function(t,e,a,n,i,s,r){for(var o=360/i,c=0;c<i;c++)t.save(),t.lineWidth=s,t.beginPath(),t.moveTo(e,a),t.arc(e,a,n,c*o*Math.PI/180,(c+1)*o*Math.PI/180,!1),t.closePath(),t.stroke(),t.restore();t.save(),t.fillStyle="#fff",t.beginPath(),t.moveTo(e,a),t.arc(e,a,r,0,360*Math.PI/180,!1),t.fill(),t.restore()},drawLine:function(t,e,a,n,i,s){t.save(),t.lineWidth=i,t.beginPath(),t.moveTo(e,a),t.arc(e,a,n,s,s,!1),t.closePath(),t.stroke()},drawDotted:function(t,e,a){t.save(),t.beginPath(),t.arc(e,a,6,0,360,!1),t.closePath(),t.fill(),t.restore()}},mounted:function(){var t=this;this.initCanvas(),this.timer=setInterval(function(){t.initCanvas()},1e3)},created:function(){},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"clock",width:"400",height:"400"}})])}]};var E=a("C7Lr")(M,x,!1,function(t){a("zFVc"),a("kR5R")},"data-v-685bd3af",null).exports,y={name:"",data:function(){return{canvas:{width:250,height:250},rect:{x:85,y:85,width:80,height:80},timer:null,timer1:null,timer2:null}},components:{},methods:{initC0:function(){var t=document.getElementById("c0").getContext("2d");t.save(),t.beginPath(),t.fillStyle="#38472D",t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height),t.closePath(),t.restore()},initC1:function(){var t=document.getElementById("c1").getContext("2d");t.save(),t.beginPath(),t.fillStyle="#60B6FF",t.translate(50,0),t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height),t.closePath(),t.restore()},initC2:function(){var t=document.getElementById("c2").getContext("2d");t.save(),t.beginPath(),t.rotate(20*Math.PI/360),t.fillStyle="#60B6FF",t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height),t.closePath(),t.restore()},initC3:function(){var t=document.getElementById("c3").getContext("2d");t.save(),t.beginPath(),t.scale(1.5,1.5),t.fillStyle="#60B6FF",t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height),t.closePath(),t.restore()},initC4:function(){var t=this,e=document.getElementById("c4"),a=e.getContext("2d"),n=0;this.timer=setInterval(function(){n++,a.save(),a.beginPath(),a.clearRect(0,0,e.width,e.height),a.translate(t.canvas.width/2,t.canvas.height/2),a.rotate(n*Math.PI/180),a.translate(-50,-50),a.fillStyle="#2F7EE2",a.fillRect(0,0,100,100),a.closePath(),a.restore()},10)},initC5:function(){var t=this,e=document.getElementById("c5").getContext("2d"),a=0,n=0,i=!0;this.timer1=setInterval(function(){a++,n>=2&&(i=!1),n<=0&&(i=!0),n=i?n+.01:n-.01,e.save(),e.beginPath(),e.clearRect(0,0,c4.width,c4.height),e.translate(t.canvas.width/2,t.canvas.height/2),e.rotate(a*Math.PI/180),e.translate(-100*n/2,-100*n/2),e.scale(n,n),e.fillStyle="#DE3A00",e.fillRect(0,0,100,100),e.closePath(),e.restore()},10)},initC6:function(){var t=document.getElementById("c6"),e=t.getContext("2d"),a=0,n=0;this.timer2=setInterval(function(){a<t.width-50&&0==n?a++:a==t.width-50&&n<t.height-50?(a=t.width-50,n++):n>=t.height-50&&a>0?(n=t.height-50,a--):a<=0&&n<=t.height-50&&(a=0,n--),e.save(),e.beginPath(),e.clearRect(0,0,t.width,t.height),e.fillStyle="#DE3A00",e.fillRect(a,n,50,50),e.closePath(),e.restore()},10)}},mounted:function(){this.initC0(),this.initC1(),this.initC2(),this.initC3(),this.initC4(),this.initC5(),this.initC6()},created:function(){},destroyed:function(){clearInterval(this.timer),this.timer=null,clearInterval(this.timer1),this.timer1=null}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tranformDemo"},[a("div",{staticClass:"canvasWrap"},[a("div",{staticClass:"canvasItem"},[a("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c0"}})]),t._v(" "),a("div",{staticClass:"canvasItem"},[a("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c1"}})]),t._v(" "),a("div",{staticClass:"canvasItem"},[a("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c2"}})]),t._v(" "),a("div",{staticClass:"canvasItem"},[a("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c3"}})]),t._v(" "),a("div",{staticClass:"canvasItem"},[a("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c4"}})]),t._v(" "),a("div",{staticClass:"canvasItem"},[a("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c5"}})]),t._v(" "),a("div",{staticClass:"canvasItem"},[a("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c6"}})])])])},staticRenderFns:[]};var R=a("C7Lr")(y,T,!1,function(t){a("im2c"),a("NxYt")},"data-v-4a236e10",null).exports,D={name:"",data:function(){return{width:250,height:250}},components:{},methods:{drawImg:function(){var t=document.getElementById("imgC1").getContext("2d"),e=new Image;e.onload=function(){t.drawImage(e,0,0,100,50);var a=t.createPattern(e,"repeat");t.fillStyle=a,t.fillRect(0,50,400,300)},e.src="src/assets/logo.png"},dramRadialGradient:function(){var t=document.getElementById("imgC2").getContext("2d"),e=this.width/2,a=this.height/2,n=t.createRadialGradient(e,a,50,e,a,100);n.addColorStop(0,"white"),n.addColorStop(1,"red"),t.setLineDash([10,15]),t.lineWidth=5,t.fillStyle=n,t.arc(e,a,100,0,360*Math.PI/180),t.fill(),t.stroke()},drawLinearGradient1:function(){var t=document.getElementById("l1").getContext("2d"),e=t.createLinearGradient(50,0,200,0);this.drawRect(t,50,80,150,80,e)},drawLinearGradient2:function(){var t=document.getElementById("l2").getContext("2d"),e=t.createLinearGradient(50,80,50,160);this.drawRect(t,50,80,150,80,e)},drawLinearGradient3:function(){var t=document.getElementById("l3").getContext("2d"),e=t.createLinearGradient(50,80,200,160);this.drawRect(t,50,80,150,80,e)},drawRect:function(t,e,a,n,i,s){s.addColorStop(0,"blue"),s.addColorStop(.5,"yellow"),s.addColorStop(1,"red"),t.fillStyle=s,t.fillRect(e,a,n,i)}},mounted:function(){this.drawImg(),this.dramRadialGradient(),this.drawLinearGradient1(),this.drawLinearGradient2(),this.drawLinearGradient3()},created:function(){}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imgDemo"},[a("canvas",{staticClass:"imgC",attrs:{title:"设置canvas背景",width:t.width,height:t.height,id:"imgC1"}}),t._v(" "),a("canvas",{staticClass:"imgC",attrs:{title:"径向渐变",width:t.width,height:t.height,id:"imgC2"}}),t._v(" "),a("canvas",{staticClass:"imgC",attrs:{title:"线性渐变横向",width:t.width,height:t.height,id:"l1"}}),t._v(" "),a("canvas",{staticClass:"imgC",attrs:{title:"线性渐变纵向",width:t.width,height:t.height,id:"l2"}}),t._v(" "),a("canvas",{staticClass:"imgC",attrs:{title:"线性渐变对角线",width:t.width,height:t.height,id:"l3"}})])},staticRenderFns:[]};var k=a("C7Lr")(D,S,!1,function(t){a("EcvU"),a("afzh")},"data-v-0b60a402",null).exports,B={name:"",data:function(){return{canvas:{width:430,height:430},L:0,timer:null}},components:{},methods:{drawCoolClock:function(){var t=document.getElementById("coolClockCanvas"),e=t.getContext("2d"),a=this.canvas.width/2,n=this.canvas.height/2;this.L=this.canvas.width/2-10;var i=[this.L,this.L-28],s=i[0],r=i[1],o=this.L-2,c=this.L-15,h=new Date,l=h.getHours(),d=h.getMinutes(),v=30*l-90+d/2,u=6*d-90,f=6*h.getSeconds()-90;e.clearRect(0,0,t.width,t.height),this.drawHoursScale(e,a,n,12,9,s,r),this.drawHoursScale(e,a,n,60,3,o,c),this.drawScaleNum(e,r-25,a,n),this.drawTimeNeedle(e,a,n,15,135,v),this.drawTimeNeedle(e,a,n,8,o-15,u),this.drawTimeNeedle(e,a,n,3,o-2,f,"#f3a829"),this.drawSenDotted(e,"#f3a829",a,n,f-180,15),this.drawCircleCenter(e,a,n,"#f3a829",15)},drawHoursScale:function(t,e,a,n,i,s,r){for(var o=0;o<n;o++){var c=o*(360/n)-90,h=e+Math.cos(c*Math.PI/180)*s,l=a+Math.sin(c*Math.PI/180)*s,d=e+Math.cos(c*Math.PI/180)*r,v=a+Math.sin(c*Math.PI/180)*r;t.save(),t.beginPath(),t.lineWidth=i,t.lineCap="round",t.moveTo(h,l),t.lineTo(d,v),t.stroke(),t.closePath(),t.restore()}},drawScaleNum:function(t,e,a,n){for(var i=0;i<12;i++){var s=30*i-90,r=a+Math.cos(s*Math.PI/180)*e,o=n+Math.sin(s*Math.PI/180)*e,c=0==i?12:i;t.save(),t.beginPath(),t.font="30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(c,r,o),t.closePath(),t.restore()}},drawTimeNeedle:function(t,e,a,n,i,s){var r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#000",o=e+Math.cos(s*Math.PI/180)*i,c=a+Math.sin(s*Math.PI/180)*i;t.save(),t.beginPath(),t.strokeStyle=r,t.lineWidth=n,t.lineCap="round",t.moveTo(e,a),t.lineTo(o,c),t.stroke(),t.closePath(),t.restore()},drawCircleCenter:function(t,e,a,n,i){t.save(),t.beginPath(),t.shadowBlur=4,t.shadowColor="#000",t.fillStyle=n,t.arc(e,a,i,0,360*Math.PI/180),t.fill(),t.closePath(),t.restore()},drawSenDotted:function(t,e,a,n,i,s){var r=a+Math.cos(i*Math.PI/180)*s,o=n+Math.sin(i*Math.PI/180)*s;t.save(),t.beginPath(),t.fillStyle=e,t.arc(r,o,7,0,360*Math.PI/180),t.fill(),t.closePath(),t.restore()}},mounted:function(){var t=this;this.drawCoolClock(),this.timer=setInterval(function(){t.drawCoolClock()},30)},created:function(){},destroyed:function(){clearInterval(this.timer),this.timer=null}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"coolClockWrap"}},[e("canvas",{attrs:{id:"coolClockCanvas",width:this.canvas.width,height:this.canvas.height}})])},staticRenderFns:[]};var W=a("C7Lr")(B,L,!1,function(t){a("KThd"),a("Y3Eh")},"data-v-0c064dc2",null).exports;n.default.use(c.a);var H=new c.a({routes:[{path:"/",redirect:{name:"CoolClock"}},{path:"/heart",name:"Heart",component:v},{path:"/time",name:"Time",component:g},{path:"/progress",name:"Progress",component:w},{path:"/mouseDraw",name:"MouseDraw",component:P},{path:"/clock",name:"Clock",component:E},{path:"/transformDemo",name:"TransformDemo",component:R},{path:"/imgDemo",name:"ImgDemo",component:k},{path:"/coolClock",name:"CoolClock",component:W}]}),F=(a("L7Pj"),a("DVuL")),N=a.n(F);a("LicG"),a("xsZ7");n.default.config.productionTip=!1,n.default.use(N.a),new n.default({el:"#app",router:H,template:"<App/>",components:{App:o}})},NxYt:function(t,e){},ODmT:function(t,e,a){"use strict";e.a=[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]]},OLwk:function(t,e){},PdLf:function(t,e){},W7wP:function(t,e,a){"use strict";(function(t){e.a={name:"",data:function(){return{}},components:{},methods:{eraserBlackboard:function(e){var a=[(e=e||window.event).clientX,e.clientY],n=a[0],i=a[1],s=t(".blackEraser").position().top,r=t(".blackEraser").position().left,o=t(".blackEraser").outerWidth(),c=t(".blackEraser").outerHeight();document.onmousemove=function(e){var a=[(e=e||window.event).clientX,e.clientY],h=s+(a[1]-i),l=r+(a[0]-n),d=document.getElementById("bbCanvas"),v=d.getContext("2d"),u=[0,d.width,0,d.height],f=u[0],m=u[1],g=u[2],C=u[3];l=(l=l<f?f:l)+o>m?m-o:l,h=(h=h<g?g:h)+c>C?C-c:h,t(".blackEraser").css({left:l,top:h}),v.clearRect(l,h,o,c)},document.onmouseup=function(){document.onmousemove=null,document.onmouseoup=null}},initCavas:function(){var e=document.getElementById("bbCanvas"),a=e.getContext("2d"),n=t("#bbCanvas").offset().left,i=t("#bbCanvas").offset().top;e.onmousedown=function(t){t=t||window.event;a.save(),a.strokeStyle="#fff",a.beginPath(),a.moveTo(t.clientX-n,t.clientY-i),document.onmousemove=function(t){t=t||window.event;a.lineTo(t.clientX-n,t.clientY-i),a.stroke()},document.onmouseup=function(){a.restore(),document.onmousemove=null,document.onmouseoup=null}}}},mounted:function(){this.initCavas()},created:function(){}}}).call(e,a("L7Pj"))},Y3Eh:function(t,e){},afzh:function(t,e){},d4Ik:function(t,e){},dI1x:function(t,e){},gQRQ:function(t,e){},im2c:function(t,e){},kR5R:function(t,e){},ryYC:function(t,e){},tB7W:function(t,e,a){"use strict";(function(t){var n=a("ODmT");e.a={name:"",data:function(){return{timer:null,storeTime:new Date,RADIUS:7,WIN_WIDTH:0,WIN_HEIGHT:0,balls:[],MARGIN_LEFT:12,MARGIN_TOP:40,DIST:15,colors:["red","#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF444"]}},components:{},methods:{initConfig:function(){this.WIN_WIDTH=t(".routerMain").width(),this.WIN_HEIGHT=t(".routerMain").height();var e=this.WIN_WIDTH>1e3?1e3:this.WIN_WIDTH;this.RADIUS=Math.round(4*e/5/98)-1,this.MARGIN_LEFT=(this.WIN_WIDTH-e)/2},initCanvas:function(){var t=this,e=document.getElementById("canvasTime"),a=e.getContext("2d");e.width=this.WIN_WIDTH,e.height=this.WIN_HEIGHT,this.render(a),this.timer=setInterval(function(){t.render(a)},50)},render:function(t){var e,a,n,i,s,r,o=new Date,c=this.storeTime;e=o.getHours(),a=o.getMinutes(),n=o.getSeconds(),i=c.getHours(),s=c.getMinutes(),r=c.getSeconds(),t.clearRect(0,0,t.canvas.width,t.canvas.height),this.renderBall(e,a,n,i,s,r,t),this.updateBalls(t),this.renderTime(e,a,n,t),this.storeTime=o},renderBall:function(t,e,a,n,i,s,r){var o=[this.MARGIN_LEFT,this.MARGIN_TOP,this.DIST],c=o[0],h=o[1],l=o[2],d=this.RADIUS;parseInt(n/10)!=parseInt(t/10)&&this.addBalls(c+0,h,parseInt(t/10)),parseInt(n%10)!=parseInt(t%10)&&this.addBalls(c+1*l*(d+1),h,parseInt(t%10)),parseInt(i/10)!=parseInt(e/10)&&this.addBalls(c+3*l*(d+1),h,parseInt(e/10)),parseInt(i%10)!=parseInt(e%10)&&this.addBalls(c+4*l*(d+1),h,parseInt(e%10)),parseInt(s/10)!=parseInt(a/10)&&this.addBalls(c+6*l*(d+1),h,parseInt(a/10)),parseInt(s%10)!=parseInt(a%10)&&this.addBalls(c+7*l*(d+1),h,parseInt(a%10))},addBalls:function(t,e,a){var i=this,s=this.RADIUS;n.a[a].forEach(function(a,n){a.forEach(function(a,r){if(1==a){var o={x:t+2*r*(s+1)+(s+1),y:e+2*n*(s+1)+(s+1),g:1.5+Math.random(),vx:4*Math.pow(-1,Math.ceil(1e3*Math.random())),vy:-10,color:i.colors[Math.floor(Math.random()*i.colors.length)]};i.balls.push(o)}})})},updateBalls:function(t){var e=this;this.balls.forEach(function(t,a){var n=[e.RADIUS,e.WIN_WIDTH,e.WIN_HEIGHT],i=n[0],s=n[1],r=n[2];t.x+=t.vx,t.y+=t.vy,t.vy+=t.g,t.y>=r-i&&(t.y=r-i,t.vy=.75*-t.vy);var o=0;for(e.balls.forEach(function(t,a){t.x+i>0&&t.x-i<s&&(e.balls[o++]=t)});e.balls.length>o;)e.balls.pop();if(e.balls.length-200)for(var c=e.balls.length-200,h=0;h<c;h++){var l=e.balls.length-20,d=Math.floor(Math.random()*(l-1+1)+1);e.balls.splice(d,1)}})},renderTime:function(t,e,a,n){var i=this,s=[this.MARGIN_LEFT,this.MARGIN_TOP,this.DIST],r=s[0],o=s[1],c=s[2],h=this.RADIUS;this.renderDigit(r,o,parseInt(t/10),n),this.renderDigit(r+c*(h+1),o,parseInt(t%10),n),this.renderDigit(r+2*c*(h+1),o,10,n),this.renderDigit(r+3*c*(h+1),o,parseInt(e/10),n),this.renderDigit(r+4*c*(h+1),o,parseInt(e%10),n),this.renderDigit(r+5*c*(h+1),o,10,n),this.renderDigit(r+6*c*(h+1),o,parseInt(a/10),n),this.renderDigit(r+7*c*(h+1),o,parseInt(a%10),n),this.balls.forEach(function(t,e){n.fillStyle=t.color,n.beginPath(),n.arc(t.x,t.y,i.RADIUS,0,2*Math.PI,!0),n.closePath(),n.fill()})},renderDigit:function(t,e,a,i){var s=this;i.fillStyle="rgb(0,102,153)",n.a[a].forEach(function(a,n){a.forEach(function(a,r){if(1==a){var o=s.RADIUS,c=t+2*r*(o+1)+(o+1),h=e+2*n*(o+1)+(o+1);i.beginPath(),i.arc(c,h,o,0,2*Math.PI),i.closePath(),i.fill()}})})},bindWindow:function(){var t=this;window.onblur=function(){clearInterval(t.timer)},window.onfocus=function(){clearInterval(t.timer),t.initCanvas()},window.onresize=function(){clearInterval(t.timer),t.initConfig(),t.initCanvas()}}},mounted:function(){this.bindWindow(),this.initConfig(),this.initCanvas()},created:function(){},destroyed:function(){clearInterval(this.timer),this.timer=null}}}).call(e,a("L7Pj"))},xSfu:function(t,e,a){"use strict";(function(t){e.a={name:"HelloWorld",data:function(){return{canvas:{width:0,height:0}}},methods:{drawCanvas:function(){var t=this,e=document.getElementById("canvas");if(e.getContext){var a=e.getContext("2d");setInterval(function(){var e=parseInt(11*Math.random()+10,10);a.clearRect(0,0,t.canvas.width,t.canvas.height);for(var n=0;n<e;n++){var i=parseInt(Math.random()*(t.canvas.width+1),10),s=parseInt(Math.random()*(t.canvas.height+1),10),r=1.8*Math.random()+.1;a.beginPath(),a.moveTo(i,s),a.bezierCurveTo(i,s-3,i-5,s-15,i-25,s-15),a.bezierCurveTo(i-55,s-15,i-55,s+22.5,i-55,s+22.5),a.bezierCurveTo(i-55,s+40,i-35,s+62,i,s+80),a.bezierCurveTo(i+35,s+62,i+55,s+40,i+56,s+22.5),a.bezierCurveTo(i+55,s+22.5,i+55,s-15,i+25,s-15),a.bezierCurveTo(i+10,s-15,i,s-3,i,s),a.fillStyle="rgba(220,20,60,"+r+")",a.fill()}},500)}}},mounted:function(){this.canvas.width=t(".routerMain").width(),this.canvas.height=t(".routerMain").height(),this.drawCanvas()}}}).call(e,a("L7Pj"))},xZV1:function(t,e){},xsZ7:function(t,e){},zFVc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a6c093a4b6e20f280cc3.js.map