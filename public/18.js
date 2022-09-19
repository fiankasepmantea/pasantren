(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laporan/PageTitle.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laporan/PageTitle.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'page-title'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laporan/Setoran.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laporan/Setoran.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle */ "./resources/js/components/laporan/PageTitle.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Report",
  components: {
    pagetitle: _PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      tgl_from: new Date(new Date().getFullYear(), 0, 2).toISOString().substr(0, 10),
      tgl_to: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    handleReport: function handleReport() {
      var _this = this;

      var fd = new FormData();
      fd.append("tgl_from", this.tgl_from);
      fd.append("tgl_to", this.tgl_to);
      var url = '/api/laporan/setoran';
      return fetch(url, {
        method: 'POST',
        body: fd,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(function (response) {
        if (response.ok) return response.blob();else throw new Error('Gagal mengunduh laporan.');
      }).then(function (blob) {
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.setAttribute('download', 'laporan_setoran.xlsx');
        a.click();
      })["catch"](function (err) {
        _this.$toasted.global.failed_toast({
          message: err
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laporan/PageTitle.vue?vue&type=template&id=24d16fec&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laporan/PageTitle.vue?vue&type=template&id=24d16fec& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "CRow",
        [
          _c("CCol", { staticClass: "col-12" }, [
            _c("span", { staticClass: "text-uppercase page-subtitle" }, [
              _vm._v("Laporan")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "page-title" }, [
              _vm._v(_vm._s(_vm.$route.meta.title))
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laporan/Setoran.vue?vue&type=template&id=56284973&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laporan/Setoran.vue?vue&type=template&id=56284973& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("pagetitle"),
      _vm._v(" "),
      _c(
        "CCol",
        { attrs: { md: "6" } },
        [
          _c(
            "CCard",
            [
              _c(
                "CCardBody",
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Tanggal",
                        "label-cols": "3",
                        "label-for": "tgl_from"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "tgl_from",
                          type: "date",
                          name: "tgl_from"
                        },
                        model: {
                          value: _vm.tgl_from,
                          callback: function($$v) {
                            _vm.tgl_from = $$v
                          },
                          expression: "tgl_from"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "s/d",
                        "label-cols": "3",
                        "label-for": "tgl_to"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: { id: "tgl_to", type: "date", name: "tgl_to" },
                        model: {
                          value: _vm.tgl_to,
                          callback: function($$v) {
                            _vm.tgl_to = $$v
                          },
                          expression: "tgl_to"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.handleReport()
                        }
                      }
                    },
                    [
                      _c("font-awesome-icon", {
                        attrs: { icon: "file-excel" }
                      }),
                      _vm._v(" Unduh Laporan")
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/laporan/PageTitle.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/laporan/PageTitle.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle_vue_vue_type_template_id_24d16fec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=24d16fec& */ "./resources/js/components/laporan/PageTitle.vue?vue&type=template&id=24d16fec&");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js& */ "./resources/js/components/laporan/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTitle_vue_vue_type_template_id_24d16fec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageTitle_vue_vue_type_template_id_24d16fec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/laporan/PageTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/laporan/PageTitle.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/laporan/PageTitle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laporan/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/laporan/PageTitle.vue?vue&type=template&id=24d16fec&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/laporan/PageTitle.vue?vue&type=template&id=24d16fec& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_24d16fec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=template&id=24d16fec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laporan/PageTitle.vue?vue&type=template&id=24d16fec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_24d16fec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_24d16fec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/laporan/Setoran.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/laporan/Setoran.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setoran_vue_vue_type_template_id_56284973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setoran.vue?vue&type=template&id=56284973& */ "./resources/js/components/laporan/Setoran.vue?vue&type=template&id=56284973&");
/* harmony import */ var _Setoran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setoran.vue?vue&type=script&lang=js& */ "./resources/js/components/laporan/Setoran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Setoran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Setoran_vue_vue_type_template_id_56284973___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Setoran_vue_vue_type_template_id_56284973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/laporan/Setoran.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/laporan/Setoran.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/laporan/Setoran.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setoran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Setoran.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laporan/Setoran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setoran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/laporan/Setoran.vue?vue&type=template&id=56284973&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/laporan/Setoran.vue?vue&type=template&id=56284973& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setoran_vue_vue_type_template_id_56284973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Setoran.vue?vue&type=template&id=56284973& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laporan/Setoran.vue?vue&type=template&id=56284973&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setoran_vue_vue_type_template_id_56284973___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setoran_vue_vue_type_template_id_56284973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);