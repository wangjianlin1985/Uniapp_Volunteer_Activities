(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hongsehuodong/detail"],{"00a6":function(t,e,n){"use strict";n.r(e);var r=n("b057"),a=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=a.a},"134e":function(t,e,n){"use strict";n.r(e);var r=n("73b3"),a=n("00a6");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("274e");var o,u=n("f0c5"),i=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=i.exports},"24e0":function(t,e,n){},"274e":function(t,e,n){"use strict";var r=n("24e0"),a=n.n(r);a.a},"5f8d":function(t,e,n){"use strict";(function(t){n("2ca9");r(n("66fd"));var e=r(n("134e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"73b3":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"3c27"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"38d7"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAuth("hongsehuodong","申请")),r=t.isAuthFront("hongsehuodong","申请");t.$mp.data=Object.assign({},{$root:{m0:n,m1:r}})},s=[]},b057:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,a,s,o){try{var u=t[s](o),i=u.value}catch(c){return void n(c)}u.done?e(i):Promise.resolve(i).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function u(t){s(o,r,a,u,i,"next",t)}function i(t){s(o,r,a,u,i,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var e=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id,t.userid&&(e.userid=t.userid);case 2:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return o(r.default.mark((function e(){var a,s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),a=t.getStorageSync("nowTable"),e.next=4,n.$api.session(a);case 4:s=e.sent,n.user=s.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),n.getStoreup();case 8:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","hongsehuodong"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=this;return o(r.default.mark((function e(){var n,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={page:1,limit:1,refid:t.id,tablename:"hongsehuodong",userid:t.user.id,type:1},e.next=3,t.$api.list("storeup",n);case 3:a=e.sent,t.storeupFlag=a.data.list.length;case 5:case"end":return e.stop()}}),e)})))()},shoucang:function(){var e=this;return o(r.default.mark((function n(){var a,s,u,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e,s={page:1,limit:1,refid:a.detail.id,tablename:"hongsehuodong",userid:a.user.id,type:1},n.next=4,a.$api.list("storeup",s);case 4:if(u=n.sent,1!=u.data.list.length){n.next=9;break}return i=u.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=o(r.default.mark((function t(e){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,a.$api.del("storeup",JSON.stringify([i]));case 3:a.$utils.msg("取消成功"),a.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),n.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=o(r.default.mark((function t(e){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,a.$api.add("storeup",{userid:a.user.id,name:a.detail.huodongmingcheng,picture:a.swiperList[0],refid:a.detail.id,tablename:"hongsehuodong"});case 3:a.$utils.msg("收藏成功"),a.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return n.stop()}}),n)})))()},onAcrossTap:function(e,n,r,a,s){if(t.setStorageSync("crossTable","hongsehuodong"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",r),t.setStorageSync("statusColumnValue",s),t.setStorageSync("tips",a),""!=r&&!r.startsWith("[")){var o=t.getStorageSync("crossObj");for(var u in o)if(u==r&&o[u]==s)return void this.$utils.msg(a)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=this;return o(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("hongsehuodong",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.huodongtupian?t.detail.huodongtupian.split(","):[],t.detail.huodongneirong=t.detail.huodongneirong.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.endSuccess(t.size,e.hasNext);case 1:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return o(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$utils.jump("../discusshongsehuodong/add-or-update?refid=".concat(t.id));case 1:case"end":return e.stop()}}),e)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return o(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.detail.sfsh){e.next=3;break}return t.$utils.msg("请选择审核状态"),e.abrupt("return");case 3:if(t.detail.shhf){e.next=6;break}return t.$utils.msg("请填写审核回复"),e.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),e.next=10,t.$api.update("hongsehuodong",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=u}).call(this,n("543d")["default"])}},[["5f8d","common/runtime","common/vendor"]]]);