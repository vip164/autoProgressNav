(function(t){function e(e){for(var n,r,o=e[0],d=e[1],c=e[2],h=0,u=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);l&&l(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var d=i[o];0!==s[d]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=d;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"53a4":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("aaa5"),i("450d");var n=i("a578"),s=i.n(n),a=(i("9d4c"),i("e450")),r=i.n(a),o=(i("10cb"),i("f3ad")),d=i.n(o),c=(i("1f1a"),i("4e4b")),l=i.n(c),h=(i("1951"),i("eedf")),u=i.n(h),f=(i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("2b0e")),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v("一键生成 视频导航素材.mp4")]),t.waitTime<=0?i("h3",[t._v("冬灰条制作")]):i("div",[i("h3",{staticStyle:{color:"blue"}},[i("span",[t._v("正在录制生成素材，倒计时 :")]),i("span",{domProps:{textContent:t._s(t.waitTime)}}),i("span",[t._v("秒")])])]),i("canvas",{attrs:{id:"myCanvas",width:t.vedioWidth,height:t.navHeight}}),t._l(t.arr,(function(e,n){return i("div",{key:n,staticClass:"onePart"},[i("h3",{domProps:{textContent:t._s(n+1)}}),i("el-input",{staticClass:"partName",attrs:{placeholder:"请输入环节名称  如 : 开头介绍"},on:{input:function(e){return t.changeText(n)}},model:{value:e.name,callback:function(i){t.$set(e,"name",i)},expression:"part.name"}}),i("el-input-number",{attrs:{"controls-position":"right",min:t.getMinitesMin(n)},on:{change:function(e){return t.changeNumber(n)}},model:{value:e.end.minites,callback:function(i){t.$set(e.end,"minites",i)},expression:"part.end.minites"}}),i("div",{staticStyle:{margin:"0 21px"}},[t._v("分钟")]),i("el-input-number",{attrs:{"controls-position":"right",min:t.getSecondsMin(n),max:60},on:{change:function(e){return t.changeNumber(n)}},model:{value:e.end.seconds,callback:function(i){t.$set(e.end,"seconds",i)},expression:"part.end.seconds"}}),i("div",{staticStyle:{margin:"0 21px"}},[t._v("秒")]),n>0&&t.waitTime<=0?i("i",{staticClass:"el-icon-delete-solid deleteOnePart",on:{click:function(e){return t.deleteOnePart(n)}}}):i("div",{staticStyle:{width:"21px"}})],1)})),i("el-button",{attrs:{disabled:t.waitTime>0},on:{click:t.addOnePart}},[t._v("增加一个环节")]),i("div",{staticStyle:{"margin-top":"30px"}},[i("el-button",{attrs:{disabled:t.waitTime>0,type:"success"},on:{click:t.getNavVedio}},[t._v("一键生成视频导航.mp4")])],1)],2)},g=[],x=(i("a434"),i("b0c0"),i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("2b3d"),{name:"HelloWorld",mounted:function(){window.resizeTo(3e3,600);var t=document.getElementById("myCanvas");this.ctx=t.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.vedioWidth,this.navHeight),this.ctx.lineWidth=2*this.lineWidth,this.ctx.strokeStyle="blue",this.ctx.strokeRect(0,0,this.vedioWidth,this.navHeight),this.drawText(this.lineWidth,0)},data:function(){return{num:0,ctx:null,arr:[{name:"开头介绍",end:{minites:0,seconds:30}},{name:"中间展示",end:{minites:1,seconds:30}},{name:"结尾部分",end:{minites:2,seconds:0}}],vedioWidth:1920,navHeight:54,lineWidth:3,waitTime:0,mediaRecord:null,videoUrl:null,chunks:null}},computed:{allSeconds:function(){return 60*this.arr[this.arr.length-1].end.minites+this.arr[this.arr.length-1].end.seconds}},methods:{changeText:function(t){this.clearCanvas(),this.drawText(this.lineWidth,0)},clearCanvas:function(){this.ctx.clearRect(0,0,this.vedioWidth,this.navHeight);var t=document.getElementById("myCanvas");t.width=t.width,this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.vedioWidth,this.navHeight),this.ctx.lineWidth=2*this.lineWidth,this.ctx.strokeStyle="blue",this.ctx.strokeRect(0,0,this.vedioWidth,this.navHeight)},drawText:function(t,e){var i=this.getPartSeconds(e),n=i*this.vedioWidth/this.allSeconds,s=t+n+3;this.ctx.font="30px bold",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillStyle=""==this.arr[e].name?"red":"white",this.ctx.fillText(""==this.arr[e].name?"环节名称":this.arr[e].name,t+n/2,this.navHeight/2),this.ctx.moveTo(s,this.lineWidth),this.ctx.lineTo(s,this.navHeight-this.lineWidth),this.ctx.lineWidth=this.lineWidth,this.ctx.strokeStyle="blue",this.ctx.stroke(),e<this.arr.length-1&&this.drawText(s,e+1)},getMinitesMin:function(t){return 0==t?0:this.arr[t-1].end.minites},getSecondsMin:function(t){return 0==t?0:this.arr[t-1].end.minites==this.arr[t].end.minites?this.arr[t-1].end.seconds:0},getTimeLength:function(t){return 60*t.minites+t.seconds},getPartSeconds:function(t){return 0==t?this.getTimeLength(this.arr[t].end):this.getTimeLength(this.arr[t].end)-this.getTimeLength(this.arr[t-1].end)},addOnePart:function(){var t=JSON.parse(JSON.stringify(this.arr[this.arr.length-1].end));this.arr.push({name:"",end:t}),this.clearCanvas(),this.drawText(this.lineWidth,0)},deleteOnePart:function(t){this.arr.splice(t,1),this.clearCanvas(),this.drawText(this.lineWidth,0)},changeNumber:function(t){this.clearCanvas(),this.drawText(this.lineWidth,0),t!=this.arr.length-1&&this.getTimeLength(this.arr[t].end)>this.getTimeLength(this.arr[t+1].end)&&(this.arr[t+1].end=JSON.parse(JSON.stringify(this.arr[t].end)),this.changeNumber(t+1))},download:function(){this.mediaRecord.stop(),this.clearCanvas(),this.drawText(this.lineWidth,0);var t=new Blob(this.chunks,{type:"video/mp4"});this.videoUrl=window.URL.createObjectURL(t);var e=document.createElement("a");e.href=this.videoUrl,e.download="冬灰条帮你自动生成的进度条.mp4",e.style.display="none",document.body.appendChild(e),e.click()},getNavVedio:function(){var t=this;this.chunks=new Set;var e=function(){var e=document.querySelector("#myCanvas").captureStream(48);t.mediaRecord=new MediaRecorder(e,{videoBitsPerSecond:85e5}),t.mediaRecord.ondataavailable=function(e){t.chunks.add(e.data)},t.mediaRecord.start(20)},i=1e3*this.allSeconds,n=1e3,s=(this.vedioWidth-this.lineWidth)/(i/n),a=(this.navHeight,this.vedioWidth),r=function e(i){setTimeout((function(){t.ctx.fillStyle="blue",t.ctx.fillRect(0,0,i,54),t.drawText(3,0),i>a?t.download():(e(i+s),t.waitTime--)}),1e3)};this.waitTime=this.allSeconds,e(),r(s)}}}),b=x,y=(i("b708"),i("2877")),w=Object(y["a"])(b,v,g,!1,null,"229a9850",null),S=w.exports,T={name:"App",components:{HelloWorld:S}},W=T,k=(i("034f"),Object(y["a"])(W,m,p,!1,null,null,null)),O=k.exports;f["default"].use(u.a),f["default"].use(l.a),f["default"].use(d.a),f["default"].use(r.a),f["default"].use(s.a),f["default"].config.productionTip=!1,new f["default"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,i){},b708:function(t,e,i){"use strict";i("53a4")}});
//# sourceMappingURL=app.9126509d.js.map