(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4T6e":function(t,e,a){var n=a("JzQN");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)},JzQN:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".error-explanation[data-v-533a82fc] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-533a82fc]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}\n.optional-badge[data-v-533a82fc] {\n  border-radius: 4px;\n  color: #283e59;\n  background-color: #edf2f9;\n  padding: 3px 4px;\n}",""])},LLkT:function(t,e,a){"use strict";var n=a("4T6e");a.n(n).a},Z84v:function(t,e,a){"use strict";a("zHN7");var n={components:{BallPulseLoader:a("mM8D").a},props:{text:{type:String,default:""},state:{type:String,default:""},classes:{type:String,default:""},cypressSelector:{type:String,default:""}}},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"di"},[a("button",{class:t.classes,attrs:{name:"save",type:"submit","data-cy":t.cypressSelector}},["loading"==t.state?a("ball-pulse-loader",{attrs:{color:"#fff",size:"7px"}}):t._e(),t._v(" "),"loading"!=t.state?a("span",[t._v("\n      "+t._s(t.text)+"\n    ")]):t._e()],1)])}),[],!1,null,null,null);e.a=s.exports},kaMC:function(t,e,a){"use strict";a.r(e);var n=a("Z84v"),i=a("rrJu");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r={components:{TextInput:a("pF+r").a,LoadingButton:n.a,Errors:i.a},props:{company:{type:Object,default:null},employee:{type:Object,default:null},invitationLink:{type:String,default:""}},data:function(){return{displayCreateAccount:!1,displaySignin:!1,form:{email:null,password:null,errors:[]},loadingState:"",errorTemplate:Error}},mounted:function(){this.form.email=this.employee.email},methods:{submit:function(){var t=this;this.loadingState="loading",axios.post("/invite/employee/"+this.invitationLink+"/join",this.form).then((function(e){t.$inertia.visit("/home")})).catch((function(e){t.loadingState=null,"object"===s(e.response.data)?t.form.errors=_.flatten(_.toArray(e.response.data)):t.form.errors=[t.$t("app.error_try_again")]}))}}},o=a("KHd+"),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"cf mt3 mw6 center tc"},[a("h2",{staticClass:"lh-title"},[t._v("\n      "+t._s(t.$t("auth.invitation_unlogged_title",{name:t.company.name}))+"\n    ")]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.displayCreateAccount&&!t.displaySignin,expression:"!displayCreateAccount && !displaySignin"}]},[t._v("\n      "+t._s(t.$t("auth.invitation_unlogged_desc"))+"\n    ")]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.displayCreateAccount,expression:"displayCreateAccount"}]},[a("inertia-link",{staticClass:"pointer",on:{click:function(e){t.displaySignin=!0,t.displayCreateAccount=!1}}},[t._v("\n        ← "+t._s(t.$t("auth.invitation_unlogged_create_account_instead"))+"\n      ")])],1),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.displaySignin,expression:"displaySignin"}]},[a("inertia-link",{staticClass:"pointer",on:{click:function(e){t.displayCreateAccount=!0,t.displaySignin=!1}}},[t._v("\n        ← "+t._s(t.$t("auth.invitation_unlogged_login_instead"))+"\n      ")])],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.displayCreateAccount&&!t.displaySignin,expression:"!displayCreateAccount && !displaySignin"}],staticClass:"cf mt3 mw6 center br3 mb3 bg-white box pa3 pointer",attrs:{"data-cy":"accept-create-account"},on:{click:function(e){t.displayCreateAccount=!0}}},[a("p",{staticClass:"fw5"},[t._v("\n      "+t._s(t.$t("auth.invitation_unlogged_choice_account_title"))+"\n    ")]),t._v(" "),a("p",[t._v(t._s(t.$t("auth.invitation_unlogged_choice_account_desc")))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.displayCreateAccount&&!t.displaySignin,expression:"!displayCreateAccount && !displaySignin"}],staticClass:"cf mt3 mw6 center br3 mb3 bg-white box pa3 pointer",attrs:{"data-cy":"accept-login-account"},on:{click:function(e){t.displaySignin=!0}}},[a("p",{staticClass:"fw5"},[t._v("\n      "+t._s(t.$t("auth.invitation_unlogged_choice_login_title"))+"\n    ")]),t._v(" "),a("p",[t._v(t._s(t.$t("auth.invitation_unlogged_choice_login_desc")))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.displayCreateAccount,expression:"displayCreateAccount"}],staticClass:"cf mw6 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",{staticClass:"tc f4"},[t._v("\n        "+t._s(t.$t("auth.invitation_unlogged_choice_account"))+"\n      ")]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("errors",{attrs:{errors:t.form.errors}}),t._v(" "),a("text-input",{attrs:{id:"email",type:"email",errors:t.$page.errors.email,label:t.$t("auth.register_email"),help:t.$t("auth.register_email_help")},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),a("text-input",{attrs:{id:"password",type:"password",name:"password",errors:t.$page.errors.password,label:t.$t("auth.register_password")},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),a("div",{},[a("div",{staticClass:"flex-ns justify-between"},[a("div",[a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3","data-cy":"create-cta",state:t.loadingState,text:t.$t("auth.register_cta")}})],1)])])],1)])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.displaySignin,expression:"displaySignin"}],staticClass:"cf mw6 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",{staticClass:"tc f4"},[t._v("\n        "+t._s(t.$t("auth.invitation_unlogged_choice_login"))+"\n      ")]),t._v(" "),a("errors",{attrs:{errors:t.form.errors}}),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("text-input",{attrs:{id:"email",type:"email",errors:t.$page.errors.email,label:t.$t("auth.register_email")},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),a("text-input",{attrs:{id:"password",type:"password",errors:t.$page.errors.password,label:t.$t("auth.register_password")},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),a("div",{},[a("div",{staticClass:"flex-ns justify-between"},[a("div",[a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:t.loadingState,text:t.$t("auth.login_cta")}})],1)])])],1)],1)])])}),[],!1,null,null,null);e.default=l.exports},"pF+r":function(t,e,a){"use strict";var n={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},customRef:{type:String,default:"input"},name:{type:String,default:"input"},datacy:{type:String,default:""},placeholder:{type:String,default:""},help:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},extraClassUpperDiv:{type:String,default:"mb3"},min:{type:Number,default:0},max:{type:Number,default:0},errors:{type:Array,default:function(){return[]}}},computed:{hasError:function(){return this.errors.length>0}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)},sendEscKey:function(){this.$emit("esc-key-pressed")}}},i=(a("LLkT"),a("KHd+")),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.extraClassUpperDiv},[t.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n    "),t.required?t._e():a("span",{staticClass:"optional-badge f7"},[t._v("\n      "+t._s(t.$t("app.optional"))+"\n    ")])]):t._e(),t._v(" "),a("input",t._b({ref:t.customRef,staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:t.id,required:t.required,type:t.type,name:t.name,max:t.max,min:t.min,placeholder:t.placeholder,"data-cy":t.datacy},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.sendEscKey(e)}}},"input",t.$attrs,!1)),t._v(" "),t.hasError?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[t._v("\n    "+t._s(t.errors[0])+"\n  ")]):t._e(),t._v(" "),t.help?a("p",{staticClass:"f7 mb3 lh-title"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])}),[],!1,null,"533a82fc",null);e.a=s.exports},rrJu:function(t,e,a){"use strict";var n={props:{errors:{type:Array,default:function(){return[]}}}},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.errors.length>0?a("div",[a("p",[t._v("app.error_title")]),t._v(" "),a("br"),t._v("\n  "+t._s(t.errors[0])+"\n  "),a("ul",t._l(t.errors[1],(function(e){return a("li",{key:e.id},[t._v("\n      "+t._s(e[0])+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.a=s.exports}}]);
//# sourceMappingURL=17.js.map?id=8428835a4e27aecb4159