(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
//
//
//
//
//
//
//
//



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CCSetoranGroup',
  components: {
    CChartLine: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartLine"]
  },
  data: function data() {
    return {
      labels: ['Umar', 'Saidah', 'Sidik', 'Usman', 'Fajar']
    };
  },
  computed: {
    ds: function ds() {
      var color1 = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('danger') || '#f86c6b';
      var elements = this.labels.length;
      var data1 = [];

      for (var i = 0; i <= elements; i++) {
        data1.push(random(0, 30));
      }

      return [{
        label: 'Juz',
        backgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["hexToRgba"])(color1, 10),
        borderColor: color1,
        pointHoverBackgroundColor: color1,
        borderWidth: 2,
        data: data1
      }];
    },
    opt: function opt() {
      return {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(30 / 5),
              max: 30
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 2,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          },
          line: {
            tension: 0
          }
        },
        legend: {
          display: false
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
//
//
//
//
//
//
//
//



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CCSetoranMuhaffizh',
  components: {
    CChartLine: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartLine"]
  },
  data: function data() {
    return {
      labels: ['Ciro', 'David', 'Pipin', 'Agif']
    };
  },
  computed: {
    ds: function ds() {
      var color1 = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('warning') || '#f9b115';
      var elements = this.labels.length;
      var data1 = [];

      for (var i = 0; i <= elements; i++) {
        data1.push(random(0, 30));
      }

      return [{
        label: 'Juz',
        backgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["hexToRgba"])(color1, 10),
        borderColor: color1,
        pointHoverBackgroundColor: color1,
        borderWidth: 2,
        data: data1
      }];
    },
    opt: function opt() {
      return {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(30 / 5),
              max: 30
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 2,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          },
          line: {
            tension: 0
          }
        },
        legend: {
          display: false
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
//
//
//
//
//
//
//
//



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CCSetoranUnit',
  components: {
    CChartBar: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartBar"]
  },
  data: function data() {
    return {
      labels: ['SD', 'SMP', 'SMA']
    };
  },
  computed: {
    ds: function ds() {
      var color1 = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('success') || '#4dbd74';
      var elements = this.labels.length;
      var data1 = [];

      for (var i = 0; i <= elements; i++) {
        data1.push(random(0, 30));
      }

      return [{
        label: 'Juz',
        backgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["hexToRgba"])(color1, 10),
        borderColor: color1,
        pointHoverBackgroundColor: color1,
        borderWidth: 2,
        data: data1
      }];
    },
    opt: function opt() {
      return {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(30 / 5),
              max: 30
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 2,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          },
          line: {
            tension: 0
          }
        },
        legend: {
          display: false
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
//
//
//
//
//
//
//
//



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CLTotalSetorJuz',
  components: {
    CChartLine: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartLine"]
  },
  data: function data() {
    return {
      labels: ['Mei-2', 'Mei-3', 'Mei-4', 'Juni-1', 'Juni-2', 'Juni-3', 'Juni-4', 'Juli-1', 'Juli-2', 'Juli-3', 'Juli-4', 'Juli-5', 'Agustus-1', 'Agustus-2', 'Agustus-3', 'Agustus-4']
    };
  },
  computed: {
    ds: function ds() {
      var color1 = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('info') || '#20a8d8';
      var elements = this.labels.length;
      var data1 = [];

      for (var i = 0; i <= elements; i++) {
        data1.push(random(0, 30));
      }

      return [{
        label: 'Juz',
        backgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["hexToRgba"])(color1, 10),
        borderColor: color1,
        pointHoverBackgroundColor: color1,
        borderWidth: 2,
        data: data1
      }];
    },
    opt: function opt() {
      return {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            ticks: {
              callback: function callback(label) {
                return label.split("-")[1];
              }
            }
          }, {
            gridLines: {
              drawOnChartArea: false
            },
            ticks: {
              callback: function callback(label) {
                var bulan = label.split("-")[0];
                var pekan = label.split("-")[1];
                if (pekan == 3) return bulan;else return "";
              }
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(30 / 5),
              max: 30
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 2,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          },
          line: {
            tension: 0
          }
        },
        legend: {
          display: false
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/DSales.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/DSales.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle */ "./resources/js/components/dashboards/PageTitle.vue");
/* harmony import */ var _dashboards_CLTotalSetorJuz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboards/CLTotalSetorJuz */ "./resources/js/components/dashboards/CLTotalSetorJuz.vue");
/* harmony import */ var _dashboards_CCSetoranUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboards/CCSetoranUnit */ "./resources/js/components/dashboards/CCSetoranUnit.vue");
/* harmony import */ var _dashboards_CCSetoranMuhaffizh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboards/CCSetoranMuhaffizh */ "./resources/js/components/dashboards/CCSetoranMuhaffizh.vue");
/* harmony import */ var _dashboards_CCSetoranGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboards/CCSetoranGroup */ "./resources/js/components/dashboards/CCSetoranGroup.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    PageTitle: _PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"],
    MainChart: _dashboards_CLTotalSetorJuz__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChartUnit: _dashboards_CCSetoranUnit__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChartMuhaffizh: _dashboards_CCSetoranMuhaffizh__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChartGroup: _dashboards_CCSetoranGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/PageTitle.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/PageTitle.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/DSales.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/DSales.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-text {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/DSales.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/DSales.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DSales.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/DSales.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=template&id=0c01a2e2&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=template&id=0c01a2e2& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("CChartLine", {
    attrs: { datasets: _vm.ds, options: _vm.opt, labels: _vm.labels }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=template&id=2eaf280e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=template&id=2eaf280e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("CChartLine", {
    attrs: { datasets: _vm.ds, options: _vm.opt, labels: _vm.labels }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=template&id=0a810371&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=template&id=0a810371& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("CChartBar", {
    attrs: { datasets: _vm.ds, options: _vm.opt, labels: _vm.labels }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=template&id=7a655c60&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=template&id=7a655c60& ***!
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
  return _c("CChartLine", {
    attrs: { datasets: _vm.ds, options: _vm.opt, labels: _vm.labels }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/DSales.vue?vue&type=template&id=01a4541d&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/DSales.vue?vue&type=template&id=01a4541d& ***!
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
      _c("PageTitle"),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Total Setoran Juz" } },
                [_c("MainChart")],
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "4" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Setoran Unit" } },
                [_c("ChartUnit")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "4" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Setoran Muhaffizh" } },
                [_c("ChartMuhaffizh")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "4" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Setoran Group" } },
                [_c("ChartGroup")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/PageTitle.vue?vue&type=template&id=0e3c88f8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboards/PageTitle.vue?vue&type=template&id=0e3c88f8& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
              _vm._v("Dashboard")
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

/***/ "./resources/js/components/dashboards/CCSetoranGroup.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/dashboards/CCSetoranGroup.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CCSetoranGroup_vue_vue_type_template_id_0c01a2e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CCSetoranGroup.vue?vue&type=template&id=0c01a2e2& */ "./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=template&id=0c01a2e2&");
/* harmony import */ var _CCSetoranGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CCSetoranGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CCSetoranGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CCSetoranGroup_vue_vue_type_template_id_0c01a2e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CCSetoranGroup_vue_vue_type_template_id_0c01a2e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/CCSetoranGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CCSetoranGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=template&id=0c01a2e2&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=template&id=0c01a2e2& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranGroup_vue_vue_type_template_id_0c01a2e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CCSetoranGroup.vue?vue&type=template&id=0c01a2e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranGroup.vue?vue&type=template&id=0c01a2e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranGroup_vue_vue_type_template_id_0c01a2e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranGroup_vue_vue_type_template_id_0c01a2e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboards/CCSetoranMuhaffizh.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboards/CCSetoranMuhaffizh.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CCSetoranMuhaffizh_vue_vue_type_template_id_2eaf280e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CCSetoranMuhaffizh.vue?vue&type=template&id=2eaf280e& */ "./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=template&id=2eaf280e&");
/* harmony import */ var _CCSetoranMuhaffizh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CCSetoranMuhaffizh.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CCSetoranMuhaffizh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CCSetoranMuhaffizh_vue_vue_type_template_id_2eaf280e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CCSetoranMuhaffizh_vue_vue_type_template_id_2eaf280e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/CCSetoranMuhaffizh.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranMuhaffizh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CCSetoranMuhaffizh.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranMuhaffizh_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=template&id=2eaf280e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=template&id=2eaf280e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranMuhaffizh_vue_vue_type_template_id_2eaf280e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CCSetoranMuhaffizh.vue?vue&type=template&id=2eaf280e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranMuhaffizh.vue?vue&type=template&id=2eaf280e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranMuhaffizh_vue_vue_type_template_id_2eaf280e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranMuhaffizh_vue_vue_type_template_id_2eaf280e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboards/CCSetoranUnit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/dashboards/CCSetoranUnit.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CCSetoranUnit_vue_vue_type_template_id_0a810371___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CCSetoranUnit.vue?vue&type=template&id=0a810371& */ "./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=template&id=0a810371&");
/* harmony import */ var _CCSetoranUnit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CCSetoranUnit.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CCSetoranUnit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CCSetoranUnit_vue_vue_type_template_id_0a810371___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CCSetoranUnit_vue_vue_type_template_id_0a810371___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/CCSetoranUnit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranUnit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CCSetoranUnit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranUnit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=template&id=0a810371&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=template&id=0a810371& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranUnit_vue_vue_type_template_id_0a810371___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CCSetoranUnit.vue?vue&type=template&id=0a810371& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CCSetoranUnit.vue?vue&type=template&id=0a810371&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranUnit_vue_vue_type_template_id_0a810371___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CCSetoranUnit_vue_vue_type_template_id_0a810371___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboards/CLTotalSetorJuz.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/dashboards/CLTotalSetorJuz.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CLTotalSetorJuz_vue_vue_type_template_id_7a655c60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CLTotalSetorJuz.vue?vue&type=template&id=7a655c60& */ "./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=template&id=7a655c60&");
/* harmony import */ var _CLTotalSetorJuz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CLTotalSetorJuz.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CLTotalSetorJuz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CLTotalSetorJuz_vue_vue_type_template_id_7a655c60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CLTotalSetorJuz_vue_vue_type_template_id_7a655c60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/CLTotalSetorJuz.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CLTotalSetorJuz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CLTotalSetorJuz.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CLTotalSetorJuz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=template&id=7a655c60&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=template&id=7a655c60& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CLTotalSetorJuz_vue_vue_type_template_id_7a655c60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CLTotalSetorJuz.vue?vue&type=template&id=7a655c60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/CLTotalSetorJuz.vue?vue&type=template&id=7a655c60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CLTotalSetorJuz_vue_vue_type_template_id_7a655c60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CLTotalSetorJuz_vue_vue_type_template_id_7a655c60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboards/DSales.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/dashboards/DSales.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DSales_vue_vue_type_template_id_01a4541d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DSales.vue?vue&type=template&id=01a4541d& */ "./resources/js/components/dashboards/DSales.vue?vue&type=template&id=01a4541d&");
/* harmony import */ var _DSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DSales.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/DSales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DSales_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DSales.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/dashboards/DSales.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DSales_vue_vue_type_template_id_01a4541d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DSales_vue_vue_type_template_id_01a4541d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/DSales.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/DSales.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/dashboards/DSales.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DSales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/DSales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/DSales.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/dashboards/DSales.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DSales.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/DSales.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/dashboards/DSales.vue?vue&type=template&id=01a4541d&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/dashboards/DSales.vue?vue&type=template&id=01a4541d& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_template_id_01a4541d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DSales.vue?vue&type=template&id=01a4541d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/DSales.vue?vue&type=template&id=01a4541d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_template_id_01a4541d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DSales_vue_vue_type_template_id_01a4541d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboards/PageTitle.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/dashboards/PageTitle.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle_vue_vue_type_template_id_0e3c88f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=0e3c88f8& */ "./resources/js/components/dashboards/PageTitle.vue?vue&type=template&id=0e3c88f8&");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTitle_vue_vue_type_template_id_0e3c88f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageTitle_vue_vue_type_template_id_0e3c88f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/PageTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/PageTitle.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/dashboards/PageTitle.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/PageTitle.vue?vue&type=template&id=0e3c88f8&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dashboards/PageTitle.vue?vue&type=template&id=0e3c88f8& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_0e3c88f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=template&id=0e3c88f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboards/PageTitle.vue?vue&type=template&id=0e3c88f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_0e3c88f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_0e3c88f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);