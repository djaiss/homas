(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"6rS1":function(t,e,o){"use strict";o.r(e);var s={props:{employee:{type:Object,default:null},worklogs:{type:Array,default:null}},data:function(){return{}},methods:{employeeOrAtLeastHR:function(){return this.$page.auth.employee.permission_level<=200||!!this.employee.user&&this.$page.auth.user.id==this.employee.user.id}}},n=(o("C+SG"),o("KHd+")),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb4 relative"},[o("span",{staticClass:"db fw5 mb2"},[t._v("\n    🔨 "+t._s(t.$t("employee.worklog_title"))+"\n  ")]),t._v(" "),o("div",{staticClass:"br3 bg-white box z-1"},[0==t.worklogs.length?[o("p",{staticClass:"lh-copy ma0 f6 tc pa3"},[t._v(t._s(t.$t("employee.worklog_blank")))])]:t._e(),t._v(" "),[o("div",{attrs:{"data-cy":"list-worklogs"}},[o("ul",{staticClass:"list mv0 pa3 bb bb-gray"},t._l(t.worklogs,(function(e){return o("li",{key:e.id,staticClass:"mb3 relative worklog-item"},[e.worklog_parsed_content?[o("div",{staticClass:"parsed-content mb1",domProps:{innerHTML:t._s(e.worklog_parsed_content)}})]:[o("div",[o("p",{staticClass:"i mt0 mb1"},[t._v("\n                  "+t._s(t.$t("employee.worklog_no_worklog"))+"\n                ")])])],t._v(" "),o("ul",{staticClass:"f7 mb1 list pl0"},[o("li",{staticClass:"di"},[t._v("\n                "+t._s(e.friendly_date)+"\n              ")]),t._v(" "),e.morale?o("li",{staticClass:"di"},[t._v("\n                – "+t._s(e.morale)+"\n              ")]):t._e()])],2)})),0),t._v(" "),t.employeeOrAtLeastHR()?o("div",{staticClass:"pa3 tc"},[o("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/employees/"+t.employee.id+"/worklogs","data-cy":"view-all-worklogs"}},[t._v(t._s(t.$t("employee.worklog_view_all")))])],1):t._e()])]],2)])}),[],!1,null,"6cec5555",null);e.default=a.exports},"C+SG":function(t,e,o){"use strict";var s=o("tUbJ");o.n(s).a},Ji46:function(t,e,o){(t.exports=o("I1BE")(!1)).push([t.i,".content[data-v-6cec5555] {\n  background-color: #f3f9fc;\n  padding: 1px 10px;\n}\n.worklog-item[data-v-6cec5555]:last-child {\n  margin-bottom: 0;\n}\n.parsed-content p[data-v-6cec5555]:last-child {\n  margin-bottom: 0;\n}",""])},"KHd+":function(t,e,o){"use strict";function s(t,e,o,s,n,a,i,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=o,c._compiled=!0),s&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=r?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}o.d(e,"a",(function(){return s}))},tUbJ:function(t,e,o){var s=o("Ji46");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(s,n);s.locals&&(t.exports=s.locals)}}]);
//# sourceMappingURL=39.js.map?id=56ae0dbab87cf999b63b