(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['validator'],
  name: "MuhaffizhForm",
  created: function created() {
    this.getUnit();
    this.getUser();
    this.$validator = this.validator;
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("muhaffizh", {
    muhaffizh: function muhaffizh(state) {
      return state.muhaffizh;
    },
    muhaffizh_unit: function muhaffizh_unit(state) {
      return state.muhaffizh_unit;
    },
    muhaffizh_user: function muhaffizh_user(state) {
      return state.muhaffizh_user;
    }
  })),
  watch: {
    "return": function _return() {
      this.getUnit();
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("muhaffizh", ["CLEAR_FORM"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("muhaffizh", ["getUnit", "getUser"])), {}, {
    validateState: function validateState(ref) {
      if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
        return !this.veeErrors.has(ref);
      }

      return null;
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  },
  data: function data() {
    return {
      selected_pendidikan: null,
      options_pendidikan: [{
        value: 'D3',
        text: 'D3'
      }, {
        value: 'S1',
        text: 'S1'
      }, {
        value: 'S2',
        text: 'S2'
      }, {
        value: 'S3',
        text: 'S3'
      }],
      selected_status: null,
      options_status: [{
        value: 'Aktif',
        text: 'Aktif'
      }, {
        value: 'Tidak Aktif',
        text: 'Tidak Aktif'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Muhaffizhs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/Muhaffizhs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle */ "./resources/js/components/master/PageTitle.vue");
/* harmony import */ var _Forms_MuhaffizhForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forms/MuhaffizhForm */ "./resources/js/components/master/Forms/MuhaffizhForm.vue");
/* harmony import */ var _parts_PropertyView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parts/PropertyView */ "./resources/js/components/parts/PropertyView.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Muhaffizhs",
  components: {
    pagetitle: _PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"],
    Form: _Forms_MuhaffizhForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    DataView: _parts_PropertyView__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    var sessdata = JSON.parse(localStorage.getItem('sessdata'));
    if (["Admin", "Muhaffizh"].indexOf(sessdata.level) > -1) this.showAction = true;else this.showAction = false;
    this.loadData();
  },
  data: function data() {
    return {
      showAction: true,
      createModal: false,
      viewModal: false,
      editModal: false,
      editedId: null,
      perPage: 20,
      currentPage: 1,
      currentMuhaffizh: {},
      pageOptions: [10, 20, 50, 100],
      filterModel: {
        muhaffizh_name: null
      },
      file1: undefined,
      uploadModal: false,
      header: [{
        key: "nama",
        label: "Nama"
      }, {
        key: 'no_hp',
        label: 'No HP'
      }, {
        key: 'mulai_bertugas',
        label: 'Mulai Bertugas'
      }, {
        key: 'status',
        label: 'Status'
      }, {
        key: 'angkatan_kelas',
        label: 'Kelas/Angkatan'
      }, {
        key: 'list_unit.nama',
        label: 'Unit'
      }, {
        key: 'actions',
        label: "Aksi",
        stickyColumn: true,
        "class": 'action-columns'
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
      if (this.muhaffizhs && this.muhaffizhs.data) {
        return this.muhaffizhs.data.length;
      } else {
        return 0;
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])('muhaffizh', {
    muhaffizhs: function muhaffizhs(state) {
      return state.muhaffizhs;
    }
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('muhaffizh', ['getMuhaffizhs', 'removeMuhaffizh', 'editMuhaffizh', 'updateMuhaffizh', 'submitMuhaffizh'])), {}, {
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

                _this.$store.commit('loadingOn'); // setTimeout(() => {


                _context.next = 4;
                return _this.getMuhaffizhs(params);

              case 4:
                _this.$store.commit('loadingOff'); // }, 1000);


              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    searchMuhaffizh: function searchMuhaffizh() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$store.commit('loadingOn');

                _context2.next = 3;
                return _this2.loadData(_this2.filterModel);

              case 3:
                _this2.$store.commit('loadingOff');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteMuhaffizh: function deleteMuhaffizh(id) {
      var _this3 = this;

      this.$swal({
        title: 'Apakah anda yakin ?',
        text: 'Tindakan ini akan menghapus data secara permanen',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          _this3.removeMuhaffizh(id);
        }
      });
    },
    handleView: function handleView(muhaffizh) {
      this.viewModal = true;

      for (var _i = 0, _Object$entries = Object.entries(muhaffizh); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            k = _Object$entries$_i[0],
            v = _Object$entries$_i[1];

        if (typeof v === 'string' || typeof v === 'number') {
          if (k.toLowerCase().indexOf('_id') >= 0 || k.toLowerCase().indexOf('id_') >= 0) continue;
          this.currentMuhaffizh[k] = v;
        }
      }

      ;
      this.currentMuhaffizh.unit = muhaffizh.list_unit.nama;
    },
    handleEdit: function handleEdit(id) {
      this.editModal = true;
      this.editMuhaffizh(id);
      this.editedId = id;
    },
    handleUpdate: function handleUpdate(bvModalEvt) {
      var _this4 = this;

      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(function (result) {
        if (!result) {
          return;
        }

        _this4.updateMuhaffizh(_this4.editedId);

        _this4.$toasted.global.success_toast({
          message: 'Data Muhaffizh berhasil diubah..'
        });

        _this4.editModal = false;

        _this4.loadData();
      })["catch"](function (err) {
        _this4.$toasted.global.failed_toast({
          message: 'Data Muhaffizh gagal untuk diubah..'
        });
      });
    },
    handleSubmit: function handleSubmit(bvModalEvt) {
      var _this5 = this;

      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(function (result) {
        if (!result) {
          return;
        }

        _this5.submitMuhaffizh();

        _this5.$toasted.global.success_toast({
          message: 'Data Muhaffizh berhasil ditambahkan..'
        });

        _this5.createModal = false;

        _this5.loadData();
      })["catch"](function (err) {
        _this5.$toasted.global.failed_toast({
          message: 'Data Muhaffizh gagal untuk ditambahkan..'
        });
      });
    },
    handleUpload: function handleUpload() {
      var _this6 = this;

      var formData = new FormData();
      formData.append("file_muhaffizh", this.file1);
      return fetch('/api/muhaffizh/uploadmuhaffizh', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        if (!result.success) {
          _this6.$toasted.global.failed_toast(result);
        } else {
          _this6.$toasted.global.success_toast(result);

          _this6.loadData();
        }
      })["catch"](function (err) {
        _this6.$toasted.global.failed_toast({
          message: 'Error upload file'
        });

        console.log(err);
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/PageTitle.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/PageTitle.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/PropertyView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/PropertyView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PropertyView",
  props: {
    items: {
      type: Object,
      "default": function _default(rawProps) {
        return {
          info: "Data is empty"
        };
      }
    }
  },
  computed: {
    getItems: function getItems() {
      var items = [];

      for (var key in this.items) {
        if (key == 'id' || key == 'foto') continue;
        var val = this.items[key];

        if (typeof val === 'string' && val.substr(0, 10).split('-').length == 3) {
          // Anggep aja tanggal..
          var tgl = new Date(val);
          if (tgl) val = tgl.toLocaleDateString();
        }

        items.push({
          id: key.replace(/[_-]/g, '').trim(),
          label: key.replace(/[_-]/g, ' ').trim().split(' ').map(function (w) {
            return w[0].toUpperCase() + w.substring(1).toLowerCase();
          }).join(' '),
          value: val
        });
      }

      return items;
    },
    getFoto: function getFoto() {
      if (this.items.hasOwnProperty('foto')) {
        if (this.items.foto != '') {
          return this.items.foto;
        }
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=template&id=f1d76590&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=template&id=f1d76590& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
            }
          }
        },
        [
          _c(
            "b-form-group",
            {
              attrs: { label: "Unit", "label-cols": "3", "label-for": "unit" }
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
                attrs: {
                  id: "unit",
                  options: _vm.muhaffizh_unit,
                  placeholder: "Pilih Unit",
                  name: "unit",
                  state: _vm.validateState("unit"),
                  "data-vv-as": "Unit"
                },
                model: {
                  value: _vm.muhaffizh.unit_id,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "unit_id", $$v)
                  },
                  expression: "muhaffizh.unit_id"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("unit")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Nomor Induk",
                "label-cols": "3",
                "label-for": "nomorinduk"
              }
            },
            [
              _c("b-form-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true },
                    expression: "{ required: true }"
                  }
                ],
                attrs: {
                  id: "nomorinduk",
                  placeholder: "Masukan Nomor Induk",
                  name: "nomorinduk",
                  state: _vm.validateState("nomorinduk"),
                  "data-vv-as": "NomorInduk"
                },
                model: {
                  value: _vm.muhaffizh.nomor_induk,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "nomor_induk", $$v)
                  },
                  expression: "muhaffizh.nomor_induk"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("nomorinduk")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Akun Login Muhaffizh",
                "label-cols": "3",
                "label-for": "akunloginmuhaffizh"
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
                attrs: {
                  id: "akun-login-muhaffizh",
                  options: _vm.muhaffizh_user,
                  placeholder: "Pilih Akun Login",
                  name: "user_id",
                  state: _vm.validateState("user_id"),
                  "data-vv-as": "AkunLogin"
                },
                model: {
                  value: _vm.muhaffizh.user_id,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "user_id", $$v)
                  },
                  expression: "muhaffizh.user_id"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("user_id")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Nama Muhaffizh",
                "label-cols": "3",
                "label-for": "nama"
              }
            },
            [
              _c("b-form-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true },
                    expression: "{ required: true }"
                  }
                ],
                attrs: {
                  id: "nama",
                  placeholder: "Masukan Nama",
                  name: "nama",
                  state: _vm.validateState("nama"),
                  "data-vv-as": "Nama"
                },
                model: {
                  value: _vm.muhaffizh.nama,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "nama", $$v)
                  },
                  expression: "muhaffizh.nama"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("nama")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Alamat",
                "label-cols": "3",
                "label-for": "alamat"
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
                attrs: {
                  id: "alamat",
                  placeholder: "Masukan Alamat",
                  name: "alamat",
                  state: _vm.validateState("alamat"),
                  "data-vv-as": "Alamat"
                },
                model: {
                  value: _vm.muhaffizh.alamat,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "alamat", $$v)
                  },
                  expression: "muhaffizh.alamat"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("alamat")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Tempat Lahir",
                "label-cols": "3",
                "label-for": "tempatlahir"
              }
            },
            [
              _c("b-form-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true },
                    expression: "{ required: true }"
                  }
                ],
                attrs: {
                  id: "tempatlahir",
                  placeholder: "Masukan Tempat Lahir",
                  name: "tempatlahir",
                  state: _vm.validateState("tempatlahir"),
                  "data-vv-as": "TempatLahir"
                },
                model: {
                  value: _vm.muhaffizh.tempat_lahir,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "tempat_lahir", $$v)
                  },
                  expression: "muhaffizh.tempat_lahir"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("tempatlahir")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Tanggal Lahir",
                "label-cols": "3",
                "label-for": "tanggallahir"
              }
            },
            [
              _c("b-form-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true },
                    expression: "{ required: true }"
                  }
                ],
                attrs: {
                  id: "tanggallahir",
                  placeholder: "Masukan Tanggal Lahir",
                  type: "date",
                  name: "tanggallahir",
                  state: _vm.validateState("tanggallahir"),
                  "data-vv-as": "TanggalLahir"
                },
                model: {
                  value: _vm.muhaffizh.tanggal_lahir,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "tanggal_lahir", $$v)
                  },
                  expression: "muhaffizh.tanggal_lahir"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("tanggallahir")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: { label: "No HP", "label-cols": "3", "label-for": "nohp" }
            },
            [
              _c("b-form-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true },
                    expression: "{ required: true }"
                  }
                ],
                attrs: {
                  id: "no-hp",
                  placeholder: "Masukan No HP",
                  name: "nohp",
                  state: _vm.validateState("nohp"),
                  "data-vv-as": "NoHP"
                },
                model: {
                  value: _vm.muhaffizh.no_hp,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "no_hp", $$v)
                  },
                  expression: "muhaffizh.no_hp"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("nohp")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Mulai Bertugas",
                "label-cols": "3",
                "label-for": "mulaibertugas"
              }
            },
            [
              _c("b-form-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true },
                    expression: "{ required: true }"
                  }
                ],
                attrs: {
                  id: "mulaibertugas",
                  placeholder: "Masukan Tanggal Bertugas",
                  type: "date",
                  name: "mulaibertugas",
                  state: _vm.validateState("mulaibertugas"),
                  "data-vv-as": "MulaiBertugas"
                },
                model: {
                  value: _vm.muhaffizh.mulai_bertugas,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "mulai_bertugas", $$v)
                  },
                  expression: "muhaffizh.mulai_bertugas"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("mulaibertugas")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Pendidikan Terakhir",
                "label-cols": "3",
                "label-for": "pendidikanterakhir"
              }
            },
            [
              _c(
                "b-form-select",
                {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: { required: true },
                      expression: "{ required: true }"
                    }
                  ],
                  attrs: {
                    options: _vm.options_pendidikan,
                    name: "pendidikanterakhir",
                    state: _vm.validateState("pendidikanterakhir"),
                    "data-vv-as": "PendidikanTerakhir"
                  },
                  model: {
                    value: _vm.muhaffizh.pendidikan_terakhir,
                    callback: function($$v) {
                      _vm.$set(_vm.muhaffizh, "pendidikan_terakhir", $$v)
                    },
                    expression: "muhaffizh.pendidikan_terakhir"
                  }
                },
                [_vm._v(_vm._s(_vm.selected_pendidikan) + "\n          ")]
              ),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("pendidikanterakhir")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Status",
                "label-cols": "3",
                "label-for": "status"
              }
            },
            [
              _c(
                "b-form-select",
                {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: { required: true },
                      expression: "{ required: true }"
                    }
                  ],
                  attrs: {
                    options: _vm.options_status,
                    name: "status",
                    state: _vm.validateState("status"),
                    "data-vv-as": "Status"
                  },
                  model: {
                    value: _vm.muhaffizh.status,
                    callback: function($$v) {
                      _vm.$set(_vm.muhaffizh, "status", $$v)
                    },
                    expression: "muhaffizh.status"
                  }
                },
                [_vm._v(_vm._s(_vm.selected_status) + "\n        ")]
              ),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("status")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Kelas/Angkatan",
                "label-cols": "3",
                "label-for": "kelasangkatan"
              }
            },
            [
              _c("b-form-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true },
                    expression: "{ required: true }"
                  }
                ],
                attrs: {
                  id: "kelasangkatan",
                  placeholder: "Masukan Angkatan/Kelas",
                  name: "kelasangkatan",
                  state: _vm.validateState("kelasangkatan"),
                  "data-vv-as": "KelasAngkatan"
                },
                model: {
                  value: _vm.muhaffizh.angkatan_kelas,
                  callback: function($$v) {
                    _vm.$set(_vm.muhaffizh, "angkatan_kelas", $$v)
                  },
                  expression: "muhaffizh.angkatan_kelas"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("kelasangkatan")))
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Muhaffizhs.vue?vue&type=template&id=40f68ccf&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/Muhaffizhs.vue?vue&type=template&id=40f68ccf& ***!
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
      _c("pagetitle"),
      _vm._v(" "),
      _c(
        "CCardBody",
        { staticStyle: { "padding-top": "0px" } },
        [
          _c(
            "div",
            { staticClass: "d-flex justify-content-end" },
            [
              _vm.showAction
                ? _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "success" },
                      on: {
                        click: function($event) {
                          _vm.createModal = true
                        }
                      }
                    },
                    [_vm._v("+ Tambah Muhaffizh")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "ml-2",
                  attrs: { size: "sm", variant: "info" },
                  on: {
                    click: function($event) {
                      _vm.uploadModal = true
                    }
                  }
                },
                [
                  _c("font-awesome-icon", { attrs: { icon: "upload" } }),
                  _vm._v(" Upload Muhaffizh")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { xl: "4", lg: "4", md: "4", sm: "12" } },
                [
                  _c(
                    "b-input-group",
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: "Cari Muhaffizh", size: "sm" },
                        on: {
                          keyup: function($event) {
                            return _vm.searchMuhaffizh(_vm.filterModel)
                          },
                          change: function($event) {
                            return _vm.searchMuhaffizh(_vm.filterModel)
                          }
                        },
                        model: {
                          value: _vm.filterModel.muhaffizh_name,
                          callback: function($$v) {
                            _vm.$set(_vm.filterModel, "muhaffizh_name", $$v)
                          },
                          expression: "filterModel.muhaffizh_name"
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
          _c("br"),
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
          ),
          _vm._v(" "),
          _c("b-table", {
            attrs: {
              items: _vm.muhaffizhs.data,
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
                key: "cell(nama)",
                fn: function(data) {
                  return [
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.handleView(data.item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(data.value))]
                    )
                  ]
                }
              },
              {
                key: "cell(actions)",
                fn: function(row) {
                  return [
                    _vm.showAction
                      ? _c(
                          "b-button",
                          {
                            attrs: { variant: "success", size: "sm" },
                            on: {
                              click: function($event) {
                                return _vm.handleEdit(row.item.id)
                              }
                            }
                          },
                          [_vm._v("\n              Edit\n            ")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.showAction
                      ? _c(
                          "b-button",
                          {
                            attrs: { variant: "danger", size: "sm" },
                            on: {
                              click: function($event) {
                                return _vm.deleteMuhaffizh(row.item.id)
                              }
                            }
                          },
                          [_vm._v("\n              Delete\n            ")]
                        )
                      : _vm._e()
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
          }),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              attrs: {
                title: "Tambah Data Muhaffizh",
                "no-close-on-backdrop": "",
                "no-close-on-esc": "",
                centered: ""
              },
              on: { ok: _vm.handleSubmit },
              model: {
                value: _vm.createModal,
                callback: function($$v) {
                  _vm.createModal = $$v
                },
                expression: "createModal"
              }
            },
            [_c("Form")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              attrs: {
                title: "Ubah Data Muhaffizh",
                "no-close-on-backdrop": "",
                "no-close-on-esc": "",
                centered: ""
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
            [_c("Form")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              attrs: {
                title: "Lihat Data Muhaffizh",
                "body-class": "form-view",
                centered: ""
              },
              model: {
                value: _vm.viewModal,
                callback: function($$v) {
                  _vm.viewModal = $$v
                },
                expression: "viewModal"
              }
            },
            [_c("DataView", { attrs: { items: _vm.currentMuhaffizh } })],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              attrs: {
                title: "Unggah Data Muhaffizh",
                "body-class": "form-view",
                centered: ""
              },
              on: { ok: _vm.handleUpload },
              model: {
                value: _vm.uploadModal,
                callback: function($$v) {
                  _vm.uploadModal = $$v
                },
                expression: "uploadModal"
              }
            },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                    }
                  }
                },
                [
                  _c(
                    "div",
                    [
                      _c(
                        "CLink",
                        { attrs: { href: "/docs/template_muhaffizh.xlsx" } },
                        [_vm._v("Download Template")]
                      ),
                      _vm._v(" "),
                      _c("b-form-file", {
                        attrs: {
                          state: Boolean(_vm.file1),
                          accept: ".xls, .xlsx, .csv",
                          placeholder: "Pilih file/drag-n-drop...",
                          "drop-placeholder": "Drop file kesini..."
                        },
                        model: {
                          value: _vm.file1,
                          callback: function($$v) {
                            _vm.file1 = $$v
                          },
                          expression: "file1"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-3" }, [
                        _vm._v(
                          "File: " + _vm._s(_vm.file1 ? _vm.file1.name : "")
                        )
                      ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/PageTitle.vue?vue&type=template&id=68b36472&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/PageTitle.vue?vue&type=template&id=68b36472& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
              _vm._v("Master Data")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/PropertyView.vue?vue&type=template&id=b4817bd8&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/PropertyView.vue?vue&type=template&id=b4817bd8& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _vm.getFoto
        ? [
            _c(
              "CRow",
              {
                staticStyle: { "margin-bottom": "8px" },
                attrs: { alignHorizontal: "center" }
              },
              [
                _c("b-avatar", {
                  attrs: { src: _vm.getFoto, size: "10rem", rounded: "lg" }
                })
              ],
              1
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.getItems, function(item) {
        return _c(
          "div",
          [
            _c(
              "b-form-group",
              {
                attrs: {
                  label: item.label,
                  "label-cols": "3",
                  labelFor: item.id
                }
              },
              [
                _c("b-form-input", {
                  attrs: { id: item.id, value: item.value, plaintext: true }
                })
              ],
              1
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/master/Forms/MuhaffizhForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/master/Forms/MuhaffizhForm.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MuhaffizhForm_vue_vue_type_template_id_f1d76590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MuhaffizhForm.vue?vue&type=template&id=f1d76590& */ "./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=template&id=f1d76590&");
/* harmony import */ var _MuhaffizhForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MuhaffizhForm.vue?vue&type=script&lang=js& */ "./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MuhaffizhForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MuhaffizhForm_vue_vue_type_template_id_f1d76590___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MuhaffizhForm_vue_vue_type_template_id_f1d76590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/master/Forms/MuhaffizhForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MuhaffizhForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MuhaffizhForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MuhaffizhForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=template&id=f1d76590&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=template&id=f1d76590& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MuhaffizhForm_vue_vue_type_template_id_f1d76590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MuhaffizhForm.vue?vue&type=template&id=f1d76590& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Forms/MuhaffizhForm.vue?vue&type=template&id=f1d76590&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MuhaffizhForm_vue_vue_type_template_id_f1d76590___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MuhaffizhForm_vue_vue_type_template_id_f1d76590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/master/Muhaffizhs.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/master/Muhaffizhs.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Muhaffizhs_vue_vue_type_template_id_40f68ccf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Muhaffizhs.vue?vue&type=template&id=40f68ccf& */ "./resources/js/components/master/Muhaffizhs.vue?vue&type=template&id=40f68ccf&");
/* harmony import */ var _Muhaffizhs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Muhaffizhs.vue?vue&type=script&lang=js& */ "./resources/js/components/master/Muhaffizhs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Muhaffizhs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Muhaffizhs_vue_vue_type_template_id_40f68ccf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Muhaffizhs_vue_vue_type_template_id_40f68ccf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/master/Muhaffizhs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/master/Muhaffizhs.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/master/Muhaffizhs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Muhaffizhs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Muhaffizhs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Muhaffizhs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Muhaffizhs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/master/Muhaffizhs.vue?vue&type=template&id=40f68ccf&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/master/Muhaffizhs.vue?vue&type=template&id=40f68ccf& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Muhaffizhs_vue_vue_type_template_id_40f68ccf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Muhaffizhs.vue?vue&type=template&id=40f68ccf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Muhaffizhs.vue?vue&type=template&id=40f68ccf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Muhaffizhs_vue_vue_type_template_id_40f68ccf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Muhaffizhs_vue_vue_type_template_id_40f68ccf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/master/PageTitle.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/master/PageTitle.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle_vue_vue_type_template_id_68b36472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=68b36472& */ "./resources/js/components/master/PageTitle.vue?vue&type=template&id=68b36472&");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js& */ "./resources/js/components/master/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTitle_vue_vue_type_template_id_68b36472___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageTitle_vue_vue_type_template_id_68b36472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/master/PageTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/master/PageTitle.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/master/PageTitle.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/master/PageTitle.vue?vue&type=template&id=68b36472&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/master/PageTitle.vue?vue&type=template&id=68b36472& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_68b36472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=template&id=68b36472& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/PageTitle.vue?vue&type=template&id=68b36472&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_68b36472___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_68b36472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/parts/PropertyView.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/parts/PropertyView.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyView_vue_vue_type_template_id_b4817bd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyView.vue?vue&type=template&id=b4817bd8& */ "./resources/js/components/parts/PropertyView.vue?vue&type=template&id=b4817bd8&");
/* harmony import */ var _PropertyView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyView.vue?vue&type=script&lang=js& */ "./resources/js/components/parts/PropertyView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PropertyView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PropertyView_vue_vue_type_template_id_b4817bd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PropertyView_vue_vue_type_template_id_b4817bd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parts/PropertyView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/PropertyView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/parts/PropertyView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/PropertyView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/PropertyView.vue?vue&type=template&id=b4817bd8&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/parts/PropertyView.vue?vue&type=template&id=b4817bd8& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyView_vue_vue_type_template_id_b4817bd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyView.vue?vue&type=template&id=b4817bd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/PropertyView.vue?vue&type=template&id=b4817bd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyView_vue_vue_type_template_id_b4817bd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyView_vue_vue_type_template_id_b4817bd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);