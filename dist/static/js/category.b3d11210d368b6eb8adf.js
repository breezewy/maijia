webpackJsonp([6],{"035s":function(t,e){},Hwmd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("035s"),s=(a.n(n),a("igmb")),r=(a.n(s),a("7+uW")),o=a("mtWM"),i=a.n(o),c=a("TFhR"),d=a("nq5D"),u=a("U/rD");new r.default({el:"#app",data:{topLists:null,topIndex:0,subData:null,rankData:null},created:function(){this.getTopList(),this.getSubList(0)},methods:{getTopList:function(){var t=this;i.a.get(c.a.topList).then(function(e){t.topLists=e.data.lists}).catch(function(t){console.log(t)})},getSubList:function(t,e){var a=this;this.topIndex=t,0==t?this.getRank():i.a.get(c.a.subList,{id:e}).then(function(t){a.subData=t.data.data}).catch(function(t){console.log(t)})},getRank:function(){var t=this;i.a.get(c.a.rank).then(function(e){t.rankData=e.data.data}).catch(function(t){console.log(t)})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},components:{Foot:d.a},mixins:[u.a]})},TFhR:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mrremove",cartAdd:"/cart/add",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+n[s]);e.a=n},"U/rD":function(t,e,a){"use strict";var n={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>-1){var a=e.split(".");return a[0]+"."+(a[1]+"0").substr(0,2)}return e+".00"}},components:{Foot:a("nq5D").a}};e.a=n},igmb:function(t,e){},jCMp:function(t,e,a){"use strict";var n=new(a("7+uW").default);e.a=n},lv85:function(t,e){},nq5D:function(t,e,a){"use strict";var n=a("mvHQ"),s=a.n(n),r=a("mw3O"),o=a.n(r),i=a("jCMp"),c=o.a.parse(location.search.substr(1)).index,d=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],u={props:["obj"],data:function(){return{navConfig:d,curIndex:parseInt(c)||0,ob:JSON.parse(s()(this.obj))}},created:function(){var t=this;setTimeout(function(){t.ob.age=18,i.a.$emit("change",18)},3e3)},methods:{changeNav:function(t,e){this.curIndex=e,location.href=t.href+"?index="+e}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{key:n,class:{active:n===t.curIndex},on:{click:function(a){return t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]};var f=a("VU/8")(u,l,!1,function(t){a("lv85")},null,null);e.a=f.exports}},["Hwmd"]);
//# sourceMappingURL=category.b3d11210d368b6eb8adf.js.map