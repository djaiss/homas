(window.webpackJsonp=window.webpackJsonp||[]).push([[29,41],{"81Ib":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.list-employees > ul[data-v-cf52e6ac] {\n  padding-left: 43px;\n}\n.list-employees li[data-v-cf52e6ac]:last-child {\n  margin-bottom: 0;\n}\n.avatar[data-v-cf52e6ac] {\n  top: 1px;\n  left: -44px;\n  width: 35px;\n}\n.list-employees-action[data-v-cf52e6ac] {\n  top: 15px;\n}\n.list-employees-modal[data-v-cf52e6ac] {\n  right: -6px;\n  top: 27px;\n}\n.icon-delete[data-v-cf52e6ac] {\n  top: 2px;\n}\n.ball-pulse[data-v-cf52e6ac] {\n  right: 8px;\n  top: 10px;\n  position: absolute;\n}\n",""])},IQOQ:function(e,t,a){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,a=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],s=function(e){return e},r={instances:[]};function n(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||s,events:e.events||a,isActive:!(!1===e.isActive)}}function i(e){var t=e.el,a=e.event,s=e.handler,r=e.middleware;a.target!==t&&!t.contains(a.target)&&r(a,t)&&s(a,t)}function o(e){var t=e.el,a=e.handler,s=e.middleware;return{el:t,eventHandlers:e.events.map((function(e){return{event:e,handler:function(e){return i({event:e,el:t,handler:a,middleware:s})}}}))}}function l(e){var t=r.instances.findIndex((function(t){return t.el===e}));-1!==t&&(r.instances[t].eventHandlers.forEach((function(e){return document.removeEventListener(e.event,e.handler)})),r.instances.splice(t,1))}return r.bind=function(e,t){var a=n(t.value);if(a.isActive){var s=o({el:e,events:a.events,handler:a.handler,middleware:a.middleware});s.eventHandlers.forEach((function(e){var t=e.event,a=e.handler;return setTimeout((function(){return document.addEventListener(t,a)}),0)})),r.instances.push(s)}},r.update=function(e,t){var a=t.value,s=t.oldValue;if(JSON.stringify(a)!==JSON.stringify(s)){var c=n(a),d=c.events,p=c.handler,m=c.middleware;if(c.isActive){var u=r.instances.find((function(t){return t.el===e}));u?(u.eventHandlers.forEach((function(e){return document.removeEventListener(e.event,e.handler)})),u.eventHandlers=d.map((function(t){return{event:t,handler:function(t){return i({event:t,el:e,handler:p,middleware:m})}}}))):(u=o({el:e,events:d,handler:p,middleware:m}),r.instances.push(u)),u.eventHandlers.forEach((function(e){var t=e.event,a=e.handler;return setTimeout((function(){return document.addEventListener(t,a)}),0)}))}else l(e)}},r.unbind=l,{install:function(e){e.directive("click-outside",r)},directive:r}}()},e2Ki:function(e,t,a){"use strict";a.r(t);var s=a("IQOQ"),r=a.n(s),n=(a("zHN7"),{components:{BallPulseLoader:a("mM8D").a},directives:{clickOutside:r.a.directive},props:{employee:{type:Object,default:null},notifications:{type:Array,default:null},managers:{type:Array,default:null},directReports:{type:Array,default:null}},data:function(){return{modal:"hide",processingSearch:!1,searchManagers:[],searchDirectReports:[],form:{searchTerm:null,errors:[]},managerModalId:0,directReportModalId:0,deleteEmployeeConfirmation:!1}},methods:{toggleModals:function(){"hide"==this.modal?this.modal="menu":this.modal="hide",this.searchManagers=[],this.searchDirectReports=[],this.form.searchTerm=null},displayManagerModal:function(){var e=this;this.modal="manager",this.$nextTick((function(){e.$refs.search.focus()}))},displayDirectReportModal:function(){var e=this;this.modal="directReport",this.$nextTick((function(){e.$refs.search.focus()}))},hideManagerModal:function(){this.managerModalId=0},hideDirectReportModal:function(){this.directReportModalId=0},search:_.debounce((function(){var e=this;""!=this.form.searchTerm&&(this.processingSearch=!0,axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/search/hierarchy",this.form).then((function(t){"manager"==e.modal&&(e.searchManagers=t.data.data),"directReport"==e.modal&&(e.searchDirectReports=t.data.data),e.processingSearch=!1})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data)),e.processingSearch=!1})))}),500),assignManager:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/assignManager",e).then((function(e){t.$snotify.success(t.$t("employee.hierarchy_modal_add_manager_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.managers.push(e.data.data),t.modal="hide"})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},assignDirectReport:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/assignDirectReport",e).then((function(e){t.$snotify.success(t.$t("employee.hierarchy_modal_add_direct_report_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.directReports.push(e.data.data),t.modal="hide"})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},unassignManager:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/unassignManager",e).then((function(e){t.$snotify.success(t.$t("employee.hierarchy_modal_remove_manager_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.managers.splice(t.managers.indexOf(e.data.data),1),t.deleteEmployeeConfirmation=!1,t.managerModalId=0})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},unassignDirectReport:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/unassignDirectReport",e).then((function(e){t.$snotify.success(t.$t("employee.hierarchy_modal_remove_direct_report_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.directReports.splice(t.directReports.indexOf(e.data.data),1),t.deleteEmployeeConfirmation=!1,t.directReportModalId=0})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))}}}),i=(a("k6vA"),a("KHd+")),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb4 relative"},[a("span",{staticClass:"db fw5 mb2"},[e._v("\n    👨‍✈️ "+e._s(e.$t("employee.hierarchy_title"))+"\n  ")]),e._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200,expression:"$page.auth.employee.permission_level <= 200"}],staticClass:"box-plus-button absolute br-100 pa2 bg-white pointer",attrs:{src:"/img/plus_button.svg","data-cy":"add-hierarchy-button",width:"22",height:"22"},on:{click:function(t){return t.preventDefault(),e.toggleModals()}}}),e._v(" "),"menu"==e.modal?a("div",{staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{staticClass:"pv2"},[a("a",{staticClass:"pointer",attrs:{"data-cy":"add-manager-button"},on:{click:function(t){return t.preventDefault(),e.displayManagerModal()}}},[e._v("\n          "+e._s(e.$t("employee.hierarchy_modal_add_manager"))+"\n        ")])]),e._v(" "),a("li",{staticClass:"pv2"},[a("a",{staticClass:"pointer",attrs:{"data-cy":"add-direct-report-button"},on:{click:function(t){return t.preventDefault(),e.displayDirectReportModal()}}},[e._v("\n          "+e._s(e.$t("employee.hierarchy_modal_add_direct_report"))+"\n        ")])])])]):e._e(),e._v(" "),"manager"==e.modal?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModals,expression:"toggleModals"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("div",{staticClass:"mb3 relative"},[a("p",[e._v(e._s(e.$t("employee.hierarchy_modal_add_manager_search",{name:e.employee.first_name})))]),e._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.searchTerm,expression:"form.searchTerm"}],ref:"search",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.hierarchy_search_placeholder"),required:"","data-cy":"search-manager"},domProps:{value:e.form.searchTerm},on:{keyup:e.search,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModals()},input:function(t){t.target.composing||e.$set(e.form,"searchTerm",t.target.value)}}}),e._v(" "),e.processingSearch?a("ball-pulse-loader",{attrs:{color:"#5c7575",size:"7px"}}):e._e()],1)])]),e._v(" "),a("ul",{staticClass:"pl0 list ma0"},[a("li",{staticClass:"fw5 mb3"},[a("span",{staticClass:"f6 mb2 dib"},[e._v("\n          "+e._s(e.$t("employee.hierarchy_search_results"))+"\n        ")]),e._v(" "),e.searchManagers.length>0?a("ul",{staticClass:"list ma0 pl0"},e._l(e.searchManagers,(function(t){return a("li",{key:t.id,staticClass:"bb relative pv2 ph1 bb-gray bb-gray-hover"},[e._v("\n            "+e._s(t.name)+"\n            "),a("a",{staticClass:"absolute right-1 pointer",attrs:{"data-cy":"potential-manager-button"},on:{click:function(a){return a.preventDefault(),e.assignManager(t)}}},[e._v("\n              "+e._s(e.$t("app.choose"))+"\n            ")])])})),0):a("div",{staticClass:"silver"},[e._v("\n          "+e._s(e.$t("app.no_results"))+"\n        ")])])])]):e._e(),e._v(" "),"directReport"==e.modal?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModals,expression:"toggleModals"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("div",{staticClass:"mb3 relative"},[a("p",[e._v(e._s(e.$t("employee.hierarchy_modal_add_direct_report_search",{name:e.employee.first_name})))]),e._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.searchTerm,expression:"form.searchTerm"}],ref:"search",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.hierarchy_search_placeholder"),required:"","data-cy":"search-direct-report"},domProps:{value:e.form.searchTerm},on:{keyup:e.search,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModals()},input:function(t){t.target.composing||e.$set(e.form,"searchTerm",t.target.value)}}}),e._v(" "),e.processingSearch?a("ball-pulse-loader",{attrs:{color:"#5c7575",size:"7px"}}):e._e()],1)])]),e._v(" "),a("ul",{staticClass:"pl0 list ma0"},[a("li",{staticClass:"fw5 mb3"},[a("span",{staticClass:"f6 mb2 dib"},[e._v("\n          "+e._s(e.$t("employee.hierarchy_search_results"))+"\n        ")]),e._v(" "),e.searchDirectReports.length>0?a("ul",{staticClass:"list ma0 pl0"},e._l(e.searchDirectReports,(function(t){return a("li",{key:t.id,staticClass:"bb relative pv2 ph1 bb-gray bb-gray-hover"},[e._v("\n            "+e._s(t.name)+"\n            "),a("a",{staticClass:"absolute right-1 pointer",attrs:{"data-cy":"potential-direct-report-button"},on:{click:function(a){return a.preventDefault(),e.assignDirectReport(t)}}},[e._v("\n              "+e._s(e.$t("app.choose"))+"\n            ")])])})),0):a("div",{staticClass:"silver"},[e._v("\n          "+e._s(e.$t("app.no_results"))+"\n        ")])])])]):e._e(),e._v(" "),a("div",{staticClass:"br3 bg-white box z-1 pa3 list-employees"},[0==e.managers.length&&0==e.directReports.length?a("p",{staticClass:"lh-copy mb0 f6"},[e._v("\n      "+e._s(e.$t("employee.hierarchy_blank"))+"\n    ")]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.managers.length,expression:"managers.length != 0"}],attrs:{"data-cy":"list-managers"}},[a("p",{staticClass:"mt0 mb2 f6"},[e._v("\n        "+e._s(e.$tc("employee.hierarchy_list_manager_title",e.managers.length))+"\n      ")]),e._v(" "),a("ul",{staticClass:"list mv0"},e._l(e.managers,(function(t){return a("li",{key:t.id,staticClass:"mb3 relative"},[a("img",{staticClass:"br-100 absolute avatar",attrs:{src:t.avatar}}),e._v(" "),a("inertia-link",{staticClass:"mb2",attrs:{href:"/"+e.$page.auth.company.id+"/employees/"+t.id}},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),null!==t.position?a("span",{staticClass:"title db f7 mt1"},[e._v("\n            "+e._s(t.position.title)+"\n          ")]):a("span",{staticClass:"title db f7 mt1"},[e._v("\n            "+e._s(e.$t("app.no_position_defined"))+"\n          ")]),e._v(" "),a("img",{staticClass:"absolute right-0 pointer list-employees-action",attrs:{src:"/img/common/triple-dots.svg","data-cy":"display-remove-manager-modal"},on:{click:function(a){e.managerModalId=t.id}}}),e._v(" "),e.managerModalId==t.id?a("div",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200,expression:"$page.auth.employee.permission_level <= 200"},{name:"click-outside",rawName:"v-click-outside",value:e.hideManagerModal,expression:"hideManagerModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn list-employees-modal"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{directives:[{name:"show",rawName:"v-show",value:!e.deleteEmployeeConfirmation,expression:"!deleteEmployeeConfirmation"}],staticClass:"pv2 relative"},[a("icon-delete",{attrs:{classes:"icon-delete relative",width:15,height:15}}),e._v(" "),a("a",{staticClass:"pointer ml1 c-delete",attrs:{"data-cy":"remove-manager-button"},on:{click:function(t){t.preventDefault(),e.deleteEmployeeConfirmation=!0}}},[e._v("\n                  "+e._s(e.$t("employee.hierarchy_modal_remove_manager"))+"\n                ")])],1),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.deleteEmployeeConfirmation,expression:"deleteEmployeeConfirmation"}],staticClass:"pv2"},[e._v("\n                "+e._s(e.$t("app.sure"))+"\n                "),a("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"confirm-remove-manager"},on:{click:function(a){return a.preventDefault(),e.unassignManager(t)}}},[e._v("\n                  "+e._s(e.$t("app.yes"))+"\n                ")]),e._v(" "),a("a",{staticClass:"pointer",on:{click:function(t){t.preventDefault(),e.deleteEmployeeConfirmation=!1}}},[e._v("\n                  "+e._s(e.$t("app.no"))+"\n                ")])])])]):e._e()],1)})),0)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.directReports.length,expression:"directReports.length != 0"}],class:0!=e.managers.length?"mt3":"",attrs:{"data-cy":"list-direct-reports"}},[a("p",{staticClass:"mt0 mb2 f6"},[e._v("\n        "+e._s(e.$tc("employee.hierarchy_list_direct_report_title",e.directReports.length))+"\n      ")]),e._v(" "),a("ul",{staticClass:"list mv0"},e._l(e.directReports,(function(t){return a("li",{key:t.id,staticClass:"mb3 relative"},[a("img",{staticClass:"br-100 absolute avatar",attrs:{src:t.avatar}}),e._v(" "),a("inertia-link",{staticClass:"mb2",attrs:{href:"/"+e.$page.auth.company.id+"/employees/"+t.id}},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),null!==t.position?a("span",{staticClass:"title db f7 mt1"},[e._v("\n            "+e._s(t.position.title)+"\n          ")]):a("span",{staticClass:"title db f7 mt1"},[e._v("\n            "+e._s(e.$t("app.no_position_defined"))+"\n          ")]),e._v(" "),a("img",{staticClass:"absolute right-0 pointer list-employees-action",attrs:{src:"/img/common/triple-dots.svg","data-cy":"display-remove-directreport-modal"},on:{click:function(a){e.directReportModalId=t.id}}}),e._v(" "),e.directReportModalId==t.id?a("div",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200,expression:"$page.auth.employee.permission_level <= 200"},{name:"click-outside",rawName:"v-click-outside",value:e.hideDirectReportModal,expression:"hideDirectReportModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn list-employees-modal"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{directives:[{name:"show",rawName:"v-show",value:!e.deleteEmployeeConfirmation,expression:"!deleteEmployeeConfirmation"}],staticClass:"pv2 relative"},[a("icon-delete",{attrs:{classes:"icon-delete relative",width:15,height:15}}),e._v(" "),a("a",{staticClass:"pointer ml1 c-delete",attrs:{"data-cy":"remove-directreport-button"},on:{click:function(t){t.preventDefault(),e.deleteEmployeeConfirmation=!0}}},[e._v("\n                  "+e._s(e.$t("employee.hierarchy_modal_remove_direct_report"))+"\n                ")])],1),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.deleteEmployeeConfirmation,expression:"deleteEmployeeConfirmation"}],staticClass:"pv2"},[e._v("\n                "+e._s(e.$t("app.sure"))+"\n                "),a("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"confirm-remove-directreport"},on:{click:function(a){return a.preventDefault(),e.unassignDirectReport(t)}}},[e._v("\n                  "+e._s(e.$t("app.yes"))+"\n                ")]),e._v(" "),a("a",{staticClass:"pointer",on:{click:function(t){t.preventDefault(),e.deleteEmployeeConfirmation=!1}}},[e._v("\n                  "+e._s(e.$t("app.no"))+"\n                ")])])])]):e._e()],1)})),0)])])])}),[],!1,null,"cf52e6ac",null);t.default=o.exports},k6vA:function(e,t,a){"use strict";var s=a("pIWp");a.n(s).a},pIWp:function(e,t,a){var s=a("81Ib");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)}}]);
//# sourceMappingURL=29.js.map?id=5f7a064069fa4f190466