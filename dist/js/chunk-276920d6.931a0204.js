(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-276920d6"],{4874:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadcrumb-nav",{scopedSlots:t._u([{key:"firstMenu",fn:function(){return[t._v("权限管理")]},proxy:!0},{key:"secondMenu",fn:function(){return[t._v("权限列表")]},proxy:!0}])}),r("el-card",[r("el-table",{attrs:{data:t.rightsList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{prop:"authName",label:"权限名称"}}),r("el-table-column",{attrs:{prop:"path",label:"路径"}}),r("el-table-column",{attrs:{prop:"level",label:"权限等级"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"===e.row.level?r("el-tag",[t._v("一级")]):"1"===e.row.level?r("el-tag",{attrs:{type:"success"}},[t._v("二级")]):r("el-tag",{attrs:{type:"warning"}},[t._v("三级")])]}}])})],1)],1)],1)},a=[],u=r("ae71"),s=r("5a0f"),l={name:"Rights",components:{BreadcrumbNav:u["a"]},data(){return{rightsList:[]}},created(){this.getRightsList()},methods:{getRightsList(){Object(s["d"])("list").then(t=>{let e=t.data;200===e.meta.status?this.rightsList=e.data:this.$message({message:"获取权限列表失败",type:"error"})})}}},o=l,c=r("2877"),i=Object(c["a"])(o,n,a,!1,null,"f1758ae4",null);e["default"]=i.exports},"5a0f":function(t,e,r){"use strict";r.d(e,"d",(function(){return a})),r.d(e,"f",(function(){return u})),r.d(e,"b",(function(){return s})),r.d(e,"e",(function(){return l})),r.d(e,"c",(function(){return o})),r.d(e,"h",(function(){return c})),r.d(e,"a",(function(){return i})),r.d(e,"g",(function(){return d}));var n=r("1bab");function a(t){return Object(n["a"])({url:"rights/"+t})}function u(t){return Object(n["a"])({url:"/roles"})}function s(t){return Object(n["a"])({url:"/roles",method:"post",data:{...t}})}function l(t){return Object(n["a"])({url:"roles/"+t})}function o(t){return Object(n["a"])({url:"roles/"+t.roleId,method:"put",data:{roleName:t.roleName,roleDesc:t.roleDesc}})}function c(t){return Object(n["a"])({url:"roles/"+t,method:"delete"})}function i(t,e){return Object(n["a"])({url:`roles/${t}/rights`,method:"post",data:{rids:e}})}function d(t,e){return Object(n["a"])({url:`roles/${t}/rights/${e}`,method:"delete"})}},ae71:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._t("firstMenu",[t._v("一级菜单")])],2),r("el-breadcrumb-item",[t._t("secondMenu",[t._v("二级菜单")])],2)],1)},a=[],u={name:"BreadcrumbNav"},s=u,l=r("2877"),o=Object(l["a"])(s,n,a,!1,null,"2d65e998",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-276920d6.931a0204.js.map