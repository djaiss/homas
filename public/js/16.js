(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1krx":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".error-explanation[data-v-baf4edc2] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-baf4edc2]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}",""])},"3QM4":function(t,e,s){"use strict";var r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-area-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},datacy:{type:String,default:""},label:{type:String,default:""},help:{type:String,default:""},required:{type:Boolean,default:!1},rows:{type:Number,default:3},errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},a=(s("9cby"),s("KHd+")),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb3"},[t.label?s("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n  ")]):t._e(),t._v(" "),s("textarea",t._b({ref:"input",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",class:{error:t.errors.length},attrs:{id:t.id,required:t.required?"required":"",type:t.type,"data-cy":t.datacy,rows:t.rows},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"textarea",t.$attrs,!1)),t._v(" "),t.errors.length?s("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[t._v("\n    "+t._s(t.errors[0])+"\n  ")]):t._e(),t._v(" "),t.help?s("p",{staticClass:"f7 mb3 lh-title"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])}),[],!1,null,"baf4edc2",null);e.a=o.exports},"9cby":function(t,e,s){"use strict";var r=s("Y36v");s.n(r).a},FUPM:function(t,e,s){var r=s("GqqJ");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(t.exports=r.locals)},GqqJ:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".border-red[data-v-1482dffa] {\n  background-color: #fff5f5;\n  border-color: #fc8181;\n  color: #c53030;\n}",""])},P4ZZ:function(t,e,s){"use strict";s.r(e);var r=s("3QM4"),a=s("Z84v"),o=s("rrJu"),i={components:{TextArea:r.a,Errors:o.a,LoadingButton:a.a},props:{employee:{type:Object,default:null}},data:function(){return{showEdit:!1,form:{description:null,errors:[]},loadingState:"",errorTemplate:Error,updatedEmployee:null}},created:function(){this.updatedEmployee=this.employee},methods:{employeeOrAtLeastHR:function(){return this.$page.auth.employee.permission_level<=200||!!this.employee.user&&(this.$page.auth.user.id==this.employee.user.id||void 0)},displayEditBox:function(){this.showEdit=!0,this.form.description=this.updatedEmployee.raw_description},submit:function(){var t=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/description",this.form).then((function(e){t.$snotify.success(t.$t("employee.description_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data,t.showEdit=!1,t.loadingState=null})).catch((function(e){t.loadingState=null,t.form.errors=_.flatten(_.toArray(e.response.data))}))},clear:function(){var t=this;axios.delete("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/description/"+this.employee.id).then((function(e){t.$snotify.success(t.$t("employee.description_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data,t.showEdit=!1})).catch((function(e){t.loadingState=null,t.form.errors=_.flatten(_.toArray(e.response.data))}))}}},n=s("KHd+"),l=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb4 relative"},[s("span",{staticClass:"db fw5 mb2"},[t._v("\n    💬 "+t._s(t.$t("employee.description_title"))+"\n  ")]),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.employeeOrAtLeastHR(),expression:"employeeOrAtLeastHR()"}],staticClass:"box-plus-button absolute br-100 pa2 bg-white pointer",attrs:{src:"/img/edit_button.svg","data-cy":"add-description-button",width:"22",height:"22"},on:{click:function(e){return e.preventDefault(),t.displayEditBox()}}}),t._v(" "),t.updatedEmployee.raw_description&&!t.showEdit?s("div",{staticClass:"br3 bg-white box z-1 pa3"},[s("div",{staticClass:"parsed-content",domProps:{innerHTML:t._s(t.updatedEmployee.parsed_description)}})]):t._e(),t._v(" "),t.updatedEmployee.raw_description||t.showEdit?t._e():s("div",{staticClass:"br3 bg-white box z-1 pa3"},[s("p",{staticClass:"mb0 mt0 lh-copy mb0 f6"},[t._v("\n      "+t._s(t.$t("employee.description_no_description"))+"\n    ")])]),t._v(" "),t.showEdit?s("div",{staticClass:"br3 bg-white box z-1 pa3"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("errors",{attrs:{errors:t.form.errors}}),t._v(" "),s("text-area",{attrs:{label:t.$t("employee.description_text_title"),datacy:"description-textarea",required:!0,rows:10,help:t.$t("employee.description_text_help")},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),s("div",{staticClass:"mt4"},[s("div",{staticClass:"flex-ns justify-between"},[s("div",[s("a",{staticClass:"btn btn-secondary dib tc w-auto-ns w-100 mb2 pv2 ph3",attrs:{"data-cy":"clear-description"},on:{click:function(e){return t.clear()}}},[t._v("\n              ❌ "+t._s(t.$t("employee.description_clear"))+"\n            ")])]),t._v(" "),s("div",{},[s("a",{staticClass:"btn btn-secondary dib tc w-auto-ns w-100 mb2 pv2 ph3",attrs:{"data-cy":"cancel-add-description"},on:{click:function(e){t.showEdit=!1}}},[t._v("\n              "+t._s(t.$t("app.cancel"))+"\n            ")]),t._v(" "),s("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:t.loadingState,text:t.$t("app.publish"),"cypress-selector":"submit-add-description"}})],1)])])],1)]):t._e()])}),[],!1,null,"0607cd57",null);e.default=l.exports},"SL/y":function(t,e,s){"use strict";var r=s("FUPM");s.n(r).a},Y36v:function(t,e,s){var r=s("1krx");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(t.exports=r.locals)},Z84v:function(t,e,s){"use strict";s("zHN7");var r={components:{BallPulseLoader:s("mM8D").a},props:{text:{type:String,default:""},state:{type:String,default:""},classes:{type:String,default:""},cypressSelector:{type:String,default:""}}},a=s("KHd+"),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"di"},[s("button",{class:t.classes,attrs:{name:"save",type:"submit","data-cy":t.cypressSelector}},["loading"==t.state?s("ball-pulse-loader",{attrs:{color:"#fff",size:"7px"}}):t._e(),t._v(" "),"loading"!=t.state?s("span",[t._v("\n      "+t._s(t.text)+"\n    ")]):t._e()],1)])}),[],!1,null,null,null);e.a=o.exports},rrJu:function(t,e,s){"use strict";var r={props:{errors:{type:Array,default:function(){return[]}}}},a=(s("SL/y"),s("KHd+")),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.errors.length>0?s("div",{staticClass:"border-red ba br3 pa3"},[s("p",{staticClass:"mv0 fw6"},[t._v(t._s(t.$t("app.error_title")))]),t._v(" "),s("p",{staticClass:"mb0"},[t._v(t._s(t.errors[0]))])]):t._e()}),[],!1,null,"1482dffa",null);e.a=o.exports}}]);
//# sourceMappingURL=16.js.map?id=0daf70730f12f9c6893a