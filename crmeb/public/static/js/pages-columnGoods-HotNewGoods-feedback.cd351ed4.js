(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-columnGoods-HotNewGoods-feedback"],{2977:function(e,t,a){"use strict";a.r(t);var i=a("bc3c"),n=a("af90c");for(var f in n)"default"!==f&&function(e){a.d(t,e,(function(){return n[e]}))}(f);a("d1cc");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"36a88f9f",null,!1,i["a"],o);t["default"]=r.exports},"3ef1":function(e,t,a){var i=a("e807");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("1f9a8497",i,!0,{sourceMap:!1,shadowMode:!1})},"7a05":function(e,t,a){e.exports=a.p+"static/img/feed-icon.99e39a74.png"},af90c:function(e,t,a){"use strict";a.r(t);var i=a("efd6"),n=a.n(i);for(var f in i)"default"!==f&&function(e){a.d(t,e,(function(){return i[e]}))}(f);t["default"]=n.a},bc3c:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return f})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"feedback-wrapper"},[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"left-wrapper"},[i("v-uni-view",{staticClass:"title"},[e._v("商城客服已离线")]),i("v-uni-view",{staticClass:"txt"},[e._v(e._s(e.feedback))])],1),i("v-uni-view",{staticClass:"img-box"},[i("v-uni-image",{attrs:{src:a("7a05"),mode:""}})],1)],1),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"title"},[e._v("我要反馈")]),i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的联系电话"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("v-uni-view",{staticClass:"input-box"},[i("v-uni-textarea",{attrs:{type:"text",placeholder:"请填写内容"},model:{value:e.con,callback:function(t){e.con=t},expression:"con"}})],1),i("v-uni-view",{staticClass:"sub_btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subMit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)},f=[]},d1cc:function(e,t,a){"use strict";var i=a("3ef1"),n=a.n(i);n.a},e807:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".feedback-wrapper .head[data-v-36a88f9f]{display:flex;align-items:center;justify-content:space-between;height:%?215?%;padding:%?0?% %?30?%;background-color:#3a3a3a}.feedback-wrapper .head .left-wrapper[data-v-36a88f9f]{width:%?456?%;color:#fff;font-size:%?24?%}.feedback-wrapper .head .left-wrapper .title[data-v-36a88f9f]{margin-bottom:%?15?%;font-size:%?32?%}.feedback-wrapper .head .img-box uni-image[data-v-36a88f9f]{width:%?173?%;height:%?156?%}.feedback-wrapper .info[data-v-36a88f9f]{display:flex;background-color:#fff}.feedback-wrapper .info .info-item[data-v-36a88f9f]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;height:%?138?%;border-right:1px solid #f0f1f2}.feedback-wrapper .info .info-item[data-v-36a88f9f]:last-child{border:none}.feedback-wrapper .info .info-item .big-txt[data-v-36a88f9f]{font-size:%?32?%;font-weight:700;color:#282828}.feedback-wrapper .info .info-item .small[data-v-36a88f9f]{margin-top:%?10?%;font-size:%?24?%;color:#9f9f9f}.feedback-wrapper .main[data-v-36a88f9f]{margin-top:%?16?%;padding:%?30?% %?30?% %?68?%;background-color:#fff}.feedback-wrapper .main .title[data-v-36a88f9f]{font-size:%?30?%;font-weight:700}.feedback-wrapper .main .input-box[data-v-36a88f9f]{margin-top:%?20?%}.feedback-wrapper .main .input-box uni-input[data-v-36a88f9f]{display:block;width:100%;height:%?78?%;background:#f5f5f5;font-size:%?28?%;padding-left:%?20?%}.feedback-wrapper .main .input-box uni-textarea[data-v-36a88f9f]{display:block;width:100%;height:%?260?%;padding:%?20?%;background:#f5f5f5;font-size:%?28?%}.feedback-wrapper .main .sub_btn[data-v-36a88f9f]{margin-top:%?130?%;width:100%;height:%?86?%;line-height:%?86?%;font-size:%?30?%;text-align:center;color:#fff;border-radius:%?43?%;background-color:#3875ea}",""]),e.exports=t},efd6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("da79"),n={name:"feedback",data:function(){return{name:"",phone:"",con:"",feedback:""}},onLoad:function(){this.getInfo()},methods:{getInfo:function(){var e=this;(0,i.serviceFeedBack)().then((function(t){e.feedback=t.data.feedback}))},subMit:function(){var e=this;return this.name?this.phone&&/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.phone)?this.con?void(0,i.feedBackPost)({rela_name:this.name,phone:this.phone,content:this.con}).then((function(t){e.$util.Tips({title:t.msg,icon:"success"},{tab:3})})).catch((function(e){that.$util.Tips({title:e})})):this.$util.Tips({title:"请填写内容"}):this.$util.Tips({title:"请填写正确的手机号码"}):this.$util.Tips({title:"请填写姓名"})}}};t.default=n}}]);