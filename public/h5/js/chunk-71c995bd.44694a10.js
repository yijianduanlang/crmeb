(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c995bd"],{"8a7a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"apply-return"},[t._l(t.orderInfo.cartInfo,function(e){return r("div",{key:e.id,staticClass:"goodsStyle acea-row row-between"},[r("div",{staticClass:"pictrue"},[r("img",{staticClass:"image",attrs:{src:e.productInfo.image}})]),r("div",{staticClass:"text acea-row row-between"},[r("div",{staticClass:"name line2"},[t._v(t._s(e.productInfo.store_name))]),r("div",{staticClass:"money"},[r("div",[t._v("\n          ￥"+t._s(e.productInfo.attrInfo?e.productInfo.attrInfo.price:e.productInfo.price)+"\n        ")]),r("div",{staticClass:"num"},[t._v("x"+t._s(e.cart_num))])])])])}),r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[t._v("退货件数")]),r("div",{staticClass:"num"},[t._v(t._s(t.orderInfo.total_num))])]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[t._v("退款金额")]),r("div",{staticClass:"num"},[t._v("￥"+t._s(t.orderInfo.pay_price))])]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[t._v("退款原因")]),r("div",{staticClass:"num acea-row row-left"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.reason=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("选择退款原因")]),t._l(t.reasonList,function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v("\n            "+t._s(e)+"\n          ")])})],2),r("span",{staticClass:"iconfont icon-jiantou"})])]),r("div",{staticClass:"item textarea acea-row row-between"},[r("div",[t._v("备注说明")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.refund_reason_wap_explain,expression:"refund_reason_wap_explain"}],staticClass:"num",attrs:{placeholder:"填写备注信息，100字以内"},domProps:{value:t.refund_reason_wap_explain},on:{input:function(e){e.target.composing||(t.refund_reason_wap_explain=e.target.value)}}})]),r("div",{staticClass:"item acea-row row-between"},[t._m(0),r("div",{staticClass:"upload acea-row row-middle"},[t._l(t.refund_reason_wap_img,function(e,n){return r("div",{key:e,staticClass:"pictrue"},[r("img",{attrs:{src:e}}),r("div",{staticClass:"iconfont icon-guanbi1 font-color-red",on:{click:function(e){return t.refund_reason_wap_img.splice(n,1)}}})])}),t.refund_reason_wap_img.length<3?r("VueCoreImageUpload",{staticClass:"btn btn-primary",attrs:{crop:!1,compress:"80",headers:t.headers,"max-file-size":5242880,credentials:!1,inputAccept:"image/*",inputOfFile:"file",url:t.url},on:{imageuploaded:t.imageuploaded}},[r("div",{staticClass:"pictrue acea-row row-center-wrapper row-column"},[r("span",{staticClass:"iconfont icon-icon25201"}),r("div",[t._v("上传凭证")])])]):t._e()],2)])]),r("div",{staticClass:"returnBnt bg-color-red",on:{click:t.submit}},[t._v("申请退款")])],2)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title acea-row row-between-wrapper"},[r("div",[t._v("上传凭证")]),r("div",{staticClass:"tip"},[t._v("( 最多可上传3张 )")])])}],o=r("f8b7"),i=r("ed08"),s=r("f603"),u={name:"goodsReturn",components:{VueCoreImageUpload:s["a"]},data:function(){return{url:"".concat(i["a"],"/upload/image"),headers:{Authorization:"Bearer "+this.$store.state.app.token},id:this.$route.params.id||0,orderInfo:{},reasonList:[],reason:"",refund_reason_wap_explain:"",refund_reason_wap_img:[]}},methods:{imageuploaded:function(t){if(200!==t.status)return this.$dialog.error(t.msg||"上传图片失败");this.refund_reason_wap_img.push(t.data.url)},getOrderDetail:function(){var t=this;Object(o["i"])(this.id).then(function(e){t.orderInfo=e.data}).catch(function(e){t.$dialog.error(e.msg||"获取订单失败")})},getRefundReason:function(){var t=this;Object(o["h"])().then(function(e){t.reasonList=e.data})},submit:function(){var t=this,e=Object(i["f"])(this.refund_reason_wap_explain),r=this.reason;if(!r)return this.$dialog.toast({mes:"请选择退款原因"});Object(o["m"])({text:r,uni:this.orderInfo.order_id,refund_reason_wap_img:this.refund_reason_wap_img.join(","),refund_reason_wap_explain:e}).then(function(e){t.$dialog.success(e.msg),t.$router.go(-1)}).catch(function(e){t.$dialog.error(e.msg)})}},mounted:function(){this.getOrderDetail(),this.getRefundReason()}},c=u,d=r("2877"),l=Object(d["a"])(c,n,a,!1,null,null,null);e["default"]=l.exports},f8b7:function(t,e,r){"use strict";r.d(e,"l",function(){return a}),r.d(e,"k",function(){return o}),r.d(e,"e",function(){return i}),r.d(e,"b",function(){return s}),r.d(e,"f",function(){return u}),r.d(e,"g",function(){return c}),r.d(e,"a",function(){return d}),r.d(e,"i",function(){return l}),r.d(e,"h",function(){return f}),r.d(e,"m",function(){return p}),r.d(e,"n",function(){return _}),r.d(e,"c",function(){return m}),r.d(e,"d",function(){return v}),r.d(e,"j",function(){return w});var n=r("b775");function a(t){return n["a"].post("/order/confirm",{cartId:t})}function o(t,e){return n["a"].post("/order/computed/"+t,e)}function i(t){return n["a"].get("/coupons/order/"+(parseFloat(t)||0))}function s(t,e){return n["a"].post("/order/create/"+t,e||{})}function u(){return n["a"].get("/order/data")}function c(t){return n["a"].get("/order/list",t)}function d(t){return n["a"].post("/order/cancel",{id:t})}function l(t){return n["a"].get("/order/detail/"+t)}function f(){return n["a"].get("/order/refund/reason")}function p(t){return n["a"].post("/order/refund/verify",t)}function _(t){return n["a"].post("/order/take",{uni:t})}function m(t){return n["a"].post("/order/del",{uni:t})}function v(t){return n["a"].get("order/express/"+t)}function w(t,e,r){return n["a"].post("order/pay",{uni:t,paytype:e,from:r})}}}]);
//# sourceMappingURL=chunk-71c995bd.44694a10.js.map