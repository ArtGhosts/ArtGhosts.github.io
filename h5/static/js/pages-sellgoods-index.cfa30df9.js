(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sellgoods-index"],{"047a":function(t,n,e){"use strict";e.r(n);var i=e("0de7"),a=e("f841");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("167c");var u,o=e("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"61f3f534",null,!1,i["a"],u);n["default"]=s.exports},"0de7":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uniCollapse:e("afb9").default,uniCollapseItem:e("9955").default,uniTable:e("45ff").default,uniTr:e("f811").default,uniTh:e("56fa").default,uniTd:e("bda3").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-area"},[e("uni-collapse",t._l(this.dataList,(function(n,i){return e("uni-collapse-item",{attrs:{title:n.time+"--总额:"+n.rental.toFixed(2),open:!0}},[e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{width:"95",align:"center"}},[t._v("名称")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("数量")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("金额")]),e("uni-th",{attrs:{width:"30",align:"center"}},[t._v("单位")]),e("uni-th",{attrs:{width:"95",align:"center"}},[t._v("备注")])],1),t._l(n.kindsList,(function(n,i){return e("uni-tr",[e("uni-td",[t._v(t._s(n.name))]),e("uni-td",[t._v(t._s(n.num))]),e("uni-td",[t._v(t._s(n.money))]),e("uni-td",[t._v(t._s(n.unit))]),e("uni-td",[t._v(t._s(n.remark))])],1)}))],2)],1)})),1)],1)],1)},r=[]},"167c":function(t,n,e){"use strict";var i=e("c533"),a=e.n(i);a.a},"6e66":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".content[data-v-61f3f534]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-61f3f534]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-61f3f534]{display:flex;justify-content:center;width:100%}.title[data-v-61f3f534]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=n},af23:function(t,n,e){"use strict";e("d81d"),e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"Hello",dataList:[{time:"2023-02-01",rental:0,kindsList:[{name:"动力苏打酒",cost:"36",sellingPrice:"69",profit:"",unit:"件",num:"4",money:"",remark:"其中1为抖音"},{name:"雁荡山",cost:"25",sellingPrice:"39.9",profit:"",unit:"件",num:"3",money:"",remark:"其中1为抖音"},{name:"熊猫徽章",cost:"52",sellingPrice:"75",profit:"",unit:"件",num:"1",money:""},{name:"小乐宝",cost:"72",sellingPrice:"90",profit:"",unit:"件",num:"1",money:""}]}]}},created:function(){this.dataList.map((function(t,n){t.kindsList.map((function(t,n){t.profit=t.sellingPrice-t.cost,t.money=(t.sellingPrice*t.num).toFixed(2)})),t.kindsList.map((function(n,e){t.rental+=Number(n.money),console.log(t.rental)}))}))},onLoad:function(){},methods:{}};n.default=i},c533:function(t,n,e){var i=e("6e66");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("4ac118bd",i,!0,{sourceMap:!1,shadowMode:!1})},f841:function(t,n,e){"use strict";e.r(n);var i=e("af23"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a}}]);