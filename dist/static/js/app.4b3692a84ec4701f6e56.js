webpackJsonp([1],{"+2oW":function(t,e){},"3IPs":function(t,e){},"8Bey":function(t,e){},"9Weh":function(t,e){},CDd9:function(t,e){},LicG:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("IvJb"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"foot"},[e("div",{staticClass:"foot-txt"},[e("a",{attrs:{href:"https://github.com/Mirror198829",target:"_blank"}},[this._v("\n    江苏南京 前端开发工程师 曹静\n    ")])]),this._v(" "),e("div",{staticClass:"foot-txt"},[e("a",{attrs:{href:"https://github.com/Mirror198829",target:"_blank"}},[this._v("\n    Github：https://github.com/Mirror198829\n    ")])])])}]};var s={name:"app",components:{vFooter:n("C7Lr")({name:"vFooter",data:function(){return{}}},i,!1,function(t){n("dI1x")},"data-v-3105031d",null).exports},data:function(){return{activeIndex2:"1"}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("el-menu",{staticClass:"elMenu",attrs:{router:!0,"default-active":t.$route.path,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"/mouseDraw"}},[t._v("小黑板")]),t._v(" "),n("el-menu-item",{attrs:{index:"/time"}},[t._v("会动的时钟")]),t._v(" "),n("el-menu-item",{attrs:{index:"/transformDemo"}},[t._v("变换")]),t._v(" "),n("el-menu-item",{attrs:{index:"/clock"}},[t._v("时钟")])],1)],1),t._v(" "),n("router-view",{staticClass:"routerMain"})],1)},staticRenderFns:[]};var o=n("C7Lr")(s,r,!1,function(t){n("TVLe")},null,null).exports,c=n("KGCO"),h=n("xSfu"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("canvas",{attrs:{id:"canvas",width:this.canvas.width,height:this.canvas.height}})])},staticRenderFns:[]};var d=function(t){n("PdLf")},u=n("C7Lr")(h.a,l,!1,d,"data-v-9004c826",null).exports,v=n("tB7W"),f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"canvasTime"}})])}]};var m=function(t){n("nyp/"),n("v2K0")},g=n("C7Lr")(v.a,f,!1,m,"data-v-51e8cde4",null).exports,I={name:"",data:function(){return{canvasW:300,canvasH:300,color:"#1080d0"}},components:{},methods:{initCanvas:function(){var t=document.getElementById("progressCav"),e=t.getContext("2d");t.width=this.canvasW,t.height=this.canvasH,this.render(e)},render:function(){var t=this,e=document.getElementById("progressCav").getContext("2d");e.clearRect(0,0,e.canvas.width,e.canvas.height),this.drawCircle(e),this.drawSin(e),requestAnimationFrame(function(){t.render()})},drawCircle:function(t){var e=this.canvasW/2,n=this.canvasW/2,a=this.canvasW/2-20;t.beginPath(),t.strokeStyle=this.color,t.arc(e,n,a,0,2*Math.PI),t.closePath(),t.stroke(),t.clip()},drawSin:function(t){var e=parseInt(Math.random()*(this.canvasW/2-20-20+1)+20,10),n=parseInt(61*Math.random()+250-30,10),a=parseInt(Math.random()*(this.canvasW-20-(this.canvasW/2+20)+1)+this.canvasW/2+20,10),i=parseInt(61*Math.random()+250-30,10),s=this.canvasW;t.save(),t.beginPath(),t.moveTo(0,250),t.bezierCurveTo(e,n,a,i,s,250),t.lineTo(this.canvasW,this.canvasH),t.lineTo(0,this.canvasH),t.lineTo(0,250),t.closePath(),t.stroke(),t.fillStyle=this.color,t.fill(),t.restore()}},mounted:function(){this.initCanvas()},created:function(){}},p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"progressCav"}})])}]};var C=n("C7Lr")(I,p,!1,function(t){n("8Bey"),n("gQRQ")},"data-v-2f83d56e",null).exports,w=n("W7wP"),_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"printWrap"},[t._m(0),t._v(" "),n("div",{staticClass:"blackboard"},[n("div",{staticClass:"innerBlackboard"},[n("canvas",{attrs:{id:"bbCanvas",width:"600",height:"340"}},[t._v("\n        浏览器不支持canvas\n      ")]),t._v(" "),n("div",{staticClass:"blackEraser",on:{mousedown:function(e){t.eraserBlackboard()}}},[n("div",{staticClass:"blackEraserInner"}),t._v(" "),n("div",{staticClass:"diveLine"})])]),t._v(" "),n("div",{staticClass:"woodBase"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ropeWrap"},[e("div",{staticClass:"ropeItem"}),this._v(" "),e("div",{staticClass:"ropeItem ropeRightItem"}),this._v(" "),e("i",{staticClass:"nail"})])}]};var b=function(t){n("CDd9"),n("3IPs")},P=n("C7Lr")(w.a,_,!1,b,"data-v-7c47107a",null).exports,T={name:"",data:function(){return{}},components:{},methods:{initCanvas:function(t){var e=document.getElementById("clock"),n=200,a=200,i=120,s=new Date,r=s.getHours(),o=s.getMinutes(),c=s.getSeconds(),h=(30*r-90+o/2)*Math.PI/180,l=(6*o-90)*Math.PI/180,d=(6*c-90)*Math.PI/180;t.clearRect(0,0,e.width,e.height),this.drawHandScale(t,n,a,i,60,1,110),this.drawHandScale(t,n,a,i,12,3,102),this.drawLine(t,n,a,60,5,h),this.drawLine(t,n,a,78,3,l),this.drawLine(t,n,a,108,1,d),this.drawDotted(t,n,a)},drawHandScale:function(t,e,n,a,i,s,r){for(var o=360/i,c=0;c<i;c++)t.save(),t.lineWidth=s,t.beginPath(),t.moveTo(e,n),t.arc(e,n,a,c*o*Math.PI/180,(c+1)*o*Math.PI/180,!1),t.closePath(),t.stroke(),t.restore();t.save(),t.fillStyle="#fff",t.beginPath(),t.moveTo(e,n),t.arc(e,n,r,0,360*Math.PI/180,!1),t.fill(),t.restore()},drawLine:function(t,e,n,a,i,s){t.save(),t.lineWidth=i,t.beginPath(),t.moveTo(e,n),t.arc(e,n,a,s,s,!1),t.closePath(),t.stroke()},drawDotted:function(t,e,n){t.save(),t.beginPath(),t.arc(e,n,6,0,360,!1),t.closePath(),t.fill(),t.restore()}},mounted:function(){var t=this,e=document.getElementById("clock").getContext("2d");this.initCanvas(e),setInterval(function(){t.initCanvas(e)},1e3)},created:function(){}},E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"clock",width:"400",height:"400"}})])}]};var M=n("C7Lr")(T,E,!1,function(t){n("+2oW"),n("lQnV")},"data-v-6ad4aa38",null).exports,x={name:"",data:function(){return{canvas:{width:250,height:250},rect:{x:85,y:85,width:80,height:80}}},components:{},methods:{initC0:function(){var t=document.getElementById("c0").getContext("2d");t.save(),t.beginPath(),t.fillStyle="#ccc",t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height),t.closePath(),t.restore()},initC1:function(){var t=document.getElementById("c1").getContext("2d");t.save(),t.beginPath(),t.fillStyle="red",t.translate(50,0),t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height),t.closePath(),t.restore()},initC2:function(){var t=document.getElementById("c2").getContext("2d");t.save(),t.beginPath(),t.rotate(20*Math.PI/360),t.fillStyle="red",t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height),t.closePath(),t.restore()},initC3:function(){var t=document.getElementById("c3").getContext("2d");t.save(),t.beginPath(),t.scale(1.5,1.5),t.fillStyle="red",t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height),t.closePath(),t.restore()},initC4:function(){var t=document.getElementById("c4"),e=t.getContext("2d"),n=0;e.translate(105,105),setInterval(function(){n++,e.save(),e.beginPath(),e.clearRect(-105,-105,t.width,t.height),e.rotate(n*Math.PI/180),e.translate(-40,-40),e.fillStyle="yellow",e.fillRect(0,0,100,100),e.closePath(),e.restore()},10)}},mounted:function(){this.initC0(),this.initC1(),this.initC2(),this.initC3(),this.initC4()},created:function(){}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tranformDemo"},[n("div",{staticClass:"canvasWrap"},[n("div",{staticClass:"canvasItem"},[n("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c0"}})]),t._v(" "),n("div",{staticClass:"canvasItem"},[n("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c1"}})]),t._v(" "),n("div",{staticClass:"canvasItem"},[n("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c2"}})]),t._v(" "),n("div",{staticClass:"canvasItem"},[n("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c3"}})]),t._v(" "),n("div",{staticClass:"canvasItem"},[n("canvas",{attrs:{width:t.canvas.width,height:t.canvas.height,id:"c4"}})])])])},staticRenderFns:[]};var W=n("C7Lr")(x,y,!1,function(t){n("YyhS"),n("9Weh")},"data-v-fa4ebd80",null).exports;a.default.use(c.a);var D=new c.a({routes:[{path:"/",redirect:{name:"Heart"}},{path:"/heart",name:"Heart",component:u},{path:"/time",name:"Time",component:g},{path:"/progress",name:"Progress",component:C},{path:"/mouseDraw",name:"MouseDraw",component:P},{path:"/clock",name:"Clock",component:M},{path:"/transformDemo",name:"TransformDemo",component:W}]}),R=(n("L7Pj"),n("DVuL")),B=n.n(R);n("LicG"),n("xsZ7");a.default.config.productionTip=!1,a.default.use(B.a),new a.default({el:"#app",router:D,template:"<App/>",components:{App:o}})},ODmT:function(t,e,n){"use strict";e.a=[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]]},PdLf:function(t,e){},TVLe:function(t,e){},W7wP:function(t,e,n){"use strict";(function(t){e.a={name:"",data:function(){return{}},components:{},methods:{eraserBlackboard:function(e){var n=[(e=e||window.event).clientX,e.clientY],a=n[0],i=n[1],s=t(".blackEraser").position().top,r=t(".blackEraser").position().left,o=t(".blackEraser").outerWidth(),c=t(".blackEraser").outerHeight();document.onmousemove=function(e){var n=[(e=e||window.event).clientX,e.clientY],h=s+(n[1]-i),l=r+(n[0]-a),d=document.getElementById("bbCanvas"),u=d.getContext("2d"),v=[0,d.width,0,d.height],f=v[0],m=v[1],g=v[2],I=v[3];console.log(o),l=(l=l<f?f:l)+o>m?m-o:l,h=(h=h<g?g:h)+c>I?I-c:h,t(".blackEraser").css({left:l,top:h}),u.clearRect(l,h,o,c)},document.onmouseup=function(){document.onmousemove=null,document.onmouseoup=null}},initCavas:function(){var e=document.getElementById("bbCanvas"),n=e.getContext("2d"),a=t("#bbCanvas").offset().left,i=t("#bbCanvas").offset().top;e.onmousedown=function(t){t=t||window.event;n.save(),n.strokeStyle="#fff",n.beginPath(),n.moveTo(t.clientX-a,t.clientY-i),document.onmousemove=function(t){t=t||window.event;n.lineTo(t.clientX-a,t.clientY-i),n.stroke()},document.onmouseup=function(){n.restore(),document.onmousemove=null,document.onmouseoup=null}}}},mounted:function(){this.initCavas()},created:function(){}}}).call(e,n("L7Pj"))},YyhS:function(t,e){},dI1x:function(t,e){},gQRQ:function(t,e){},lQnV:function(t,e){},"nyp/":function(t,e){},tB7W:function(t,e,n){"use strict";(function(t){var a=n("ODmT");e.a={name:"",data:function(){return{timer:null,storeTime:new Date,RADIUS:7,WIN_WIDTH:0,WIN_HEIGHT:0,balls:[],MARGIN_LEFT:12,MARGIN_TOP:40,DIST:15,colors:["red","#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF444"]}},components:{},methods:{initConfig:function(){this.WIN_WIDTH=t(".routerMain").width(),this.WIN_HEIGHT=t(".routerMain").height();var e=this.WIN_WIDTH>1e3?1e3:this.WIN_WIDTH;this.RADIUS=Math.round(4*e/5/98)-1,this.MARGIN_LEFT=(this.WIN_WIDTH-e)/2},initCanvas:function(){var t=this,e=document.getElementById("canvasTime"),n=e.getContext("2d");e.width=this.WIN_WIDTH,e.height=this.WIN_HEIGHT,this.render(n),this.timer=setInterval(function(){t.render(n)},50)},render:function(t){var e,n,a,i,s,r,o=new Date,c=this.storeTime;e=o.getHours(),n=o.getMinutes(),a=o.getSeconds(),i=c.getHours(),s=c.getMinutes(),r=c.getSeconds(),t.clearRect(0,0,t.canvas.width,t.canvas.height),this.renderBall(e,n,a,i,s,r,t),this.updateBalls(t),this.renderTime(e,n,a,t),this.storeTime=o},renderBall:function(t,e,n,a,i,s,r){var o=[this.MARGIN_LEFT,this.MARGIN_TOP,this.DIST],c=o[0],h=o[1],l=o[2],d=this.RADIUS;parseInt(a/10)!=parseInt(t/10)&&this.addBalls(c+0,h,parseInt(t/10)),parseInt(a%10)!=parseInt(t%10)&&this.addBalls(c+1*l*(d+1),h,parseInt(t%10)),parseInt(i/10)!=parseInt(e/10)&&this.addBalls(c+3*l*(d+1),h,parseInt(e/10)),parseInt(i%10)!=parseInt(e%10)&&this.addBalls(c+4*l*(d+1),h,parseInt(e%10)),parseInt(s/10)!=parseInt(n/10)&&this.addBalls(c+6*l*(d+1),h,parseInt(n/10)),parseInt(s%10)!=parseInt(n%10)&&this.addBalls(c+7*l*(d+1),h,parseInt(n%10))},addBalls:function(t,e,n){var i=this,s=this.RADIUS;a.a[n].forEach(function(n,a){n.forEach(function(n,r){if(1==n){var o={x:t+2*r*(s+1)+(s+1),y:e+2*a*(s+1)+(s+1),g:1.5+Math.random(),vx:4*Math.pow(-1,Math.ceil(1e3*Math.random())),vy:-10,color:i.colors[Math.floor(Math.random()*i.colors.length)]};i.balls.push(o)}})})},updateBalls:function(t){var e=this;this.balls.forEach(function(t,n){var a=[e.RADIUS,e.WIN_WIDTH,e.WIN_HEIGHT],i=a[0],s=a[1],r=a[2];t.x+=t.vx,t.y+=t.vy,t.vy+=t.g,t.y>=r-i&&(t.y=r-i,t.vy=.75*-t.vy);var o=0;for(e.balls.forEach(function(t,n){t.x+i>0&&t.x-i<s&&(e.balls[o++]=t)});e.balls.length>o;)e.balls.pop();if(e.balls.length-200)for(var c=e.balls.length-200,h=0;h<c;h++){var l=e.balls.length-20,d=Math.floor(Math.random()*(l-1+1)+1);e.balls.splice(d,1)}})},renderTime:function(t,e,n,a){var i=this,s=[this.MARGIN_LEFT,this.MARGIN_TOP,this.DIST],r=s[0],o=s[1],c=s[2],h=this.RADIUS;this.renderDigit(r,o,parseInt(t/10),a),this.renderDigit(r+c*(h+1),o,parseInt(t%10),a),this.renderDigit(r+2*c*(h+1),o,10,a),this.renderDigit(r+3*c*(h+1),o,parseInt(e/10),a),this.renderDigit(r+4*c*(h+1),o,parseInt(e%10),a),this.renderDigit(r+5*c*(h+1),o,10,a),this.renderDigit(r+6*c*(h+1),o,parseInt(n/10),a),this.renderDigit(r+7*c*(h+1),o,parseInt(n%10),a),this.balls.forEach(function(t,e){a.fillStyle=t.color,a.beginPath(),a.arc(t.x,t.y,i.RADIUS,0,2*Math.PI,!0),a.closePath(),a.fill()})},renderDigit:function(t,e,n,i){var s=this;i.fillStyle="rgb(0,102,153)",a.a[n].forEach(function(n,a){n.forEach(function(n,r){if(1==n){var o=s.RADIUS,c=t+2*r*(o+1)+(o+1),h=e+2*a*(o+1)+(o+1);i.beginPath(),i.arc(c,h,o,0,2*Math.PI),i.closePath(),i.fill()}})})},bindWindow:function(){var t=this;window.onblur=function(){clearInterval(t.timer)},window.onfocus=function(){clearInterval(t.timer),t.initCanvas()},window.onresize=function(){clearInterval(t.timer),t.initConfig(),t.initCanvas()}}},mounted:function(){this.bindWindow(),this.initConfig(),this.initCanvas()},created:function(){}}}).call(e,n("L7Pj"))},v2K0:function(t,e){},xSfu:function(t,e,n){"use strict";(function(t){e.a={name:"HelloWorld",data:function(){return{canvas:{width:0,height:0}}},methods:{drawCanvas:function(){var t=this,e=document.getElementById("canvas");if(e.getContext){var n=e.getContext("2d");setInterval(function(){var e=parseInt(11*Math.random()+10,10);n.clearRect(0,0,t.canvas.width,t.canvas.height);for(var a=0;a<e;a++){var i=parseInt(Math.random()*(t.canvas.width+1),10),s=parseInt(Math.random()*(t.canvas.height+1),10),r=1.8*Math.random()+.1;n.beginPath(),n.moveTo(i,s),n.bezierCurveTo(i,s-3,i-5,s-15,i-25,s-15),n.bezierCurveTo(i-55,s-15,i-55,s+22.5,i-55,s+22.5),n.bezierCurveTo(i-55,s+40,i-35,s+62,i,s+80),n.bezierCurveTo(i+35,s+62,i+55,s+40,i+56,s+22.5),n.bezierCurveTo(i+55,s+22.5,i+55,s-15,i+25,s-15),n.bezierCurveTo(i+10,s-15,i,s-3,i,s),n.fillStyle="rgba(220,20,60,"+r+")",n.fill()}},500)}}},mounted:function(){this.canvas.width=t(".routerMain").width(),this.canvas.height=t(".routerMain").height(),this.drawCanvas()}}}).call(e,n("L7Pj"))},xsZ7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4b3692a84ec4701f6e56.js.map