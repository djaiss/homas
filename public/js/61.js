(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{kibo:function(t,a,s){"use strict";s.r(a);var e={components:{Layout:s("+SZM").a},props:{flows:{type:Array,default:null},notifications:{type:Array,default:null}},mounted:function(){localStorage.success&&(flash(localStorage.success,"success"),localStorage.removeItem("success"))}},n=s("KHd+"),l=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("layout",{attrs:{title:"Home",notifications:t.notifications}},[s("div",{staticClass:"ph2 ph0-ns"},[s("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[s("ul",{staticClass:"list ph0 tc-l tl"},[s("li",{staticClass:"di"},[s("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),s("li",{staticClass:"di"},[s("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account"}},[t._v(t._s(t.$t("app.breadcrumb_account_home")))])],1),t._v(" "),s("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_account_manage_flows"))+"\n        ")])])]),t._v(" "),s("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[s("div",{staticClass:"pa3 mt5"},[s("h2",{staticClass:"tc normal mb4"},[t._v("\n          "+t._s(t.$t("account.flows_title",{company:t.$page.auth.company.name}))+"\n        ")]),t._v(" "),s("p",{staticClass:"relative adminland-headline"},[s("span",{staticClass:"dib mb3 di-l"},[t._v("\n            "+t._s(t.$tc("account.flows_number_flows",t.flows.length,{company:t.$page.auth.company.name,count:t.flows.length}))+"\n          ")]),t._v(" "),s("inertia-link",{staticClass:"btn absolute-l relative dib-l db right-0",attrs:{href:"/"+t.$page.auth.company.id+"/account/flows/create","data-cy":"add-employee-button"}},[t._v("\n            "+t._s(t.$t("account.flows_cta"))+"\n          ")])],1),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:0!=t.flows.length,expression:"flows.length != 0"}],staticClass:"list pl0 mt0 center"},t._l(t.flows,(function(a){return s("li",{key:a.id,staticClass:"flex items-center lh-copy pa3-l pa1 ph0-l bb b--black-10"},[s("div",{staticClass:"flex-auto"},[s("span",{staticClass:"db b"},[t._v("\n                "+t._s(a.name)+" "),s("span",{staticClass:"normal f6"},[t._v("\n                  ("+t._s(a.steps.count)+" steps)\n                ")])]),t._v(" "),s("ul",{staticClass:"f6 list pl0"},[s("li",{staticClass:"di pr2"},[s("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account/flows/"+a.id}},[t._v("\n                    "+t._s(t.$t("app.view"))+"\n                  ")])],1),t._v(" "),s("li",{staticClass:"di pr2"},[s("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account/flows/"+a.id+"/lock"}},[t._v("\n                    "+t._s(t.$t("app.rename"))+"\n                  ")])],1),t._v(" "),s("li",{staticClass:"di"},[s("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account/flows/"+a.id+"/destroy"}},[t._v("\n                    "+t._s(t.$t("app.delete"))+"\n                  ")])],1)])])])})),0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.flows.length,expression:"flows.length == 0"}],staticClass:"pa3"},[s("p",{staticClass:"tc measure center mb4 lh-copy"},[t._v("\n          "+t._s(t.$t("account.flows_blank"))+"\n        ")]),t._v(" "),s("img",{staticClass:"db center mb4",attrs:{srcset:"/img/company/account/blank-flow-1x.png, /img/company/account/blank-flow-2x.png 2x"}})])])])])}),[],!1,null,"511db2c3",null);a.default=l.exports}}]);
//# sourceMappingURL=61.js.map?id=78f8183a201e7a091b1b