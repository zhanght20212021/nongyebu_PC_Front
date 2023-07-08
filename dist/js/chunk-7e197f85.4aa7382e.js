(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e197f85"],{2600:function(t,e,a){"use strict";a("f7f9")},"2a7b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("breadcrumb-nav",{scopedSlots:t._u([{key:"firstMenu",fn:function(){return[t._v("礼品管理")]},proxy:!0},{key:"secondMenu",fn:function(){return[t._v("添加礼品")]},proxy:!0}])}),a("el-card",[a("el-alert",{attrs:{title:"添加礼品信息",type:"info","show-icon":"",center:"",closable:!1}}),a("el-steps",{attrs:{space:200,active:1*t.activeIndex,"finish-status":"success","align-center":""}},[a("el-step",{attrs:{title:"基本信息"}}),a("el-step",{attrs:{title:"礼品参数"}}),a("el-step",{attrs:{title:"礼品属性"}}),a("el-step",{attrs:{title:"礼品图片"}}),a("el-step",{attrs:{title:"礼品内容"}}),a("el-step",{attrs:{title:"完成"}})],1),a("el-form",{ref:"addFormRef",attrs:{model:t.addForm,rules:t.addFormRules,"label-width":"100px","label-position":"top"}},[a("el-tabs",{attrs:{"tab-position":"left","before-leave":t.beforeTabLeave},on:{"tab-click":t.tabClicked},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[a("el-form-item",{attrs:{label:"礼品名称",prop:"goods_name"}},[a("el-input",{model:{value:t.addForm.goods_name,callback:function(e){t.$set(t.addForm,"goods_name",e)},expression:"addForm.goods_name"}})],1),a("el-form-item",{attrs:{label:"礼品价格",prop:"goods_price"}},[a("el-input",{attrs:{type:"number",min:"0"},model:{value:t.addForm.goods_price,callback:function(e){t.$set(t.addForm,"goods_price",e)},expression:"addForm.goods_price"}})],1),a("el-form-item",{attrs:{label:"礼品数量",prop:"goods_number"}},[a("el-input",{attrs:{type:"number",min:"0"},model:{value:t.addForm.goods_number,callback:function(e){t.$set(t.addForm,"goods_number",e)},expression:"addForm.goods_number"}})],1),a("el-form-item",{attrs:{label:"礼品重量",prop:"goods_weight"}},[a("el-input",{attrs:{type:"number",min:"0"},model:{value:t.addForm.goods_weight,callback:function(e){t.$set(t.addForm,"goods_weight",e)},expression:"addForm.goods_weight"}})],1),a("el-form-item",{attrs:{label:"礼品分类",prop:"goods_cat"}},[a("el-cascader",{attrs:{options:t.categoryList,props:t.categoryProps},on:{change:t.handleCascaderChange},model:{value:t.addForm.goods_cat,callback:function(e){t.$set(t.addForm,"goods_cat",e)},expression:"addForm.goods_cat"}})],1)],1),a("el-tab-pane",{attrs:{label:"礼品参数",name:"1"}},t._l(t.manyTableData,(function(e){return a("el-form-item",{key:e.attr_id,attrs:{label:e.attr_name}},[a("el-checkbox-group",{model:{value:e.attr_vals,callback:function(a){t.$set(e,"attr_vals",a)},expression:"item.attr_vals"}},t._l(e.attr_vals,(function(t,e){return a("el-checkbox",{key:e,attrs:{border:"",label:t}})})),1)],1)})),1),a("el-tab-pane",{attrs:{label:"礼品属性",name:"2"}},t._l(t.onlyTableData,(function(t){return a("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[a("el-input",{attrs:{value:t.attr_vals}})],1)})),1),a("el-tab-pane",{attrs:{label:"礼品图片",name:"3"}},[a("el-upload",{attrs:{action:t.uploadUrl,"on-preview":t.handleImgPreview,"on-remove":t.handleImgRemove,"list-type":"picture",headers:t.imgUploadHeaders,"on-success":t.handleImgUploadSuccess}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),a("el-tab-pane",{attrs:{label:"礼品内容",name:"4"}},[a("quill-editor",{staticClass:"editor",model:{value:t.addForm.goods_introduce,callback:function(e){t.$set(t.addForm,"goods_introduce",e)},expression:"addForm.goods_introduce"}}),a("el-button",{staticClass:"addBtn",attrs:{type:"primary"},on:{click:t.addGoods}},[t._v("添加礼品")])],1)],1)],1)],1),a("el-dialog",{attrs:{title:"图片预览",visible:t.previewDialogVisible,width:"50%"},on:{"update:visible":function(e){t.previewDialogVisible=e}}},[a("img",{staticClass:"previewImg",attrs:{src:t.previewImgUrl}})])],1)},o=[],s=a("ae71"),n=a("de5d"),i={name:"ListAdd",components:{BreadcrumbNav:s["a"]},data(){return{activeIndex:"0",addForm:{goods_name:"",goods_price:0,goods_number:0,goods_weight:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addFormRules:{goods_name:[{required:!0,message:"请输入礼品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入礼品价格",trigger:"blur"}],goods_number:[{required:!0,message:"请输入礼品数量",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入礼品重量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选择礼品分类",trigger:"blur"}]},categoryList:[],categoryProps:{expandTrigger:"hover",label:"cat_name",value:"cat_id",children:"children"},manyTableData:[],onlyTableData:[],uploadUrl:"http://127.0.0.1:8888/api/private/v1/upload",imgUploadHeaders:{Authorization:sessionStorage.getItem("token")},previewImgUrl:"",previewDialogVisible:!1}},computed:{cateId(){return 3===this.addForm.goods_cat.length?this.addForm.goods_cat[2]:null}},created(){this.getCategoriesList()},methods:{getCategoriesList(){Object(n["f"])({}).then(t=>{let e=t.data;if(console.log("礼品分类",e),200!==e.meta.status)return this.alertMessage("获取分类列表失败","error");this.categoryList=e.data})},handleCascaderChange(){console.log(this.addForm.goods_cat),3!==this.addForm.goods_cat.length&&(this.addForm.goods_cat=[])},beforeTabLeave(t,e){if("0"===e&&3!==this.addForm.goods_cat.length)return this.alertMessage("请先选择礼品分类","error"),!1},tabClicked(){"1"===this.activeIndex?Object(n["h"])(this.cateId,"many").then(t=>{let e=t.data;if(200!==e.meta.status)return this.alertMessage("获取礼品参数失败","error");this.manyTableData=e.data,e.data.forEach(t=>{t.attr_vals=t.attr_vals.split(" ")}),console.log("礼品参数：",e.data)}):"2"===this.activeIndex&&Object(n["h"])(this.cateId,"only").then(t=>{let e=t.data;if(200!==e.meta.status)return this.alertMessage("获取礼品参数失败","error");this.onlyTableData=e.data,console.log("礼品属性：",e.data)})},handleImgPreview(t){console.log("预览",t),this.previewImgUrl=t.response.data.url,this.previewDialogVisible=!0},handleImgRemove(t){console.log("将要被移除的文件:",t);let e=t.response.data.tmp_path,a=this.addForm.pics.findIndex(t=>t.tmp_path===e);this.addForm.pics.splice(a,1),console.log(this.addForm)},handleImgUploadSuccess(t){let e={pic:t.data.tmp_path};this.addForm.pics.push(e)},addGoods(){this.$refs.addFormRef.validate(t=>{if(!t)return this.alertMessage("请填写必要的表单项","error");this.manyTableData.forEach(t=>{let e={attr_id:t.attr_id,attr_value:t.attr_vals.join(" ")};this.addForm.attrs.push(e)}),this.onlyTableData.forEach(t=>{let e={attr_id:t.attr_id,attr_value:t.attr_vals};this.addForm.attrs.push(e)});let e=JSON.parse(JSON.stringify(this.addForm));e.goods_cat=e.goods_cat.join(","),console.log(e),Object(n["b"])(e).then(t=>{let e=t.data;if(console.log("添加礼品",e),201!==e.meta.status)return this.alertMessage("添加失败","error");this.alertMessage("添加成功","success"),this.$router.push("/goods")})})}}},l=i,d=(a("2600"),a("2877")),c=Object(d["a"])(l,r,o,!1,null,"1b859ae0",null);e["default"]=c.exports},ae71:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._t("firstMenu",[t._v("一级菜单")])],2),a("el-breadcrumb-item",[t._t("secondMenu",[t._v("二级菜单")])],2)],1)},o=[],s={name:"BreadcrumbNav"},n=s,i=a("2877"),l=Object(i["a"])(n,r,o,!1,null,"2d65e998",null);e["a"]=l.exports},de5d:function(t,e,a){"use strict";a.d(e,"f",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"g",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"k",(function(){return l})),a.d(e,"h",(function(){return d})),a.d(e,"c",(function(){return c})),a.d(e,"j",(function(){return u})),a.d(e,"e",(function(){return m})),a.d(e,"m",(function(){return g})),a.d(e,"i",(function(){return p})),a.d(e,"l",(function(){return b})),a.d(e,"b",(function(){return h}));var r=a("1bab");function o(t){return Object(r["a"])({url:"/categories",params:t})}function s(t){return Object(r["a"])({url:"/categories",method:"post",data:{...t}})}function n(t){return Object(r["a"])({url:"/categories/"+t})}function i(t){return Object(r["a"])({url:"/categories/"+t.cat_id,method:"put",data:{cat_name:t.cat_name}})}function l(t){return Object(r["a"])({url:"/categories/"+t,method:"delete"})}function d(t,e){return Object(r["a"])({url:`/categories/${t}/attributes`,params:{sel:e}})}function c(t){return Object(r["a"])({url:`/categories/${t.id}/attributes`,method:"post",data:{attr_name:t.attr_name,attr_sel:t.attr_sel}})}function u(t){return Object(r["a"])({url:`/categories/${t.id}/attributes/${t.attrId}`,params:{attr_sel:t.attr_sel}})}function m(t){return Object(r["a"])({url:`/categories/${t.id}/attributes/${t.attrId}`,method:"put",data:{attr_name:t.attr_name,attr_sel:t.attr_sel}})}function g(t){return Object(r["a"])({url:`/categories/${t.id}/attributes/${t.attrId}`,method:"delete"})}function p(t){return Object(r["a"])({url:"/goods",params:t})}function b(t){return Object(r["a"])({url:"/goods/"+t,method:"delete"})}function h(t){return Object(r["a"])({url:"/goods",method:"post",data:t})}},f7f9:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7e197f85.4aa7382e.js.map