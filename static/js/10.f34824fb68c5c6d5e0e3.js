webpackJsonp([10],{d8at:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("7+uW");var s={name:"SettingContent",components:{HomePageTop:a("PO+u").a},data:function(){return{TopTotle:{name:"我要咨询",left:!0},textareaHome:"",SubmitClassbox:!1}},methods:{textareaText:function(){""!=this.textareaHome&&(this.SubmitClassbox=!0)},submit:function(){if(this.SubmitClassbox=!0){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,s=t.getDate(),n=(t.getDay(),t.getHours());n=n<10?"0"+n:n;var o=t.getMinutes();o=o<10?"0"+o:o;var i,r=t.getSeconds();i=e+"-"+a+"-"+s+" "+n+":"+o+":"+(r=r<10?"0"+r:r),console.log(i);var l={time:i,text:this.textareaHome};console.log(l),this.$store.commit("message",l)}}},created:function(){}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"SettingContent"},[a("HomePageTop",{staticClass:"bg_fff",attrs:{TopTitle:t.TopTotle}}),t._v(" "),a("div",{staticClass:"textareaHome"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textareaHome,expression:"textareaHome"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"请输入你的问题"},domProps:{value:t.textareaHome},on:{input:[function(e){e.target.composing||(t.textareaHome=e.target.value)},t.textareaText]}})]),t._v(" "),a("div",{staticClass:"public-btn mt60 mr30 ml30",class:1==t.SubmitClassbox?"public-btn":"public-btnNo",on:{click:t.submit}},[t._v("提交")])],1)},staticRenderFns:[]};var o=a("VU/8")(s,n,!1,function(t){a("um2v")},null,null);e.default=o.exports},fZGS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("7+uW");var s={name:"SettingContentWin",components:{HomePageTop:a("PO+u").a},data:function(){return{TopTotle:{name:"提交状态",left:!0}}},methods:{prev:function(){this.$router.push({path:"AskSucceed"})}},created:function(){}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"SettingContentWin"},[e("HomePageTop",{staticClass:"bg_fff",attrs:{TopTitle:this.TopTotle}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"public-btn mt60 mr30 ml30",on:{click:this.prev}},[this._v("返回")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"successfullyadded"},[e("img",{attrs:{src:a("dbSA"),alt:""}}),this._v(" "),e("p",{staticClass:"f34"},[this._v("添加成功")])])}]};var o=a("VU/8")(s,n,!1,function(t){a("kapk")},null,null);e.default=o.exports},kapk:function(t,e){},um2v:function(t,e){}});
//# sourceMappingURL=10.f34824fb68c5c6d5e0e3.js.map