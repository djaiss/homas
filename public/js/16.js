(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"5uEX":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.list li[data-v-5cbbb13d]:last-child {\n  border-bottom: 0;\n}\n",""])},Eswu:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".error-explanation[data-v-df38947a] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-df38947a]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}\n.optional-badge[data-v-df38947a] {\n  border-radius: 4px;\n  color: #283e59;\n  background-color: #edf2f9;\n  padding: 3px 4px;\n}",""])},FUPM:function(t,e,a){var s=a("GqqJ");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)},Gbfv:function(t,e,a){"use strict";a.r(e);var s=a("pF+r"),n=a("rrJu"),r=a("Z84v"),i={components:{Layout:a("+SZM").a,TextInput:s.a,Errors:n.a,LoadingButton:r.a},props:{notifications:{type:Array,default:null},statuses:{type:Array,default:null}},data:function(){return{modal:!1,deleteModal:!1,updateModal:!1,loadingState:"",updateModalId:0,idToUpdate:0,idToDelete:0,form:{name:null,errors:[]}}},methods:{displayAddModal:function(){var t=this;this.modal=!0,this.form.name="",this.$nextTick((function(){t.$refs.newStatus.$refs.input.focus()}))},displayUpdateModal:function(t){var e=this;this.idToUpdate=t.id,this.$nextTick((function(){e.$refs["name".concat(t.id)][0].$refs["name".concat(t.id)].focus()}))},submit:function(){var t=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/account/employeestatuses",this.form).then((function(e){t.$snotify.success(t.$t("account.employee_statuses_success_new"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.loadingState=null,t.form.name=null,t.modal=!1,t.statuses.push(e.data.data)})).catch((function(e){t.loadingState=null,t.form.errors=_.flatten(_.toArray(e.response.data))}))},update:function(t){var e=this;axios.put("/"+this.$page.auth.company.id+"/account/employeestatuses/"+t,this.form).then((function(t){e.$snotify.success(e.$t("account.employee_statuses_success_update"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),e.idToUpdate=0,e.form.name=null;var a=e.statuses.findIndex((function(t){return t.id===a}));e.$set(e.statuses,a,t.data.data)})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data))}))},destroy:function(t){var e=this;axios.delete("/"+this.$page.auth.company.id+"/account/employeestatuses/"+t).then((function(t){e.$snotify.success(e.$t("account.employee_statuses_success_destroy"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),e.idToDelete=0;var a=e.statuses.findIndex((function(t){return t.id===a}));e.statuses.splice(a,1)})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},o=(a("JZsi"),a("KHd+")),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",{attrs:{title:"Home",notifications:t.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[a("ul",{staticClass:"list ph0 tc-l tl"},[a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account"}},[t._v(t._s(t.$t("app.breadcrumb_account_home")))])],1),t._v(" "),a("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_account_manage_employee_statuses"))+"\n        ")])])]),t._v(" "),a("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[a("div",{staticClass:"pa3 mt5"},[a("h2",{staticClass:"tc normal mb4"},[t._v("\n          "+t._s(t.$t("account.employee_statuses_title",{company:t.$page.auth.company.name}))+"\n        ")]),t._v(" "),a("p",{staticClass:"relative adminland-headline"},[a("span",{staticClass:"dib mb3 di-l",class:0==t.statuses.length?"white":""},[t._v("\n            "+t._s(t.$tc("account.employee_statuses_number_positions",t.statuses.length,{company:t.$page.auth.company.name,count:t.statuses.length}))+"\n          ")]),t._v(" "),a("a",{staticClass:"btn absolute-l relative dib-l db right-0",attrs:{"data-cy":"add-status-button"},on:{click:function(e){return e.preventDefault(),t.displayAddModal(e)}}},[t._v("\n            "+t._s(t.$t("account.employee_statuses_cta"))+"\n          ")])]),t._v(" "),a("form",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"mb3 pa3 ba br2 bb-gray bg-gray",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("errors",{attrs:{errors:t.form.errors}}),t._v(" "),a("div",{staticClass:"cf"},[a("div",{staticClass:"fl w-100 w-70-ns mb0-ns"},[a("text-input",{ref:"newStatus",attrs:{errors:t.$page.errors.name,datacy:"add-title-input",required:"",placeholder:t.$t("account.employee_statuses_placeholder"),"extra-class-upper-div":"mb0"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("div",{staticClass:"fl w-30-ns w-100 tr"},[a("a",{staticClass:"btn dib-l db mb2 mb0-ns",on:{click:function(e){e.preventDefault(),t.modal=!1,t.form.name=""}}},[t._v("\n                "+t._s(t.$t("app.cancel"))+"\n              ")]),t._v(" "),a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3","data-cy":"modal-add-cta",state:t.loadingState,text:t.$t("app.add")}})],1)])],1),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:0!=t.statuses.length,expression:"statuses.length != 0"}],staticClass:"list pl0 mv0 center ba br2 bb-gray",attrs:{"data-cy":"statuses-list"}},t._l(t.statuses,(function(e){return a("li",{key:e.id,staticClass:"pv3 ph2 bb bb-gray bb-gray-hover"},[t._v("\n            "+t._s(e.name)+"\n\n            "),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.idToUpdate==e.id,expression:"idToUpdate == status.id"}],staticClass:"cf mt3"},[a("form",{on:{submit:function(a){return a.preventDefault(),t.update(e.id)}}},[a("div",{staticClass:"fl w-100 w-70-ns mb3 mb0-ns"},[a("text-input",{ref:"name"+e.id,refInFor:!0,attrs:{id:"name-"+e.id,"custom-ref":"name"+e.id,datacy:"list-rename-input-name-"+e.id,errors:t.$page.errors.name,required:"","extra-class-upper-div":"mb0"},on:{"esc-key-pressed":function(e){t.idToUpdate=0}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("div",{staticClass:"fl w-30-ns w-100 tr"},[a("a",{staticClass:"btn dib-l db mb2 mb0-ns",attrs:{"data-cy":"list-rename-cancel-button-"+e.id},on:{click:function(e){e.preventDefault(),t.idToUpdate=0}}},[t._v("\n                    "+t._s(t.$t("app.cancel"))+"\n                  ")]),t._v(" "),a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3","data-cy":"list-rename-cta-button-"+e.id,state:t.loadingState,text:t.$t("app.update")}})],1)])]),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.idToUpdate!=e.id,expression:"idToUpdate != status.id"}],staticClass:"list pa0 ma0 di-ns db fr-ns mt2 mt0-ns f6"},[a("li",{staticClass:"di mr2"},[a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",attrs:{"data-cy":"list-rename-button-"+e.id},on:{click:function(a){a.preventDefault(),t.displayUpdateModal(e),t.form.name=e.name}}},[t._v(t._s(t.$t("app.rename")))])]),t._v(" "),t.idToDelete==e.id?a("li",{staticClass:"di"},[t._v("\n                "+t._s(t.$t("app.sure"))+"\n                "),a("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"list-delete-confirm-button-"+e.id},on:{click:function(a){return a.preventDefault(),t.destroy(e.id)}}},[t._v(t._s(t.$t("app.yes")))]),t._v(" "),a("a",{staticClass:"pointer",attrs:{"data-cy":"list-delete-cancel-button-"+e.id},on:{click:function(e){e.preventDefault(),t.idToDelete=0}}},[t._v(t._s(t.$t("app.no")))])]):a("li",{staticClass:"di"},[a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer c-delete",attrs:{"data-cy":"list-delete-button-"+e.id},on:{click:function(a){a.preventDefault(),t.idToDelete=e.id}}},[t._v("\n                  "+t._s(t.$t("app.delete"))+"\n                ")])])])])})),0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.statuses.length,expression:"statuses.length == 0"}],staticClass:"pa3 mt5"},[a("p",{staticClass:"tc measure center mb4 lh-copy"},[t._v("\n            "+t._s(t.$t("account.employee_statuses_blank"))+"\n          ")]),t._v(" "),a("img",{staticClass:"db center mb4",attrs:{srcset:"/img/company/account/blank-position-1x.png, /img/company/account/blank-position-2x.png 2x"}})])])])])])}),[],!1,null,"5cbbb13d",null);e.default=l.exports},GqqJ:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".border-red[data-v-1482dffa] {\n  background-color: #fff5f5;\n  border-color: #fc8181;\n  color: #c53030;\n}",""])},JZsi:function(t,e,a){"use strict";var s=a("MS49");a.n(s).a},MS49:function(t,e,a){var s=a("5uEX");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)},PAcC:function(t,e,a){var s=a("Eswu");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)},"SL/y":function(t,e,a){"use strict";var s=a("FUPM");a.n(s).a},l6R9:function(t,e,a){"use strict";var s=a("PAcC");a.n(s).a},"pF+r":function(t,e,a){"use strict";var s={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},customRef:{type:String,default:"input"},name:{type:String,default:"input"},datacy:{type:String,default:""},placeholder:{type:String,default:""},help:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},extraClassUpperDiv:{type:String,default:"mb3"},min:{type:Number,default:0},max:{type:Number,default:0},errors:{type:Array,default:function(){return[]}}},computed:{hasError:function(){return!!(this.errors.length>0&&this.required)}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)},sendEscKey:function(){this.$emit("esc-key-pressed")}}},n=(a("l6R9"),a("KHd+")),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.extraClassUpperDiv},[t.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n    "),t.required?t._e():a("span",{staticClass:"optional-badge f7"},[t._v("\n      "+t._s(t.$t("app.optional"))+"\n    ")])]):t._e(),t._v(" "),a("input",t._b({ref:t.customRef,staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:t.id,required:t.required,type:t.type,name:t.name,max:t.max,min:t.min,placeholder:t.placeholder,"data-cy":t.datacy},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.sendEscKey(e)}}},"input",t.$attrs,!1)),t._v(" "),t.hasError?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[t._v("\n    "+t._s(t.errors[0])+"\n  ")]):t._e(),t._v(" "),t.help?a("p",{staticClass:"f7 mb3 lh-title"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])}),[],!1,null,"df38947a",null);e.a=r.exports},rrJu:function(t,e,a){"use strict";var s={props:{errors:{type:Array,default:function(){return[]}}}},n=(a("SL/y"),a("KHd+")),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.errors.length>0?a("div",{staticClass:"border-red ba br3 pa3"},[a("p",{staticClass:"mv0 fw6"},[t._v(t._s(t.$t("app.error_title")))]),t._v(" "),a("p",{staticClass:"mb0"},[t._v(t._s(t.errors[0]))])]):t._e()}),[],!1,null,"1482dffa",null);e.a=r.exports}}]);
//# sourceMappingURL=16.js.map?id=e2d2933b98e5279b105c