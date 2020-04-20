(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/PxHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/PxHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PxHeader',
  created: function created() {
    window.addEventListener('click', function (e) {
      if (!document.getElementById('header-menu').contains(e.target)) {
        var menu = document.getElementById('public-header-menu');

        if (!menu.classList.contains('hidden') && menu.classList.contains('menu:open')) {
          menu.classList.add('hidden');
          menu.classList.remove('menu:open');
        }
      }
    });
  },
  methods: {
    showMenu: function showMenu() {
      var menu = document.getElementById('public-header-menu');

      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('menu:open');
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('menu:open');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Public.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Public.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PublicLayout'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/PxHeader.vue?vue&type=template&id=5dc1dec0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/PxHeader.vue?vue&type=template&id=5dc1dec0& ***!
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
    {
      staticClass:
        "bg-teal-600 w-100 flex items-center justify-between flex-wrap p-6 border-b border-teal-600 md:border-none sticky-header",
      attrs: { id: "header-menu" }
    },
    [
      _c("div", { staticClass: "container mx-auto" }, [
        _c("div", { staticClass: "block md:hidden" }, [
          _c(
            "button",
            {
              staticClass:
                "flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white hover:bg-teal-600 float-right",
              on: {
                click: function($event) {
                  return _vm.showMenu()
                }
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "fill-current h-3 w-3",
                  attrs: {
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("title", [_vm._v("Menu")]),
                  _vm._v(" "),
                  _c("path", {
                    attrs: { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" }
                  })
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex items-center flex-shrink-0 mr-6 md:float-left" },
      [
        _c(
          "a",
          {
            staticClass: "text-2xl font-medium text-white",
            attrs: { href: "/" }
          },
          [_vm._v("\n        Manuel Ojeda\n      ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "w-full flex-grow md:flex md:items-center md:w-auto hidden md:block",
        attrs: { id: "public-header-menu" }
      },
      [
        _c("div", { staticClass: "text-sm md:flex-auto" }, [
          _c("div", { staticClass: "md:float-right mt-4 md:mt-0" }, [
            _c(
              "a",
              {
                staticClass:
                  "mr-3 md:text-lg font-medium text-white block md:inline mb-2 md:mb-0",
                attrs: { href: "/" }
              },
              [_vm._v("\n            Home\n          ")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "mr-3 md:text-lg text-white hover:font-medium block md:inline my-2 md:mb-0",
                attrs: { href: "/portfolio" }
              },
              [_vm._v("\n            Portfolio\n          ")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "mr-3 md:text-lg text-white hover:font-medium block md:inline my-2 md:mb-0",
                attrs: { href: "/education" }
              },
              [_vm._v("\n            Education\n          ")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "mr-3 md:text-lg text-white hover:font-medium block md:inline my-2 md:mb-0",
                attrs: { href: "/blog" }
              },
              [_vm._v("\n            Blog\n          ")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "mr-3 md:text-lg text-white hover:font-medium block md:inline my-2 md:mb-0",
                attrs: { href: "#" }
              },
              [_vm._v("\n            Resume\n          ")]
            )
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Public.vue?vue&type=template&id=c1fce166&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Public.vue?vue&type=template&id=c1fce166& ***!
  \******************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-100" },
    [_c("public-header"), _vm._v(" "), _vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.ts":
/*!*****************************!*\
  !*** ./resources/js/app.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _plugins_CompositionApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/CompositionApi */ "./resources/js/plugins/CompositionApi.ts");
/* harmony import */ var _plugins_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/Typography */ "./resources/js/plugins/Typography.ts");
/* harmony import */ var _layouts_Public_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/Public.vue */ "./resources/js/layouts/Public.vue");
/* harmony import */ var _components_public_PxHeader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/public/PxHeader.vue */ "./resources/js/components/public/PxHeader.vue");
/* eslint-disable no-unused-vars */

// import './plugins/ApexCharts'




vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('public-layout', _layouts_Public_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('public-header', _components_public_PxHeader_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('public-index', () => Promise.all(/*! import() | PublicIndex */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("PublicIndex")]).then(__webpack_require__.bind(null, /*! ./pages/Public/Index.vue */ "./resources/js/pages/Public/Index.vue")));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('education', () => __webpack_require__.e(/*! import() | Education */ "Education").then(__webpack_require__.bind(null, /*! ./pages/Public/Education.vue */ "./resources/js/pages/Public/Education.vue")));
const app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    el: '#app'
});


/***/ }),

/***/ "./resources/js/components/public/PxHeader.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/public/PxHeader.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PxHeader_vue_vue_type_template_id_5dc1dec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PxHeader.vue?vue&type=template&id=5dc1dec0& */ "./resources/js/components/public/PxHeader.vue?vue&type=template&id=5dc1dec0&");
/* harmony import */ var _PxHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PxHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/public/PxHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PxHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PxHeader_vue_vue_type_template_id_5dc1dec0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PxHeader_vue_vue_type_template_id_5dc1dec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/PxHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/PxHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/public/PxHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PxHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PxHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/PxHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PxHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/PxHeader.vue?vue&type=template&id=5dc1dec0&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/public/PxHeader.vue?vue&type=template&id=5dc1dec0& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PxHeader_vue_vue_type_template_id_5dc1dec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PxHeader.vue?vue&type=template&id=5dc1dec0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/PxHeader.vue?vue&type=template&id=5dc1dec0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PxHeader_vue_vue_type_template_id_5dc1dec0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PxHeader_vue_vue_type_template_id_5dc1dec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/Public.vue":
/*!*****************************************!*\
  !*** ./resources/js/layouts/Public.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Public_vue_vue_type_template_id_c1fce166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Public.vue?vue&type=template&id=c1fce166& */ "./resources/js/layouts/Public.vue?vue&type=template&id=c1fce166&");
/* harmony import */ var _Public_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Public.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Public.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Public_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Public_vue_vue_type_template_id_c1fce166___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Public_vue_vue_type_template_id_c1fce166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Public.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Public.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/layouts/Public.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Public_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Public.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Public.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Public_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Public.vue?vue&type=template&id=c1fce166&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/Public.vue?vue&type=template&id=c1fce166& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Public_vue_vue_type_template_id_c1fce166___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Public.vue?vue&type=template&id=c1fce166& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Public.vue?vue&type=template&id=c1fce166&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Public_vue_vue_type_template_id_c1fce166___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Public_vue_vue_type_template_id_c1fce166___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/plugins/CompositionApi.ts":
/*!************************************************!*\
  !*** ./resources/js/plugins/CompositionApi.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./resources/js/plugins/Typography.ts":
/*!********************************************!*\
  !*** ./resources/js/plugins/Typography.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typography */ "./node_modules/typography/dist/index.js");
/* harmony import */ var typography__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typography__WEBPACK_IMPORTED_MODULE_0__);

const typography = new typography__WEBPACK_IMPORTED_MODULE_0___default.a({
    baseFontSize: '16px',
    baseLineHeight: 1.50,
    headerFontFamily: ['Roboto', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif']
    // See below for the full list of options.
});
// Output CSS as string.
typography.toString();
// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.ts ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Desarrollo\php\manuelojeda\resources\js\app.ts */"./resources/js/app.ts");
module.exports = __webpack_require__(/*! D:\Desarrollo\php\manuelojeda\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);