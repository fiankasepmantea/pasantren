(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Forms/SantriForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/Forms/SantriForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['validator'],
  name: "santriForm",
  created: function created() {
    this.getGroup();
    this.getMuhaffizh();
    this.getGrade();
    this.getLevel();
    this.getUser();
    this.$validator = this.validator;
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("santri", {
    santri: function santri(state) {
      return state.santri;
    },
    santri_muhaffizh: function santri_muhaffizh(state) {
      return state.santri_muhaffizh;
    },
    santri_group: function santri_group(state) {
      return state.santri_group;
    },
    santri_grade: function santri_grade(state) {
      return state.santri_grade;
    },
    santri_level: function santri_level(state) {
      return state.santri_level;
    },
    santri_gender: function santri_gender(state) {
      return state.santri_gender;
    },
    santri_user: function santri_user(state) {
      return state.santri_user;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("santri", ["CLEAR_FORM"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("santri", ["getMuhaffizh", "getGroup", "getGrade", "getLevel", "getUser", "getSantri"])), {}, {
    getGroupName: function getGroupName(id) {
      this.santri.group_id = '', this.getGroup(id);
    },
    getDeleteSantri: function getDeleteSantri(santri) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.getSantri(santri);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validateState: function validateState(ref) {
      if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
        return !this.veeErrors.has(ref);
      }

      return null;
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Santris.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/Santris.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle */ "./resources/js/components/master/PageTitle.vue");
/* harmony import */ var _Forms_SantriForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forms/SantriForm */ "./resources/js/components/master/Forms/SantriForm.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Santris",
  components: {
    pagetitle: _PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"],
    Form: _Forms_SantriForm__WEBPACK_IMPORTED_MODULE_2__["default"],
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
      currentSantri: {},
      pageOptions: [10, 20, 50, 100],
      filterModel: {
        santri_name: null
      },
      header: [{
        key: "nama",
        label: "Nama Santri"
      }, {
        key: 'list_walisantri.name',
        label: 'Wali Santri'
      }, {
        key: 'alamat',
        label: 'Alamat'
      }, {
        key: 'angkatan_kelas',
        label: 'Kelas/Angkatan'
      }, {
        key: 'list_grade.grade',
        label: 'Grade'
      }, {
        key: 'list_level.level',
        label: 'Level'
      }, {
        key: 'list_group.nama',
        label: 'Group'
      }, {
        key: 'list_muhaffizh.nama',
        label: 'Muhaffizh'
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
      if (this.santris && this.santris.data) {
        return this.santris.data.length;
      } else {
        return 0;
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])('santri', {
    santris: function santris(state) {
      return state.santris;
    }
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('santri', ['getSantris', 'removeSantri', 'editSantri', 'updateSantri', 'submitSantri'])), {}, {
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
                return _this.getSantris(params);

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
    searchSantri: function searchSantri() {
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
    deleteSantri: function deleteSantri(id) {
      var _this3 = this;

      this.$swal({
        title: 'Apakah anda yakin ?',
        text: 'Tindakan ini akan menghapus data secara permanen',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          _this3.removeSantri(id);
        }
      });
    },
    handleView: function handleView(santri) {
      this.viewModal = true;

      for (var _i = 0, _Object$entries = Object.entries(santri); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            k = _Object$entries$_i[0],
            v = _Object$entries$_i[1];

        if (k.toLowerCase().indexOf('_id') >= 0 || k.toLowerCase().indexOf('id_') >= 0) continue;

        if (typeof v === 'string' || typeof v === 'number') {
          this.currentSantri[k] = v;
        } else if (!v) {
          this.currentSantri[k] = '';
        }
      }

      ;
      this.currentSantri.group = santri.list_group ? santri.list_group.nama : "Belum ke isi";
      this.currentSantri.muhaffizh = santri.list_muhaffizh ? santri.list_muhaffizh.nama : "Belum ke isi";
      this.currentSantri.level = santri.list_level ? santri.list_level.level : "Belum ke isi";
      this.currentSantri.grade = santri.list_grade ? santri.list_grade.grade : "Belum ke isi";
      this.currentSantri.walisantri = santri.list_walisantri ? santri.list_walisantri.name : "Belum ke isi";
    },
    handleEdit: function handleEdit(id) {
      this.editModal = true;
      this.editSantri(id);
      this.editedId = id;
    },
    handleUpdate: function handleUpdate(bvModalEvt) {
      var _this4 = this;

      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(function (result) {
        if (!result) {
          return;
        }

        _this4.updateSantri(_this4.editedId);

        _this4.$toasted.global.success_toast({
          message: 'Data Santri berhasil diubah..'
        });

        _this4.editModal = false;

        _this4.loadData();
      })["catch"](function (err) {
        _this4.$toasted.global.failed_toast({
          message: 'Data Santri gagal untuk diubah..'
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

        _this5.submitSantri();

        _this5.$toasted.global.success_toast({
          message: 'Data Santri berhasil ditambahkan..'
        });

        _this5.createModal = false;

        _this5.loadData();
      })["catch"](function (err) {
        _this5.$toasted.global.failed_toast({
          message: 'Data Santri gagal untuk ditambahkan..'
        });
      });
    }
  })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Forms/SantriForm.vue?vue&type=template&id=f3e77e3e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/Forms/SantriForm.vue?vue&type=template&id=f3e77e3e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
            "CRow",
            {
              staticStyle: { "margin-bottom": "8px" },
              attrs: { alignHorizontal: "center" }
            },
            [
              _vm.santri.foto
                ? _c("b-avatar", {
                    attrs: {
                      src: _vm.santri.foto,
                      size: "10rem",
                      rounded: "lg"
                    }
                  })
                : _c("b-avatar")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Muhaffizh",
                "label-cols": "3",
                "label-for": "muhaffizh"
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
                  id: "muhaffizh",
                  options: _vm.santri_muhaffizh,
                  placeholder: "Pilih Muhaffizh",
                  name: "muhaffizh",
                  state: _vm.validateState("muhaffizh"),
                  "data-vv-as": "Muhaffizh"
                },
                on: {
                  change: function($event) {
                    return _vm.getGroupName(_vm.santri.muhaffizh_id)
                  }
                },
                model: {
                  value: _vm.santri.muhaffizh_id,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "muhaffizh_id", $$v)
                  },
                  expression: "santri.muhaffizh_id"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("group")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: { label: "Group", "label-cols": "3", "label-for": "group" }
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
                  id: "group",
                  options: _vm.santri_group,
                  placeholder: "Pilih Group",
                  name: "group",
                  state: _vm.validateState("group"),
                  "data-vv-as": "Group"
                },
                model: {
                  value: _vm.santri.group_id,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "group_id", $$v)
                  },
                  expression: "santri.group_id"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("group")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Nomor Induk Santri",
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
                  value: _vm.santri.nomor_induk,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "nomor_induk", $$v)
                  },
                  expression: "santri.nomor_induk"
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
                label: "WaliSantri",
                "label-cols": "3",
                "label-for": "walisantri"
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
                  id: "wali-santri",
                  options: _vm.santri_user,
                  placeholder: "Pilih Wali Santri",
                  name: "user_id",
                  state: _vm.validateState("user_id"),
                  "data-vv-as": "WaliSantri"
                },
                model: {
                  value: _vm.santri.user_id,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "user_id", $$v)
                  },
                  expression: "santri.user_id"
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
                label: "Nama Santri",
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
                on: {
                  keyup: function($event) {
                    return _vm.getDeleteSantri(_vm.santri)
                  }
                },
                model: {
                  value: _vm.santri.nama,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "nama", $$v)
                  },
                  expression: "santri.nama"
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
                label: "Gender",
                "label-cols": "3",
                "label-for": "gender"
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
                  id: "gender",
                  options: _vm.santri_gender,
                  placeholder: "Jenis Kelamin",
                  name: "gender",
                  state: _vm.validateState("gender"),
                  "data-vv-as": "Gender"
                },
                model: {
                  value: _vm.santri.gender,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "gender", $$v)
                  },
                  expression: "santri.gender"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("level")))
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
                  value: _vm.santri.alamat,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "alamat", $$v)
                  },
                  expression: "santri.alamat"
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
                  value: _vm.santri.tempat_lahir,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "tempat_lahir", $$v)
                  },
                  expression: "santri.tempat_lahir"
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
                  value: _vm.santri.tanggal_lahir,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "tanggal_lahir", $$v)
                  },
                  expression: "santri.tanggal_lahir"
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
              attrs: {
                label: "Nama Ibu",
                "label-cols": "3",
                "label-for": "namaibu"
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
                  id: "namaibu",
                  placeholder: "Masukan Nama Ibu",
                  name: "namaibu",
                  state: _vm.validateState("namaibu"),
                  "data-vv-as": "NamaIbu"
                },
                model: {
                  value: _vm.santri.nama_ibu,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "nama_ibu", $$v)
                  },
                  expression: "santri.nama_ibu"
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
                label: "Nama Ayah",
                "label-cols": "3",
                "label-for": "namaayah"
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
                  id: "namaayah",
                  placeholder: "Masukan Nama Ayah",
                  name: "namaayah",
                  state: _vm.validateState("namaayah"),
                  "data-vv-as": "NamaAyah"
                },
                model: {
                  value: _vm.santri.nama_ayah,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "nama_ayah", $$v)
                  },
                  expression: "santri.nama_ayah"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("namaayah")))
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
                  value: _vm.santri.no_hp,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "no_hp", $$v)
                  },
                  expression: "santri.no_hp"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("no_hp")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Mulai Belajar",
                "label-cols": "3",
                "label-for": "mulaibelajar"
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
                  id: "mulaibelajar",
                  placeholder: "Masukan Tanggal Belajar",
                  type: "date",
                  name: "mulaibelajar",
                  state: _vm.validateState("mulaibelajar"),
                  "data-vv-as": "MulaiBelajar"
                },
                model: {
                  value: _vm.santri.mulai_belajar,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "mulai_belajar", $$v)
                  },
                  expression: "santri.mulai_belajar"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("mulaibelajar")))
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
                  value: _vm.santri.angkatan_kelas,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "angkatan_kelas", $$v)
                  },
                  expression: "santri.angkatan_kelas"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("kelasangkatan")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: { label: "Grade", "label-cols": "3", "label-for": "grade" }
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
                  id: "grade",
                  options: _vm.santri_grade,
                  placeholder: "Pilih Grade",
                  name: "grade",
                  state: _vm.validateState("grade"),
                  "data-vv-as": "Grade"
                },
                model: {
                  value: _vm.santri.grade_id,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "grade_id", $$v)
                  },
                  expression: "santri.grade_id"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("grade")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Level Santri",
                "label-cols": "3",
                "label-for": "level"
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
                  id: "level",
                  options: _vm.santri_level,
                  placeholder: "Pilih Level",
                  name: "level",
                  state: _vm.validateState("level"),
                  "data-vv-as": "Level"
                },
                model: {
                  value: _vm.santri.levelsantri_id,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "levelsantri_id", $$v)
                  },
                  expression: "santri.levelsantri_id"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("level")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                label: "Pas Foto",
                "label-cols": "3",
                "label-for": "file_foto"
              }
            },
            [
              _c("b-form-file", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { size: 1024, image: true },
                    expression: "{ size: 1024, image: true }"
                  }
                ],
                attrs: {
                  id: "file_foto",
                  name: "file_foto",
                  state: _vm.validateState("file_foto"),
                  accept: "image/jpeg",
                  placeholder: "Upload foto...",
                  "data-vv-as": "file"
                },
                model: {
                  value: _vm.santri.file_foto,
                  callback: function($$v) {
                    _vm.$set(_vm.santri, "file_foto", $$v)
                  },
                  expression: "santri.file_foto"
                }
              }),
              _vm._v(" "),
              _c("b-form-invalid-feedback", [
                _vm._v(_vm._s(_vm.veeErrors.first("file_foto")))
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Santris.vue?vue&type=template&id=ad4b5274&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/master/Santris.vue?vue&type=template&id=ad4b5274& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("+ Tambah Santri")]
                  )
                : _vm._e()
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
                        attrs: { placeholder: "Cari Santri", size: "sm" },
                        model: {
                          value: _vm.filterModel.santri_name,
                          callback: function($$v) {
                            _vm.$set(_vm.filterModel, "santri_name", $$v)
                          },
                          expression: "filterModel.santri_name"
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
                                on: {
                                  click: function($event) {
                                    return _vm.searchSantri(_vm.filterModel)
                                  }
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
              items: _vm.santris.data,
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
                                return _vm.deleteSantri(row.item.id)
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
                title: "Tambah Data Santri",
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
                title: "Ubah Data Santri",
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
                title: "Lihat Data Santri",
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
            [_c("DataView", { attrs: { items: _vm.currentSantri } })],
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

/***/ "./resources/js/components/master/Forms/SantriForm.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/master/Forms/SantriForm.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SantriForm_vue_vue_type_template_id_f3e77e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SantriForm.vue?vue&type=template&id=f3e77e3e& */ "./resources/js/components/master/Forms/SantriForm.vue?vue&type=template&id=f3e77e3e&");
/* harmony import */ var _SantriForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SantriForm.vue?vue&type=script&lang=js& */ "./resources/js/components/master/Forms/SantriForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SantriForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SantriForm_vue_vue_type_template_id_f3e77e3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SantriForm_vue_vue_type_template_id_f3e77e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/master/Forms/SantriForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/master/Forms/SantriForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/master/Forms/SantriForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SantriForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SantriForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Forms/SantriForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SantriForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/master/Forms/SantriForm.vue?vue&type=template&id=f3e77e3e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/master/Forms/SantriForm.vue?vue&type=template&id=f3e77e3e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SantriForm_vue_vue_type_template_id_f3e77e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SantriForm.vue?vue&type=template&id=f3e77e3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Forms/SantriForm.vue?vue&type=template&id=f3e77e3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SantriForm_vue_vue_type_template_id_f3e77e3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SantriForm_vue_vue_type_template_id_f3e77e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/master/Santris.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/master/Santris.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Santris_vue_vue_type_template_id_ad4b5274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Santris.vue?vue&type=template&id=ad4b5274& */ "./resources/js/components/master/Santris.vue?vue&type=template&id=ad4b5274&");
/* harmony import */ var _Santris_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Santris.vue?vue&type=script&lang=js& */ "./resources/js/components/master/Santris.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Santris_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Santris_vue_vue_type_template_id_ad4b5274___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Santris_vue_vue_type_template_id_ad4b5274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/master/Santris.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/master/Santris.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/master/Santris.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Santris_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Santris.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Santris.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Santris_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/master/Santris.vue?vue&type=template&id=ad4b5274&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/master/Santris.vue?vue&type=template&id=ad4b5274& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Santris_vue_vue_type_template_id_ad4b5274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Santris.vue?vue&type=template&id=ad4b5274& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/master/Santris.vue?vue&type=template&id=ad4b5274&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Santris_vue_vue_type_template_id_ad4b5274___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Santris_vue_vue_type_template_id_ad4b5274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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