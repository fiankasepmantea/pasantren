(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/PageTitle.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/PageTitle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _productions_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productions/PageTitle */ "./resources/js/components/productions/PageTitle.vue");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _productions_SalesOrder_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../productions/SalesOrder/EditForm */ "./resources/js/components/productions/SalesOrder/EditForm.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "SalesOrder",
  components: {
    PageTitle: _productions_PageTitle__WEBPACK_IMPORTED_MODULE_2__["default"],
    //jsPDFautotable,
    EditForm: _productions_SalesOrder_EditForm__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  created: function created() {
    this.loadData();
  },
  data: function data() {
    return {
      createModal: false,
      editModal: false,
      perPage: 20,
      filterModel: {
        begin_date: null,
        end_date: null,
        customer_name: null,
        sales_name: null
      },
      currentPage: 1,
      pageOptions: [10, 20, 50, 100],
      header: [{
        key: "tanggal_so",
        label: "Tanggal"
      }, {
        key: "no_so",
        label: "No. SO"
      }, {
        key: "customer_name.nama",
        label: "Pelanggan"
      }, {
        key: "sales_name.name",
        label: "Sales"
      }, {
        key: "actions",
        label: 'Aksi',
        stickyColumn: true,
        "class": "action-columns"
      }]
    };
  },
  provide: function provide() {
    return {
      validator: this.$validator
    };
  },
  computed: _objectSpread({
    rows: function rows() {
      if (this.salesorders && this.salesorders.data) {
        return this.salesorders.data.length;
      } else return 0;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('salesorder', {
    salesorders: function salesorders(state) {
      return state.salesorders;
    }
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('salesorder', ['getSalesorders', 'editSalesorder', 'updateSalesorder'])), {}, {
    loadData: function loadData() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;

                _this.$store.commit('loadingOn');

                _context.next = 4;
                return _this.getSalesorders(params);

              case 4:
                _this.$store.commit('loadingOff');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleEdit: function handleEdit(id) {
      this.editModal = true;
      this.editSalesorder(id);
      this.editedId = id;
    },
    handleUpdate: function handleUpdate(bvModalEvt) {
      var _this2 = this;

      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(function (result) {
        if (!result) {
          return;
        }

        _this2.updateSalesorder(_this2.editedId);

        _this2.editModal = false;

        _this2.loadData();
      });
    },
    handlePrint: function handlePrint(id) {
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__["jsPDF"]('landscape');
      doc.setFontSize(40);
      doc.text("Octonyan loves jsPDF", 35, 25);
      doc.output('dataurlnewwindow');
    },
    handleTableSearchBtn: function handleTableSearchBtn() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.$store.commit('loadingOn');

                _context2.next = 3;
                return _this3.loadData(_this3.filterModel);

              case 3:
                _this3.$store.commit('loadingOff');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api.js */ "./resources/js/api.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ["validator"],
  created: function created() {
    this.$validator = this.validator;
    this.getSalesName();
    this.getCustomerName();
    this.getCustomerAddress();
  },
  data: function data() {
    return {
      ppn: {
        ppnOptions: [{
          text: "Ya",
          value: "ya"
        }, {
          text: "Tidak",
          value: "tidak"
        }]
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("salesorder", {
    so: function so(state) {
      return state.so;
    },
    sales_name: function sales_name(state) {
      return state.sales_name;
    },
    customer_name: function customer_name(state) {
      return state.customer_name;
    },
    customer_address: function customer_address(state) {
      return state.customer_address;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("salesorder", ["CLEAR_FORM_EDIT"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("salesorder", ["getCustomerName", "getSalesName", "getCustomerAddress"])), {}, {
    getCustomer: function getCustomer(id) {
      this.getCustomerAddress(id);
    },
    validateState: function validateState(ref) {
      if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
        return !this.veeErrors.has(ref);
      }

      return null;
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.filter-components {\r\n  display: flex;\r\n  justify-content: flex-start;\n}\n.table-container {\r\n  padding: 10px 0px;\n}\n.button-container {\r\n  text-align: right;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesOrder.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/PageTitle.vue?vue&type=template&id=fe5fce8e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/PageTitle.vue?vue&type=template&id=fe5fce8e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
              _vm._v("PRODUCTIONS")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder.vue?vue&type=template&id=77df58a2&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder.vue?vue&type=template&id=77df58a2& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("page-title"),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "b-card",
            [
              _c(
                "b-row",
                [
                  _c("b-col", {
                    staticClass: "button-container",
                    attrs: { xl: "9", lg: "9", md: "9", sm: "12" }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "button-container",
                      attrs: { xl: "3", lg: "3", md: "3", sm: "12" }
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            size: "sm",
                            variant: "primary",
                            to: "/productions/sales-order/add-sales-order"
                          }
                        },
                        [_vm._v("+ Tambah Data")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c("br"),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { xl: "4", lg: "4", md: "4", sm: "12" } },
                    [
                      _c("b-form-datepicker", {
                        attrs: {
                          id: "awal",
                          placeholder: "Tanggal Awal",
                          size: "sm",
                          max: _vm.filterModel.end_date
                        },
                        model: {
                          value: _vm.filterModel.begin_date,
                          callback: function($$v) {
                            _vm.$set(_vm.filterModel, "begin_date", $$v)
                          },
                          expression: "filterModel.begin_date"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "4", lg: "4", md: "4", sm: "12" } },
                    [
                      _c("b-form-datepicker", {
                        attrs: {
                          id: "akhir",
                          placeholder: "Tanggal Akhir",
                          size: "sm"
                        },
                        model: {
                          value: _vm.filterModel.end_date,
                          callback: function($$v) {
                            _vm.$set(_vm.filterModel, "end_date", $$v)
                          },
                          expression: "filterModel.end_date"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "4", lg: "4", md: "4", sm: "12" } },
                    [
                      _c(
                        "b-input-group",
                        [
                          _c("b-form-input", {
                            attrs: {
                              placeholder: "Cari Pelanggan",
                              size: "sm"
                            },
                            model: {
                              value: _vm.filterModel.customer_name,
                              callback: function($$v) {
                                _vm.$set(_vm.filterModel, "customer_name", $$v)
                              },
                              expression: "filterModel.customer_name"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: { placeholder: "Cari Sales", size: "sm" },
                            model: {
                              value: _vm.filterModel.sales_name,
                              callback: function($$v) {
                                _vm.$set(_vm.filterModel, "sales_name", $$v)
                              },
                              expression: "filterModel.sales_name"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-input-group-prepend",
                            [
                              _c(
                                "b-button",
                                { attrs: { size: "sm" } },
                                [
                                  _c("b-icon", {
                                    attrs: { icon: "search" },
                                    on: { click: _vm.handleTableSearchBtn }
                                  })
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
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-container" },
                [
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "b-form",
                    { attrs: { inline: "" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            label: "Show :",
                            "label-size": "sm",
                            "label-for": "perPageSelect"
                          }
                        },
                        [
                          _c("b-form-select", {
                            staticClass: "ml-2",
                            attrs: {
                              id: "perPageSelect",
                              size: "sm",
                              options: _vm.pageOptions
                            },
                            model: {
                              value: _vm.perPage,
                              callback: function($$v) {
                                _vm.perPage = $$v
                              },
                              expression: "perPage"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("b-table", {
                attrs: {
                  items: _vm.salesorders.data,
                  fields: _vm.header,
                  "current-page": _vm.currentPage,
                  "per-page": _vm.perPage,
                  "sticky-header": "",
                  "no-border-collapse": "",
                  striped: "",
                  hover: "",
                  small: "",
                  responsive: "",
                  outlined: "",
                  "show-empty": ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "cell(actions)",
                    fn: function(row) {
                      return [
                        _c(
                          "b-button",
                          {
                            attrs: { variant: "primary", size: "sm" },
                            on: {
                              click: function($event) {
                                return _vm.handleEdit(row.item.id)
                              }
                            }
                          },
                          [_vm._v("\n              Edit\n            ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            attrs: { variant: "success", size: "sm" },
                            on: {
                              click: function($event) {
                                return _vm.handlePrint(row.item.id)
                              }
                            }
                          },
                          [_vm._v("\n              Print\n            ")]
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("b-pagination", {
                attrs: {
                  "total-rows": _vm.rows,
                  "per-page": _vm.perPage,
                  "first-text": "First",
                  "prev-text": "Prev",
                  "next-text": "Next",
                  "last-text": "Last",
                  size: "sm",
                  align: "right"
                },
                model: {
                  value: _vm.currentPage,
                  callback: function($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              attrs: {
                title: "Edit Sales Order",
                centered: "",
                "no-close-on-esc": "",
                "no-close-on-backdrop": ""
              },
              on: { ok: _vm.handleUpdate },
              model: {
                value: _vm.editModal,
                callback: function($$v) {
                  _vm.editModal = $$v
                },
                expression: "editModal"
              }
            },
            [_c("EditForm")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=template&id=7adcf08b&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=template&id=7adcf08b& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { lg: "6", sm: "12" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    "label-cols": "4",
                    label: "No. SO",
                    "label-for": "so",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-input", {
                    staticClass: "so-input",
                    attrs: { id: "so", readonly: "", size: "sm" },
                    model: {
                      value: _vm.so.no_so,
                      callback: function($$v) {
                        _vm.$set(_vm.so, "no_so", $$v)
                      },
                      expression: "so.no_so"
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
                    "label-cols": "4",
                    label: "Tanggal SO ",
                    "label-for": "po_date",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-datepicker", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "so-input",
                    attrs: {
                      id: "po_date",
                      size: "sm",
                      state: _vm.validateState("so_date"),
                      name: "so_date",
                      "data-vv-as": "Tanggal SO"
                    },
                    model: {
                      value: _vm.so.tanggal_so,
                      callback: function($$v) {
                        _vm.$set(_vm.so, "tanggal_so", $$v)
                      },
                      expression: "so.tanggal_so"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v(_vm._s(_vm.veeErrors.first("so_date")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    "label-cols": "4",
                    label: "Customer ",
                    "label-for": "customer",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-select", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "so-input",
                    attrs: {
                      id: "customer",
                      options: _vm.customer_name,
                      size: "sm",
                      state: _vm.validateState("customer-name"),
                      name: "customer-name",
                      "data-vv-as": "Nama Pelanggan"
                    },
                    on: {
                      change: function($event) {
                        return _vm.getCustomer(_vm.so.customer_id)
                      }
                    },
                    model: {
                      value: _vm.so.customer_id,
                      callback: function($$v) {
                        _vm.$set(_vm.so, "customer_id", $$v)
                      },
                      expression: "so.customer_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v(_vm._s(_vm.veeErrors.first("customer-name")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    "label-cols": "4",
                    label: "Alamat Customer",
                    "label-for": "address",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-textarea", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "so-input",
                    attrs: {
                      rows: "4",
                      "max-rows": "8",
                      id: "address",
                      readonly: "",
                      size: "sm",
                      state: _vm.validateState("address"),
                      name: "address",
                      "data-vv-as": "Alamat"
                    },
                    model: {
                      value: _vm.so.address,
                      callback: function($$v) {
                        _vm.$set(_vm.so, "address", $$v)
                      },
                      expression: "so.address"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v(_vm._s(_vm.veeErrors.first("address")))
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", sm: "12" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    "label-cols": "4",
                    label: "Sales ",
                    "label-for": "sales",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-select", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "so-input",
                    attrs: {
                      id: "sales",
                      options: _vm.sales_name,
                      size: "sm",
                      state: _vm.validateState("sales"),
                      name: "sales",
                      "data-vv-as": "Nama Sales"
                    },
                    model: {
                      value: _vm.so.sales_id,
                      callback: function($$v) {
                        _vm.$set(_vm.so, "sales_id", $$v)
                      },
                      expression: "so.sales_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v(_vm._s(_vm.veeErrors.first("sales")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    "label-cols": "4",
                    label: "Tanggal Deadline ",
                    "label-for": "deadline",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-datepicker", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "so-input",
                    attrs: {
                      id: "deadline",
                      size: "sm",
                      state: _vm.validateState("so_deadline"),
                      name: "so_deadline",
                      "data-vv-as": "Tanggal Deadline"
                    },
                    model: {
                      value: _vm.so.tanggal_deadline,
                      callback: function($$v) {
                        _vm.$set(_vm.so, "tanggal_deadline", $$v)
                      },
                      expression: "so.tanggal_deadline"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v(_vm._s(_vm.veeErrors.first("so_deadline")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    "label-cols": "4",
                    label: "Tanggal Kirim ",
                    "label-for": "kirim",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-datepicker", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    staticClass: "so-input",
                    attrs: {
                      id: "kirim",
                      size: "sm",
                      state: _vm.validateState("so-delivery-date"),
                      name: "so-delivery-date",
                      "data-vv-as": "Tanggal Pengiriman"
                    },
                    model: {
                      value: _vm.so.tanggal_kirim,
                      callback: function($$v) {
                        _vm.$set(_vm.so, "tanggal_kirim", $$v)
                      },
                      expression: "so.tanggal_kirim"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v(_vm._s(_vm.veeErrors.first("so-delivery-date")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "PPn / Non PPn",
                    "label-cols": "4",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-radio-group", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { required: true },
                        expression: "{ required: true }"
                      }
                    ],
                    attrs: {
                      size: "sm",
                      options: _vm.ppn.ppnOptions,
                      name: "ppn",
                      stacked: "",
                      state: _vm.validateState("ppn"),
                      "data-vv-as": "PPN"
                    },
                    model: {
                      value: _vm.so.ppn,
                      callback: function($$v) {
                        _vm.$set(_vm.so, "ppn", $$v)
                      },
                      expression: "so.ppn"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v(_vm._s(_vm.veeErrors.first("ppn")))
                  ])
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

/***/ "./resources/js/components/productions/PageTitle.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/productions/PageTitle.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle_vue_vue_type_template_id_fe5fce8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=fe5fce8e& */ "./resources/js/components/productions/PageTitle.vue?vue&type=template&id=fe5fce8e&");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js& */ "./resources/js/components/productions/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTitle_vue_vue_type_template_id_fe5fce8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageTitle_vue_vue_type_template_id_fe5fce8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/productions/PageTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/productions/PageTitle.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/productions/PageTitle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/productions/PageTitle.vue?vue&type=template&id=fe5fce8e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/productions/PageTitle.vue?vue&type=template&id=fe5fce8e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_fe5fce8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=template&id=fe5fce8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/PageTitle.vue?vue&type=template&id=fe5fce8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_fe5fce8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_fe5fce8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/productions/SalesOrder.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalesOrder_vue_vue_type_template_id_77df58a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesOrder.vue?vue&type=template&id=77df58a2& */ "./resources/js/components/productions/SalesOrder.vue?vue&type=template&id=77df58a2&");
/* harmony import */ var _SalesOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesOrder.vue?vue&type=script&lang=js& */ "./resources/js/components/productions/SalesOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SalesOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SalesOrder.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/productions/SalesOrder.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SalesOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesOrder_vue_vue_type_template_id_77df58a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalesOrder_vue_vue_type_template_id_77df58a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/productions/SalesOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/productions/SalesOrder.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/productions/SalesOrder.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesOrder.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/productions/SalesOrder.vue?vue&type=template&id=77df58a2&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder.vue?vue&type=template&id=77df58a2& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_template_id_77df58a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesOrder.vue?vue&type=template&id=77df58a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder.vue?vue&type=template&id=77df58a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_template_id_77df58a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOrder_vue_vue_type_template_id_77df58a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/productions/SalesOrder/EditForm.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder/EditForm.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditForm_vue_vue_type_template_id_7adcf08b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditForm.vue?vue&type=template&id=7adcf08b& */ "./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=template&id=7adcf08b&");
/* harmony import */ var _EditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditForm.vue?vue&type=script&lang=js& */ "./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditForm_vue_vue_type_template_id_7adcf08b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditForm_vue_vue_type_template_id_7adcf08b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/productions/SalesOrder/EditForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=template&id=7adcf08b&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=template&id=7adcf08b& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_template_id_7adcf08b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditForm.vue?vue&type=template&id=7adcf08b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/EditForm.vue?vue&type=template&id=7adcf08b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_template_id_7adcf08b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_template_id_7adcf08b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);