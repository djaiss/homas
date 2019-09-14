(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ \"./resources/js/Shared/Layout.vue\");\n/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/TextInput */ \"./resources/js/Shared/TextInput.vue\");\n/* harmony import */ var _Shared_Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Errors */ \"./resources/js/Shared/Errors.vue\");\n/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/LoadingButton */ \"./resources/js/Shared/LoadingButton.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    TextInput: _Shared_TextInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Errors: _Shared_Errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  props: {\n    company: {\n      type: Object,\n      \"default\": null\n    },\n    user: {\n      type: Object,\n      \"default\": null\n    },\n    notifications: {\n      type: Array,\n      \"default\": null\n    }\n  },\n  data: function data() {\n    return {\n      form: {\n        name: null,\n        errors: []\n      },\n      loadingState: '',\n      errorTemplate: Error\n    };\n  },\n  methods: {\n    submit: function submit() {\n      var _this = this;\n\n      this.loadingState = 'loading';\n      this.$inertia.post(this.route('company.store'), this.form).then(function () {\n        return _this.loadingState = null;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL1BhZ2VzL0hvbWUvQ3JlYXRlQ29tcGFueS52dWU/YmJmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLGtFQURBO0FBRUEsd0VBRkE7QUFHQSxrRUFIQTtBQUlBO0FBSkEsR0FEQTtBQVFBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGlCQURBO0FBRUE7QUFGQTtBQVRBLEdBUkE7QUF1QkEsTUF2QkEsa0JBdUJBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxPQURBO0FBS0Esc0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FoQ0E7QUFrQ0E7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0E7QUFFQSxpRUFDQSxJQURBLENBQ0E7QUFBQSxlQUNBLHlCQURBO0FBQUEsT0FEQTtBQUlBO0FBUkE7QUFsQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL1BhZ2VzL0hvbWUvQ3JlYXRlQ29tcGFueS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bGF5b3V0IHRpdGxlPVwiSG9tZVwiIDpub3RpZmljYXRpb25zPVwibm90aWZpY2F0aW9uc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwaDIgcGgwLW5zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2YgbXQ0IG13NyBjZW50ZXIgYnIzIG1iMyBiZy13aGl0ZSBib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZuIGZsLW5zIHctNTAtbnMgcGEzXCI+XG4gICAgICAgICAgQ3JlYXRlIGEgY29tcGFueVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZuIGZsLW5zIHctNTAtbnMgcGEzXCI+XG4gICAgICAgICAgPCEtLSBGb3JtIEVycm9ycyAtLT5cbiAgICAgICAgICA8ZXJyb3JzIDplcnJvcnM9XCJmb3JtLmVycm9yc1wiIC8+XG5cbiAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDx0ZXh0LWlucHV0IHYtbW9kZWw9XCJmb3JtLm5hbWVcIiA6bmFtZT1cIiduYW1lJ1wiIDplcnJvcnM9XCIkcGFnZS5lcnJvcnMubmFtZVwiIDpsYWJlbD1cIiR0KCdjb21wYW55Lm5ld19uYW1lJylcIiAvPlxuXG4gICAgICAgICAgICA8IS0tIEFjdGlvbnMgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LW5zIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bG9hZGluZy1idXR0b24gOmNsYXNzZXM9XCInYnRuIGFkZCB3LWF1dG8tbnMgdy0xMDAgbWIyIHB2MiBwaDMnXCIgOnN0YXRlPVwibG9hZGluZ1N0YXRlXCIgOnRleHQ9XCIncmVnaXN0ZXInXCIgZGF0YS1jeT1cImNyZWF0ZS1jb21wYW55LXN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvU2hhcmVkL0xheW91dCc7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ0AvU2hhcmVkL1RleHRJbnB1dCc7XG5pbXBvcnQgRXJyb3JzIGZyb20gJ0AvU2hhcmVkL0Vycm9ycyc7XG5pbXBvcnQgTG9hZGluZ0J1dHRvbiBmcm9tICdAL1NoYXJlZC9Mb2FkaW5nQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgTGF5b3V0LFxuICAgIFRleHRJbnB1dCxcbiAgICBFcnJvcnMsXG4gICAgTG9hZGluZ0J1dHRvbixcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGNvbXBhbnk6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICB1c2VyOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgbm90aWZpY2F0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybToge1xuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgfSxcbiAgICAgIGxvYWRpbmdTdGF0ZTogJycsXG4gICAgICBlcnJvclRlbXBsYXRlOiBFcnJvcixcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBzdWJtaXQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmdTdGF0ZSA9ICdsb2FkaW5nJztcblxuICAgICAgdGhpcy4kaW5lcnRpYS5wb3N0KHRoaXMucm91dGUoJ2NvbXBhbnkuc3RvcmUnKSwgdGhpcy5mb3JtKVxuICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgIHRoaXMubG9hZGluZ1N0YXRlID0gbnVsbFxuICAgICAgICApO1xuICAgIH0sXG4gIH1cbn07XG48L3NjcmlwdD5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"layout\",\n    { attrs: { title: \"Home\", notifications: _vm.notifications } },\n    [\n      _c(\"div\", { staticClass: \"ph2 ph0-ns\" }, [\n        _c(\"div\", { staticClass: \"cf mt4 mw7 center br3 mb3 bg-white box\" }, [\n          _c(\"div\", { staticClass: \"fn fl-ns w-50-ns pa3\" }, [\n            _vm._v(\"\\n        Create a company\\n      \")\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"fn fl-ns w-50-ns pa3\" },\n            [\n              _c(\"errors\", { attrs: { errors: _vm.form.errors } }),\n              _vm._v(\" \"),\n              _c(\n                \"form\",\n                {\n                  on: {\n                    submit: function($event) {\n                      $event.preventDefault()\n                      return _vm.submit($event)\n                    }\n                  }\n                },\n                [\n                  _c(\"text-input\", {\n                    attrs: {\n                      name: \"name\",\n                      errors: _vm.$page.errors.name,\n                      label: _vm.$t(\"company.new_name\")\n                    },\n                    model: {\n                      value: _vm.form.name,\n                      callback: function($$v) {\n                        _vm.$set(_vm.form, \"name\", $$v)\n                      },\n                      expression: \"form.name\"\n                    }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"div\", {}, [\n                    _c(\"div\", { staticClass: \"flex-ns justify-between\" }, [\n                      _c(\n                        \"div\",\n                        [\n                          _c(\"loading-button\", {\n                            attrs: {\n                              classes: \"btn add w-auto-ns w-100 mb2 pv2 ph3\",\n                              state: _vm.loadingState,\n                              text: \"register\",\n                              \"data-cy\": \"create-company-submit\"\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ])\n                  ])\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ])\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvSG9tZS9DcmVhdGVDb21wYW55LnZ1ZT81OWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxrREFBa0QsRUFBRTtBQUNsRTtBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0MsbUJBQW1CLHdEQUF3RDtBQUMzRSxxQkFBcUIsc0NBQXNDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNDQUFzQztBQUNuRDtBQUNBLDRCQUE0QixTQUFTLDBCQUEwQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsOEJBQThCO0FBQzlCLCtCQUErQix5Q0FBeUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9QYWdlcy9Ib21lL0NyZWF0ZUNvbXBhbnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZTQwYjdhJi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJsYXlvdXRcIixcbiAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIkhvbWVcIiwgbm90aWZpY2F0aW9uczogX3ZtLm5vdGlmaWNhdGlvbnMgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGgyIHBoMC1uc1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZiBtdDQgbXc3IGNlbnRlciBicjMgbWIzIGJnLXdoaXRlIGJveFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZuIGZsLW5zIHctNTAtbnMgcGEzXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBDcmVhdGUgYSBjb21wYW55XFxuICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZuIGZsLW5zIHctNTAtbnMgcGEzXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJlcnJvcnNcIiwgeyBhdHRyczogeyBlcnJvcnM6IF92bS5mb3JtLmVycm9ycyB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRleHQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogX3ZtLiRwYWdlLmVycm9ycy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJjb21wYW55Lm5ld19uYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHt9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1ucyBqdXN0aWZ5LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxvYWRpbmctYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogXCJidG4gYWRkIHctYXV0by1ucyB3LTEwMCBtYjIgcHYyIHBoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IF92bS5sb2FkaW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcInJlZ2lzdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtY3lcIjogXCJjcmVhdGUtY29tcGFueS1zdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&\n");

