(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/+50":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".news-information img[data-v-61ea87a4] {\n  top: 7px;\n  width: 23px;\n}",""])},DN8A:function(t,e,a){"use strict";a.r(e);var s={components:{Layout:a("+SZM").a},props:{notifications:{type:Array,default:null},team:{type:Object,default:null},news:{type:Array,default:null},paginator:{type:Object,default:null}},data:function(){return{idToDelete:0}},mounted:function(){localStorage.success&&(this.$snotify.success(localStorage.success,{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),localStorage.clear())},methods:{destroy:function(t){var e=this;axios.delete("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/news/"+t).then((function(a){e.$snotify.success(e.$t("team.team_news_destroy_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),e.idToDelete=0,t=e.news.findIndex((function(e){return e.id===t})),e.news.splice(t,1)})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},n=(a("DVul"),a("KHd+")),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",{attrs:{title:"Home",notifications:t.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[a("ul",{staticClass:"list ph0 tc-l tl"},[a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),a("li",{staticClass:"di"},[t._v("\n          ...\n        ")]),t._v(" "),a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/teams/"+t.team.id}},[t._v(t._s(t.team.name))])],1),t._v(" "),a("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_team_show_team_news"))+"\n        ")])])]),t._v(" "),a("div",{staticClass:"mw7 center br3 mb5 bg-white box relative z-1"},[a("div",{staticClass:"pa3 center"},[a("h2",{staticClass:"tc normal mb4"},[t._v("\n          "+t._s(t.$t("team.team_news_index",{name:t.team.name}))+"\n        ")]),t._v(" "),t._l(t.news,(function(e){return a("div",{key:e.id,staticClass:"cf news",attrs:{"data-cy":"news-list"}},[a("h3",{staticClass:"mb1"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),a("div",{staticClass:"lh-copy mt2 br3 parsed-content",domProps:{innerHTML:t._s(e.parsed_content)}}),t._v(" "),a("div",{staticClass:"f6 relative news-information silver mb3"},[a("img",{staticClass:"br-100 relative mr1",attrs:{src:e.author.avatar}}),t._v("\n            "+t._s(t.$t("team.team_news_written_by_at",{name:e.author.name,created_at:e.localized_created_at}))+"\n\n            "),t._v(" "),a("inertia-link",{staticClass:"ml1 mr2",attrs:{href:"/"+t.$page.auth.company.id+"/teams/"+t.team.id+"/news/"+e.id+"/edit","data-cy":"edit-news-button-"+e.id}},[t._v(t._s(t.$t("app.edit")))]),t._v(" "),0==t.idToDelete?a("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"delete-news-button-"+e.id},on:{click:function(a){a.preventDefault(),t.idToDelete=e.id}}},[t._v(t._s(t.$t("app.delete")))]):t._e(),t._v(" "),t.idToDelete==e.id?a("span",[t._v("\n              "+t._s(t.$t("app.sure"))+"\n              "),a("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"delete-news-button-confirm-"+e.id},on:{click:function(a){return a.preventDefault(),t.destroy(e.id)}}},[t._v("\n                "+t._s(t.$t("app.yes"))+"\n              ")]),t._v(" "),a("a",{staticClass:"pointer",attrs:{"data-cy":"delete-news-button-cancel-"+e.id},on:{click:function(e){e.preventDefault(),t.idToDelete=0}}},[t._v("\n                "+t._s(t.$t("app.no"))+"\n              ")])]):t._e()],1),t._v(" "),a("div",{staticClass:"tc mb3 green"},[t._v("\n            ~\n          ")])])})),t._v(" "),a("div",{staticClass:"center cf"},[a("inertia-link",{directives:[{name:"show",rawName:"v-show",value:t.paginator.previousPageUrl,expression:"paginator.previousPageUrl"}],staticClass:"fl dib",attrs:{href:t.paginator.previousPageUrl,title:"Previous"}},[t._v("\n            ← "+t._s(t.$t("app.previous"))+"\n          ")]),t._v(" "),a("inertia-link",{directives:[{name:"show",rawName:"v-show",value:t.paginator.nextPageUrl,expression:"paginator.nextPageUrl"}],staticClass:"fr dib",attrs:{href:t.paginator.nextPageUrl,title:"Next"}},[t._v("\n            "+t._s(t.$t("app.next"))+" →\n          ")])],1)],2)])])])}),[],!1,null,"61ea87a4",null);e.default=i.exports},DVul:function(t,e,a){"use strict";var s=a("T6Q+");a.n(s).a},"T6Q+":function(t,e,a){var s=a("/+50");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)}}]);
//# sourceMappingURL=41.js.map?id=e82377ffdbb0e52c35e7