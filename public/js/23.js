(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+SZM":function(t,a,e){"use strict";var s=e("5n2/"),n=e.n(s),i={props:{notifications:{type:Array,default:null}},data:function(){return{menu:!1}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{close:function(t){this.$el.contains(t.target)||(this.menu=!1)}}},o=(e("z6qC"),e("KHd+")),r={components:{UserMenu:Object(o.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a",{staticClass:"no-color no-underline relative pointer",attrs:{"data-cy":"header-menu"},on:{click:function(a){a.preventDefault(),t.menu=!t.menu}}},[t._v("\n    "+t._s(t.$page.auth.user.email)+" "),e("span",{staticClass:"dropdown-caret"})]),t._v(" "),1==t.menu?e("div",{staticClass:"absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[e("ul",{staticClass:"list ma0 pa0"},[e("li",{staticClass:"pv2"},[e("inertia-link",{staticClass:"no-color no-underline",attrs:{href:"/home","data-cy":"switch-company-button"}},[t._v("\n          "+t._s(t.$t("app.header_switch_company"))+"\n        ")])],1),t._v(" "),e("li",{staticClass:"pv2"},[e("inertia-link",{staticClass:"no-color no-underline",attrs:{href:"/logout","data-cy":"logout-button"}},[t._v("\n          "+t._s(t.$t("app.header_logout"))+"\n        ")])],1)])]):t._e()])},[],!1,null,"8612cfca",null).exports,LoadingButton:e("Z84v").a},directives:{ClickOutside:n.a},props:{title:{type:String,default:""},noMenu:{type:Boolean,default:!1},notifications:{type:Array,default:null}},data:function(){return{loadingState:"",modalFind:!1,showModalNotifications:!1,dataReturnedFromSearch:!1,form:{searchTerm:null,errors:[]},employees:[],teams:[]}},watch:{title:function(t){this.updatePageTitle(t)}},mounted:function(){this.updatePageTitle(this.title),this.popupItem=this.$el},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | Example app"):"Example app"},showFindModal:function(){var t=this;this.dataReturnedFromSearch=!1,this.form.searchTerm=null,this.employees=[],this.teams=[],this.modalFind=!this.modalFind,this.$nextTick(function(){t.$refs.search.focus()})},showNotifications:function(){var t=this;this.showModalNotifications=!this.showModalNotifications,axios.post("/notifications/read").catch(function(a){t.loadingState=null,t.form.errors=_.flatten(_.toArray(a.response.data))})},hideNotifications:function(){this.showModalNotifications=!1},submit:function(){var t=this;axios.post("/search/employees",this.form).then(function(a){t.dataReturnedFromSearch=!0,t.employees=a.data.data}).catch(function(a){t.loadingState=null,t.form.errors=_.flatten(_.toArray(a.response.data))}),axios.post("/search/teams",this.form).then(function(a){t.dataReturnedFromSearch=!0,t.teams=a.data.data}).catch(function(a){t.loadingState=null,t.form.errors=_.flatten(_.toArray(a.response.data))})}}},l=(e("22nh"),Object(o.a)(r,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("vue-snotify"),t._v(" "),e("header",{staticClass:"bg-white dn db-m db-l mb3 relative"},[e("div",{staticClass:"ph3 pt1 w-100"},[e("div",{staticClass:"cf"},[t._m(0),t._v(" "),e("div",{staticClass:"fl w-60 tc"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.noMenu,expression:"noMenu"}],staticClass:"dib w-100"}),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:!t.noMenu,expression:"!noMenu"}],staticClass:"mv2"},[e("li",{staticClass:"di header-menu-item pa2 pointer mr2"},[e("inertia-link",{attrs:{href:"/home"}},[e("span",{staticClass:"fw5"},[e("img",{staticClass:"relative",attrs:{src:"/img/header/icon-home.svg"}}),t._v("\n                  "+t._s(t.$t("app.header_home"))+"\n                ")])])],1),t._v(" "),e("li",{staticClass:"di header-menu-item pa2 pointer mr2",attrs:{"data-cy":"header-find-link"},on:{click:t.showFindModal}},[e("span",{staticClass:"fw5"},[e("img",{staticClass:"relative",attrs:{src:"/img/header/icon-find.svg"}}),t._v("\n                "+t._s(t.$t("app.header_find"))+"\n              ")])]),t._v(" "),e("li",{staticClass:"di header-menu-item pa2 pointer",attrs:{"data-cy":"header-notifications-link"},on:{click:t.showNotifications}},[e("span",{staticClass:"fw5"},[e("img",{staticClass:"relative",attrs:{src:"/img/header/icon-notification.svg"}}),t._v("\n                "+t._s(t.$t("app.header_notifications"))+"\n              ")])]),t._v(" "),t.$page.auth.company&&t.$page.auth.employee.permission_level<=200?e("li",{staticClass:"di header-menu-item pa2 pointer",attrs:{"data-cy":"header-notifications-link"}},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account"}},[e("span",{staticClass:"fw5"},[e("img",{staticClass:"relative",attrs:{src:"/img/header/icon-notification.svg"}}),t._v("\n                  Adminland\n                ")])])],1):t._e()])]),t._v(" "),e("div",{staticClass:"fl w-20 pa2 tr relative header-menu-settings"},[e("user-menu")],1)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.modalFind,expression:"modalFind"}],staticClass:"absolute z-max find-box"},[e("div",{staticClass:"br2 bg-white tl pv3 ph3 bounceIn faster"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.searchTerm,expression:"form.searchTerm"}],ref:"search",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:t.$t("app.header_search_placeholder"),required:""},domProps:{value:t.form.searchTerm},on:{keydown:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"esc",27,a.key,["Esc","Escape"]))return null;t.modalFind=!1},input:function(a){a.target.composing||t.$set(t.form,"searchTerm",a.target.value)}}}),t._v(" "),e("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3 absolute top-0 right-0",state:t.loadingState,text:t.$t("app.search"),"cypress-selector":"header-find-submit"}})],1)]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.dataReturnedFromSearch,expression:"dataReturnedFromSearch"}],staticClass:"pl0 list ma0 mt3",attrs:{"data-cy":"results"}},[e("li",{staticClass:"b mb3"},[e("span",{staticClass:"f6 mb2 dib"},[t._v(t._s(t.$t("app.header_search_employees")))]),t._v(" "),t.employees.length>0?e("ul",{staticClass:"list ma0 pl0"},t._l(t.employees,function(a){return e("li",{key:a.id},[e("a",{attrs:{href:"/"+a.company.id+"/employees/"+a.id}},[t._v(t._s(a.name))])])}),0):e("div",{staticClass:"silver"},[t._v("\n              "+t._s(t.$t("app.header_search_no_employee_found"))+"\n            ")])]),t._v(" "),e("li",{staticClass:"fw5"},[e("span",{staticClass:"f6 mb2 dib"},[t._v(t._s(t.$t("app.header_search_teams")))]),t._v(" "),t.teams.length>0?e("ul",{staticClass:"list ma0 pl0"},t._l(t.teams,function(a){return e("li",{key:a.id},[e("a",{attrs:{href:"/"+a.company.id+"/teams/"+a.id}},[t._v(t._s(a.name))])])}),0):e("div",{staticClass:"silver"},[t._v("\n              "+t._s(t.$t("app.header_search_no_team_found"))+"\n            ")])])])])]),t._v(" "),t.showModalNotifications?e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideNotifications,expression:"hideNotifications"}],staticClass:"absolute z-max notifications-box"},[e("div",{staticClass:"br2 bg-white tl pv3 ph3 bounceIn faster"},[e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.notifications.length,expression:"notifications.length == 0"}]},[e("img",{staticClass:"db center mb2",attrs:{srcset:"/img/header/notification_blank.png, /img/header/notitication_blank@2x.png 2x"}}),t._v(" "),e("p",{staticClass:"tc"},[t._v("\n            All is clear!\n          ")])]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.notifications.length>0,expression:"notifications.length > 0"}]},t._l(t.notifications,function(a){return e("li",{key:a.id},[t._v("\n            "+t._s(a.action)+"\n          ")])}),0)])]):t._e()]),t._v(" "),t._m(1),t._v(" "),e("div",{class:[t.modalFind?"bg-modal-find":""]}),t._v(" "),t._t("default")],2)},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"fl w-20 pa2"},[a("a",{staticClass:"relative header-logo",attrs:{href:""}},[a("img",{attrs:{src:"/img/logo.svg",height:"30"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"bg-white mobile dn-ns mb3"},[e("div",{staticClass:"ph2 pv2 w-100 relative"},[e("div",{staticClass:"pv2 relative menu-toggle"},[e("label",{staticClass:"dib b relative",attrs:{for:"menu-toggle"}},[t._v("Menu")]),t._v(" "),e("input",{attrs:{id:"menu-toggle",type:"checkbox"}}),t._v(" "),e("ul",{staticClass:"list pa0 mt4 mb0",attrs:{id:"mobile-menu"}},[e("li",{staticClass:"pv2 bt b--light-gray"},[e("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[t._v("\n              Home\n            ")])]),t._v(" "),e("li",{staticClass:"pv2 bt b--light-gray"},[e("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[t._v("\n              app.main_nav_people\n            ")])]),t._v(" "),e("li",{staticClass:"pv2 bt b--light-gray"},[e("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[t._v("\n              app.main_nav_journal\n            ")])]),t._v(" "),e("li",{staticClass:"pv2 bt b--light-gray"},[e("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[t._v("\n              app.main_nav_find\n            ")])]),t._v(" "),e("li",{staticClass:"pv2 bt b--light-gray"},[e("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[t._v("\n              app.main_nav_changelog\n            ")])]),t._v(" "),e("li",{staticClass:"pv2 bt b--light-gray"},[e("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[t._v("\n              app.main_nav_settings\n            ")])]),t._v(" "),e("li",{staticClass:"pv2 bt b--light-gray"},[e("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[t._v("\n              app.main_nav_signout\n            ")])])])]),t._v(" "),e("div",{staticClass:"absolute pa2 header-logo"},[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"/img/logo.svg",width:"30",height:"27"}})])])])])}],!1,null,"7ee324ac",null));a.a=l.exports},"22nh":function(t,a,e){"use strict";var s=e("mRVG");e.n(s).a},"5n2/":function(t,a){function e(t){return"function"==typeof t.value||(console.warn("[Vue-click-outside:] provided expression",t.expression,"is not a function."),!1)}function s(t){return void 0!==t.componentInstance&&t.componentInstance.$isServer}t.exports={bind:function(t,a,n){function i(a){if(n.context){var e=a.path||a.composedPath&&a.composedPath();e&&e.length>0&&e.unshift(a.target),t.contains(a.target)||function(t,a){if(!t||!a)return!1;for(var e=0,s=a.length;e<s;e++)try{if(t.contains(a[e]))return!0;if(a[e].contains(t))return!1}catch(t){return!1}return!1}(n.context.popupItem,e)||t.__vueClickOutside__.callback(a)}}e(a)&&(t.__vueClickOutside__={handler:i,callback:a.value},!s(n)&&document.addEventListener("click",i))},update:function(t,a){e(a)&&(t.__vueClickOutside__.callback=a.value)},unbind:function(t,a,e){!s(e)&&document.removeEventListener("click",t.__vueClickOutside__.handler),delete t.__vueClickOutside__}}},"DR/N":function(t,a,e){"use strict";e.r(a);var s=e("+SZM"),n=e("5n2/"),i=e.n(n),o={components:{Layout:s.a},directives:{ClickOutside:i.a},props:{notifications:{type:Array,default:null},employees:{type:Array,default:null},mostRecentEmployee:{type:String,default:null},employeeCount:{type:Number,default:null},team:{type:Object,default:null}},data:function(){return{}},mounted:function(){localStorage.success&&(this.$snotify.success(localStorage.success,{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),localStorage.clear())},methods:{}},r=e("KHd+"),l=Object(r.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout",{attrs:{title:"Home",notifications:t.notifications}},[e("div",{staticClass:"ph2 ph5-ns"},[e("div",{staticClass:"mt4-l mt1 mw7 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[e("ul",{staticClass:"list ph0 tc-l tl"},[e("li",{staticClass:"di"},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v("\n            "+t._s(t.$page.auth.company.name)+"\n          ")])],1),t._v(" "),e("li",{staticClass:"di"},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/teams"}},[t._v("\n            "+t._s(t.$t("app.breadcrumb_team_list"))+"\n          ")])],1),t._v(" "),e("li",{staticClass:"di"},[t._v("\n          "+t._s(t.team.name)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"mw8 center br3 mb4 bg-white box relative z-1"},[e("div",{staticClass:"pa3 relative"},[e("h2",{staticClass:"normal ma0 mb2"},[t._v("\n          "+t._s(t.team.name)+"\n        ")]),t._v(" "),e("ul",{staticClass:"ma0 pa0 f6"},[e("li",{staticClass:"di mr2"},[e("img",{staticClass:"pr1",attrs:{src:"/img/leader.svg"}}),t._v("\n            Lead by John Rambo\n          ")]),t._v(" "),e("li",{staticClass:"di"},[e("img",{staticClass:"pr1",attrs:{src:"/img/location.svg"}}),t._v("\n            Office #5, south east\n          ")])])])]),t._v(" "),e("div",{staticClass:"cf mw6 center mb4"},[e("div",{staticClass:"bg-white box pa3 mb4"},[e("p",{staticClass:"lh-copy ma0 mb2"},[t._v("\n          This team has "+t._s(t.employeeCount)+" members, the most recent being "),e("a",{attrs:{href:""}},[t._v("sdfsd")]),t._v(".\n        ")]),t._v(" "),e("p",{staticClass:"ma0"},[e("a",{attrs:{href:""}},[t._v("View team members")])])]),t._v(" "),e("div",{staticClass:"bg-white box pa3 mb4"},[e("p",{staticClass:"ma0 mb2"},[t._v("\n          Want to find out how someone in this team can help you?\n        ")]),t._v(" "),e("p",{staticClass:"ma0"},[e("a",{attrs:{href:""}},[t._v("Read about the different ways they can help you")])])]),t._v(" "),e("div",{staticClass:"bg-white box pa3 mb4"},[e("p",{staticClass:"f6 ma0 mb1"},[t._v("\n          2 days ago\n        ")]),t._v(" "),e("p",{staticClass:"lh-copy ma0 mb2"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.\n        ")]),t._v(" "),e("p",{staticClass:"ma0"},[e("a",{attrs:{href:""}},[t._v("Read all the news")])])]),t._v(" "),e("div",{staticClass:"bg-white box pa3"},[e("p",{staticClass:"ma0 mb2"},[t._v("\n          New to the team?\n        ")]),t._v(" "),e("p",{staticClass:"ma0"},[e("a",{attrs:{href:""}},[t._v("Start here")])])])])])])},[],!1,null,"150dcc24",null);a.default=l.exports},Ddpy:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,'\n.absolute[data-v-8612cfca] {\n  border: 1px solid rgba(27,31,35,.15);\n  box-shadow: 0 3px 12px rgba(27,31,35,.15);\n  top: 36px;\n}\n.absolute[data-v-8612cfca]:after,\n.absolute[data-v-8612cfca]:before {\n  content: "";\n  display: inline-block;\n  position: absolute;\n}\n.absolute[data-v-8612cfca]:after {\n  border: 7px solid transparent;\n  border-bottom-color: #fff;\n  left: auto;\n  right: 10px;\n  top: -14px;\n}\n.absolute[data-v-8612cfca]:before {\n  border: 8px solid transparent;\n  border-bottom-color: rgba(27,31,35,.15);\n  left: auto;\n  right: 9px;\n  top: -16px;\n}\n',""])},Z84v:function(t,a,e){"use strict";e("zHN7");var s={components:{BallPulseLoader:e("mM8D").a},props:{text:{type:String,default:""},state:{type:String,default:""},classes:{type:String,default:""},cypressSelector:{type:String,default:""}}},n=e("KHd+"),i=Object(n.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"di"},[e("button",{class:t.classes,attrs:{name:"save",type:"submit","data-cy":t.cypressSelector}},["loading"==t.state?e("ball-pulse-loader",{attrs:{color:"#fff",size:"7px"}}):t._e(),t._v(" "),"loading"!=t.state?e("span",[t._v(t._s(t.text))]):t._e()],1)])},[],!1,null,null,null);a.a=i.exports},mRVG:function(t,a,e){var s=e("ngXL");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,n);s.locals&&(t.exports=s.locals)},ngXL:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.find-box[data-v-7ee324ac] {\n  border: 1px solid rgba(27,31,35,.15);\n  box-shadow: 0 3px 12px rgba(27,31,35,.15);\n  top: 63px;\n  width: 500px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n.notifications-box[data-v-7ee324ac] {\n  border: 1px solid rgba(27,31,35,.15);\n  box-shadow: 0 3px 12px rgba(27,31,35,.15);\n  top: 63px;\n  width: 500px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n.bg-modal-find[data-v-7ee324ac] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n",""])},qQxn:function(t,a,e){var s=e("Ddpy");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,n);s.locals&&(t.exports=s.locals)},z6qC:function(t,a,e){"use strict";var s=e("qQxn");e.n(s).a}}]);