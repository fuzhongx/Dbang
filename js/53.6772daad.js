"use strict";(self["webpackChunkdibang"]=self["webpackChunkdibang"]||[]).push([[53,713],{53:function(t,e,a){a.r(e),a.d(e,{default:function(){return A}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout"},[e("el-container",{staticClass:"con_box"},[e("el-header",[e("div",{staticClass:"logo_top"},[e("div",[e("i",{staticClass:"logo_title"},[e("img",{attrs:{src:a(191),alt:""}})])]),e("div",[e("span",{staticClass:"title"},[t._v("智慧地磅云平台")])])]),this.isCollapse?e("div",{staticClass:"zhankai el-icon-s-fold",on:{click:t.hides}}):e("div",{staticClass:"zhankai el-icon-s-unfold",on:{click:t.shows}})]),e("el-container",[e("el-aside",{class:{asides:t.isCollapse}},[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"collapse-transition":"true","default-active":"router",router:"",collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose}},[e("el-menu-item",{attrs:{index:"/LoginLogin"}},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),t._l(t.navList,(function(a){return e("el-submenu",{key:a.id,attrs:{"hide-timeout":"0",index:a.id+""}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-s-tools"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.title))])]),t._l(a.chlidren,(function(a){return e("el-menu-item-group",{key:a.id},[e("el-menu-item",{attrs:{index:a.router}},[t._v(t._s(a.title))])],1)}))],2)}))],2)],1),e("el-main",[e("NavList"),e("HomeHome")],1)],1)],1)],1)},s=[],i=function(){var t=this,e=t._self._c;return e("div",[e("el-card",[e("el-breadcrumb",{staticClass:"top",attrs:{"separator-class":"el-icon-arrow-right",replace:""}},t._l(t.navs,(function(a){return e("el-breadcrumb-item",{key:a.path},[t._v(t._s(a.meta.title))])})),1)],1)],1)},n=[],o={data(){return{showNav:1}},computed:{navs(){console.log(this.$route.matched);let t=this.$route.matched;return t}},mounted(){this.navs},created(){this.getNav()},methods:{getNav(){this.showNav=this.navs[0].name,console.log(this.showNav)}}},r=o,u=a(1656),c=(0,u.A)(r,i,n,!1,null,"76591e48",null),d=c.exports,h=a(7713),v={data(){return{LoginList:[],isCollapse:!1,navList:[{title:"称重管理",icon:"chat-line-square",router:"/WeightScalage",url:"",chlidren:[{title:"称重数据",router:"/WeightScalage/WeightData"},{title:"过磅统计",router:"/WeightScalage/WeightTotal"}]},{title:"数据配置",icon:"chat-line-square",router:"",id:1,url:"",chlidren:[{title:"收货单位",router:"/data/ShouHuo"},{title:"车辆预约",router:"/data/CarReservation"},{title:"车辆管理",router:"/data/CarCommon"},{title:"物资分类",router:"/data/WzFenlei"},{title:"地磅设备",router:"/data/DbShebei"},{title:"收费设置",router:"/data/SfShezhi"}]},{title:"账户配置",icon:"platform-eleme",router:"",id:2,url:"",chlidren:[{title:"企业信息",router:"/account/QyXinxi"},{title:"管理账户",router:"/account/GlZhanghu"}]}]}},mounted(){},components:{HomeHome:h["default"],NavList:d},methods:{shows(){this.isCollapse=!0,console.log(this.isCollapse,1)},hides(){this.isCollapse=!1,console.log(this.isCollapse,0)},handleOpen(t,e){console.log(t,e)},handleClose(t,e){console.log(t,e)}}},m=v,g=(0,u.A)(m,l,s,!1,null,"11233081",null),A=g.exports},7713:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var l=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{"enter-active-class":"animate__animated animate__bounceInLeft"}},[e("router-view")],1)],1)},s=[],i={data(){return{}}},n=i,o=a(1656),r=(0,o.A)(n,l,s,!1,null,"1564d993",null),u=r.exports},191:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABL5JREFUaEPtmmtPXGUQx3+z0HKVQrXRqtgSEJsaE6IhpsbaNqYm8gZIwNj6IdRPIH4C6zfwjWBkVYgvvDVKLba1GkGjVmlLa7mjFigt9z1j5hy2ZdntnrO7uAvRebPZk+eZmf/MPHN5zhHW0bvva10oj0ZUDyvUCZSvX5PN/wrTAv2I9DgRul95SfrXype1f94L66uKnsimgqnIMjAhpO3lFnk7uu82gPaw85FAUyoMc7VWoet4S6jZ5LsA2jv1NRF9K1cKpSNXVV4/3ionxI35kPalwySXeyyc1JEj0tEZaUPkjVwqk7Zs1TelvdPpEeFQ2kxyuFGVU9IedqZynSrTtYGbYjvCjqbLYDPs+28AqHwY9j8mlJau5t0UTb8SgZFR+OU3ZW4uxc0+y309sKcS6p8S8vMyE2xxOjkJX53e2Ij1BdDYIBQVZab82t2ff6nM3ozlpworK+nJSAogJNDSLNjvRpEpv7wcyy0Sgd8vKsOjqUvxBdDaLMgGAribigbi7HllZAzMI0Ep6wAuDcKN2VgNa6u9BGGeOf+DMjQcVH3IOoCeXmV8IlbBsjI4eEC4pxTME9+cU8bGIYgjNgUAg1NRDgfqBQNjabfvR+XyFX9PbBoApmphIRw5KOwoA8eBc98p13zCaVMBMBCm/LOr4bS0BB9+nDyQsg7g9BllfDJ5aDyxX9hX69WGcHcmAELgplH/UAy84voUmGWTkR3mkhLvQIe7NOlhTu6BfwFAYKSsAujWpHXBH0BTdgpZImAZh5BV4NYmIRRKxW4bt3Z5BT7I5AyYKs8fEnbdt3FKpcJpbAJO9WZwiE1YcRE0vCDk56ciOvO1S8vw2Unlls/84NtOR6tk5UNeqXcr5QrM3PCaLis+9nxhEWZngyleUABlpbC4ZH2Rt8cMZZnHFJ6agqERZWran18gAFE2JcVQWyNuqR+4qK4CNq3dv0uYmFSGRvwF2gozQk2VMD+vDFwGJwJVe2FnhfDHkPLnX8H42KqUANhcYIIqysXN5UvLSkmxuJ4YuKTcvBVMcF4IaqrNc+J6znGUokJxPWtzgT0LSikBiDKt2gP37vTS6+IiXBxU5ueDiryz7tFqax08PgsLnhHMq6lQQgDG0Mr57gdIPI0JbNsGZknzhDVeaZHA9u24AIyPJuBjlz7Do8qvFxK31wkB7H0Enq7f2BYiLYCrmyxEv/1euXotnkscgNISeO4Zry83shDx610yUS7ZXvOOZSwjy3Bfn4m/EIgDYMo/uNvbNDcPn3yht0Mk8Gys8e52G8KAXWF0Js7LgxePCkWFnj429PeejS1scQAajnrWt06w7yfFZlij6iovzQUhOxM/X1DXe0ZWKx7fF7wl+fu6Mnj1jtwn68Q9b9Mz8OlJHwAWQuY6s4JdgUTvawoK7HIryJTqmdpyfPTW1Txnd0vB4HsjZRS8dQBWKKMHfX2qTiuNBvFCttb8DyBblr6bHOnodKYRduRakbTkKzNb/xXTln/J575mFe3ZcmGkzJAv9inEFn/RHT08HZ1OF0JjWocp25uU7mOtIfeziJji6H5ygLZt2nBSZhRps08MojaLq+7emXCaFDksUJdzMK7S9AvaQ37onWPNstoleRD+ATipL31cBGIlAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=53.6772daad.js.map