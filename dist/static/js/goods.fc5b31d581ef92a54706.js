webpackJsonp([1],{AeEs:function(t,e){},AnIW:function(t,e){},"Do/K":function(t,e){},HFfA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("JWK+"),s=(n.n(a),n("pI1A")),i=(n.n(s),n("AeEs")),r=(n.n(i),n("AnIW")),o=(n.n(r),n("d7BR")),c=(n.n(o),n("Do/K")),d=(n.n(c),n("LjF4")),u=(n.n(d),n("7+uW")),l=n("TFhR"),f=n("mtWM"),h=n.n(f),m=n("U/rD"),p=n("mw3O"),v=n.n(p),g=n("gN+L"),w=v.a.parse(location.search.substr(1)).id;new u.default({el:"#app",data:{id:w,details:null,detailTab:["商品详情","本店成交"],tabIndex:0,dealLists:null,bannerLists:null,skuType:1,showSku:!1,skuNum:1,isAddCart:!1,showAddMessage:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;h.a.get(l.a.details,{id:w}).then(function(e){t.details=e.data.data,t.bannerLists=[],t.details.imgs.forEach(function(e){t.bannerLists.push({img:e})})})},changeTab:function(t){this.tabIndex=t,t&&this.getDeal()},getDeal:function(){var t=this;h.a.get(l.a.deal,{id:w}).then(function(e){t.dealLists=e.data.data.lists})},chooseSku:function(t){this.skuType=t,this.showSku=!0},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;h.a.post(l.a.addCart,{id:w,number:this.skuNum}).then(function(e){200===e.data.status&&(t.showSku=!1,t.isAddCart=!0,t.showAddMessage=!0,setTimeout(function(){t.showAddMessage=!1},1e3))})}},components:{Swipe:g.a},watch:{showSku:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto"}},mixins:[m.a]})},"JWK+":function(t,e){},LjF4:function(t,e){},TFhR:function(t,e,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mrremove",cartAdd:"/cart/add",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in a)a.hasOwnProperty(s)&&(a[s]="https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+a[s]);e.a=a},"U/rD":function(t,e,n){"use strict";var a={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>-1){var n=e.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return e+".00"}},components:{Foot:n("nq5D").a}};e.a=a},d7BR:function(t,e){},fAd8:function(t,e){},"gN+L":function(t,e,n){"use strict";var a=n("DNVT"),s=(n("v2ns"),{name:"swipe",props:{lists:{type:Array,required:!0},name:{}},created:function(){},mounted:function(){new a.a(".swiper-container",{autoplay:{delay:3e3},loop:!0,pagination:{el:".swiper-pagination"}})}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("fAd8")},null,null);e.a=r.exports},jCMp:function(t,e,n){"use strict";var a=new(n("7+uW").default);e.a=a},lpCr:function(t,e){},nq5D:function(t,e,n){"use strict";var a=n("mvHQ"),s=n.n(a),i=n("mw3O"),r=n.n(i),o=n("jCMp"),c=r.a.parse(location.search.substr(1)).index,d=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],u={props:["obj"],data:function(){return{navConfig:d,curIndex:parseInt(c)||0,ob:JSON.parse(s()(this.obj))}},created:function(){var t=this;setTimeout(function(){t.ob.age=18,o.a.$emit("change",18)},3e3)},methods:{changeNav:function(t,e){this.curIndex=e,location.href=t.href+"?index="+e}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,a){return n("li",{key:a,class:{active:a===t.curIndex},on:{click:function(n){return t.changeNav(e,a)}}},[n("a",[n("i",{class:e.icon}),t._v(" "),n("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]};var f=n("VU/8")(u,l,!1,function(t){n("lpCr")},null,null);e.a=f.exports},pI1A:function(t,e){},v2ns:function(t,e){}},["HFfA"]);
//# sourceMappingURL=goods.fc5b31d581ef92a54706.js.map