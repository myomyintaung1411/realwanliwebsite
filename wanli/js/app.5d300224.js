(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={app:0},r={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b1a8b5bb","chunk-09fd40e6":"6ded92a4","chunk-6dbef270":"9457da29","chunk-7c9a03e8":"36657e1f","chunk-abf90768":"f87939c4","chunk-b67d1a2a":"66a939da","chunk-c31a7660":"d0bdccda","chunk-f4efbce2":"3b9448ec"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-09fd40e6":1,"chunk-6dbef270":1,"chunk-7c9a03e8":1,"chunk-abf90768":1,"chunk-b67d1a2a":1,"chunk-c31a7660":1,"chunk-f4efbce2":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"0e54656b","chunk-09fd40e6":"910b48bc","chunk-6dbef270":"61d5c5a0","chunk-7c9a03e8":"a3e79fda","chunk-abf90768":"722218fc","chunk-b67d1a2a":"dd7b737b","chunk-c31a7660":"5a908284","chunk-f4efbce2":"5ca90e88"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[e],p.parentNode.removeChild(p),n(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){s[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},1799:function(e,t,n){"use strict";n("43ad")},2:function(e,t){},"2ee0":function(e,t,n){},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";var a=n("2b0e"),s=n("2f62");a["a"].use(s["a"]),t["a"]=new s["a"].Store({state:{login:!1,myAccount:"",myPassowrd:""},mutations:{},actions:{},modules:{}})},"43ad":function(e,t,n){},"4dc2":function(e,t,n){"use strict";n("6e32")},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},created:function(){this.isMobile()?this.$router.push("/m"):this.$router.push("/")}},o=i,c=(n("5c0b"),n("2877")),l=Object(c["a"])(o,s,r,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("router-view")],1)},f=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-main"},[a("div",{staticClass:"max-div"},[a("img",{staticClass:"logo",attrs:{src:n("cf05"),alt:""}}),a("div",{staticStyle:{display:"flex","flex-direction":"column"}},[e._m(0),a("div",{staticClass:"input-section"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.login.username,expression:"login.username"}],staticClass:"input",attrs:{type:"text",placeholder:"账号",autocomplete:"off"},domProps:{value:e.login.username},on:{input:function(t){t.target.composing||e.$set(e.login,"username",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.login.password,expression:"login.password",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"password",placeholder:"密码",autocomplete:"off"},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.login.code,expression:"login.code"}],staticClass:"input",attrs:{type:"text",placeholder:"验证码",autocomplete:"off"},domProps:{value:e.login.code},on:{focus:function(t){return e.yzhm()},input:function(t){t.target.composing||e.$set(e.login,"code",t.target.value)}}}),a("p",{staticClass:"ValidCode disabled-select"},e._l(e.codeList,(function(t,n){return a("span",{key:n,style:e.getStyle(t)},[e._v(e._s(t.code))])})),0),a("button",{staticClass:"login-btn",on:{click:function(t){return e.Login()}}},[e._v("登录")]),a("button",{staticClass:"login-btn register",on:{click:function(t){return e.openRegister()}}},[e._v(" 注册 ")]),a("a",{staticClass:"test_btn",attrs:{href:"#"},on:{click:function(t){return e.gotoTestGame()}}},[a("span"),a("span"),a("span"),a("span"),e._v(" 试玩 ")])])]),e.RegisterDialog?a("div",{staticClass:"wrapper"},[a("img",{staticClass:"close-img",attrs:{src:n("f2a6"),alt:""},on:{click:e.CloseDialog}}),a("div",{staticClass:"title"},[e._v("万利国际")]),a("form",{staticClass:"form",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.Register(t)}}},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.name,expression:"register.name"}],attrs:{type:"text",required:"",autocomplete:"off"},domProps:{value:e.register.name},on:{input:function(t){t.target.composing||e.$set(e.register,"name",t.target.value)}}}),a("label",[e._v("请输入账号")])]),a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.pass,expression:"register.pass"}],attrs:{type:"password",required:"",autocomplete:"off"},domProps:{value:e.register.pass},on:{input:function(t){t.target.composing||e.$set(e.register,"pass",t.target.value)}}}),a("label",[e._v("请输入密码")])]),a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.checkpass,expression:"register.checkpass"}],attrs:{type:"password",required:"",autocomplete:"off"},domProps:{value:e.register.checkpass},on:{input:function(t){t.target.composing||e.$set(e.register,"checkpass",t.target.value)}}}),a("label",[e._v("请确认密码")])]),a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.register.phone,expression:"register.phone"}],attrs:{type:"number",required:"",autocomplete:"off"},domProps:{value:e.register.phone},on:{input:function(t){t.target.composing||e.$set(e.register,"phone",t.target.value)}}}),a("label",[e._v("请输入手机号")])]),e._m(1)])]):e._e()]),a("div",{staticStyle:{width:"100%",background:"#2a2a66",position:"relative"}},[a("div",{staticClass:"tab"},[a("span",{staticClass:"nav-text",class:{active:1==e.activeTab},on:{click:function(t){return e.Tabclick(1)}}},[e._v("首页")]),a("span",{staticClass:"nav-text",class:{active:2==e.activeTab},on:{click:function(t){return e.Tabclick(2)}}},[e._v("真人视讯")]),a("span",{staticClass:"nav-text",class:{active:3==e.activeTab},on:{click:function(t){return e.Tabclick(3)}}},[e._v("优惠活动")]),a("span",{staticClass:"nav-text",class:{active:4==e.activeTab},on:{click:function(t){return e.Tabclick(4)}}},[e._v("APP下载")]),a("span",{staticClass:"nav-text",class:{active:5==e.activeTab},on:{click:function(t){return e.Tabclick(5)}}},[e._v("存取款")])])])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upper-header"},[n("span",[e._v("设为主页")]),n("span",{staticClass:"line"}),n("span",[e._v("代理加盟")]),n("span",{staticClass:"line"}),n("span",[e._v("收藏我们")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[n("input",{attrs:{type:"submit",value:"注册账号"}})])}],g=(n("99af"),n("a15b"),n("d81d"),n("b0c0"),n("25f0"),n("beba")),v={data:function(){return{activeTab:1,codeList:[],login:{username:"",password:"",code:""},RegisterDialog:!1,register:{name:"",pass:"",checkpass:"",phone:""}}},methods:{Tabclick:function(e){1==e&&(this.activeTab=1,this.$router.push("/home")),2==e&&(this.activeTab=2,this.$router.push("/live")),3==e&&(this.activeTab=3,this.$router.push("/promotion")),4==e&&(this.activeTab=4,this.$router.push("/appdownload")),5==e&&(this.activeTab=5,this.$router.push("/payment"))},yzhm:function(){this.codeList=[];for(var e=4,t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789",n=t.length,a=0;a<e;a++){var s=[Math.round(220*Math.random()),Math.round(240*Math.random()),Math.round(200*Math.random())];this.codeList.push({code:t.charAt(Math.floor(Math.random()*n)),color:"rgb(".concat(s,")"),fontSize:"1".concat([Math.floor(10*Math.random())],"px"),padding:"".concat([Math.floor(15*Math.random())],"px"),transform:"rotate(".concat(Math.floor(90*Math.random())-Math.floor(90*Math.random()),"deg)")})}this.code=this.codeList.map((function(e){return e.code})).join("").toLowerCase()},getStyle:function(e){return"color: ".concat(e.color,"; font-size: ").concat(e.fontSize,"; padding: ").concat(e.padding,"; transform: ").concat(e.transform)},openRegister:function(){this.RegisterDialog=!0},CloseDialog:function(){this.RegisterDialog=!1},gotoTestGame:function(){window.open("http://wl2021.com/?token=")},Register:function(){var e=this,t=this.$Global.en;if(""==this.register.name)return this.$message.warning("请输入账号");if(""==this.register.pass)return this.$message.warning("请输入密码");if(""==this.register.checkpass)return this.$message.warning("请输入确认密码");if(""==this.register.phone)return this.$message.warning("请输入手机号");if(this.register.pass!==this.register.checkpass)return this.$message.warning("两次输入密码不一致");if(!/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(this.register.phone))return this.$message.warning("手机号码格式不对");if(!/\d/.test(this.register.pass)||!/[a-zA-Z]/.test(this.register.pass))return this.$message.warning("密码必须包含数字和英文字母");var n=this.$Global.optioner.Agentname,a={name:this.register.name,pw:this.$md5(this.register.pass),phone:this.register.phone,agent:n},s=g["a"].encrypt(JSON.stringify(a),t);this.axios.post(this.$Global.registerurl,{data:s}).then((function(n){var a=n.data,s=JSON.parse(g["a"].decrypt(a,t));return"102"==s.JsonData.result?e.$message.warning("无此代理"):"103"==s.JsonData.result?e.$message.warning("已存在此帐号"):"104"==s.JsonData.result?e.$message.warning("注册失败"):"101"==s.JsonData.result?(e.register.name="",e.register.pass="",e.register.checkpass="",e.register.phone="",e.RegisterDialog=!1,e.$message.success("注册成功")):void 0})).catch((function(t){e.$message.error(t.toString())}))},Login:function(){var e=this,t=this.$Global.en;if(1==this.$store.state.login)return this.$message.warning("您已登陆成功");if(""==this.login.username)return this.$message.warning("请输入账号");if(""==this.login.password)return this.$message.warning("请输入密码");if(""==this.login.code)return this.$message.warning("请输入验证码");if(this.code!=this.login.code.toLowerCase())return this.$message.warning("验证码不正确！");var n={name:this.login.username,pw:this.$md5(this.login.password)},a=g["a"].encrypt(JSON.stringify(n),t);this.axios.post(this.$Global.loginurl,{data:a}).then((function(n){var a=n.data,s=JSON.parse(g["a"].decrypt(a,t));return 200==s.JsonData.code?(e.$store.state.login=!0,e.$store.state.myAccount=e.login.username,e.$store.state.myPassword=e.login.password,e.$Global.myLoginInfo.loginId=s.JsonData.Id,e.$Global.myLoginInfo.loginBalance=s.JsonData.balance,e.$Global.myLoginInfo.loginEnable=s.JsonData.enable,e.$Global.myLoginInfo.loginName=s.JsonData.username,e.$Global.myLoginInfo.customerId=s.JsonData.customerId,e.login.username="",e.login.password="",e.login.code="",e.$message.success("登录成功")):e.$message.error("登录失败")})).catch((function(t){e.$message.error(t.toString())}))}}},b=v,y=(n("b7a6"),Object(c["a"])(b,m,h,!1,null,"1a0b573a",null)),w=y.exports,k={components:{Header:w}},$=k,C=Object(c["a"])($,p,f,!1,null,"17ca8fa9",null),_=C.exports,x=d["a"].prototype.push;d["a"].prototype.push=function(e){return x.call(this,e).catch((function(e){return e}))},a["a"].use(d["a"]);var E,S=[{path:"/",name:"Main",component:_,redirect:"/home",children:[{path:"/home",name:"Home",component:function(e){return n.e("chunk-09fd40e6").then(function(){var t=[n("bb51")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/live",name:"Live",component:function(e){return n.e("chunk-b67d1a2a").then(function(){var t=[n("c638")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/promotion",name:"Promotion",component:function(e){return n.e("chunk-6dbef270").then(function(){var t=[n("bc7c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/appdownload",name:"AppDownload",component:function(){return n.e("about").then(n.bind(null,"dff5"))}},{path:"/payment",name:"Payment",component:function(e){return n.e("chunk-abf90768").then(function(){var t=[n("1175")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/m",name:"MobileSite",component:function(e){return n.e("chunk-7c9a03e8").then(function(){var t=[n("ba77")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/m/login",name:"Login",component:function(e){return n.e("chunk-f4efbce2").then(function(){var t=[n("50ba")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/m/register",name:"Register",component:function(e){return n.e("chunk-c31a7660").then(function(){var t=[n("8ede")];e.apply(null,t)}.bind(this)).catch(n.oe)}}],P=new d["a"]({routes:S}),T=P,A=n("4360"),L=n("b326"),M=(n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"message-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"message",class:e.typeClass,attrs:{role:"alert"}},[n("p",{staticClass:"message__content"},[n("i",{staticClass:"iconfont",attrs:{color:e.color,small:!0},domProps:{innerHTML:e._s(e.icon)}}),e._v(" "+e._s(e.message)+" ")])])])}),D=[],N={name:"message",data:function(){return{visible:!1,duration:2e3,message:"",timer:null,closed:!1,color:"",icon:"",typeClass:""}},computed:{colorW:function(){return this.color="message--error"==this.typeClass?"#D50000":"message--warning"==this.typeClass?"#FFAB00":"#00C853"}},watch:{colorW:function(){},closed:function(e){e&&(this.visible=!1,this.$el.addEventListener("transitionend",this.destroyElement))}},methods:{destroyElement:function(){this.$el.removeEventListener("transitionend",this.destroyElement),this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},startTimer:function(){var e=this;this.duration>0&&(this.timer=setTimeout((function(){e.closed||e.close()}),this.duration))},close:function(){this.closed=!0}},mounted:function(){this.startTimer()}},O=N,B=(n("4dc2"),Object(c["a"])(O,M,D,!1,null,"4f2d19c1",null)),U=B.exports,j=a["a"].extend(U),I=[],J=1,G=function(e,t,n,a){e=e||{},"string"===typeof e&&(e={message:e,color:t,icon:n,typeClass:a});var s="message_"+J++;return E=new j({data:e}),E.id=s,E.vm=E.$mount(),document.body.appendChild(E.vm.$el),E.vm.visible=!0,E.dom=E.vm.$el,E.dom.style.zIndex=1e4,I.push(E),E.vm};G.success=function(e){G(e,"#67c23a","&#xe616;","message--success")},G.error=function(e){G(e,"#CC0033","&#xe617;","message--error")},G.warning=function(e){G(e,"#67c23a","&#xe618;","message--warning")},G.close=function(e){for(var t=0,n=I.length;t<n;t++)if(e===I[t].id){I.splice(t,1);break}},G.closeAll=function(){for(var e=I.length-1;e>=0;e--)I[e].close()};var z=G,R=(n("2ee0"),n("8237")),H=n.n(R),K=n("b1ef"),q=n("bc3a"),F=n.n(q),W=n("2106"),Z=n.n(W);a["a"].config.productionTip=!1,a["a"].prototype.$message=L["a"],a["a"].prototype.$mobilemessage=z,a["a"].use(Z.a,F.a),a["a"].prototype.$Global=K["a"],a["a"].prototype.$md5=H.a,new a["a"]({router:T,store:A["a"],render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6:function(e,t){},"6e32":function(e,t,n){},7:function(e,t){},8:function(e,t){},9:function(e,t){},"9c0c":function(e,t,n){},b1ef:function(e,t,n){"use strict";var a="http://114.29.253.162:3198/";t["a"]={optioner:{Agentid:"",Agentname:""},myLoginInfo:{loginId:"",loginName:"",loginBalance:"",loginEnable:"",customerId:""},registerurl:a+"regist",loginurl:a+"login",agentUrl:a+"getAgentInfo ",scrollData:a+"getBulletin",PaymentUrl:"http://wlzh.hn885.com/payment/xjw/pay",PaymentCallbackUrl:a+"pay",Withdrawurl:"http://wlzh.hn885.com/payment/xjw/draw",WithDrawCallbackUrl:a+"draw",Oid_Partner:"d9fce17200317431b1b43b27508224cf0294759a",addPwStr:"$hn_ok$my_ok$hn_ok",en:{key:"#4dFER#@&wqDcv#@67$jNLj#",iv:"8975624324562108"},gameEn:{key:"@hKe9@A1lKe9$Tz1kE@8HnG7",iv:"1234567890123456"},paymentEn:{key:"@hKe9@A1lKe9$Tz1kE@8HnG7",iv:"1234567890123456"},withdrawEn:{key:"@hKe9@A1lKe9$Tz1kE@8HnG7",iv:"1234567890123456"}}},b326:function(e,t,n){"use strict";n("a434");var a,s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"message-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"message",class:e.typeClass,attrs:{role:"alert"}},[n("p",{staticClass:"message__content"},[n("i",{staticClass:"iconfont",attrs:{color:e.color,small:!0},domProps:{innerHTML:e._s(e.icon)}}),e._v(" "+e._s(e.message)+" ")])])])},i=[],o={name:"message",data:function(){return{visible:!1,duration:2e3,message:"",timer:null,closed:!1,color:"",icon:"",typeClass:""}},computed:{colorW:function(){return this.color="message--error"==this.typeClass?"#D50000":"message--warning"==this.typeClass?"#FFAB00":"#00C853"}},watch:{colorW:function(){},closed:function(e){e&&(this.visible=!1,this.$el.addEventListener("transitionend",this.destroyElement))}},methods:{destroyElement:function(){this.$el.removeEventListener("transitionend",this.destroyElement),this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},startTimer:function(){var e=this;this.duration>0&&(this.timer=setTimeout((function(){e.closed||e.close()}),this.duration))},close:function(){this.closed=!0}},mounted:function(){this.startTimer()}},c=o,l=(n("1799"),n("2877")),u=Object(l["a"])(c,r,i,!1,null,"94e0eb84",null),d=u.exports,p=s["a"].extend(d),f=[],m=1,h=function(e,t,n,s){e=e||{},"string"===typeof e&&(e={message:e,color:t,icon:n,typeClass:s});var r="message_"+m++;return a=new p({data:e}),a.id=r,a.vm=a.$mount(),document.body.appendChild(a.vm.$el),a.vm.visible=!0,a.dom=a.vm.$el,a.dom.style.zIndex=1e4,f.push(a),a.vm};h.success=function(e){h(e,"#67c23a","&#xe616;","message--success")},h.error=function(e){h(e,"#CC0033","&#xe617;","message--error")},h.warning=function(e){h(e,"#67c23a","&#xe618;","message--warning")},h.close=function(e){for(var t=0,n=f.length;t<n;t++)if(e===f[t].id){f.splice(t,1);break}},h.closeAll=function(){for(var e=f.length-1;e>=0;e--)f[e].close()};t["a"]=h},b7a6:function(e,t,n){"use strict";n("e8a4")},beba:function(e,t,n){"use strict";n("99af"),n("d3b7"),n("25f0");var a=n("4360"),s=n("b326"),r=n("b1ef"),i=n("3452"),o=n("e762"),c=n("8237");t["a"]={encrypt:function(e,t){var n=i.enc.Utf8.parse(t.key),a=i.enc.Utf8.parse(t.iv),s=i.AES.encrypt(e,n,{iv:a,mode:i.mode.CBC,padding:i.pad.Pkcs7});return s.toString()},decrypt:function(e,t){var n=i.enc.Utf8.parse(t.key),a=i.enc.Utf8.parse(t.iv),s=i.AES.decrypt(e,n,{iv:a,mode:i.mode.CBC,padding:i.pad.Pkcs7});return s.toString(i.enc.Utf8)},gameEncrypt:function(e,t){var n=i.enc.Utf8.parse(t.key),a=i.enc.Utf8.parse(t.iv),s=i.enc.Utf8.parse(e),r=i.AES.encrypt(s,n,{iv:a,mode:i.mode.CBC,padding:i.pad.ZeroPadding});return i.enc.Base64.stringify(r.ciphertext)},payEncrypt:function(e,t){var n=i.enc.Utf8.parse(t.key),a=i.enc.Utf8.parse(t.iv),s=i.AES.encrypt(e,n,{iv:a,mode:i.mode.CBC,padding:i.pad.Pkcs7}),r=i.enc.Utf8.parse(s.toString()),o=i.enc.Base64.stringify(r);return o},paymentDecrypt:function(e,t){var n=i.enc.Utf8.parse(t.key),a=i.enc.Utf8.parse(t.iv),s=i.enc.Base64.parse(e),r=i.enc.Base64.stringify(s),o=i.AES.decrypt(r,n,{iv:a,mode:i.mode.CBC,padding:i.pad.ZeroPadding}),c=o.toString(i.enc.Utf8);return c.toString()},gameDecrypt:function(e,t){var n=i.enc.Utf8.parse(t.key),a=i.enc.Utf8.parse(t.iv),s=i.enc.Base64.parse(e),r=i.enc.Base64.stringify(s),o=i.AES.decrypt(r,n,{iv:a,mode:i.mode.CBC,padding:i.pad.ZeroPadding}),c=o.toString(i.enc.Utf8);return c.toString()},randomString:function(e,t){t=t||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var n="",a=0;a<e;a++){var s=Math.floor(Math.random()*t.length);n+=t.substring(s,s+1)}return n},doEncrypt:function(){var e={acc:a["a"].state.myAccount,pwd:c(a["a"].state.myPassword)},t=o.encode(JSON.stringify(e)),n=t.substring(0,8),s=t.substring(8),r=n+randomString(8),i=randomString(9)+r+s;return i},Service:function(){if(0==a["a"].state.login)return s["a"].warning("请先登录");var e=r["a"].myLoginInfo.customerId,t=r["a"].myLoginInfo.loginId,n="",i=a["a"].state.myAccount;window.open("http://live.sunnychat.me/index/index/kefu?u=".concat(e,"&uid=").concat(t,"&name=").concat(i,"&avatar=").concat(n))}}},cf05:function(e,t,n){e.exports=n.p+"img/logo.93826d5d.png"},e8a4:function(e,t,n){},f2a6:function(e,t,n){e.exports=n.p+"img/closesearch.94f84f08.png"}});