(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75acb3c5"],{"3b0d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("breadcrumb-nav",{scopedSlots:t._u([{key:"firstMenu",fn:function(){return[t._v("礼品管理")]},proxy:!0},{key:"secondMenu",fn:function(){return[t._v("分类参数")]},proxy:!0}])}),a("el-card",[a("el-alert",{attrs:{title:"注意：只允许为第三级分类设置相关参数",type:"warning",closable:!1,"show-icon":""}}),a("el-row",{staticClass:"selectCategory"},[a("el-col",[a("span",[t._v("选择礼品分类：")]),a("el-cascader",{attrs:{options:t.categoryList,props:t.cascaderProps},on:{change:t.categoryChange},model:{value:t.selectedKeys,callback:function(e){t.selectedKeys=e},expression:"selectedKeys"}})],1)],1),a("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[a("param-tab-pane",{attrs:{"table-data":t.manyTableData,"title-text":t.titleText,"is-btn-disabled":t.isBtnDisabled,"category-id":t.categoryId,"active-name":t.activeName},on:{"param-list":t.updateParamsList}})],1),a("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[a("param-tab-pane",{attrs:{"table-data":t.onlyTableData,"title-text":t.titleText,"is-btn-disabled":t.isBtnDisabled,"category-id":t.categoryId,"active-name":t.activeName},on:{"param-list":t.updateParamsList}})],1)],1)],1)],1)},i=[],s=a("ae71"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("param-add",{attrs:{"title-text":t.titleText,"is-btn-disabled":t.isBtnDisabled,"category-id":t.categoryId,"active-name":t.activeName},on:{"param-list":t.updateParamsList},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("添加"+t._s(t.titleText))]},proxy:!0}])}),a("el-table",{attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{label:"参数名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("param-edit",{attrs:{"title-text":t.titleText,attr_id:e.row.attr_id,"category-id":t.categoryId,"active-name":t.activeName},on:{"param-list":t.updateParamsList}}),a("param-remove",{attrs:{attr_id:e.row.attr_id,"category-id":t.categoryId},on:{"param-list":t.updateParamsList}})]}}])})],1)],1)},l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isBtnDisabled},on:{click:function(e){t.addDialogVisible=!0}}},[t._t("title",[t._v("添加参数")])],2),a("el-dialog",{attrs:{title:"添加"+t.titleText,visible:t.addDialogVisible,width:"50%"},on:{"update:visible":function(e){t.addDialogVisible=e},close:t.addDialogClose}},[a("el-form",{ref:"addFormRef",attrs:{model:t.addForm,rules:t.formRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[a("el-input",{model:{value:t.addForm.attr_name,callback:function(e){t.$set(t.addForm,"attr_name",e)},expression:"addForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addParam}},[t._v("确 定")])],1)],1)],1)},d=[],c=a("de5d"),u={name:"ParamAdd",props:{titleText:{type:String,default:""},isBtnDisabled:{type:Boolean,default:!1},categoryId:{type:Number,default:0},activeName:{type:String,default:""}},data(){return{addDialogVisible:!1,addForm:{attr_name:""},formRules:{attr_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}}},methods:{addDialogClose(){this.$refs.addFormRef.resetFields()},addParam(){this.$refs.addFormRef.validate(t=>{t&&Object(c["c"])({id:this.categoryId,attr_name:this.addForm.attr_name,attr_sel:this.activeName}).then(t=>{let e=t.data;if(201!==e.meta.status)return this.alertMessage("添加参数失败","error");this.alertMessage("添加参数成功","success"),this.$emit("param-list"),this.addDialogVisible=!1})})}}},m=u,b=a("2877"),f=Object(b["a"])(m,o,d,!1,null,"613885ca",null),p=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editDialog"},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(e){return t.showEditDialog(t.attr_id)}}},[t._v(" 编辑 ")]),a("el-dialog",{attrs:{title:"修改"+t.titleText,visible:t.editDialogVisible,width:"50%"},on:{"update:visible":function(e){t.editDialogVisible=e},close:t.editDialogClose}},[a("el-form",{ref:"editFormRef",attrs:{model:t.editForm,rules:t.formRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[a("el-input",{model:{value:t.editForm.attr_name,callback:function(e){t.$set(t.editForm,"attr_name",e)},expression:"editForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editParam}},[t._v("确 定")])],1)],1)],1)},h=[],y={name:"ParamEdit",props:{titleText:{type:String,default:""},attr_id:{type:Number,default:0},categoryId:{type:Number,default:0},activeName:{type:String,default:""}},data(){return{editDialogVisible:!1,editForm:{attr_name:""},formRules:{attr_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}}},methods:{showEditDialog(t){this.editDialogVisible=!0,Object(c["j"])({id:this.categoryId,attrId:t,attr_sel:this.activeName}).then(t=>{let e=t.data;if(200!==e.meta.status)return this.alertMessage("获取参数信息失败","error");this.editForm=e.data})},editDialogClose(){this.$refs.editFormRef.resetFields()},editParam(){this.$refs.editFormRef.validate(t=>{t&&Object(c["e"])({id:this.categoryId,attrId:this.editForm.attr_id,attr_name:this.editForm.attr_name,attr_sel:this.activeName}).then(t=>{let e=t.data;if(200!==e.meta.status)return this.alertMessage("修改失败","error");this.alertMessage("修改成功","success"),this.$emit("param-list"),this.editDialogVisible=!1})})}}},_=y,v=(a("7ed7"),Object(b["a"])(_,g,h,!1,null,"b058e1c0",null)),x=v.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(e){return t.removeParam(t.attr_id)}}},[t._v("删除")])},P=[],j={name:"ParamRemove",props:{attr_id:{type:Number,default:0},categoryId:{type:Number,default:0}},methods:{removeParam(t){this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(c["m"])({id:this.categoryId,attrId:t}).then(t=>{let e=t.data;if(200!==e.meta.status)return this.alertMessage("删除失败","error");this.alertMessage("删除成功","success"),this.$emit("param-list")})}).catch(()=>{this.alertMessage("已取消删除","info")})}}},N=j,T=Object(b["a"])(N,D,P,!1,null,"907ee878",null),O=T.exports,$={name:"ParamTabPane",components:{ParamAdd:p,ParamEdit:x,ParamRemove:O},props:{titleText:{type:String,default:""},isBtnDisabled:{type:Boolean,default:!1},categoryId:{type:Number,default:0},activeName:{type:String,default:""},tableData:{type:Array,default(){return[]}}},methods:{updateParamsList(){this.$emit("param-list")}}},k=$,F=Object(b["a"])(k,n,l,!1,null,"372813fe",null),I=F.exports,C={name:"Params",components:{BreadcrumbNav:s["a"],ParamTabPane:I},data(){return{categoryList:[],cascaderProps:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children",checkStrictly:!0},selectedKeys:[],activeName:"many",manyTableData:[],onlyTableData:[]}},created(){this.getCategoriesList()},computed:{isBtnDisabled(){return 3!==this.selectedKeys.length},categoryId(){return 3===this.selectedKeys.length?this.selectedKeys[2]:null},titleText(){return"many"===this.activeName?"动态参数":"静态属性"}},methods:{getCategoriesList(){Object(c["f"])(this.queryInfo).then(t=>{let e=t.data;if(200!==e.meta.status)return this.alertMessage("礼品列表获取失败","error");this.categoryList=e.data})},categoryChange(){let t=this.selectedKeys;console.log(t),t.length<3?this.selectedKeys=[]:this.getCategoryParams()},handleTabClick(){console.log(this.activeName),this.getCategoryParams()},getCategoryParams(){Object(c["h"])(this.categoryId,this.activeName).then(t=>{let e=t.data;if(console.log("参数：",e),200!==e.meta.status)return this.alertMessage("获取参数失败","error");"many"===this.activeName?this.manyTableData=e.data:this.onlyTableData=e.data})},updateParamsList(){this.getCategoryParams()}}},w=C,M=(a("d50e"),Object(b["a"])(w,r,i,!1,null,"60c0924d",null));e["default"]=M.exports},"7ed7":function(t,e,a){"use strict";a("c841")},"87d4":function(t,e,a){},ae71:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._t("firstMenu",[t._v("一级菜单")])],2),a("el-breadcrumb-item",[t._t("secondMenu",[t._v("二级菜单")])],2)],1)},i=[],s={name:"BreadcrumbNav"},n=s,l=a("2877"),o=Object(l["a"])(n,r,i,!1,null,"2d65e998",null);e["a"]=o.exports},c841:function(t,e,a){},d50e:function(t,e,a){"use strict";a("87d4")},de5d:function(t,e,a){"use strict";a.d(e,"f",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"g",(function(){return n})),a.d(e,"d",(function(){return l})),a.d(e,"k",(function(){return o})),a.d(e,"h",(function(){return d})),a.d(e,"c",(function(){return c})),a.d(e,"j",(function(){return u})),a.d(e,"e",(function(){return m})),a.d(e,"m",(function(){return b})),a.d(e,"i",(function(){return f})),a.d(e,"l",(function(){return p})),a.d(e,"b",(function(){return g}));var r=a("1bab");function i(t){return Object(r["a"])({url:"/categories",params:t})}function s(t){return Object(r["a"])({url:"/categories",method:"post",data:{...t}})}function n(t){return Object(r["a"])({url:"/categories/"+t})}function l(t){return Object(r["a"])({url:"/categories/"+t.cat_id,method:"put",data:{cat_name:t.cat_name}})}function o(t){return Object(r["a"])({url:"/categories/"+t,method:"delete"})}function d(t,e){return Object(r["a"])({url:`/categories/${t}/attributes`,params:{sel:e}})}function c(t){return Object(r["a"])({url:`/categories/${t.id}/attributes`,method:"post",data:{attr_name:t.attr_name,attr_sel:t.attr_sel}})}function u(t){return Object(r["a"])({url:`/categories/${t.id}/attributes/${t.attrId}`,params:{attr_sel:t.attr_sel}})}function m(t){return Object(r["a"])({url:`/categories/${t.id}/attributes/${t.attrId}`,method:"put",data:{attr_name:t.attr_name,attr_sel:t.attr_sel}})}function b(t){return Object(r["a"])({url:`/categories/${t.id}/attributes/${t.attrId}`,method:"delete"})}function f(t){return Object(r["a"])({url:"/goods",params:t})}function p(t){return Object(r["a"])({url:"/goods/"+t,method:"delete"})}function g(t){return Object(r["a"])({url:"/goods",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-75acb3c5.53d316aa.js.map