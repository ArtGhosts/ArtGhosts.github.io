(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-stock-index"],{"062c":function(t,n,e){var i=e("fc33");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("40807e5a",i,!0,{sourceMap:!1,shadowMode:!1})},"7c1b":function(t,n,e){"use strict";e.r(n);var i=e("86c8"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"86c8":function(t,n,e){"use strict";e("d81d"),e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"Hello",dataList:[{time:"2023-01-29",rental:0,kindsList:[{name:"熊猫徽章",cost:"52",sellingPrice:"75",profit:"",unit:"件",num:"3",money:""},{name:"小乐宝",cost:"72",sellingPrice:"90",profit:"",unit:"件",num:"2",money:""},{name:"动力苏打酒",cost:"36",sellingPrice:"69",profit:"",unit:"件",num:"9",money:""}]},{time:"2023-02-02",rental:0,kindsList:[{name:"雁荡山",cost:"25",sellingPrice:"40",profit:"",unit:"件",num:"121",money:""},{name:"动力苏打酒",cost:"36",sellingPrice:"69",profit:"",unit:"件",num:"2",money:""},{name:"希德王冠",cost:"29",sellingPrice:"48",profit:"",unit:"件",num:"8",money:""},{name:"橙色炸弹",cost:"7.84",sellingPrice:"10",profit:"",unit:"瓶",num:"17",money:""},{name:"欧博纳",cost:"30",sellingPrice:"48",profit:"",unit:"箱",num:"10",money:""},{name:"西尔盾",cost:"27",sellingPrice:"48",profit:"",unit:"件",num:"10",money:""},{name:"强爽",cost:"103",sellingPrice:"150",profit:"",unit:"件",num:"3",money:""},{name:"小红帽红酒",cost:"125",sellingPrice:"390",profit:"",unit:"件",num:"1",money:""},{name:"1664白啤",cost:"130",sellingPrice:"150",profit:"",unit:"件",num:"2",money:""}]}]}},created:function(){this.dataList.map((function(t,n){t.kindsList.map((function(t,n){t.profit=t.sellingPrice-t.cost,t.money=t.cost*t.num})),t.kindsList.map((function(n,e){t.rental+=Number(n.money),console.log(t.rental)}))}))},onLoad:function(){},methods:{}};n.default=i},b266:function(t,n,e){"use strict";e.r(n);var i=e("e69e"),a=e("7c1b");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("c5dc");var u,r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"ea9c4012",null,!1,i["a"],u);n["default"]=c.exports},c5dc:function(t,n,e){"use strict";var i=e("062c"),a=e.n(i);a.a},e69e:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniCollapse:e("afb9").default,uniCollapseItem:e("9955").default,uniTable:e("45ff").default,uniTr:e("f811").default,uniTh:e("56fa").default,uniTd:e("bda3").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-area"},[e("uni-collapse",t._l(this.dataList,(function(n,i){return e("uni-collapse-item",{attrs:{title:n.time+"--总额:"+n.rental.toFixed(2),open:!0}},[e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{width:"95",align:"center"}},[t._v("名称")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("数量")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("金额")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("单位")])],1),t._l(n.kindsList,(function(n,i){return e("uni-tr",[e("uni-td",[t._v(t._s(n.name))]),e("uni-td",[t._v(t._s(n.num))]),e("uni-td",[t._v(t._s(n.money))]),e("uni-td",[t._v(t._s(n.unit))])],1)}))],2)],1)})),1)],1)],1)},o=[]},fc33:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".content[data-v-ea9c4012]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-ea9c4012]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-ea9c4012]{display:flex;justify-content:center;width:100%}.title[data-v-ea9c4012]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=n}}]);