(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index","pages-residue-index","pages-sellgoods-index","pages-stock-index"],{"047a":function(t,n,e){"use strict";e.r(n);var i=e("8a67"),a=e("f841");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("2cec");var u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"33cb1428",null,!1,i["a"],void 0);n["default"]=s.exports},"11dd":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniCollapse:e("afb9").default,uniCollapseItem:e("9955").default,uniTable:e("45ff").default,uniTr:e("f811").default,uniTh:e("56fa").default,uniTd:e("bda3").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-area"},[e("uni-collapse",[e("uni-collapse-item",{attrs:{open:!0}},[e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{width:"95",align:"center"}},[t._v("名称")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("数量")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("卖出金额")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("可造成利润")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("单位")])],1),t._l(this.stockTotality,(function(n,i){return e("uni-tr",[e("uni-td",[t._v(t._s(n.name))]),e("uni-td",[t._v(t._s(n.num))]),e("uni-td",[t._v(t._s(n.money))]),e("uni-td",[t._v(t._s(n.profit))]),e("uni-td",[t._v(t._s(n.unit))])],1)}))],2)],1)],1)],1)],1)},o=[]},"2cec":function(t,n,e){"use strict";var i=e("fb40"),a=e.n(i);a.a},3010:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("d81d"),e("a9e3");var i={data:function(){return{}},created:function(){this.dataList.map((function(t,n){t.kindsList.map((function(t,n){t.profit=(t.sellingPrice-t.cost)*t.num,t.money=t.sellingPrice*t.num})),t.kindsList.map((function(n,e){t.rental+=Number(n.money)}))}))}},a=i;n.default=a},5183:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniCollapse:e("afb9").default,uniCollapseItem:e("9955").default,uniTable:e("45ff").default,uniTr:e("f811").default,uniTh:e("56fa").default,uniTd:e("bda3").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-area"},[e("uni-collapse",t._l(this.dataList,(function(n,i){return e("uni-collapse-item",{attrs:{title:n.time+"--总额:"+n.rental.toFixed(2),open:!0}},[e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{width:"95",align:"center"}},[t._v("名称")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("数量")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("金额")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("单位")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("利润")])],1),t._l(n.kindsList,(function(n,i){return e("uni-tr",[e("uni-td",[t._v(t._s(n.name))]),e("uni-td",[t._v(t._s(n.num))]),e("uni-td",[t._v(t._s(n.money))]),e("uni-td",[t._v(t._s(n.unit))]),e("uni-td",[t._v(t._s(n.profit))])],1)}))],2)],1)})),1)],1)],1)},o=[]},5436:function(t,n,e){"use strict";e.r(n);var i=e("bfe0"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"54eb":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".content[data-v-cc498d5a]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-cc498d5a]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-cc498d5a]{display:flex;justify-content:center;width:100%}.title[data-v-cc498d5a]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=n},"5f13":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".content[data-v-0f1e7b86]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-0f1e7b86]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-0f1e7b86]{display:flex;justify-content:center;width:100%}uni-button[data-v-0f1e7b86]{width:100%;margin:40px 0}.title[data-v-0f1e7b86]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=n},6139:function(t,n,e){var i=e("54eb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("69262ea9",i,!0,{sourceMap:!1,shadowMode:!1})},"6fd5":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".content[data-v-ffdcd744]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-ffdcd744]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-ffdcd744]{display:flex;justify-content:center;width:100%}.title[data-v-ffdcd744]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=n},"74f3":function(t,n,e){"use strict";var i=e("ff62"),a=e.n(i);a.a},"793a":function(t,n,e){"use strict";e.r(n);var i=e("11dd"),a=e("5436");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("d6aa");var u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"cc498d5a",null,!1,i["a"],void 0);n["default"]=s.exports},"7c1b":function(t,n,e){"use strict";e.r(n);var i=e("86c8"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"7f29":function(t,n,e){var i=e("5f13");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("20babee6",i,!0,{sourceMap:!1,shadowMode:!1})},"856d":function(t,n,e){"use strict";e.r(n);var i=e("bd72"),a=e("a686");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("fcb4");var u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"0f1e7b86",null,!1,i["a"],void 0);n["default"]=s.exports},"86c8":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(e("556a"));var a=i(e("3010")),o={name:"stock",data:function(){return{msg:"子组箱数据",title:"Hello",num:"",dataList:[{time:"2023-01-29",rental:0,kindsList:[{name:"熊猫徽章",cost:52,sellingPrice:75,profit:"",unit:"箱",num:3,money:"",remark:"其中1为抖音"},{name:"小乐堡",cost:72,sellingPrice:90,profit:"",unit:"箱",num:2,money:""},{name:"动力苏打酒",cost:36,sellingPrice:69,profit:"",unit:"箱",num:9,money:""}]},{time:"2023-02-02",rental:0,kindsList:[{name:"雁荡山",cost:25,sellingPrice:40,profit:"",unit:"箱",num:121,money:""},{name:"动力苏打酒",cost:36,sellingPrice:69,profit:"",unit:"箱",num:2,money:""},{name:"希德王冠",cost:29,sellingPrice:48,profit:"",unit:"箱",num:8,money:""},{name:"橙色炸弹",cost:7.84,sellingPrice:10,profit:"",unit:"瓶",num:17,money:""},{name:"欧博纳",cost:30,sellingPrice:48,profit:"",unit:"箱",num:10,money:""},{name:"西尔盾",cost:27,sellingPrice:48,profit:"",unit:"箱",num:10,money:""},{name:"强爽",cost:103,sellingPrice:150,profit:"",unit:"箱",num:3,money:""},{name:"小红帽红酒",cost:125,sellingPrice:390,profit:"",unit:"箱",num:1,money:""},{name:"1664白啤",cost:130,sellingPrice:150,profit:"",unit:"箱",num:2,money:""}]},{time:"2023-02-07",rental:0,kindsList:[{name:"动力苏打酒",cost:36,sellingPrice:69,profit:"",unit:"箱",num:12,money:""},{name:"小乐堡",cost:72,sellingPrice:90,profit:"",unit:"箱",num:2,money:""}]}]}},mixins:[a.default],created:function(){this.$emit("stockFn",this.dataList)},onLoad:function(){},methods:{sendData2:function(){this.$emit("stockFn",this.dataList)}}};n.default=o},"8a67":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniCollapse:e("afb9").default,uniCollapseItem:e("9955").default,uniTable:e("45ff").default,uniTr:e("f811").default,uniTh:e("56fa").default,uniTd:e("bda3").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-area"},[e("uni-collapse",t._l(this.dataList,(function(n,i){return e("uni-collapse-item",{attrs:{title:n.time+"--总额:"+n.rental.toFixed(2),open:!0}},[e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{width:"95",align:"center"}},[t._v("名称")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("数量")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("金额")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("单位")]),e("uni-th",{attrs:{width:"90",align:"center"}},[t._v("备注")]),e("uni-th",{attrs:{width:"90",align:"center"}},[t._v("利润")])],1),t._l(n.kindsList,(function(n,i){return e("uni-tr",[e("uni-td",[t._v(t._s(n.name))]),e("uni-td",[t._v(t._s(n.num))]),e("uni-td",[t._v(t._s(n.money))]),e("uni-td",[t._v(t._s(n.unit))]),e("uni-td",[t._v(t._s(n.remark))]),e("uni-td",[t._v(t._s(n.profit))])],1)}))],2)],1)})),1)],1)],1)},o=[]},a686:function(t,n,e){"use strict";e.r(n);var i=e("e275"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},acda:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".content[data-v-33cb1428]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-33cb1428]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-33cb1428]{display:flex;justify-content:center;width:100%}.title[data-v-33cb1428]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=n},af23:function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(e("556a"));var a=i(e("3010")),o={name:"sellgoods",data:function(){return{title:"Hello",dataList:[{time:"2023-02-01",rental:0,kindsList:[{name:"动力苏打酒",cost:36,sellingPrice:69,profit:"",unit:"箱",num:4,money:"",remark:"其中1为抖音"},{name:"雁荡山",cost:25,sellingPrice:39.9,profit:"",unit:"箱",num:3,money:"",remark:"其中1为抖音"},{name:"熊猫徽章",cost:52,sellingPrice:75,profit:"",unit:"箱",num:1,money:""},{name:"小乐宝",cost:72,sellingPrice:90,profit:"",unit:"箱",num:1,money:""}]},{time:"2023-02-02",rental:0,kindsList:[{name:"雁荡山",cost:25,sellingPrice:39.9,profit:"",unit:"箱",num:1,money:"",remark:"串串28 四宫格小吃25 便宜3块"},{name:"熊猫徽章",cost:52,sellingPrice:75,profit:"",unit:"箱",num:1,money:""},{name:"橙色炸弹",cost:7.84,sellingPrice:15,profit:"",unit:"瓶",num:1,money:""}]},{time:"2023-02-03",rental:0,kindsList:[{name:"绿茶",cost:3,sellingPrice:3,profit:"",unit:"瓶",num:2,money:"",remark:""},{name:"雁荡山",cost:25,sellingPrice:39.9,profit:"",unit:"箱",num:3,money:"",remark:""},{name:"欧博纳",cost:30,sellingPrice:48,profit:"",unit:"箱",num:1,money:"",remark:""}]},{time:"2023-02-04",rental:0,kindsList:[{name:"动力苏打酒",cost:"36",sellingPrice:69,profit:"",unit:"箱",num:4,money:"",remark:""},{name:"欧博纳",cost:30,sellingPrice:48,profit:"",unit:"箱",num:4,money:"",remark:""},{name:"熊猫徽章",cost:52,sellingPrice:75,profit:"",unit:"箱",num:.25,remark:"另带小吃拼盘25应该",money:""}]},{time:"2023-02-05",rental:0,kindsList:[{name:"动力苏打酒",cost:36,sellingPrice:69,profit:"",unit:"箱",num:1,money:"",remark:""},{name:"雁荡山",cost:25,sellingPrice:39.9,profit:"",unit:"箱",num:1,money:"",remark:""}]},{time:"2023-02-06",rental:0,kindsList:[{name:"动力苏打酒",cost:36,sellingPrice:69,profit:"",unit:"箱",num:2,money:"",remark:"小吃拼盘25一份"},{name:"雁荡山",cost:25,sellingPrice:39.9,profit:"",unit:"箱",num:1,money:"",remark:"抖音的"},{name:"欧博纳",cost:30,sellingPrice:48,profit:"",unit:"箱",num:3,money:"",remark:""}]},{time:"2023-02-08",rental:0,kindsList:[{name:"欧博纳",cost:30,sellingPrice:48,profit:"",unit:"箱",num:2,money:"",remark:""}]}]}},mixins:[a.default],created:function(){this.$emit("sellgoodsFn",this.dataList)},onLoad:function(){},methods:{}};n.default=o},b266:function(t,n,e){"use strict";e.r(n);var i=e("5183"),a=e("7c1b");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("74f3");var u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"ffdcd744",null,!1,i["a"],void 0);n["default"]=s.exports},bd72:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{}),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.routerStock.apply(void 0,arguments)}}},[t._v("进货列表")]),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.routerSellgoods.apply(void 0,arguments)}}},[t._v("出货列表")]),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.routerResidue.apply(void 0,arguments)}}},[t._v("库存")]),e("sellgoods",{ref:"sellgoods",staticStyle:{display:"none"},on:{sellgoodsFn:function(n){arguments[0]=n=t.$handleEvent(n),t.sellgoodsFn.apply(void 0,arguments)}}}),e("stock",{ref:"stock",staticStyle:{display:"none"},on:{stockFn:function(n){arguments[0]=n=t.$handleEvent(n),t.stockFn.apply(void 0,arguments)}}}),e("residue",{ref:"residue",staticStyle:{display:"none"}})],1)},a=[]},bfe0:function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("14d9"),e("d81d"),e("d3b7");i(e("556a"));var a={name:"stock",data:function(){return{sellgoodsData:[],stockData:[],trueNameData:[],sellgoodsTotality:[],stockTotality:[]}},created:function(){},onLoad:function(){var t=this;uni.getStorage({key:"sellgoodsData",success:function(n){return console.log("成功 ",t.sellgoodsData=n.data)}}),uni.getStorage({key:"stockData",success:function(n){return console.log("成功 ",t.stockData=n.data)}}),this.getSellgoodsFn(),this.getStockFn(),this.countFn()},methods:{getSellgoodsFn:function(){for(var t=[],n=0;n<this.sellgoodsData.length;n++)t.push(this.sellgoodsData[n].kindsList);var e=[],i=[];this.sellgoodsData.map((function(t,n){t.kindsList.map((function(t,n){e.push(t)}))}));for(var a=function(t){if(i.length>0)if(i.some((function(n,i){return n.name==e[t].name})))for(var n=0;n<i.length;n++)i[n].name==e[t].name&&(i[n].num=i[n].num+e[t].num);else i.push(e[t]);else i.push(e[t])},o=0;o<e.length;o++)a(o);this.sellgoodsTotality=i},getStockFn:function(){for(var t=[],n=0;n<this.stockData.length;n++)t.push(this.stockData[n].kindsList);var e=[],i=[];this.stockData.map((function(t,n){t.kindsList.map((function(t,n){e.push(t)}))}));for(var a=function(t){if(i.length>0)if(i.some((function(n,i){return n.name==e[t].name})))for(var n=0;n<i.length;n++)i[n].name==e[t].name&&(console.log(i[n].num,e[t].num),i[n].num=i[n].num+e[t].num);else i.push(e[t]);else i.push(e[t])},o=0;o<e.length;o++)a(o);this.stockTotality=i},countFn:function(){for(var t=0;t<this.stockTotality.length;t++){var n=this.stockTotality[t];this.sellgoodsTotality.map((function(t,e){t.name==n.name&&(n.num=n.num-t.num)}))}this.stockTotality.map((function(t,n){console.log(t),t.profit=t.sellingPrice-t.cost,t.money=t.sellingPrice*t.num}))}}};n.default=a},d6aa:function(t,n,e){"use strict";var i=e("6139"),a=e.n(i);a.a},e275:function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("047a")),o=i(e("b266")),u=i(e("793a")),s={components:{stock:o.default,sellgoods:a.default,residue:u.default},data:function(){return{title:"Hello",kindsList:[{name:"熊猫徽章",cost:"52",sellingPrice:"75",profit:"",unit:"箱",num:"3",money:"",remark:""},{name:"小乐宝",cost:"72",sellingPrice:"90",profit:"",unit:"箱",num:"2",money:""},{name:"雁荡山",cost:"25",sellingPrice:"40",profit:"",unit:"箱",num:"",money:""},{name:"动力苏打酒",cost:"36",sellingPrice:"69",profit:"",unit:"箱",num:"9",money:""},{name:"希德王冠",cost:"29",sellingPrice:"48",profit:"",unit:"箱",num:"",money:""},{name:"橙色炸弹",cost:"7.84",sellingPrice:"10",profit:"",unit:"瓶",num:"",money:""},{name:"欧博纳",cost:"30",sellingPrice:"48",profit:"",unit:"箱",num:"",money:""},{name:"西尔盾",cost:"27",sellingPrice:"48",profit:"",unit:"箱",num:"",money:""},{name:"强爽",cost:"103",sellingPrice:"150",profit:"",unit:"箱",num:"",money:""},{name:"小红帽红酒",cost:"125",sellingPrice:"390",profit:"",unit:"箱",num:"1",money:""},{name:"1664白啤",cost:"130",sellingPrice:"150",profit:"",unit:"箱",num:"",money:""}]}},created:function(){},onLoad:function(){},methods:{sellgoodsFn:function(t){uni.getStorage({key:"sellgoodsData",success:function(n){console.log("成功 ",n.data),uni.setStorageSync("sellgoodsData",t)},fail:function(n){uni.setStorage({key:"sellgoodsData",data:t,success:function(t){console.log("存储成功",t)}})}})},stockFn:function(t){console.log(t),uni.getStorage({key:"stockData",success:function(n){console.log("成功 ",n.data),uni.setStorageSync("stockData",t)},fail:function(n){uni.setStorage({key:"stockData",data:t,success:function(t){console.log("存储成功",t)}})}})},routerStock:function(){uni.navigateTo({url:"/pages/stock/index"})},routerSellgoods:function(){uni.navigateTo({url:"/pages/sellgoods/index"})},routerResidue:function(){uni.navigateTo({url:"/pages/residue/index"})}}};n.default=s},f841:function(t,n,e){"use strict";e.r(n);var i=e("af23"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},fb40:function(t,n,e){var i=e("acda");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("0dc11826",i,!0,{sourceMap:!1,shadowMode:!1})},fcb4:function(t,n,e){"use strict";var i=e("7f29"),a=e.n(i);a.a},ff62:function(t,n,e){var i=e("6fd5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("747aae29",i,!0,{sourceMap:!1,shadowMode:!1})}}]);