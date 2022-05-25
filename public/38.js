(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api.js */ "./resources/js/api.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.getSalesName();
    this.getFollowupName();
    this.getCategoryName();
    this.getModelName();
    this.getMaterialName();
    this.getColorName();
    this.getSizeName();
    this.getLabelName();
    this.getCustomerName();
    this.getCustomerAddress();
  },
  data: function data() {
    return {
      id: "",
      so_id: "",
      url: null,
      transactions: {
        no_so: "",
        tanggal_so: "",
        customer_id: "",
        address: "",
        sales_id: "",
        tanggal_deadline: "",
        tanggal_kirim: "",
        ppnOptions: [{
          text: "Ya",
          value: "ya"
        }, {
          text: "Tidak",
          value: "tidak"
        }],
        oms: [{
          no_om: "",
          followup_id: "",
          category_id: "",
          model_id: "",
          material_id: "",
          color_id: [{
            colorSelected: null
          }],
          size_id: [{
            sizeSelected: null
          }],
          qty: "",
          total_qty: "",
          label_id: "",
          harga_bordir: "",
          harga_saku: "",
          tanggal_deadline: "",
          bordir_standard: "",
          bordir_khusus: "",
          kelompok_harga_id: "",
          keterangan: "",
          photo: "",
          colorSelected: "",
          sizeSelected: ""
        }]
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("salesorder", {
    sales_name: function sales_name(state) {
      return state.sales_name;
    },
    customer_name: function customer_name(state) {
      return state.customer_name;
    },
    customer_address: function customer_address(state) {
      return state.customer_address;
    },
    followup_name: function followup_name(state) {
      return state.followup_name;
    },
    category_name: function category_name(state) {
      return state.category_name;
    },
    model_name: function model_name(state) {
      return state.model_name;
    },
    material_name: function material_name(state) {
      return state.material_name;
    },
    color_name: function color_name(state) {
      return state.color_name;
    },
    size_name: function size_name(state) {
      return state.size_name;
    },
    label_name: function label_name(state) {
      return state.label_name;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("salesorder", ["CLEAR_FORM_EDIT"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("salesorder", ["getFollowupName", "getCategoryName", "getModelName", "getMaterialName", "getColorName", "getSizeName", "getLabelName", "getCustomerName", "getSalesName", "getCustomerAddress", "createTransaction"])), {}, {
    clearForm: function clearForm() {
      this.transactions = {
        no_so: "",
        tanggal_so: "",
        customer_id: "",
        address: "",
        sales_id: "",
        tanggal_deadline: "",
        tanggal_kirim: "",
        ppnOptions: [{
          text: "Ya",
          value: "ya"
        }, {
          text: "Tidak",
          value: "tidak"
        }],
        oms: [{
          no_om: "",
          followup_id: "",
          category_id: "",
          model_id: "",
          material_id: "",
          color_id: [{
            colorSelected: null
          }],
          size_id: [{
            sizeSelected: null
          }],
          qty: "",
          total_qty: "",
          label_id: "",
          harga_bordir: "",
          harga_saku: "",
          tanggal_deadline: "",
          bordir_standard: "",
          bordir_khusus: "",
          kelompok_harga_id: "",
          keterangan: "",
          photo: "",
          colorSelected: "",
          sizeSelected: ""
        }]
      };
    },
    validateState: function validateState(ref) {
      if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
        return !this.veeErrors.has(ref);
      }

      return null;
    },
    getCustomer: function getCustomer(id) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (id) {
          _api_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/salesorder/customer_address", {
            params: {
              customer_id: id
            }
          }).then(function (response) {
            response.data.data.forEach(function (item) {
              _this.transactions.address = item.address;
            });
            resolve(response.data);
          });
        } else {
          _api_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/salesorder/customer_address").then(function (response) {
            response.data.data.forEach(function (item) {
              _this.transactions.address = item.address;
            });
            resolve(response.data);
          });
        }
      });
    },
    addOM: function addOM() {
      this.transactions.oms.push({
        no_so: "",
        color_id: [{
          colorSelected: 0
        }],
        size_id: [{
          sizeSelected: 0
        }]
      });
    },
    deleteOM: function deleteOM(index) {
      if (confirm("Anda yakin menghapus OM ?")) {
        this.transactions.oms.splice(index, 1);
      } else {
        return false;
      }
    },
    addColor: function addColor(id) {
      this.transactions.oms[id].color_id.push({
        colorSelected: ""
      });
    },
    deleteColor: function deleteColor(om_index, color_index) {
      this.transactions.oms[om_index].color_id.splice(color_index, 1);
    },
    addSize: function addSize(id) {
      this.transactions.oms[id].size_id.push({
        sizeSelected: "",
        sizeQuantity: ""
      });
    },
    deleteSize: function deleteSize(om_index, size_index) {
      this.transactions.oms[om_index].size_id.splice(size_index, 1);
      this.calculateQuantity(om_index);
    },
    addColorSize: function addColorSize(index) {
      this.transactions.oms[index].color_id.push({
        colorSelected: ""
      });
      this.transactions.oms[index].size_id.push({
        sizeSelected: ""
      });
    },
    calculateQuantity: function calculateQuantity(index) {
      var data = this.transactions.oms[index];

      if (data.size_id != null) {
        var total_qty = 0;
        data.size_id.forEach(function (size) {
          if (size.qty && (typeof size.qty != 'undefined' || size.qty != null)) {
            total_qty = parseInt(total_qty) + parseInt(size.qty);
          }
        });
        this.transactions.oms[index].total_qty = parseInt(total_qty);
      }
    },
    uploadImage: function uploadImage(event, index) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var form;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.transactions.oms[index].photo = event.target.files[0];
                form = new FormData();
                form.append('photo', event.target.files[0]);
                _context.next = 5;
                return _this2.getFile(form, index);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getFile: function getFile(payload, index) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/upload", payload).then(function (response) {
                  _this3.transactions.oms[index].photo = response.data.data.path;
                  _this3.url = _this3.transactions.oms[index].photo;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    saveSO: function saveSO() {
      var _this4 = this;

      var redirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var form = new FormData();
      form.append('no_so', this.transactions.no_so);
      form.append('tanggal_so', this.transactions.tanggal_so);
      form.append('customer_id', this.transactions.customer_id);
      form.append('address', this.transactions.address);
      form.append('sales_id', this.transactions.sales_id);
      form.append('tanggal_deadline', this.transactions.tanggal_deadline);
      form.append('tanggal_kirim', this.transactions.tanggal_kirim);
      form.append('ppn', this.transactions.ppn);

      if (this.transactions.oms.length > 0) {
        var data_om = [];
        this.transactions.oms.forEach(function (om, index) {
          data_om.push(om);
          form.append('oms', JSON.stringify(data_om));
        });
      }

      this.$validator.validateAll().then(function (result) {
        if (!result) {
          return;
        } else {
          _this4.createTransaction(form).then(function (res) {
            _this4.so_id = res.data.id;

            _this4.clearForm();

            _this4.$toasted.global.success_toast({
              message: 'Data Sales Order berhasil ditambahkan..'
            });

            if (redirect) {
              setTimeout(function () {
                return _this4.$router.push({
                  name: 'SalesOrder'
                });
              }, 300);
            }
          })["catch"](function (err) {
            _this4.$toasted.global.failed_toast({
              message: 'Data Sales Order gagal untuk ditambahkan..'
            });
          });
        }
      });
    },
    submit: function submit() {
      var _this5 = this;

      this.$store.commit('loadingOn');
      setTimeout(function () {
        _this5.saveSO();

        _this5.$store.commit('loadingOff');
      }, 1000);
    },
    submitExit: function submitExit() {
      this.saveSO(true);
    },
    moveList: function moveList() {
      this.$router.push({
        name: 'SalesOrder'
      });
    },
    destroyed: function destroyed() {
      this.CLEAR_FORM_EDIT();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.main-container[data-v-fec76354] {\r\n  padding: 0px;\n}\n.tambah-card[data-v-fec76354] {\r\n  margin-bottom: 5px !important;\n}\n.om-button[data-v-fec76354] {\r\n  display: flex;\r\n  justify-content: flex-end;\n}\n.tambah-header[data-v-fec76354] {\r\n  font-weight: 600;\n}\n.tambah-body[data-v-fec76354] {\r\n  padding: 10px 10px !important;\n}\n.om-container[data-v-fec76354] {\r\n  overflow-y: visible;\n}\n.warna-size[data-v-fec76354] {\r\n  border: 2px solid red;\r\n  margin: 5px 0px;\n}\n.save-button[data-v-fec76354] {\r\n  float: right;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=template&id=fec76354&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=template&id=fec76354&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "main-container" },
    [
      _c(
        "b-card",
        {
          staticClass: "tambah-card",
          attrs: {
            header: "Tambah Sales Order",
            "header-bg-variant": "transparent",
            "header-class": "tambah-header",
            "body-class": "tambah-body"
          }
        },
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
                        "label-cols": "3",
                        label: "No. SO",
                        "label-for": "so",
                        "label-size": "sm"
                      }
                    },
                    [
                      _c("b-form-input", {
                        staticClass: "so-input",
                        attrs: {
                          id: "so",
                          placeholder: "AUTO GENERATE",
                          readonly: "",
                          size: "sm"
                        },
                        model: {
                          value: _vm.transactions.no_so,
                          callback: function($$v) {
                            _vm.$set(_vm.transactions, "no_so", $$v)
                          },
                          expression: "transactions.no_so"
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
                        "label-cols": "3",
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
                          name: "tanggal-so",
                          state: _vm.validateState("tanggal-so"),
                          "data-vv-as": "Tanggal SO"
                        },
                        model: {
                          value: _vm.transactions.tanggal_so,
                          callback: function($$v) {
                            _vm.$set(_vm.transactions, "tanggal_so", $$v)
                          },
                          expression: "transactions.tanggal_so"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v(_vm._s(_vm.veeErrors.first("tanggal-so")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-cols": "3",
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
                          name: "customer-name",
                          state: _vm.validateState("customer-name"),
                          "data-vv-as": "Nama Pelanggan"
                        },
                        on: {
                          change: function($event) {
                            return _vm.getCustomer(_vm.transactions.customer_id)
                          }
                        },
                        model: {
                          value: _vm.transactions.customer_id,
                          callback: function($$v) {
                            _vm.$set(_vm.transactions, "customer_id", $$v)
                          },
                          expression: "transactions.customer_id"
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
                        "label-cols": "3",
                        label: "Alamat Customer",
                        "label-for": "address",
                        "label-size": "sm"
                      }
                    },
                    [
                      _c("b-form-textarea", {
                        staticClass: "so-input",
                        attrs: {
                          rows: "3",
                          "max-rows": "8",
                          id: "address",
                          readonly: "",
                          size: "sm"
                        },
                        model: {
                          value: _vm.transactions.address,
                          callback: function($$v) {
                            _vm.$set(_vm.transactions, "address", $$v)
                          },
                          expression: "transactions.address"
                        }
                      })
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
                        "label-cols": "3",
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
                            expression: "{required: true}"
                          }
                        ],
                        key: "so-sales-name",
                        staticClass: "so-input",
                        attrs: {
                          id: "sales",
                          options: _vm.sales_name,
                          size: "sm",
                          name: "sales-name",
                          state: _vm.validateState("sales-name"),
                          "data-vv-as": "Sales"
                        },
                        model: {
                          value: _vm.transactions.sales_id,
                          callback: function($$v) {
                            _vm.$set(_vm.transactions, "sales_id", $$v)
                          },
                          expression: "transactions.sales_id"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v(_vm._s(_vm.veeErrors.first("sales-name")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-cols": "3",
                        label: "Tanggal Deadline ",
                        "label-for": "deadline",
                        "label-size": "sm"
                      }
                    },
                    [
                      _vm.transactions.tanggal_so
                        ? _c("b-form-datepicker", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: { required: true },
                                expression: "{required: true}"
                              }
                            ],
                            staticClass: "so-input",
                            attrs: {
                              id: "deadline",
                              size: "sm",
                              name: "so-deadline",
                              state: _vm.validateState("so-deadline"),
                              "data-vv-as": "Tanggal Deadline"
                            },
                            model: {
                              value: _vm.transactions.tanggal_deadline,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.transactions,
                                  "tanggal_deadline",
                                  $$v
                                )
                              },
                              expression: "transactions.tanggal_deadline"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v(_vm._s(_vm.veeErrors.first("so-deadline")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-cols": "3",
                        label: "Tanggal Kirim ",
                        "label-for": "kirim",
                        "label-size": "sm"
                      }
                    },
                    [
                      _vm.transactions.tanggal_deadline
                        ? _c("b-form-datepicker", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: { required: true },
                                expression: "{required: true}"
                              }
                            ],
                            staticClass: "so-input",
                            attrs: {
                              id: "kirim",
                              size: "sm",
                              name: "so-kirim",
                              state: _vm.validateState("so-kirim"),
                              "data-vv-as": "Tanggal Kirim"
                            },
                            model: {
                              value: _vm.transactions.tanggal_kirim,
                              callback: function($$v) {
                                _vm.$set(_vm.transactions, "tanggal_kirim", $$v)
                              },
                              expression: "transactions.tanggal_kirim"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v(_vm._s(_vm.veeErrors.first("so-kirim")))
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
                        "label-cols": "3",
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
                            expression: "{required: true}"
                          }
                        ],
                        key: "ppn-selected",
                        attrs: {
                          size: "sm",
                          options: _vm.transactions.ppnOptions,
                          name: "so-ppn",
                          stacked: "",
                          state: _vm.validateState("so-ppn"),
                          "data-vv-as": "PPN"
                        },
                        model: {
                          value: _vm.transactions.ppn,
                          callback: function($$v) {
                            _vm.$set(_vm.transactions, "ppn", $$v)
                          },
                          expression: "transactions.ppn"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-form-invalid-feedback", [
                        _vm._v(_vm._s(_vm.veeErrors.first("so-ppn")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "om-button" },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "scroll-to",
                              rawName: "v-scroll-to",
                              value: "#button-anchor",
                              expression: "'#button-anchor'"
                            }
                          ],
                          attrs: { variant: "primary" },
                          on: { click: _vm.addOM }
                        },
                        [_vm._v(" + Tambah OM ")]
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
      _c("div", { staticClass: "om-container" }, [
        _c(
          "div",
          { staticClass: "accordion", attrs: { role: "tablist" } },
          _vm._l(_vm.transactions.oms, function(om, index) {
            return _c(
              "div",
              { key: om.id },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "mb-1",
                    staticStyle: { border: "none !important" },
                    attrs: { "no-body": "", "bg-variant": "transparent" }
                  },
                  [
                    _c(
                      "b-card-header",
                      {
                        staticClass: "p-0 d-flex",
                        attrs: { "header-tag": "header", role: "tab" }
                      },
                      [
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle",
                                value: "omaccordion" + index,
                                expression: "'omaccordion' + index"
                              }
                            ],
                            attrs: { size: "sm", block: "", variant: "primary" }
                          },
                          [_vm._v(_vm._s("OM" + index))]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            attrs: { size: "sm", variant: "danger" },
                            on: {
                              click: function($event) {
                                return _vm.deleteOM(index)
                              }
                            }
                          },
                          [_c("b-icon", { attrs: { icon: "x" } })],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      {
                        attrs: {
                          id: "omaccordion" + index,
                          visible: "",
                          accordion: "omaccordion" + index,
                          role: "tabpanel"
                        }
                      },
                      [
                        _c(
                          "b-row",
                          [
                            _c(
                              "b-col",
                              {
                                staticClass: "pt-2",
                                attrs: { lg: "6", sm: "12" }
                              },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "2",
                                      label: "No. OM",
                                      "label-for": "om_no",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _c("b-form-input", {
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "on_no",
                                        placeholder: "AUTO GENERATE",
                                        readonly: "",
                                        size: "sm"
                                      },
                                      model: {
                                        value: om.no_om,
                                        callback: function($$v) {
                                          _vm.$set(om, "no_om", $$v)
                                        },
                                        expression: "om.no_om"
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
                                      "label-cols": "2",
                                      label: "Follow Up",
                                      "label-for": "follow_up",
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
                                          expression: "{required: true}"
                                        }
                                      ],
                                      key: "om-followup",
                                      attrs: {
                                        id: "follow_up",
                                        options: _vm.followup_name,
                                        size: "sm",
                                        name: "followup-name",
                                        state: _vm.validateState(
                                          "followup-name"
                                        ),
                                        "data-vv-as": "Follow Up"
                                      },
                                      model: {
                                        value: om.followup_id,
                                        callback: function($$v) {
                                          _vm.$set(om, "followup_id", $$v)
                                        },
                                        expression: "om.followup_id"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("followup-name")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "2",
                                      label: "Kategori",
                                      "label-for": "category",
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
                                          expression: "{required: true}"
                                        }
                                      ],
                                      key: "om-category",
                                      attrs: {
                                        id: "category",
                                        options: _vm.category_name,
                                        size: "sm",
                                        name: "category-name",
                                        state: _vm.validateState(
                                          "category-name"
                                        ),
                                        "data-vv-as": "Kategori"
                                      },
                                      model: {
                                        value: om.category_id,
                                        callback: function($$v) {
                                          _vm.$set(om, "category_id", $$v)
                                        },
                                        expression: "om.category_id"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("category-name")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "2",
                                      label: "Model",
                                      "label-for": "motif",
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
                                          expression: "{required: true}"
                                        }
                                      ],
                                      key: "om-model",
                                      attrs: {
                                        id: "motif",
                                        options: _vm.model_name,
                                        size: "sm",
                                        name: "model-name",
                                        state: _vm.validateState("model-name"),
                                        "data-vv-as": "Motif"
                                      },
                                      model: {
                                        value: om.model_id,
                                        callback: function($$v) {
                                          _vm.$set(om, "model_id", $$v)
                                        },
                                        expression: "om.model_id"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("model-name")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "2",
                                      label: "Bahan",
                                      "label-for": "bahan",
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
                                          expression: "{required: true}"
                                        }
                                      ],
                                      key: "om-material",
                                      attrs: {
                                        id: "bahan",
                                        options: _vm.material_name,
                                        size: "sm",
                                        name: "material-name",
                                        state: _vm.validateState(
                                          "material-name"
                                        ),
                                        "data-vv-as": "Bahan"
                                      },
                                      model: {
                                        value: om.material_id,
                                        callback: function($$v) {
                                          _vm.$set(om, "material_id", $$v)
                                        },
                                        expression: "om.material_id"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("material-name")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-center mb-2"
                                  },
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          size: "sm",
                                          variant: "primary"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.addColorSize(index)
                                          }
                                        }
                                      },
                                      [_vm._v("Tambah Warna & Size")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "warna-size" },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        staticClass: "py-1",
                                        attrs: {
                                          "label-cols": "2",
                                          label: "Warna",
                                          "label-for": "warna",
                                          "label-size": "sm"
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between"
                                          },
                                          [
                                            _c("b-form-select", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: { required: true },
                                                  expression: "{required: true}"
                                                }
                                              ],
                                              key: "om-warna-key",
                                              staticStyle: {
                                                "max-width": "410px"
                                              },
                                              attrs: {
                                                id: "warna" + index,
                                                size: "sm",
                                                options: _vm.color_name,
                                                name: "om-warna",
                                                state: _vm.validateState(
                                                  "om-warna"
                                                ),
                                                "data-vv-as": "Warna"
                                              },
                                              model: {
                                                value:
                                                  om.color_id[0].colorSelected,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    om.color_id[0],
                                                    "colorSelected",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "om.color_id[0].colorSelected"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "b-button",
                                              {
                                                attrs: {
                                                  size: "sm",
                                                  variant: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.addColor(index)
                                                  }
                                                }
                                              },
                                              [_vm._v("Tambah Warna")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("b-form-invalid-feedback", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.veeErrors.first("om-warna")
                                            )
                                          )
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm._l(om.color_id, function(color, idx) {
                                      return _c(
                                        "div",
                                        { key: color.id },
                                        [
                                          idx != 0
                                            ? _c(
                                                "b-form-group",
                                                {
                                                  attrs: {
                                                    "label-cols": "2",
                                                    label: "Warna",
                                                    "label-for": "warna",
                                                    "label-size": "sm"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-between"
                                                    },
                                                    [
                                                      _c("b-form-select", {
                                                        attrs: {
                                                          id: "warna-" + idx,
                                                          size: "sm",
                                                          options:
                                                            _vm.color_name
                                                        },
                                                        model: {
                                                          value:
                                                            color.colorSelected,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              color,
                                                              "colorSelected",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "color.colorSelected"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-button",
                                                        {
                                                          attrs: {
                                                            variant: "danger",
                                                            size: "sm"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.deleteColor(
                                                                index,
                                                                idx
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("b-icon", {
                                                            attrs: {
                                                              icon: "trash"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          "label-cols": "2",
                                          label: "Size",
                                          "label-for": "size",
                                          "label-size": "sm"
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between"
                                          },
                                          [
                                            _c("b-form-select", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: { required: true },
                                                  expression: "{required: true}"
                                                }
                                              ],
                                              key: "om-size-key",
                                              staticStyle: {
                                                "max-width": "300px"
                                              },
                                              attrs: {
                                                id: "size-" + _vm.id,
                                                size: "sm",
                                                options: _vm.size_name,
                                                name: "om-size",
                                                state: _vm.validateState(
                                                  "om-size"
                                                ),
                                                "data-vv-as": "Size"
                                              },
                                              model: {
                                                value:
                                                  om.size_id[0].sizeSelected,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    om.size_id[0],
                                                    "sizeSelected",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "om.size_id[0].sizeSelected"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: {
                                                    required: true,
                                                    min_value: 1
                                                  },
                                                  expression:
                                                    "{required: true, min_value: 1}"
                                                }
                                              ],
                                              key: "om-size-quantity-key",
                                              staticStyle: {
                                                "max-width": "120px"
                                              },
                                              attrs: {
                                                id: "first-qty",
                                                size: "sm",
                                                type: "number",
                                                placeholder: "Quantity",
                                                name: "om-size-quantity",
                                                state: _vm.validateState(
                                                  "om-size-quantity"
                                                ),
                                                "data-vv-as": "Size Quantity"
                                              },
                                              on: {
                                                keyup: function($event) {
                                                  return _vm.calculateQuantity(
                                                    index
                                                  )
                                                },
                                                keypress: function($event) {
                                                  return _vm.calculateQuantity(
                                                    index
                                                  )
                                                },
                                                blur: function($event) {
                                                  return _vm.calculateQuantity(
                                                    index
                                                  )
                                                },
                                                focus: function($event) {
                                                  return _vm.calculateQuantity(
                                                    index
                                                  )
                                                },
                                                change: function($event) {
                                                  return _vm.calculateQuantity(
                                                    index
                                                  )
                                                }
                                              },
                                              model: {
                                                value: om.size_id[0].qty,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    om.size_id[0],
                                                    "qty",
                                                    $$v
                                                  )
                                                },
                                                expression: "om.size_id[0].qty"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "b-button",
                                              {
                                                staticClass: "mb-1",
                                                attrs: {
                                                  size: "sm",
                                                  variant: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.addSize(index)
                                                  }
                                                }
                                              },
                                              [_vm._v("Tambah Size")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(om.size_id, function(size, sidx) {
                                      return _c(
                                        "div",
                                        { key: size.id },
                                        [
                                          sidx != 0
                                            ? _c(
                                                "b-form-group",
                                                {
                                                  attrs: {
                                                    "label-cols": "2",
                                                    label: "Size",
                                                    "label-for": "size",
                                                    "label-size": "sm"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-between"
                                                    },
                                                    [
                                                      _c("b-form-select", {
                                                        staticStyle: {
                                                          width: "350px"
                                                        },
                                                        attrs: {
                                                          id: "size" + sidx,
                                                          size: "sm",
                                                          options: _vm.size_name
                                                        },
                                                        model: {
                                                          value:
                                                            size.sizeSelected,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              size,
                                                              "sizeSelected",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "size.sizeSelected"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("b-form-input", {
                                                        staticStyle: {
                                                          width: "150px"
                                                        },
                                                        attrs: {
                                                          size: "sm",
                                                          placeholder:
                                                            "Quantity",
                                                          type: "number"
                                                        },
                                                        on: {
                                                          keyup: function(
                                                            $event
                                                          ) {
                                                            return _vm.calculateQuantity(
                                                              index
                                                            )
                                                          },
                                                          keypress: function(
                                                            $event
                                                          ) {
                                                            return _vm.calculateQuantity(
                                                              index
                                                            )
                                                          },
                                                          blur: function(
                                                            $event
                                                          ) {
                                                            return _vm.calculateQuantity(
                                                              index
                                                            )
                                                          },
                                                          focus: function(
                                                            $event
                                                          ) {
                                                            return _vm.calculateQuantity(
                                                              index
                                                            )
                                                          },
                                                          change: function(
                                                            $event
                                                          ) {
                                                            return _vm.calculateQuantity(
                                                              index
                                                            )
                                                          }
                                                        },
                                                        model: {
                                                          value: size.qty,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              size,
                                                              "qty",
                                                              $$v
                                                            )
                                                          },
                                                          expression: "size.qty"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-button",
                                                        {
                                                          attrs: {
                                                            variant: "danger",
                                                            size: "sm"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.deleteSize(
                                                                index,
                                                                sidx
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("b-icon", {
                                                            attrs: {
                                                              icon: "trash"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "2",
                                      label: "Total Quantity",
                                      "label-for": "total_qty",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _c("b-form-input", {
                                      key: "om-total-qty-key",
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "total_qty",
                                        type: "number",
                                        readonly: "",
                                        size: "sm",
                                        name: "om-total-qty"
                                      },
                                      model: {
                                        value: om.total_qty,
                                        callback: function($$v) {
                                          _vm.$set(om, "total_qty", $$v)
                                        },
                                        expression: "om.total_qty"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("om-total-qty")
                                        )
                                      )
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
                              {
                                staticClass: "pt-2",
                                attrs: { lg: "6", sm: "12" }
                              },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "3",
                                      label: "Label",
                                      "label-for": "label",
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
                                          expression: "{required: true}"
                                        }
                                      ],
                                      key: "om-label-key",
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "label",
                                        options: _vm.label_name,
                                        size: "sm",
                                        name: "om-label",
                                        state: _vm.validateState("om-label"),
                                        "data-vv-as": "Label"
                                      },
                                      model: {
                                        value: om.label_id,
                                        callback: function($$v) {
                                          _vm.$set(om, "label_id", $$v)
                                        },
                                        expression: "om.label_id"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("om-label")
                                        ) + "}"
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "3",
                                      label: "Harga Bordir",
                                      "label-for": "bordr",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _c("b-form-input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: {
                                            required: true,
                                            min_value: 1
                                          },
                                          expression:
                                            "{required: true, min_value: 1}"
                                        }
                                      ],
                                      key: "om-harga-bordir-key",
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "bordir",
                                        type: "number",
                                        size: "sm",
                                        name: "om-harga-bordir",
                                        state: _vm.validateState(
                                          "om-harga-bordir"
                                        ),
                                        "data-vv-as": "Harga Bordir"
                                      },
                                      model: {
                                        value: om.harga_bordir,
                                        callback: function($$v) {
                                          _vm.$set(om, "harga_bordir", $$v)
                                        },
                                        expression: "om.harga_bordir"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("om-harga-bordir")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "3",
                                      label: "Harga saku",
                                      "label-for": "saku",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _c("b-form-input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: {
                                            required: true,
                                            min_value: 1
                                          },
                                          expression:
                                            "{required: true, min_value: 1}"
                                        }
                                      ],
                                      key: "om-harga-saku-key",
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "saku",
                                        type: "number",
                                        size: "sm",
                                        name: "om-harga-saku",
                                        state: _vm.validateState(
                                          "om-harga-saku"
                                        ),
                                        "data-vv-as": "Harga Saku"
                                      },
                                      model: {
                                        value: om.harga_saku,
                                        callback: function($$v) {
                                          _vm.$set(om, "harga_saku", $$v)
                                        },
                                        expression: "om.harga_saku"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("om-harga-saku")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "3",
                                      label: "Tanggal Deadline ",
                                      "label-for": "deadline",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _vm.transactions.tanggal_so
                                      ? _c("b-form-datepicker", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: { required: true },
                                              expression: "{required: true}"
                                            }
                                          ],
                                          key: "om-harga-deadline-key",
                                          staticClass: "so-input",
                                          attrs: {
                                            id: "om_deadline",
                                            size: "sm",
                                            name: "om-tanggal-deadline",
                                            state: _vm.validateState(
                                              "om-tanggal-deadline"
                                            ),
                                            "data-vv-as": "Tanggal Deadline"
                                          },
                                          model: {
                                            value: om.tanggal_deadline,
                                            callback: function($$v) {
                                              _vm.$set(
                                                om,
                                                "tanggal_deadline",
                                                $$v
                                              )
                                            },
                                            expression: "om.tanggal_deadline"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first(
                                            "om-tanggal-deadline"
                                          )
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "3",
                                      label: "Bordir Standard",
                                      "label-for": "standard",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _c("b-form-input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: {
                                            required: true,
                                            min_value: 1
                                          },
                                          expression:
                                            "{ required: true, min_value: 1 }"
                                        }
                                      ],
                                      key: "bordir-standard-key",
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "standard",
                                        size: "sm",
                                        type: "number",
                                        name: "bordir-standard",
                                        state: _vm.validateState(
                                          "bordir-standard"
                                        ),
                                        "data-vv-as": "Harga Bordir Standard"
                                      },
                                      model: {
                                        value: om.bordir_standard,
                                        callback: function($$v) {
                                          _vm.$set(om, "bordir_standard", $$v)
                                        },
                                        expression: "om.bordir_standard"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("bordir-standard")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "3",
                                      label: "Bordir Khusus",
                                      "label-for": "khusus",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _c("b-form-input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: {
                                            required: true,
                                            min_value: 1
                                          },
                                          expression:
                                            "{ required: true, min_value: 1 }"
                                        }
                                      ],
                                      key: "bordir-khusus-key",
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "khusus",
                                        size: "sm",
                                        type: "number",
                                        name: "bordir-khusus",
                                        state: _vm.validateState(
                                          "bordir-khusus"
                                        ),
                                        "data-vv-as": "Harga Bordir Khusus"
                                      },
                                      model: {
                                        value: om.bordir_khusus,
                                        callback: function($$v) {
                                          _vm.$set(om, "bordir_khusus", $$v)
                                        },
                                        expression: "om.bordir_khusus"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("bordir-khusus")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "3",
                                      label: "Kelompok Harga",
                                      "label-for": "kelompok-harga",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _c("b-form-input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: {
                                            required: true,
                                            min_value: 1
                                          },
                                          expression:
                                            "{ required: true, min_value: 1 }"
                                        }
                                      ],
                                      key: "kelompok-harga-key",
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "kelompok-harga",
                                        type: "number",
                                        size: "sm",
                                        name: "kelompok-harga",
                                        state: _vm.validateState(
                                          "kelompok-harga"
                                        ),
                                        "data-vv-as": "Kelompok Harga"
                                      },
                                      model: {
                                        value: om.kelompok_harga_id,
                                        callback: function($$v) {
                                          _vm.$set(om, "kelompok_harga_id", $$v)
                                        },
                                        expression: "om.kelompok_harga_id"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("kelompok-harga")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "3",
                                      label: "Keterangan",
                                      "label-for": "keterangan",
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
                                      key: "om-keterangan-key",
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "keterangan",
                                        size: "sm",
                                        name: "om-keterangan",
                                        state: _vm.validateState(
                                          "om-keterangan"
                                        ),
                                        "data-vv-as": "Keterangan"
                                      },
                                      model: {
                                        value: om.keterangan,
                                        callback: function($$v) {
                                          _vm.$set(om, "keterangan", $$v)
                                        },
                                        expression: "om.keterangan"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.veeErrors.first("om-keterangan")
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-cols": "3",
                                      label: "Upload Gambar",
                                      "label-for": "upload",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _c("b-form-file", {
                                      key: "om-upload-image-key",
                                      staticClass: "so-input",
                                      attrs: {
                                        id: "upload" + index,
                                        size: "sm",
                                        accept: "image/*",
                                        name: "om-upload-image"
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.uploadImage($event, index)
                                        }
                                      },
                                      model: {
                                        value: om.photo,
                                        callback: function($$v) {
                                          _vm.$set(om, "photo", $$v)
                                        },
                                        expression: "om.photo"
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
                                      "label-cols": "3",
                                      label: "",
                                      "label-for": "upload-result",
                                      "label-size": "sm"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      [
                                        _vm.url
                                          ? _c("b-img", {
                                              attrs: {
                                                src: om.photo,
                                                width: "200",
                                                height: "230"
                                              }
                                            })
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ]
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
              ],
              1
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "save-button", attrs: { id: "button-anchor" } },
        [
          _c(
            "b-button-group",
            { attrs: { size: "sm" } },
            [
              _c(
                "b-button",
                {
                  attrs: { variant: "danger", to: "/productions/sales-order/" }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { variant: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.submit()
                    }
                  }
                },
                [_vm._v("Save")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { variant: "success" },
                  on: {
                    click: function($event) {
                      return _vm.submitExit()
                    }
                  }
                },
                [_vm._v("Save & Exit")]
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

/***/ "./resources/js/components/productions/SalesOrder/AddSalesOrder.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder/AddSalesOrder.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddSalesOrder_vue_vue_type_template_id_fec76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSalesOrder.vue?vue&type=template&id=fec76354&scoped=true& */ "./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=template&id=fec76354&scoped=true&");
/* harmony import */ var _AddSalesOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddSalesOrder.vue?vue&type=script&lang=js& */ "./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddSalesOrder_vue_vue_type_style_index_0_id_fec76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css& */ "./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddSalesOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddSalesOrder_vue_vue_type_template_id_fec76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddSalesOrder_vue_vue_type_template_id_fec76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fec76354",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/productions/SalesOrder/AddSalesOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSalesOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_style_index_0_id_fec76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=style&index=0&id=fec76354&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_style_index_0_id_fec76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_style_index_0_id_fec76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_style_index_0_id_fec76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_style_index_0_id_fec76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=template&id=fec76354&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=template&id=fec76354&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_template_id_fec76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSalesOrder.vue?vue&type=template&id=fec76354&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productions/SalesOrder/AddSalesOrder.vue?vue&type=template&id=fec76354&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_template_id_fec76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSalesOrder_vue_vue_type_template_id_fec76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);