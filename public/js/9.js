(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0KyY":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\ninput[type=checkbox][data-v-0e908e9a] {\n  top: 5px;\n}\ninput[type=radio][data-v-0e908e9a] {\n  top: -2px;\n}\n",""])},"1B+c":function(e,t,a){"use strict";var n=a("wjjY");a.n(n).a},"4T6e":function(e,t,a){var n=a("JzQN");"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,s);n.locals&&(e.exports=n.locals)},JzQN:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".error-explanation[data-v-533a82fc] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-533a82fc]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}\n.optional-badge[data-v-533a82fc] {\n  border-radius: 4px;\n  color: #283e59;\n  background-color: #edf2f9;\n  padding: 3px 4px;\n}",""])},LLkT:function(e,t,a){"use strict";var n=a("4T6e");a.n(n).a},UMxu:function(e,t,a){"use strict";a.r(t);var n=a("pF+r"),s=a("rrJu"),r=a("Z84v"),i={components:{Layout:a("+SZM").a,TextInput:n.a,Errors:s.a,LoadingButton:r.a},props:{notifications:{type:Array,default:null}},data:function(){return{form:{first_name:null,last_name:null,email:null,permission_level:null,send_invitation:!1,errors:[]},loadingState:"",errorTemplate:Error}},methods:{submit:function(){var e=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/account/employees",this.form).then((function(t){localStorage.success="The employee has been added",e.$inertia.visit("/"+t.data.company_id+"/account/employees")})).catch((function(t){e.loadingState=null,e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},o=(a("1B+c"),a("KHd+")),l=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout",{attrs:{title:"Home",notifications:e.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[a("ul",{staticClass:"list ph0 tc-l tl"},[a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/dashboard"}},[e._v(e._s(e.$page.auth.company.name))])],1),e._v(" "),a("li",{staticClass:"di"},[e._v("\n          ...\n        ")]),e._v(" "),a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/account/employees"}},[e._v(e._s(e.$t("app.breadcrumb_account_manage_employees")))])],1),e._v(" "),a("li",{staticClass:"di"},[e._v("\n          "+e._s(e.$t("app.breadcrumb_account_add_employee"))+"\n        ")])])]),e._v(" "),a("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[a("div",{},[a("h2",{staticClass:"pa3 mt5 center tc normal mb2"},[e._v("\n          "+e._s(e.$t("account.employee_new_title",{name:e.$page.auth.company.name}))+"\n        ")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("errors",{attrs:{errors:e.form.errors}}),e._v(" "),a("div",{staticClass:"cf pa3 bb bb-gray pb4"},[a("div",{staticClass:"fl-ns w-third-ns w-100 mb3 mb0-ns"},[a("strong",[e._v(e._s(e.$t("account.employee_new_basic_information")))])]),e._v(" "),a("div",{staticClass:"fl-ns w-two-thirds-ns w-100"},[a("text-input",{attrs:{id:"first_name",name:"first_name",errors:e.$page.errors.first_name,label:e.$t("account.employee_new_firstname"),required:!0},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}}),e._v(" "),a("text-input",{attrs:{id:"last_name",name:"last_name",errors:e.$page.errors.last_name,label:e.$t("account.employee_new_lastname"),required:!0},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}}),e._v(" "),a("text-input",{attrs:{id:"email",name:"email",type:"email",errors:e.$page.errors.email,label:e.$t("account.employee_new_email"),required:!0},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),a("div",{staticClass:"flex items-start relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.send_invitation,expression:"form.send_invitation"}],staticClass:"mr2 relative pointer",attrs:{id:"send_email","data-cy":"send-email",type:"checkbox",name:"send_email"},domProps:{checked:Array.isArray(e.form.send_invitation)?e._i(e.form.send_invitation,null)>-1:e.form.send_invitation},on:{change:function(t){var a=e.form.send_invitation,n=t.target,s=!!n.checked;if(Array.isArray(a)){var r=e._i(a,null);n.checked?r<0&&e.$set(e.form,"send_invitation",a.concat([null])):r>-1&&e.$set(e.form,"send_invitation",a.slice(0,r).concat(a.slice(r+1)))}else e.$set(e.form,"send_invitation",s)}}}),e._v(" "),a("label",{staticClass:"lh-copy ma0 pointer",attrs:{for:"send_email"}},[e._v("\n                  "+e._s(e.$t("account.employee_new_send_email"))+"\n                  "),a("span",{staticClass:"f6"},[e._v("\n                    "+e._s(e.$t("account.employee_new_send_email_optional"))+"\n                  ")])])])],1)]),e._v(" "),a("div",{staticClass:"cf pa3 bb-gray bb pt4"},[a("div",{staticClass:"fl-ns w-third-ns w-100 mb3 mb0-ns"},[a("strong",[e._v(e._s(e.$t("account.employee_new_permission_level")))])]),e._v(" "),a("div",{staticClass:"fl-ns w-two-thirds-ns w-100"},[a("div",{staticClass:"db relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.permission_level,expression:"form.permission_level"}],staticClass:"mr1 relative",attrs:{id:"administrator",type:"radio",name:"permission_level",value:"100"},domProps:{checked:e._q(e.form.permission_level,"100")},on:{change:function(t){return e.$set(e.form,"permission_level","100")}}}),e._v(" "),a("label",{staticClass:"pointer",attrs:{for:"administrator"}},[e._v("\n                  "+e._s(e.$t("account.employee_new_administrator"))+"\n                ")]),e._v(" "),a("p",{staticClass:"ma0 lh-copy f6 mb3"},[e._v("\n                  "+e._s(e.$t("account.employee_new_administrator_desc"))+"\n                ")])]),e._v(" "),a("div",{staticClass:"db relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.permission_level,expression:"form.permission_level"}],staticClass:"mr1 relative",attrs:{id:"hr",type:"radio",name:"permission_level",value:"200"},domProps:{checked:e._q(e.form.permission_level,"200")},on:{change:function(t){return e.$set(e.form,"permission_level","200")}}}),e._v(" "),a("label",{staticClass:"pointer",attrs:{for:"hr"}},[e._v("\n                  "+e._s(e.$t("account.employee_new_hr"))+"\n                ")]),e._v(" "),a("p",{staticClass:"ma0 lh-copy f6 mb3"},[e._v("\n                  "+e._s(e.$t("account.employee_new_hr_desc"))+"\n                ")])]),e._v(" "),a("div",{staticClass:"db relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.permission_level,expression:"form.permission_level"}],staticClass:"mr1 relative",attrs:{id:"user",type:"radio",name:"permission_level",value:"300"},domProps:{checked:e._q(e.form.permission_level,"300")},on:{change:function(t){return e.$set(e.form,"permission_level","300")}}}),e._v(" "),a("label",{staticClass:"pointer",attrs:{for:"user"}},[e._v("\n                  "+e._s(e.$t("account.employee_new_user"))+"\n                ")]),e._v(" "),a("p",{staticClass:"ma0 lh-copy f6 mb3"},[e._v("\n                  "+e._s(e.$t("account.employee_new_user_desc"))+"\n                ")])])])]),e._v(" "),a("div",{staticClass:"cf pa3"},[a("div",{staticClass:"flex-ns justify-between"},[a("div",[a("inertia-link",{staticClass:"btn btn-secondary dib tc w-auto-ns w-100 pv2 ph3 mb0-ns mb2",attrs:{href:"/"+e.$page.auth.company.id+"/account/employees"}},[e._v("\n                  "+e._s(e.$t("app.cancel"))+"\n                ")])],1),e._v(" "),a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 pv2 ph3",state:e.loadingState,text:e.$t("app.save"),"cypress-selector":"submit-add-employee-button"}})],1)])],1)])])])])}),[],!1,null,"0e908e9a",null);t.default=l.exports},"pF+r":function(e,t,a){"use strict";var n={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},customRef:{type:String,default:"input"},name:{type:String,default:"input"},datacy:{type:String,default:""},placeholder:{type:String,default:""},help:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},extraClassUpperDiv:{type:String,default:"mb3"},min:{type:Number,default:0},max:{type:Number,default:0},errors:{type:Array,default:function(){return[]}}},computed:{hasError:function(){return this.errors.length>0}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)},sendEscKey:function(){this.$emit("esc-key-pressed")}}},s=(a("LLkT"),a("KHd+")),r=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.extraClassUpperDiv},[e.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:e.id}},[e._v("\n    "+e._s(e.label)+"\n    "),e.required?e._e():a("span",{staticClass:"optional-badge f7"},[e._v("\n      "+e._s(e.$t("app.optional"))+"\n    ")])]):e._e(),e._v(" "),a("input",e._b({ref:e.customRef,staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:e.id,required:e.required,type:e.type,name:e.name,max:e.max,min:e.min,placeholder:e.placeholder,"data-cy":e.datacy},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.sendEscKey(t)}}},"input",e.$attrs,!1)),e._v(" "),e.hasError?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[e._v("\n    "+e._s(e.errors[0])+"\n  ")]):e._e(),e._v(" "),e.help?a("p",{staticClass:"f7 mb3 lh-title"},[e._v("\n    "+e._s(e.help)+"\n  ")]):e._e()])}),[],!1,null,"533a82fc",null);t.a=r.exports},rrJu:function(e,t,a){"use strict";var n={props:{errors:{type:Array,default:function(){return[]}}}},s=a("KHd+"),r=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.errors.length>0?a("div",[a("p",[e._v("app.error_title")]),e._v(" "),a("br"),e._v("\n  "+e._s(e.errors[0])+"\n  "),a("ul",e._l(e.errors[1],(function(t){return a("li",{key:t.id},[e._v("\n      "+e._s(t[0])+"\n    ")])})),0)]):e._e()}),[],!1,null,null,null);t.a=r.exports},wjjY:function(e,t,a){var n=a("0KyY");"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,s);n.locals&&(e.exports=n.locals)}}]);
//# sourceMappingURL=9.js.map?id=84af9f9e3cf01e00d43d