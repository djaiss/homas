(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{CPcL:function(t,a,e){"use strict";var s=e("m1nn");e.n(s).a},Eswu:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".error-explanation[data-v-df38947a] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-df38947a]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}\n.optional-badge[data-v-df38947a] {\n  border-radius: 4px;\n  color: #283e59;\n  background-color: #edf2f9;\n  padding: 3px 4px;\n}",""])},FUPM:function(t,a,e){var s=e("GqqJ");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,n);s.locals&&(t.exports=s.locals)},GqqJ:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".border-red[data-v-1482dffa] {\n  background-color: #fff5f5;\n  border-color: #fc8181;\n  color: #c53030;\n}",""])},PAcC:function(t,a,e){var s=e("Eswu");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,n);s.locals&&(t.exports=s.locals)},"SL/y":function(t,a,e){"use strict";var s=e("FUPM");e.n(s).a},aMQO:function(t,a,e){"use strict";e.r(a);var s=e("pF+r"),n=e("rrJu"),i=e("Z84v"),o={components:{Layout:e("+SZM").a,TextInput:s.a,Errors:n.a,LoadingButton:i.a},props:{notifications:{type:Array,default:null},positions:{type:Array,default:null}},data:function(){return{modal:!1,deleteModal:!1,updateModal:!1,loadingState:"",updateModalId:0,idToUpdate:0,idToDelete:0,form:{title:null,errors:[]}}},methods:{displayAddModal:function(){var t=this;this.modal=!0,this.$nextTick((function(){t.$refs.newPositionModal.$refs.input.focus()}))},displayUpdateModal:function(t){var a=this;this.idToUpdate=t.id,this.$nextTick((function(){a.$refs["title".concat(t.id)][0].$refs["title".concat(t.id)].focus()}))},submit:function(){var t=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/account/positions",this.form).then((function(a){t.$snotify.success(t.$t("account.position_success_new"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.loadingState=null,t.form.title=null,t.modal=!1,t.positions.push(a.data.data)})).catch((function(a){t.loadingState=null,t.form.errors=_.flatten(_.toArray(a.response.data))}))},update:function(t){var a=this;axios.put("/"+this.$page.auth.company.id+"/account/positions/"+t,this.form).then((function(e){a.$snotify.success(a.$t("account.position_success_update"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),a.idToUpdate=0,a.form.title=null,t=a.positions.findIndex((function(a){return a.id===t})),a.$set(a.positions,t,e.data.data)})).catch((function(t){a.form.errors=_.flatten(_.toArray(t.response.data))}))},destroy:function(t){var a=this;axios.delete("/"+this.$page.auth.company.id+"/account/positions/"+t).then((function(e){a.$snotify.success(a.$t("account.position_success_destroy"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),a.idToDelete=0,t=a.positions.findIndex((function(a){return a.id===t})),a.positions.splice(t,1)})).catch((function(t){a.form.errors=_.flatten(_.toArray(t.response.data))}))}}},r=(e("CPcL"),e("KHd+")),l=Object(r.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout",{attrs:{title:"Home",notifications:t.notifications}},[e("div",{staticClass:"ph2 ph0-ns"},[e("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[e("ul",{staticClass:"list ph0 tc-l tl"},[e("li",{staticClass:"di"},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),e("li",{staticClass:"di"},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account"}},[t._v(t._s(t.$t("app.breadcrumb_account_home")))])],1),t._v(" "),e("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_account_manage_positions"))+"\n        ")])])]),t._v(" "),e("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[e("div",{staticClass:"pa3 mt5"},[e("h2",{staticClass:"tc normal mb4"},[t._v("\n          "+t._s(t.$t("account.positions_title",{company:t.$page.auth.company.name}))+"\n        ")]),t._v(" "),e("p",{staticClass:"relative adminland-headline"},[e("span",{staticClass:"dib mb3 di-l",class:0==t.positions.length?"white":""},[t._v("\n            "+t._s(t.$tc("account.positions_number_positions",t.positions.length,{company:t.$page.auth.company.name,count:t.positions.length}))+"\n          ")]),t._v(" "),e("a",{staticClass:"btn absolute-l relative dib-l db right-0",attrs:{"data-cy":"add-position-button"},on:{click:function(a){return a.preventDefault(),t.displayAddModal(a)}}},[t._v("\n            "+t._s(t.$t("account.positions_cta"))+"\n          ")])]),t._v(" "),e("p",[t._v("The job position is what you would probably put on a resume to show what work you actually did.")]),t._v(" "),e("form",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"mb3 pa3 ba br2 bb-gray bg-gray",on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("errors",{attrs:{errors:t.form.errors}}),t._v(" "),e("div",{staticClass:"cf"},[e("div",{staticClass:"fl w-100 w-70-ns mb3 mb0-ns"},[e("text-input",{ref:"newPositionModal",attrs:{placeholder:"Marketing coordinator",datacy:"add-title-input",errors:t.$page.errors.first_name,"extra-class-upper-div":"mb0"},on:{"esc-key-pressed":function(a){t.modal=!1}},model:{value:t.form.title,callback:function(a){t.$set(t.form,"title",a)},expression:"form.title"}})],1),t._v(" "),e("div",{staticClass:"fl w-30-ns w-100 tr"},[e("a",{staticClass:"btn dib-l db mb2 mb0-ns",on:{click:function(a){a.preventDefault(),t.modal=!1}}},[t._v("\n                "+t._s(t.$t("app.cancel"))+"\n              ")]),t._v(" "),e("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 pv2 ph3","data-cy":"modal-add-cta",state:t.loadingState,text:t.$t("app.add")}})],1)])],1),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:0!=t.positions.length,expression:"positions.length != 0"}],staticClass:"list pl0 mv0 center ba br2 bb-gray",attrs:{"data-cy":"positions-list"}},t._l(t.positions,(function(a){return e("li",{key:a.id,staticClass:"pv3 ph2 bb bb-gray bb-gray-hover"},[t._v("\n            "+t._s(a.title)+"\n\n            "),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.idToUpdate==a.id,expression:"idToUpdate == position.id"}],staticClass:"cf mt3"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.update(a.id)}}},[e("div",{staticClass:"fl w-100 w-70-ns mb3 mb0-ns"},[e("text-input",{ref:"title"+a.id,refInFor:!0,attrs:{id:"title-"+a.id,placeholder:"Marketing coordinator","custom-ref":"title"+a.id,datacy:"list-rename-input-name-"+a.id,errors:t.$page.errors.first_name,required:"","extra-class-upper-div":"mb0"},on:{"esc-key-pressed":function(a){t.idToUpdate=0}},model:{value:t.form.title,callback:function(a){t.$set(t.form,"title",a)},expression:"form.title"}})],1),t._v(" "),e("div",{staticClass:"fl w-30-ns w-100 tr"},[e("a",{staticClass:"btn dib-l db mb2 mb0-ns",attrs:{"data-cy":"list-rename-cancel-button-"+a.id},on:{click:function(a){a.preventDefault(),t.idToUpdate=0}}},[t._v("\n                    "+t._s(t.$t("app.cancel"))+"\n                  ")]),t._v(" "),e("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3","data-cy":"list-rename-cta-button-"+a.id,state:t.loadingState,text:t.$t("app.update")}})],1)])]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.idToUpdate!=a.id,expression:"idToUpdate != position.id"}],staticClass:"list pa0 ma0 di-ns db fr-ns mt2 mt0-ns"},[e("li",{staticClass:"di mr2"},[e("a",{staticClass:"pointer",attrs:{"data-cy":"list-rename-button-"+a.id},on:{click:function(e){e.preventDefault(),t.displayUpdateModal(a),t.form.title=a.title}}},[t._v(t._s(t.$t("app.rename")))])]),t._v(" "),t.idToDelete==a.id?e("li",{staticClass:"di"},[t._v("\n                "+t._s(t.$t("app.sure"))+"\n                "),e("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"list-delete-confirm-button-"+a.id},on:{click:function(e){return e.preventDefault(),t.destroy(a.id)}}},[t._v("\n                  "+t._s(t.$t("app.yes"))+"\n                ")]),t._v(" "),e("a",{staticClass:"pointer",attrs:{"data-cy":"list-delete-cancel-button-"+a.id},on:{click:function(a){a.preventDefault(),t.idToDelete=0}}},[t._v("\n                  "+t._s(t.$t("app.no"))+"\n                ")])]):e("li",{staticClass:"di"},[e("a",{staticClass:"pointer",attrs:{"data-cy":"list-delete-button-"+a.id},on:{click:function(e){e.preventDefault(),t.idToDelete=a.id}}},[t._v("\n                  "+t._s(t.$t("app.delete"))+"\n                ")])])])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.positions.length,expression:"positions.length == 0"}],staticClass:"pa3 mt5"},[e("p",{staticClass:"tc measure center mb4 lh-copy"},[t._v("\n            "+t._s(t.$t("account.positions_blank"))+"\n          ")]),t._v(" "),e("img",{staticClass:"db center mb4",attrs:{srcset:"/img/company/account/blank-position-1x.png, /img/company/account/blank-position-2x.png 2x"}})])])])])])}),[],!1,null,"1ac47740",null);a.default=l.exports},gKvf:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.list li[data-v-1ac47740]:last-child {\n  border-bottom: 0;\n}\n",""])},l6R9:function(t,a,e){"use strict";var s=e("PAcC");e.n(s).a},m1nn:function(t,a,e){var s=e("gKvf");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,n);s.locals&&(t.exports=s.locals)},"pF+r":function(t,a,e){"use strict";var s={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},customRef:{type:String,default:"input"},name:{type:String,default:"input"},datacy:{type:String,default:""},placeholder:{type:String,default:""},help:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},extraClassUpperDiv:{type:String,default:"mb3"},min:{type:Number,default:0},max:{type:Number,default:0},errors:{type:Array,default:function(){return[]}}},computed:{hasError:function(){return!!(this.errors.length>0&&this.required)}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,a){this.$refs.input.setSelectionRange(t,a)},sendEscKey:function(){this.$emit("esc-key-pressed")}}},n=(e("l6R9"),e("KHd+")),i=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.extraClassUpperDiv},[t.label?e("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n    "),t.required?t._e():e("span",{staticClass:"optional-badge f7"},[t._v("\n      "+t._s(t.$t("app.optional"))+"\n    ")])]):t._e(),t._v(" "),e("input",t._b({ref:t.customRef,staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:t.id,required:t.required,type:t.type,name:t.name,max:t.max,min:t.min,placeholder:t.placeholder,"data-cy":t.datacy},domProps:{value:t.value},on:{input:function(a){return t.$emit("input",a.target.value)},keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"esc",27,a.key,["Esc","Escape"])?null:t.sendEscKey(a)}}},"input",t.$attrs,!1)),t._v(" "),t.hasError?e("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[t._v("\n    "+t._s(t.errors[0])+"\n  ")]):t._e(),t._v(" "),t.help?e("p",{staticClass:"f7 mb3 lh-title"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])}),[],!1,null,"df38947a",null);a.a=i.exports},rrJu:function(t,a,e){"use strict";var s={props:{errors:{type:Array,default:function(){return[]}}}},n=(e("SL/y"),e("KHd+")),i=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.errors.length>0?e("div",{staticClass:"border-red ba br3 pa3"},[e("p",{staticClass:"mv0 fw6"},[t._v(t._s(t.$t("app.error_title")))]),t._v(" "),e("p",{staticClass:"mb0"},[t._v(t._s(t.errors[0]))])]):t._e()}),[],!1,null,"1482dffa",null);a.a=i.exports}}]);
//# sourceMappingURL=14.js.map?id=bde7213413dacfab8a63