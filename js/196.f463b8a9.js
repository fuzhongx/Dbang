"use strict";(self["webpackChunkdibang"]=self["webpackChunkdibang"]||[]).push([[196],{3196:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("el-card",{staticClass:"box-card all"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",{staticClass:"title"},[e._v("地磅设备")]),t("el-button",{staticClass:"btn-add",on:{click:e.addZhanghu}},[t("i",[t("img",{staticClass:"img-add",attrs:{src:a(1986),alt:""}})]),e._v("添加地磅")])],1),e._l(e.tableData,(function(i){return t("div",{key:i.id,staticClass:"big-box"},[t("div",{staticClass:"con-l"},[t("span",{staticClass:"txt"},[e._v(e._s(i.deviceName))]),t("el-button",{staticClass:"btn-r",on:{click:e.uPdata}},[t("i",[t("img",{staticClass:"imgs-x",attrs:{src:a(9582),alt:""}})]),e._v("修改设备信息")])],1),t("div",{staticClass:"con-r"},[t("div",[t("label",[e._v("设备编号："+e._s(i.deviceId))])]),t("div",[t("label",[e._v("所属企业："+e._s(i.corpName))])]),t("div",[t("label",[e._v("地磅名称："+e._s(i.deviceName))])]),t("div",[t("label",[e._v("设备类型："+e._s(i.deviceType))])]),t("div",[t("label",[e._v("上线称重："+e._s(i.weighing))])]),t("div",[t("label",[e._v("使用状态： "),t("span",{directives:[{name:"show",rawName:"v-show",value:1==i.useState,expression:"item.useState==1"}],class:{greColor:1==i.useState}},[e._v("正常")]),t("span",{directives:[{name:"show",rawName:"v-show",value:2==i.useState,expression:"item.useState==2"}],class:{redColor:2==i.useState}},[e._v("故障")]),t("span",{directives:[{name:"show",rawName:"v-show",value:3==i.useState,expression:"item.useState==3"}]},[e._v("停用")])])]),t("div",[t("label",[e._v("创建日期："+e._s(i.deviceId))])]),t("div",[t("label",[e._v("备注说明："+e._s(i.remark))])])])])})),t("el-dialog",{staticClass:"dialog",attrs:{title:"添加地磅",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[t("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,rules:e.rules}},[t("div",{staticStyle:{display:"flex"}},[t("el-form-item",{staticClass:"inpt-w",attrs:{label:"设备编号：","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{staticClass:"bianhao",attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.deviceId,callback:function(t){e.$set(e.form,"deviceId",t)},expression:"form.deviceId"}})],1),t("el-form-item",{staticClass:"inpt-w",attrs:{label:"设备名称:","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{staticClass:"bianhao",attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.deviceName,callback:function(t){e.$set(e.form,"deviceName",t)},expression:"form.deviceName"}})],1)],1),t("el-form-item",{staticClass:"inpWidth",attrs:{label:"所属企业","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{staticClass:"ipt-w inptWidth",attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.corpId,callback:function(t){e.$set(e.form,"corpId",t)},expression:"form.corpId"}})],1),t("el-form-item",{staticClass:"inpt-w",staticStyle:{display:"flex",width:"80%"},attrs:{label:"状态","label-width":e.formLabelWidth,prop:"name"}},[t("el-radio",{attrs:{label:"1",border:""},model:{value:e.form.useState,callback:function(t){e.$set(e.form,"useState",t)},expression:"form.useState"}},[e._v("正常")]),t("el-radio",{attrs:{label:"2",border:""},model:{value:e.form.useState,callback:function(t){e.$set(e.form,"useState",t)},expression:"form.useState"}},[e._v("故障")]),t("el-radio",{attrs:{label:"3",border:""},model:{value:e.form.useState,callback:function(t){e.$set(e.form,"useState",t)},expression:"form.useState"}},[e._v("停用")])],1),t("div",{staticStyle:{display:"flex"}},[t("el-form-item",{staticClass:"inpt-w",attrs:{label:"设备类型：","label-width":e.formLabelWidth,prop:"name"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.deviceType,callback:function(t){e.$set(e.form,"deviceType",t)},expression:"form.deviceType"}},[t("el-option",{attrs:{label:"标准过磅",value:"标准过磅"}}),t("el-option",{attrs:{label:"简单过磅",value:"简单过磅"}}),t("el-option",{attrs:{label:"一次过磅",value:"一次过磅"}})],1)],1),t("el-form-item",{staticClass:"inpt-w",attrs:{label:"上限重量:","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{staticClass:"bianhao",attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.weighing,callback:function(t){e.$set(e.form,"weighing",t)},expression:"form.weighing"}},[t("template",{slot:"append"},[e._v("kg")])],2)],1)],1),t("el-form-item",{staticClass:"inpWidth",attrs:{label:"备注说明：","label-width":e.formLabelWidth}},[t("el-input",{staticClass:"ipt-w inptWidth",attrs:{autocomplete:"off",placeholder:"请输入",type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticStyle:{"background-color":"#fff",color:"#666666","border-radius":"18px",border:"1px solid #d1d1d1"},on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),t("el-button",{staticStyle:{"background-color":"#6971ef",color:"#fff","border-radius":"18px"},on:{click:e.addDibang}},[e._v("确 定")])],1)],1),t("el-dialog",{staticClass:"dialog",attrs:{title:"修改地磅",visible:e.selectDialog},on:{"update:visible":function(t){e.selectDialog=t}}},[t("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,rules:e.rules}},[t("div",{staticStyle:{display:"flex"}},[t("el-form-item",{staticClass:"inpt-w",attrs:{label:"设备编号：","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{staticClass:"bianhao",attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.deviceId,callback:function(t){e.$set(e.form,"deviceId",t)},expression:"form.deviceId"}})],1),t("el-form-item",{staticClass:"inpt-w",attrs:{label:"设备名称:","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{staticClass:"bianhao",attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.deviceName,callback:function(t){e.$set(e.form,"deviceName",t)},expression:"form.deviceName"}})],1)],1),t("el-form-item",{staticClass:"inpWidth",attrs:{label:"所属企业","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{staticClass:"ipt-w inptWidth",attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.corpId,callback:function(t){e.$set(e.form,"corpId",t)},expression:"form.corpId"}})],1),t("el-form-item",{staticClass:"inpt-w",staticStyle:{width:"80%"},attrs:{label:"状态","label-width":e.formLabelWidth,prop:"name"}},[t("el-radio",{attrs:{label:"1",border:""},model:{value:e.form.useState,callback:function(t){e.$set(e.form,"useState",t)},expression:"form.useState"}},[e._v("正常")]),t("el-radio",{attrs:{label:"2",border:""},model:{value:e.form.useState,callback:function(t){e.$set(e.form,"useState",t)},expression:"form.useState"}},[e._v("故障")]),t("el-radio",{attrs:{label:"3",border:""},model:{value:e.form.useState,callback:function(t){e.$set(e.form,"useState",t)},expression:"form.useState"}},[e._v("停用")])],1),t("div",{staticStyle:{display:"flex"}},[t("el-form-item",{staticClass:"inpt-w",attrs:{label:"设备类型：","label-width":e.formLabelWidth,prop:"name"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.deviceType,callback:function(t){e.$set(e.form,"deviceType",t)},expression:"form.deviceType"}},[t("el-option",{attrs:{label:"标准过磅",value:"标准过磅"}}),t("el-option",{attrs:{label:"简单过磅",value:"简单过磅"}}),t("el-option",{attrs:{label:"一次过磅",value:"一次过磅"}})],1)],1),t("el-form-item",{staticClass:"inpt-w",attrs:{label:"上限重量:","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{staticClass:"bianhao",attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.weighing,callback:function(t){e.$set(e.form,"weighing",t)},expression:"form.weighing"}},[t("template",{slot:"append"},[e._v("kg")])],2)],1)],1),t("el-form-item",{staticClass:"inpWidth",attrs:{label:"备注说明：","label-width":e.formLabelWidth}},[t("el-input",{staticClass:"ipt-w inptWidth",attrs:{autocomplete:"off",placeholder:"请输入",type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticStyle:{"background-color":"#fff",color:"#666666","border-radius":"18px",border:"1px solid #d1d1d1"},on:{click:function(t){e.selectDialog=!1}}},[e._v("取 消")]),t("el-button",{staticStyle:{"background-color":"#6971ef",color:"#fff","border-radius":"18px"},on:{click:e.selectDibang}},[e._v("确 定")])],1)],1)],2)],1)},r=[],o=a(1370),l={data(){return{show:"",form:{deviceId:"",deviceName:"",deviceType:"",weighing:"",corpId:"",useState:"",remark:""},tableData:[],formLabelWidth:"120px",addDialog:!1,selectDialog:!1,rules:{name:[{required:!0,trigger:"blur"}]}}},components:{},mounted(){this.fun()},methods:{fun(){(0,o.M5)({page:"1",keyword:"",useState:""}).then((e=>{console.log(e.data.ResData.data,"dibang"),this.tableData=e.data.ResData.data}))},selectDibang(){(0,o.Fj)({deviceId:this.form.deviceId,deviceName:this.form.deviceName,deviceType:this.form.deviceType,weighing:this.form.weighing,corpId:1,useState:this.form.useState,remark:this.form.remark}).then((e=>{"ture"==e.data.Success?this.$message("添加成功"):this.$message(e.data.ErrMsg),this.tableData=e.data.ResData,console.log(e),this.fun()})),this.selectDialog=!1},addDibang(){(0,o.Fj)({deviceId:this.form.deviceId,deviceName:this.form.deviceName,deviceType:this.form.deviceType,weighing:this.form.weighing,corpId:this.form.corpId,useState:this.form.useState,remark:""}).then((e=>{"ture"==e.data.Success?this.$message("添加成功"):this.$message(e.data.ErrMsg),this.tableData=e.data.ResData,console.log(e),this.fun()})),this.addDialog=!1},uPdata(e){this.form.deviceId=this.tableData.deviceId,this.form.deviceName=e.deviceName,this.form.deviceType=e.deviceType,this.form.weighing=e.weighing,this.form.corpId=e.corpId,this.form.useState=e.useState,this.selectDialog=!0},addZhanghu(){this.addDialog=!0}}},s=l,n=a(1656),c=(0,n.A)(s,i,r,!1,null,"48563090",null),d=c.exports},1370:function(e,t,a){a.d(t,{Qi:function(){return x},XX:function(){return S},rf:function(){return C},YD:function(){return T},ww:function(){return s},bg:function(){return F},ky:function(){return v},xP:function(){return N},Os:function(){return R},Ps:function(){return p},x4:function(){return h},WR:function(){return y},mm:function(){return c},M8:function(){return I},Uc:function(){return V},Fj:function(){return L},M5:function(){return W},E3:function(){return u},Mn:function(){return f},G5:function(){return l},cp:function(){return E},o0:function(){return B},Vo:function(){return U},qA:function(){return k},cL:function(){return b},Lt:function(){return m},Ip:function(){return _},$C:function(){return Q},SD:function(){return D},_V:function(){return w},_r:function(){return n},NI:function(){return g},xB:function(){return A},Wb:function(){return d}});var i=a(8355);i.A.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";const r=i.A.create({baseURL:"http://smart.yinuoerp.com:9103",timeout:9e3});r.interceptors.request.use((e=>(localStorage.getItem("token")&&(e.headers["auth"]=localStorage.getItem("token"),e.headers["timestamp"]=Date.parse(new Date)),e))),r.interceptors.response.use((e=>e));var o=r;function l(e){return o({url:"api/Login/Index",method:"post",data:e})}function s(e){return o({url:"api/Dashboard/FindData",method:"get",pramas:e})}function n(e){return o({url:"api/Statistics/FirstData",method:"post",data:e})}function c(e){return o({url:"api/Statistics/ExportExcelData",method:"post",responseType:"blob",data:e})}function d(e){return o({url:"api/Statistics/FindSelList",method:"get",get:e})}function u(e){return o({url:`api/Weighing/FindItem?id=${e.id}`,method:"get",pramas:e})}function m(e){return o({url:"api/Weighing/FirstData",method:"post",data:e})}function f(e){return o({url:"api/Weighing/FindSelList",method:"get",pramas:e})}function p(e){return o({url:"api/Account/FindData",method:"post",data:e})}function h(e){return o({url:`api/Account/FindItem?id=${e.id}`,method:"get",pramas:e})}function v(e){return o({url:"api/Account/ToSave",method:"post",data:e})}function b(e){return o({url:"api/Account/ToResetState",method:"post",data:e})}function g(e){return o({url:"api/User/UserInfo",method:"get",pramas:e})}function A(e){return o({url:`api/VehicleReservation/FindItem?id=${e.id}`,method:"get",pramas:e})}function S(e){return o({url:"api/VehicleReservation/GetVehicleList",method:"get",pramas:e})}function C(e){return o({url:"api/VehicleReservation/FindData",method:"post",data:e})}function w(e){return o({url:"api/VehicleReservation/ToSave",method:"post",data:e})}function I(e){return o({url:"api/VehicleReservation/GetVehicleList",method:"get",pramas:e})}function k(e){return o({url:`api/VehicleReservation/ToCancle?id=${e.id}`,method:"get",pramas:e})}function D(e){return o({url:"api/VehicleReservation/ToApprove",method:"post",data:e})}function x(e){return o({url:"api/Vehicle/FindData",method:"post",data:e})}function T(e){return o({url:"api/Vehicle/GetConsigneeList",method:"get",pramas:e})}function y(e){return o({url:"api/Vehicle/ToSave",method:"post",data:e})}function W(e){return o({url:"api/Weighbridge/FindData",method:"post",data:e})}function L(e){return o({url:"api/Weighbridge/ToSave",method:"post",data:e})}function R(e){return o({url:"api/MaterialItem/FirstData",method:"post",data:e})}function N(e){return o({url:"api/MaterialItem/ToSave",method:"post",data:e})}function V(e){return o({url:"api/MaterialItem/ToResetState",method:"post",data:e})}function F(e){return o({url:"api/MaterialItem/FindSuperiorList",method:"post",data:e})}function Q(e){return o({url:"api/Charging/ToSave",method:"post",data:e})}function _(e){return o({url:"api/Charging/FindData",method:"post",data:e})}function B(e){return o({url:"api/Company/GetUserList",method:"get",pramas:e})}function E(e){return o({url:"api/Company/ToSave",method:"post",data:e})}function U(e){return o({url:"api/User/UserInfo",method:"get",pramas:e})}},1986:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAslJREFUWEfFl4FRVEEQRLsjUCMQIlAiECNQIhAzwAiECDQDJQIhAjECIQI1AiGCsR41e+z/t3e7d2cVW0XdFf/+Tk/3zGyvtcGKiDeS3krak/RU0st8/VrSraTfki5sX45u694PI4JgHzMwQUcWYC4kfbDN95VrLYCIIPBJZssmd7nxVWZbbwzQwwT6JB8Q/LPts1UImgAigky/VxTfSDq1TVbdFRHIdCrpRSXR6xYbSwAiAl0JDggyPrH9tRu18YOIOIYBSTACG4CgXhZrAiAz/5XByfp4/sKmQDIhmHueIPZrJhYAZrQT/LBXQKNgcm8yBwSfCzlqAGhG0UE7wSdUzYNVbN3a3u+BSSYoXuQ4s0083QPIVvuZ1L8f0TwiqHhqRba77ZxxqIkvtRQFAEX2TtKN7TJc1ia1DYAEAbN0x7nt4wLgb2Z/tEGrbcxAAqBFv8GC7WfOnuUfd7ZHJx2ybQUgQdCS1MIRAAr995T0iqk83xHAQ8yIoDJfSRoqvv8EgPH+SdIPGKD6KTx6EzCLla1T5vqcHN5hyrGQY9WisCcHUsXeNQAi32wBKM9GlWn97tI2hVcn9lA/HQClZXYBsBg6TfkiogRZYmBd1B2LsDBwgwSPXoSP3oaTyTQq9o4SPEzepck07nq2moTzyTs/jK5tH4ywsC0DEYHhwT9ODiPOACw1Q2doIm4DIC0axzGeY48B1TIkTe82Z2VTADOvOTUk1YAoMwE2DnqWLCKY6cg2GeENsDDMyIf6id1rmdIiBZ/4g7XWrFcvmTnHPcH/cO40TWnFAodM8W7IgS0/7wVqPY8IXBYHVrH4S15z3cUEEPXFgovJ0J0v75CYzmLvVrrs3tWMTdC5vmrh8ZFlLg3B+GOwFWdFtXM1u3fArdV1s2m/oZGNV3mD+d7lDol8219OG9UMCCYgmZJlkQiKCQQrV6PGlv3/ARJslw8lHLrrAAAAAElFTkSuQmCC"},9582:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAV1JREFUWEftl+FNwzAQhd+bAEZghDJBYQLUCYAN2ACYAJgA2AAmoBvQEToCTPCqB45kRU1Izja/aqlqFOXu+3JufTaRhqQFgCWA4+7ezO8nkl9TYiS9ALgEsKIDJD0AuJkSPPKMBf7MkcGd6pWSHGSB0rEi+TaWpAf/BnBmgU8ALv/vDXJTarIvfi+c3FhAKWBSCSNyQ3DnygXuSd5FALPLnlW5qcDYm3fSzQSmwJtNwVR4E4E58OoCc+FVBSLwagJReBWBCDw1vmcA66K/YQSemp8XvNuiCkThVQRK4MUCvfYd6qCSYlMg6QqAfzweIXi4Aj2485xG9w6hCmT7BsOvSXpfFxpRAe+UTrx3LIGHpyD0qgNBoQocBA4VaFkBn+eOflojeV4TNJRL0ocPQV5N3Y59nLpID/u6yckokzHYH493C3hxMdRV+M/hXrLoTseWeExmrUUMXqcVdbsDPuRjUinu/NgAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=196.f463b8a9.js.map