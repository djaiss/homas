(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4T6e":function(t,e,n){var r=n("JzQN");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,a);r.locals&&(t.exports=r.locals)},"7oz0":function(t,e,n){"use strict";n.r(e);var r=n("+SZM"),a=n("pF+r"),s=n("rrJu"),o=n("Z84v"),i={components:{Layout:r.a,TextInput:a.a,Errors:s.a,LoadingButton:o.a},props:{company:{type:Object,default:null},user:{type:Object,default:null},notifications:{type:Array,default:null}},data:function(){return{form:{name:null,errors:[]},loadingState:"",errorTemplate:Error}},methods:{submit:function(){var t=this;this.loadingState="loading",this.$inertia.post(this.route("company.store"),this.form).then((function(){return t.loadingState=null}))}}},l=n("KHd+"),u=Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{title:"Home","no-menu":!0,notifications:t.notifications}},[n("div",{staticClass:"ph2 ph0-ns"},[n("div",{staticClass:"cf mt4 mw7 center br3 mb3 bg-white box"},[n("div",{staticClass:"fn fl-ns w-50-ns pa3"},[t._v("\n        Create a company\n      ")]),t._v(" "),n("div",{staticClass:"fn fl-ns w-50-ns pa3"},[n("errors",{attrs:{errors:t.form.errors}}),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("text-input",{attrs:{name:"name",errors:t.$page.errors.name,label:t.$t("company.new_name"),required:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("div",{},[n("div",{staticClass:"flex-ns justify-between"},[n("div",[n("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:t.loadingState,text:"register","data-cy":"create-company-submit"}})],1)])])],1)],1)])])])}),[],!1,null,null,null);e.default=u.exports},JzQN:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".error-explanation[data-v-533a82fc] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-533a82fc]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}\n.optional-badge[data-v-533a82fc] {\n  border-radius: 4px;\n  color: #283e59;\n  background-color: #edf2f9;\n  padding: 3px 4px;\n}",""])},LLkT:function(t,e,n){"use strict";var r=n("4T6e");n.n(r).a},"pF+r":function(t,e,n){"use strict";var r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},customRef:{type:String,default:"input"},name:{type:String,default:"input"},datacy:{type:String,default:""},placeholder:{type:String,default:""},help:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},extraClassUpperDiv:{type:String,default:"mb3"},min:{type:Number,default:0},max:{type:Number,default:0},errors:{type:Array,default:function(){return[]}}},computed:{hasError:function(){return this.errors.length>0}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)},sendEscKey:function(){this.$emit("esc-key-pressed")}}},a=(n("LLkT"),n("KHd+")),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.extraClassUpperDiv},[t.label?n("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n    "),t.required?t._e():n("span",{staticClass:"optional-badge f7"},[t._v("\n      "+t._s(t.$t("app.optional"))+"\n    ")])]):t._e(),t._v(" "),n("input",t._b({ref:t.customRef,staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:t.id,required:t.required,type:t.type,name:t.name,max:t.max,min:t.min,placeholder:t.placeholder,"data-cy":t.datacy},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.sendEscKey(e)}}},"input",t.$attrs,!1)),t._v(" "),t.hasError?n("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[t._v("\n    "+t._s(t.errors[0])+"\n  ")]):t._e(),t._v(" "),t.help?n("p",{staticClass:"f7 mb3 lh-title"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])}),[],!1,null,"533a82fc",null);e.a=s.exports},rrJu:function(t,e,n){"use strict";var r={props:{errors:{type:Array,default:function(){return[]}}}},a=n("KHd+"),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.errors.length>0?n("div",[n("p",[t._v("app.error_title")]),t._v(" "),n("br"),t._v("\n  "+t._s(t.errors[0])+"\n  "),n("ul",t._l(t.errors[1],(function(e){return n("li",{key:e.id},[t._v("\n      "+t._s(e[0])+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.a=s.exports}}]);
//# sourceMappingURL=19.js.map?id=f95a2fe119354bb16451