/***/ }),

/***/ "./resources/js/Pages/Home/CreateCompany.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Home/CreateCompany.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCompany.vue?vue&type=template&id=2ce40b7a& */ \"./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&\");\n/* harmony import */ var _CreateCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCompany.vue?vue&type=script&lang=js& */ \"./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _CreateCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/Pages/Home/CreateCompany.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvSG9tZS9DcmVhdGVDb21wYW55LnZ1ZT9jNDBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL1BhZ2VzL0hvbWUvQ3JlYXRlQ29tcGFueS52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NyZWF0ZUNvbXBhbnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZTQwYjdhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NyZWF0ZUNvbXBhbnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DcmVhdGVDb21wYW55LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3JlZ2lzLmZyZXlkL2h0ZG9jcy9ob21hcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyY2U0MGI3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyY2U0MGI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyY2U0MGI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ3JlYXRlQ29tcGFueS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlNDBiN2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmNlNDBiN2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9QYWdlcy9Ib21lL0NyZWF0ZUNvbXBhbnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Pages/Home/CreateCompany.vue\n");

/***/ }),

/***/ "./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCompany.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvSG9tZS9DcmVhdGVDb21wYW55LnZ1ZT83YTZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBbU0sQ0FBZ0IseVBBQUcsRUFBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9Ib21lL0NyZWF0ZUNvbXBhbnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlQ29tcGFueS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlQ29tcGFueS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCompany.vue?vue&type=template&id=2ce40b7a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvSG9tZS9DcmVhdGVDb21wYW55LnZ1ZT9mMjM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9Ib21lL0NyZWF0ZUNvbXBhbnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZTQwYjdhJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmVhdGVDb21wYW55LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yY2U0MGI3YSZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&\n");

/***/ })

}]);