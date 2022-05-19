/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/home-1.jpg */ "./src/img/home-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/home-2.jpg */ "./src/img/home-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/home-3.jpg */ "./src/img/home-3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/home-4.jpg */ "./src/img/home-4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/home-5.jpg */ "./src/img/home-5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/food-1.jpg */ "./src/img/food-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/food-2.jpg */ "./src/img/food-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/food-3.jpg */ "./src/img/food-3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: 'Roboto', sans-serif;\n  --light-brown: #fefae0;\n  --light-green: #e9f5db;\n  --text-color: #001a23;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #e9f5db;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 10vw 1fr 1fr 10vw;\n  color: var(--text-color);\n}\n\n/* HEADER */\n\n#header {\n  position: fixed;\n  min-height: 6vh;\n  width: 100%;\n  display: grid;\n  gap: 2rem;\n  padding: 0 2rem;\n  grid-column: span 4;\n  grid-template-columns: 1fr auto auto;\n  align-items: center;\n  background-color: var(--light-green);\n  z-index: 1;\n  /* border-bottom: thin solid #b5c99a; */\n  box-shadow: 0px -1px 10px #606c38;\n}\n\n#header img {\n  height: 4vh;\n}\n\n#header .tab {\n  cursor: pointer;\n}\n\n/* HOME PAGE */\n\n.page {\n  display: contents;\n}\n\n.page #welcome {\n  grid-column:span 4;\n  position: relative;\n  min-height: 94vh;\n  width: 100vw;\n  overflow: hidden;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  margin-top: 6vh;\n}\n\n.page #welcome-text-wrapper {\n  position: absolute;\n  top: 30%;\n  right: 0;\n  width: 40rem;\n  color: var(--light-brown);\n  background-color: #aeb7a3c7;\n  padding: 1rem 10vw 1rem 1rem;\n  border-top-left-radius: 2rem;\n  border-bottom-left-radius: 2rem;\n}\n\n.page #welcome-text-wrapper #welcome-text {\n  font-size: 1.8rem;\n  text-shadow: 2px 2px 0px var(--text-color);\n  margin: 0;\n  white-space: pre-line;\n}\n.page #welcome-text-wrapper #welcome-text span {\n  color: var(--light-green);\n  text-shadow: 3px 3px var(--text-color), 6px 6px var(--light-brown);\n  font-size: 4.5rem;\n  font-weight: 700;\n}\n\n.page #description {\n  grid-column: 2 / span 2;\n  text-align: center;\n  letter-spacing: 0.05rem;\n  line-height: 1.5rem;\n  padding: 2rem 0;\n}\n\n.page #description h2 {\n  font-size: 4.5rem;\n  color: #606c38;\n  text-shadow: 3px 3px var(--text-color), 6px 6px #dda15e;\n  margin: 0 0 2rem 0;\n  line-height: normal;\n}\n\n.page #gallery {\n  min-height: 94vh;\n  grid-column: span 4;\n  display: grid;\n  background-color: var(--light-brown);\n  gap: 0.5rem;\n  grid-template: \n    \"three two two\" 4fr\n    \"three four five\" 5fr /\n    1fr 1fr 1fr;\n}\n\n.page #gallery #home-2 {\n  grid-area: two;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n}\n\n.page #gallery #home-3 {\n  grid-area: three;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n}\n\n.page #gallery #home-4 {\n  grid-area: four;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n}\n\n.page #gallery #home-5 {\n  grid-area: five;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n}\n\n.page #faq {\n  display: grid;\n  grid-column: 2 / span 2;\n  padding: 2rem 2rem;\n  gap: 2rem 10vw;\n  min-height: 88vh;\n  grid-template-columns: 1fr 1fr;\n  align-content: start;\n}\n\n.page #faq h3 {\n  margin-top: 0;\n}\n\n.page #faq #faq-header {\n  grid-column: span 2;\n  text-align: center;\n  font-size: 4.5rem;\n  color: #606c38;\n  text-shadow: 3px 3px var(--text-color), 6px 6px #dda15e;\n  margin: 0;\n}\n\n.page #faq p {\n  letter-spacing: 0.05rem;\n  line-height: 1.5rem;\n}\n\n.page #footer {\n  grid-column: span 4;\n  height: 6vh;\n  width: 100%;\n  background-color: var(--light-brown);\n  display: grid;\n  place-content: center;\n  gap: 2rem;\n  grid-auto-flow: column;\n  box-shadow: 0px 1px 10px #c9ae8f;\n}\n\n.page #footer a {\n  color: var(--text-color);\n}\n\n/* MENU PAGE */\n\n.page #menu-1-text p,\n.page #menu-2-text p,\n.page #menu-3-text p {\n  letter-spacing: 0.05rem;\n  line-height: 1.9rem;\n  white-space: pre-line;\n}\n\n.page #menu-1-text h2,\n.page #menu-2-text h2,\n.page #menu-3-text h2 {\n  font-size: 3.5rem;\n  margin-top: 0;\n  color: #606c38;\n  text-shadow: 3px 3px var(--text-color), 6px 6px #dda15e;\n  text-align: center;\n}\n\n.page #menu-1 {\n  grid-column: 1 / 3;\n  margin-top: 6vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: cover;\n  background-position: center;\n  min-height: 60vh;\n}\n\n.page #menu-1-text {\n  grid-column: 3;\n  margin-top: 6vh;\n  padding: 2rem 0rem 2rem 1rem;\n}\n\n.page #menu-2-text {\n  grid-column: 2;\n  padding: 2rem 1rem 2rem 0rem;\n}\n\n.page #menu-2 {\n  grid-column: 3 / 5;\n  min-height: 60vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  background-size: cover;\n  background-position: center;\n}\n\n.page #menu-3 {\n  grid-column: 1 / 3;\n  min-height: 60vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  background-size: cover;\n  background-position: center;\n}\n\n.page #menu-3-text {\n  grid-column: 3;\n  padding: 2rem 0rem 2rem 1rem;\n}\n\n/* CONTACT PAGE */\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\n\n\n:root {\n  font-family: 'Roboto', sans-serif;\n  --light-brown: #fefae0;\n  --light-green: #e9f5db;\n  --text-color: #001a23;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #e9f5db;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 10vw 1fr 1fr 10vw;\n  color: var(--text-color);\n}\n\n/* HEADER */\n\n#header {\n  position: fixed;\n  min-height: 6vh;\n  width: 100%;\n  display: grid;\n  gap: 2rem;\n  padding: 0 2rem;\n  grid-column: span 4;\n  grid-template-columns: 1fr auto auto;\n  align-items: center;\n  background-color: var(--light-green);\n  z-index: 1;\n  /* border-bottom: thin solid #b5c99a; */\n  box-shadow: 0px -1px 10px #606c38;\n}\n\n#header img {\n  height: 4vh;\n}\n\n#header .tab {\n  cursor: pointer;\n}\n\n/* HOME PAGE */\n\n.page {\n  display: contents;\n}\n\n.page #welcome {\n  grid-column:span 4;\n  position: relative;\n  min-height: 94vh;\n  width: 100vw;\n  overflow: hidden;\n  background-image: url('./img/home-1.jpg');\n  background-position: center;\n  background-size: cover;\n  margin-top: 6vh;\n}\n\n.page #welcome-text-wrapper {\n  position: absolute;\n  top: 30%;\n  right: 0;\n  width: 40rem;\n  color: var(--light-brown);\n  background-color: #aeb7a3c7;\n  padding: 1rem 10vw 1rem 1rem;\n  border-top-left-radius: 2rem;\n  border-bottom-left-radius: 2rem;\n}\n\n.page #welcome-text-wrapper #welcome-text {\n  font-size: 1.8rem;\n  text-shadow: 2px 2px 0px var(--text-color);\n  margin: 0;\n  white-space: pre-line;\n}\n.page #welcome-text-wrapper #welcome-text span {\n  color: var(--light-green);\n  text-shadow: 3px 3px var(--text-color), 6px 6px var(--light-brown);\n  font-size: 4.5rem;\n  font-weight: 700;\n}\n\n.page #description {\n  grid-column: 2 / span 2;\n  text-align: center;\n  letter-spacing: 0.05rem;\n  line-height: 1.5rem;\n  padding: 2rem 0;\n}\n\n.page #description h2 {\n  font-size: 4.5rem;\n  color: #606c38;\n  text-shadow: 3px 3px var(--text-color), 6px 6px #dda15e;\n  margin: 0 0 2rem 0;\n  line-height: normal;\n}\n\n.page #gallery {\n  min-height: 94vh;\n  grid-column: span 4;\n  display: grid;\n  background-color: var(--light-brown);\n  gap: 0.5rem;\n  grid-template: \n    \"three two two\" 4fr\n    \"three four five\" 5fr /\n    1fr 1fr 1fr;\n}\n\n.page #gallery #home-2 {\n  grid-area: two;\n  background-image: url('./img/home-2.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n}\n\n.page #gallery #home-3 {\n  grid-area: three;\n  background-image: url('./img/home-3.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n}\n\n.page #gallery #home-4 {\n  grid-area: four;\n  background-image: url('./img/home-4.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n}\n\n.page #gallery #home-5 {\n  grid-area: five;\n  background-image: url('./img/home-5.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n}\n\n.page #faq {\n  display: grid;\n  grid-column: 2 / span 2;\n  padding: 2rem 2rem;\n  gap: 2rem 10vw;\n  min-height: 88vh;\n  grid-template-columns: 1fr 1fr;\n  align-content: start;\n}\n\n.page #faq h3 {\n  margin-top: 0;\n}\n\n.page #faq #faq-header {\n  grid-column: span 2;\n  text-align: center;\n  font-size: 4.5rem;\n  color: #606c38;\n  text-shadow: 3px 3px var(--text-color), 6px 6px #dda15e;\n  margin: 0;\n}\n\n.page #faq p {\n  letter-spacing: 0.05rem;\n  line-height: 1.5rem;\n}\n\n.page #footer {\n  grid-column: span 4;\n  height: 6vh;\n  width: 100%;\n  background-color: var(--light-brown);\n  display: grid;\n  place-content: center;\n  gap: 2rem;\n  grid-auto-flow: column;\n  box-shadow: 0px 1px 10px #c9ae8f;\n}\n\n.page #footer a {\n  color: var(--text-color);\n}\n\n/* MENU PAGE */\n\n.page #menu-1-text p,\n.page #menu-2-text p,\n.page #menu-3-text p {\n  letter-spacing: 0.05rem;\n  line-height: 1.9rem;\n  white-space: pre-line;\n}\n\n.page #menu-1-text h2,\n.page #menu-2-text h2,\n.page #menu-3-text h2 {\n  font-size: 3.5rem;\n  margin-top: 0;\n  color: #606c38;\n  text-shadow: 3px 3px var(--text-color), 6px 6px #dda15e;\n  text-align: center;\n}\n\n.page #menu-1 {\n  grid-column: 1 / 3;\n  margin-top: 6vh;\n  background-image: url('./img/food-1.jpg');\n  background-size: cover;\n  background-position: center;\n  min-height: 60vh;\n}\n\n.page #menu-1-text {\n  grid-column: 3;\n  margin-top: 6vh;\n  padding: 2rem 0rem 2rem 1rem;\n}\n\n.page #menu-2-text {\n  grid-column: 2;\n  padding: 2rem 1rem 2rem 0rem;\n}\n\n.page #menu-2 {\n  grid-column: 3 / 5;\n  min-height: 60vh;\n  background-image: url('./img/food-2.jpg');\n  background-size: cover;\n  background-position: center;\n}\n\n.page #menu-3 {\n  grid-column: 1 / 3;\n  min-height: 60vh;\n  background-image: url('./img/food-3.jpg');\n  background-size: cover;\n  background-position: center;\n}\n\n.page #menu-3-text {\n  grid-column: 3;\n  padding: 2rem 0rem 2rem 1rem;\n}\n\n/* CONTACT PAGE */\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contact() {
  function create(tag) {
    return document.createElement(tag);
  }

  const page = create('div');
  page.classList.add('page');

  // content

  const footer = create('div');
  footer.id = 'footer';
  const footerText = create('p');
  footerText.textContent = '© 2020 The Vegan Chef';
  const githubText = create('p');
  const githubLink = create('a');
  githubLink.href = 'https://github.com/TomSoerr/odin-restaurant-page';
  githubLink.textContent = 'GitHub';
  githubText.append(githubLink);
  footer.append(footerText, githubText);

  page.append( footer);
  return page;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");


function header(tabs) {
  const headerDiv = document.createElement('div');
  headerDiv.id = 'header';

  const logoImg = document.createElement('img');
  logoImg.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  headerDiv.appendChild(logoImg);

  tabs.forEach(tab => {
    headerDiv.appendChild(tab);
  });

  return headerDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function home() {
  function create(tag) {
    return document.createElement(tag);
  }

  const page = create('div');
  page.classList.add('page');

  const welcomeDiv = create('div');
  welcomeDiv.id = 'welcome';
  const welcomeTextWrapper = create('div');
  welcomeTextWrapper.id = 'welcome-text-wrapper';
  const welcomeText = create('p');
  welcomeText.id = 'welcome-text';
  const welcomeTextSpan = create('span');
  welcomeTextSpan.textContent = 'The Vegan Chef \r\n';
  welcomeText.append(
    welcomeTextSpan,
    'We are a four star vegan only Restaurant in Austria. Come and visit us. You will not be disappointed!',
  );
  welcomeTextWrapper.append(welcomeText);
  welcomeDiv.append(welcomeTextWrapper);

  const descriptionDiv = create('div');
  descriptionDiv.id = 'description';
  const descriptionHeader = create('h2');
  descriptionHeader.textContent = 'Our Story';
  descriptionHeader.id = 'description-header';
  const descriptionText = create('p');
  descriptionText.id = 'description-text';
  descriptionText.textContent = (
    'Our restaurant was founded in the early 2000s by a group of friends who wanted to create a new kind of restaurant. The main reason for the establishment\'s success is that their menu is fresh and delicious but also serves all the foods they choose to put in their menu. We have numerous specialties and many others which are just plain good food. Many have a great value to the food and our local friends have always been there to make that special food even better. The menu is also very different to how any restaurant usually is. As for the food, we all eat a special diet so any time we go to a restaurant and enjoy a unique experience, we will always have something we can make special because we aren\'t trying to take the food away from the place which has great value to the area. ~ some AI generated text.'
  );
  descriptionDiv.append(descriptionHeader, descriptionText);

  const galleryDiv = create('div');
  galleryDiv.id = 'gallery';
  const homeTwo = create('div');
  homeTwo.id = 'home-2';
  const homeThree = create('div');
  homeThree.id = 'home-3';
  const homeFour = create('div');
  homeFour.id = 'home-4';
  const homeFive = create('div');
  homeFive.id = 'home-5';
  galleryDiv.append(homeTwo, homeThree, homeFour, homeFive);

  const faq = create('div');
  faq.id = 'faq';
  const faqHeader = create('h2');
  faqHeader.textContent = 'FAQ';
  faqHeader.id = 'faq-header';
  const leftFaq = create('div');
  leftFaq.id = 'left-faq';
  const leftQuestionOneHeader = create('h3');
  leftQuestionOneHeader.textContent = 'What is Vegan?';
  const leftQuestionOneText = create('p');
  leftQuestionOneText.textContent = (
    'Veganism is the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals. Vegetables are not required to have animal welfare, and so, most famously, veganism excludes animal products from agriculture. However, organic food is commonly considered a healthy option because the production of natural ingredients requires that you also eat vegan.'
  );
  leftFaq.append(leftQuestionOneHeader, leftQuestionOneText);
  const rightFaq = create('div');
  rightFaq.id = 'right-faq';
  const rightQuestionOneHeader = create('h3');
  rightQuestionOneHeader.textContent = 'Can I reserve a table?';
  const rightQuestionOneText = create('p');
  rightQuestionOneText.textContent = (
    'Yes, you can reserve a table at our restaurant. You can reserve a table by calling us or by sending us an email. We will contact you as soon as possible.'
  );
  rightFaq.append(rightQuestionOneHeader, rightQuestionOneText);
  faq.append(faqHeader, leftFaq, rightFaq);

  const footer = create('div');
  footer.id = 'footer';
  const footerText = create('p');
  footerText.textContent = '© 2020 The Vegan Chef';
  const githubText = create('p');
  const githubLink = create('a');
  githubLink.href = 'https://github.com/TomSoerr/odin-restaurant-page';
  githubLink.textContent = 'GitHub';
  githubText.append(githubLink);
  footer.append(footerText, githubText);

  page.append(welcomeDiv, descriptionDiv, galleryDiv, faq, footer);
  return page;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu() {
  function create(tag) {
    return document.createElement(tag);
  }

  const page = create('div');
  page.classList.add('page');

  const menuOneImg = create('div');
  menuOneImg.id = 'menu-1';
  const menuOneTextWrapper = create('div');
  menuOneTextWrapper.id = 'menu-1-text';
  const menuOneHeading = create('h2');
  menuOneHeading.textContent = 'Vegan Bowl';
  const menuOneDescription = create('p');
  menuOneDescription.textContent = (
    'The Vegan Bowl is a vegan salad with tofu; cheese, kale, avocado, tomatoes, onion, etc. \r\n Tamarind\'s Veggie Bowl is a bowl of vegetables that can be had in only two sizes! \r\n One size up, like vegan or gluten free. Try our Vegan Cheese Bowl with all the vegan cheese you want. Our tofu bowl has 1/4 cup vegan butter, 1/4 cup vegan soy cheese, 1/2 cup brown sugar. We use soy and coconut butter and try to use 100% in bulk (1 Tbsp to the amount you need for this bowl). As always, there is a limit on how much you can add, but if you\'re making them with almond milk or other dairy and butter substitutes, add 2 small bags.'
  );
  menuOneTextWrapper.append(menuOneHeading, menuOneDescription);

  const menuTwoImg = create('div');
  menuTwoImg.id = 'menu-2';
  const menuTwoTextWrapper = create('div');
  menuTwoTextWrapper.id = 'menu-2-text';
  const menuTwoHeading = create('h2');
  menuTwoHeading.textContent = 'Vegan Pizza';
  const menuTwoDescription = create('p');
  menuTwoDescription.textContent = 'A vegan pizza with a side of fries.';
  menuTwoTextWrapper.append(menuTwoHeading, menuTwoDescription);

  const menuThreeImg = create('div');
  menuThreeImg.id = 'menu-3';
  const menuThreeTextWrapper = create('div');
  menuThreeTextWrapper.id = 'menu-3-text';
  const menuThreeHeading = create('h2');
  menuThreeHeading.textContent = 'Vegan Salad';
  const menuThreeDescription = create('p');
  menuThreeDescription.textContent = 'A vegan salad with a side of fries.';
  menuThreeTextWrapper.append(menuThreeHeading, menuThreeDescription);

  const footer = create('div');
  footer.id = 'footer';
  const footerText = create('p');
  footerText.textContent = '© 2020 The Vegan Chef';
  const githubText = create('p');
  const githubLink = create('a');
  githubLink.href = 'https://github.com/TomSoerr/odin-restaurant-page';
  githubLink.textContent = 'GitHub';
  githubText.append(githubLink);
  footer.append(footerText, githubText);

  page.append(
    menuOneImg,
    menuOneTextWrapper,
    menuTwoTextWrapper,
    menuTwoImg,
    menuThreeImg,
    menuThreeTextWrapper,
    footer,
  );
  return page;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/img/food-1.jpg":
/*!****************************!*\
  !*** ./src/img/food-1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c544d48d49b5454048e.jpg";

/***/ }),

/***/ "./src/img/food-2.jpg":
/*!****************************!*\
  !*** ./src/img/food-2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df6ecb67871533190b1a.jpg";

/***/ }),

/***/ "./src/img/food-3.jpg":
/*!****************************!*\
  !*** ./src/img/food-3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4a8d21ea658cfd072e9.jpg";

/***/ }),

/***/ "./src/img/home-1.jpg":
/*!****************************!*\
  !*** ./src/img/home-1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27a72eb75fd6c357ce66.jpg";

/***/ }),

/***/ "./src/img/home-2.jpg":
/*!****************************!*\
  !*** ./src/img/home-2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c68428f33d37af98d25.jpg";

/***/ }),

/***/ "./src/img/home-3.jpg":
/*!****************************!*\
  !*** ./src/img/home-3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb2feb60a6a3a391049e.jpg";

/***/ }),

/***/ "./src/img/home-4.jpg":
/*!****************************!*\
  !*** ./src/img/home-4.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d2794dc83c9f6633434.jpg";

/***/ }),

/***/ "./src/img/home-5.jpg":
/*!****************************!*\
  !*** ./src/img/home-5.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dad9d65c32fe0382ede7.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "840d1aab8519781519ab.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






class restaurantPage {
  #content = document.querySelector('#content');

  constructor() {
    this.#homePage();
  }

  #createTab(tabName) {
    const tab = document.createElement('p');
    tab.classList.add('tab');
    tab.textContent = tabName;
    return tab;
  }

  #homePage() {
    const menuTab = this.#createTab('Menu');
    menuTab.addEventListener('click', () => {
      this.#menuPage();
    });
    const contactTab = this.#createTab('Contact');
    contactTab.addEventListener('click', () => {
      this.#contactPage();
    });
    
    this.#content.replaceChildren(
      (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])([menuTab, contactTab]),
      (0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    );
  }

  #menuPage() {
    const homeTab = this.#createTab('Home');
    homeTab.addEventListener('click', () => {
      this.#homePage();
    });
    const contactTab = this.#createTab('Contact');
    contactTab.addEventListener('click', () => {
      this.#contactPage();
    });

    this.#content.replaceChildren(
      (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])([homeTab, contactTab]),
      (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    );
  }

  #contactPage() {
    const homeTab = this.#createTab('Home');
    homeTab.addEventListener('click', () => {
      this.#homePage();
    });
    const menuTab = this.#createTab('Menu');
    menuTab.addEventListener('click', () => {
      this.#menuPage();
    });

    this.#content.replaceChildren(
      (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])([homeTab, menuTab]),
      (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    );
  }
}

const page = new restaurantPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ2pCdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkZwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNKO0FBQ0E7QUFDTTs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSxzREFBTTtBQUNaLE1BQU0sb0RBQUk7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxNQUFNLHNEQUFNO0FBQ1osTUFBTSxvREFBSTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sc0RBQU07QUFDWixNQUFNLHVEQUFPO0FBQ2I7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9ob21lLTEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvaG9tZS0yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2hvbWUtMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9ob21lLTQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWcvaG9tZS01LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1nL2Zvb2QtMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9mb29kLTIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi9pbWcvZm9vZC0zLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAtLWxpZ2h0LWJyb3duOiAjZmVmYWUwO1xcbiAgLS1saWdodC1ncmVlbjogI2U5ZjVkYjtcXG4gIC0tdGV4dC1jb2xvcjogIzAwMWEyMztcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWRiO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHZ3IDFmciAxZnIgMTB2dztcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLyogSEVBREVSICovXFxuXFxuI2hlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtaW4taGVpZ2h0OiA2dmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gIHotaW5kZXg6IDE7XFxuICAvKiBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICNiNWM5OWE7ICovXFxuICBib3gtc2hhZG93OiAwcHggLTFweCAxMHB4ICM2MDZjMzg7XFxufVxcblxcbiNoZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNHZoO1xcbn1cXG5cXG4jaGVhZGVyIC50YWIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBIT01FIFBBR0UgKi9cXG5cXG4ucGFnZSB7XFxuICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxuLnBhZ2UgI3dlbGNvbWUge1xcbiAgZ3JpZC1jb2x1bW46c3BhbiA0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogOTR2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbi10b3A6IDZ2aDtcXG59XFxuXFxuLnBhZ2UgI3dlbGNvbWUtdGV4dC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzAlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogNDByZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtYnJvd24pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlYjdhM2M3O1xcbiAgcGFkZGluZzogMXJlbSAxMHZ3IDFyZW0gMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4ucGFnZSAjd2VsY29tZS10ZXh0LXdyYXBwZXIgI3dlbGNvbWUtdGV4dCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDBweCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIG1hcmdpbjogMDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuLnBhZ2UgI3dlbGNvbWUtdGV4dC13cmFwcGVyICN3ZWxjb21lLXRleHQgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tdGV4dC1jb2xvciksIDZweCA2cHggdmFyKC0tbGlnaHQtYnJvd24pO1xcbiAgZm9udC1zaXplOiA0LjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucGFnZSAjZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nOiAycmVtIDA7XFxufVxcblxcbi5wYWdlICNkZXNjcmlwdGlvbiBoMiB7XFxuICBmb250LXNpemU6IDQuNXJlbTtcXG4gIGNvbG9yOiAjNjA2YzM4O1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tdGV4dC1jb2xvciksIDZweCA2cHggI2RkYTE1ZTtcXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5wYWdlICNnYWxsZXJ5IHtcXG4gIG1pbi1oZWlnaHQ6IDk0dmg7XFxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJyb3duKTtcXG4gIGdhcDogMC41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZTogXFxuICAgIFxcXCJ0aHJlZSB0d28gdHdvXFxcIiA0ZnJcXG4gICAgXFxcInRocmVlIGZvdXIgZml2ZVxcXCIgNWZyIC9cXG4gICAgMWZyIDFmciAxZnI7XFxufVxcblxcbi5wYWdlICNnYWxsZXJ5ICNob21lLTIge1xcbiAgZ3JpZC1hcmVhOiB0d287XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFnZSAjZ2FsbGVyeSAjaG9tZS0zIHtcXG4gIGdyaWQtYXJlYTogdGhyZWU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFnZSAjZ2FsbGVyeSAjaG9tZS00IHtcXG4gIGdyaWQtYXJlYTogZm91cjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wYWdlICNnYWxsZXJ5ICNob21lLTUge1xcbiAgZ3JpZC1hcmVhOiBmaXZlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBhZ2UgI2ZhcSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XFxuICBwYWRkaW5nOiAycmVtIDJyZW07XFxuICBnYXA6IDJyZW0gMTB2dztcXG4gIG1pbi1oZWlnaHQ6IDg4dmg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLnBhZ2UgI2ZhcSBoMyB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4ucGFnZSAjZmFxICNmYXEtaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQuNXJlbTtcXG4gIGNvbG9yOiAjNjA2YzM4O1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tdGV4dC1jb2xvciksIDZweCA2cHggI2RkYTE1ZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnBhZ2UgI2ZhcSBwIHtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLnBhZ2UgI2Zvb3RlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbiAgaGVpZ2h0OiA2dmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJyb3duKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4ICNjOWFlOGY7XFxufVxcblxcbi5wYWdlICNmb290ZXIgYSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi8qIE1FTlUgUEFHRSAqL1xcblxcbi5wYWdlICNtZW51LTEtdGV4dCBwLFxcbi5wYWdlICNtZW51LTItdGV4dCBwLFxcbi5wYWdlICNtZW51LTMtdGV4dCBwIHtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLnBhZ2UgI21lbnUtMS10ZXh0IGgyLFxcbi5wYWdlICNtZW51LTItdGV4dCBoMixcXG4ucGFnZSAjbWVudS0zLXRleHQgaDIge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgY29sb3I6ICM2MDZjMzg7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCB2YXIoLS10ZXh0LWNvbG9yKSwgNnB4IDZweCAjZGRhMTVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGFnZSAjbWVudS0xIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIG1hcmdpbi10b3A6IDZ2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG59XFxuXFxuLnBhZ2UgI21lbnUtMS10ZXh0IHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbiAgbWFyZ2luLXRvcDogNnZoO1xcbiAgcGFkZGluZzogMnJlbSAwcmVtIDJyZW0gMXJlbTtcXG59XFxuXFxuLnBhZ2UgI21lbnUtMi10ZXh0IHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtIDJyZW0gMHJlbTtcXG59XFxuXFxuLnBhZ2UgI21lbnUtMiB7XFxuICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5wYWdlICNtZW51LTMge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ucGFnZSAjbWVudS0zLXRleHQge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBwYWRkaW5nOiAycmVtIDByZW0gMnJlbSAxcmVtO1xcbn1cXG5cXG4vKiBDT05UQUNUIFBBR0UgKi9cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsaUNBQWlDO0VBQ2pDLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHdCQUF3QjtBQUMxQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLFVBQVU7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LGdCQUFnQjtFQUNoQix5REFBeUM7RUFDekMsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7O0FBRUEsaUJBQWlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIC0tbGlnaHQtYnJvd246ICNmZWZhZTA7XFxuICAtLWxpZ2h0LWdyZWVuOiAjZTlmNWRiO1xcbiAgLS10ZXh0LWNvbG9yOiAjMDAxYTIzO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZGI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwdncgMWZyIDFmciAxMHZ3O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG4jaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1pbi1oZWlnaHQ6IDZ2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgei1pbmRleDogMTtcXG4gIC8qIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgI2I1Yzk5YTsgKi9cXG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDEwcHggIzYwNmMzODtcXG59XFxuXFxuI2hlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiA0dmg7XFxufVxcblxcbiNoZWFkZXIgLnRhYiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEhPTUUgUEFHRSAqL1xcblxcbi5wYWdlIHtcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG5cXG4ucGFnZSAjd2VsY29tZSB7XFxuICBncmlkLWNvbHVtbjpzcGFuIDQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiA5NHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvaG9tZS0xLmpwZycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbi10b3A6IDZ2aDtcXG59XFxuXFxuLnBhZ2UgI3dlbGNvbWUtdGV4dC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzAlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogNDByZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtYnJvd24pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlYjdhM2M3O1xcbiAgcGFkZGluZzogMXJlbSAxMHZ3IDFyZW0gMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4ucGFnZSAjd2VsY29tZS10ZXh0LXdyYXBwZXIgI3dlbGNvbWUtdGV4dCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDBweCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIG1hcmdpbjogMDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuLnBhZ2UgI3dlbGNvbWUtdGV4dC13cmFwcGVyICN3ZWxjb21lLXRleHQgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tdGV4dC1jb2xvciksIDZweCA2cHggdmFyKC0tbGlnaHQtYnJvd24pO1xcbiAgZm9udC1zaXplOiA0LjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucGFnZSAjZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nOiAycmVtIDA7XFxufVxcblxcbi5wYWdlICNkZXNjcmlwdGlvbiBoMiB7XFxuICBmb250LXNpemU6IDQuNXJlbTtcXG4gIGNvbG9yOiAjNjA2YzM4O1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tdGV4dC1jb2xvciksIDZweCA2cHggI2RkYTE1ZTtcXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5wYWdlICNnYWxsZXJ5IHtcXG4gIG1pbi1oZWlnaHQ6IDk0dmg7XFxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJyb3duKTtcXG4gIGdhcDogMC41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZTogXFxuICAgIFxcXCJ0aHJlZSB0d28gdHdvXFxcIiA0ZnJcXG4gICAgXFxcInRocmVlIGZvdXIgZml2ZVxcXCIgNWZyIC9cXG4gICAgMWZyIDFmciAxZnI7XFxufVxcblxcbi5wYWdlICNnYWxsZXJ5ICNob21lLTIge1xcbiAgZ3JpZC1hcmVhOiB0d287XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2hvbWUtMi5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBhZ2UgI2dhbGxlcnkgI2hvbWUtMyB7XFxuICBncmlkLWFyZWE6IHRocmVlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9ob21lLTMuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wYWdlICNnYWxsZXJ5ICNob21lLTQge1xcbiAgZ3JpZC1hcmVhOiBmb3VyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9ob21lLTQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wYWdlICNnYWxsZXJ5ICNob21lLTUge1xcbiAgZ3JpZC1hcmVhOiBmaXZlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9ob21lLTUuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wYWdlICNmYXEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xcbiAgcGFkZGluZzogMnJlbSAycmVtO1xcbiAgZ2FwOiAycmVtIDEwdnc7XFxuICBtaW4taGVpZ2h0OiA4OHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5wYWdlICNmYXEgaDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLnBhZ2UgI2ZhcSAjZmFxLWhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0LjVyZW07XFxuICBjb2xvcjogIzYwNmMzODtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IHZhcigtLXRleHQtY29sb3IpLCA2cHggNnB4ICNkZGExNWU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wYWdlICNmYXEgcCB7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5wYWdlICNmb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcXG4gIGhlaWdodDogNnZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1icm93bik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAjYzlhZThmO1xcbn1cXG5cXG4ucGFnZSAjZm9vdGVyIGEge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4vKiBNRU5VIFBBR0UgKi9cXG5cXG4ucGFnZSAjbWVudS0xLXRleHQgcCxcXG4ucGFnZSAjbWVudS0yLXRleHQgcCxcXG4ucGFnZSAjbWVudS0zLXRleHQgcCB7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjlyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxufVxcblxcbi5wYWdlICNtZW51LTEtdGV4dCBoMixcXG4ucGFnZSAjbWVudS0yLXRleHQgaDIsXFxuLnBhZ2UgI21lbnUtMy10ZXh0IGgyIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGNvbG9yOiAjNjA2YzM4O1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tdGV4dC1jb2xvciksIDZweCA2cHggI2RkYTE1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBhZ2UgI21lbnUtMSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBtYXJnaW4tdG9wOiA2dmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2Zvb2QtMS5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4ucGFnZSAjbWVudS0xLXRleHQge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBtYXJnaW4tdG9wOiA2dmg7XFxuICBwYWRkaW5nOiAycmVtIDByZW0gMnJlbSAxcmVtO1xcbn1cXG5cXG4ucGFnZSAjbWVudS0yLXRleHQge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBwYWRkaW5nOiAycmVtIDFyZW0gMnJlbSAwcmVtO1xcbn1cXG5cXG4ucGFnZSAjbWVudS0yIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNTtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2Zvb2QtMi5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5wYWdlICNtZW51LTMge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvZm9vZC0zLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLnBhZ2UgI21lbnUtMy10ZXh0IHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbiAgcGFkZGluZzogMnJlbSAwcmVtIDJyZW0gMXJlbTtcXG59XFxuXFxuLyogQ09OVEFDVCBQQUdFICovXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZSh0YWcpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICB9XG5cbiAgY29uc3QgcGFnZSA9IGNyZWF0ZSgnZGl2Jyk7XG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuXG4gIC8vIGNvbnRlbnRcblxuICBjb25zdCBmb290ZXIgPSBjcmVhdGUoJ2RpdicpO1xuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGNyZWF0ZSgncCcpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gJ8KpIDIwMjAgVGhlIFZlZ2FuIENoZWYnO1xuICBjb25zdCBnaXRodWJUZXh0ID0gY3JlYXRlKCdwJyk7XG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBjcmVhdGUoJ2EnKTtcbiAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9Ub21Tb2Vyci9vZGluLXJlc3RhdXJhbnQtcGFnZSc7XG4gIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSAnR2l0SHViJztcbiAgZ2l0aHViVGV4dC5hcHBlbmQoZ2l0aHViTGluayk7XG4gIGZvb3Rlci5hcHBlbmQoZm9vdGVyVGV4dCwgZ2l0aHViVGV4dCk7XG5cbiAgcGFnZS5hcHBlbmQoIGZvb3Rlcik7XG4gIHJldHVybiBwYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0O1xuIiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWcvbG9nby5wbmcnO1xuXG5mdW5jdGlvbiBoZWFkZXIodGFicykge1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2LmlkID0gJ2hlYWRlcic7XG5cbiAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsb2dvSW1nLnNyYyA9IGxvZ287XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcblxuICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGFiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlckRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiZnVuY3Rpb24gaG9tZSgpIHtcbiAgZnVuY3Rpb24gY3JlYXRlKHRhZykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIH1cblxuICBjb25zdCBwYWdlID0gY3JlYXRlKCdkaXYnKTtcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG5cbiAgY29uc3Qgd2VsY29tZURpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIHdlbGNvbWVEaXYuaWQgPSAnd2VsY29tZSc7XG4gIGNvbnN0IHdlbGNvbWVUZXh0V3JhcHBlciA9IGNyZWF0ZSgnZGl2Jyk7XG4gIHdlbGNvbWVUZXh0V3JhcHBlci5pZCA9ICd3ZWxjb21lLXRleHQtd3JhcHBlcic7XG4gIGNvbnN0IHdlbGNvbWVUZXh0ID0gY3JlYXRlKCdwJyk7XG4gIHdlbGNvbWVUZXh0LmlkID0gJ3dlbGNvbWUtdGV4dCc7XG4gIGNvbnN0IHdlbGNvbWVUZXh0U3BhbiA9IGNyZWF0ZSgnc3BhbicpO1xuICB3ZWxjb21lVGV4dFNwYW4udGV4dENvbnRlbnQgPSAnVGhlIFZlZ2FuIENoZWYgXFxyXFxuJztcbiAgd2VsY29tZVRleHQuYXBwZW5kKFxuICAgIHdlbGNvbWVUZXh0U3BhbixcbiAgICAnV2UgYXJlIGEgZm91ciBzdGFyIHZlZ2FuIG9ubHkgUmVzdGF1cmFudCBpbiBBdXN0cmlhLiBDb21lIGFuZCB2aXNpdCB1cy4gWW91IHdpbGwgbm90IGJlIGRpc2FwcG9pbnRlZCEnLFxuICApO1xuICB3ZWxjb21lVGV4dFdyYXBwZXIuYXBwZW5kKHdlbGNvbWVUZXh0KTtcbiAgd2VsY29tZURpdi5hcHBlbmQod2VsY29tZVRleHRXcmFwcGVyKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uRGl2LmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgY29uc3QgZGVzY3JpcHRpb25IZWFkZXIgPSBjcmVhdGUoJ2gyJyk7XG4gIGRlc2NyaXB0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ091ciBTdG9yeSc7XG4gIGRlc2NyaXB0aW9uSGVhZGVyLmlkID0gJ2Rlc2NyaXB0aW9uLWhlYWRlcic7XG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGNyZWF0ZSgncCcpO1xuICBkZXNjcmlwdGlvblRleHQuaWQgPSAnZGVzY3JpcHRpb24tdGV4dCc7XG4gIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IChcbiAgICAnT3VyIHJlc3RhdXJhbnQgd2FzIGZvdW5kZWQgaW4gdGhlIGVhcmx5IDIwMDBzIGJ5IGEgZ3JvdXAgb2YgZnJpZW5kcyB3aG8gd2FudGVkIHRvIGNyZWF0ZSBhIG5ldyBraW5kIG9mIHJlc3RhdXJhbnQuIFRoZSBtYWluIHJlYXNvbiBmb3IgdGhlIGVzdGFibGlzaG1lbnRcXCdzIHN1Y2Nlc3MgaXMgdGhhdCB0aGVpciBtZW51IGlzIGZyZXNoIGFuZCBkZWxpY2lvdXMgYnV0IGFsc28gc2VydmVzIGFsbCB0aGUgZm9vZHMgdGhleSBjaG9vc2UgdG8gcHV0IGluIHRoZWlyIG1lbnUuIFdlIGhhdmUgbnVtZXJvdXMgc3BlY2lhbHRpZXMgYW5kIG1hbnkgb3RoZXJzIHdoaWNoIGFyZSBqdXN0IHBsYWluIGdvb2QgZm9vZC4gTWFueSBoYXZlIGEgZ3JlYXQgdmFsdWUgdG8gdGhlIGZvb2QgYW5kIG91ciBsb2NhbCBmcmllbmRzIGhhdmUgYWx3YXlzIGJlZW4gdGhlcmUgdG8gbWFrZSB0aGF0IHNwZWNpYWwgZm9vZCBldmVuIGJldHRlci4gVGhlIG1lbnUgaXMgYWxzbyB2ZXJ5IGRpZmZlcmVudCB0byBob3cgYW55IHJlc3RhdXJhbnQgdXN1YWxseSBpcy4gQXMgZm9yIHRoZSBmb29kLCB3ZSBhbGwgZWF0IGEgc3BlY2lhbCBkaWV0IHNvIGFueSB0aW1lIHdlIGdvIHRvIGEgcmVzdGF1cmFudCBhbmQgZW5qb3kgYSB1bmlxdWUgZXhwZXJpZW5jZSwgd2Ugd2lsbCBhbHdheXMgaGF2ZSBzb21ldGhpbmcgd2UgY2FuIG1ha2Ugc3BlY2lhbCBiZWNhdXNlIHdlIGFyZW5cXCd0IHRyeWluZyB0byB0YWtlIHRoZSBmb29kIGF3YXkgZnJvbSB0aGUgcGxhY2Ugd2hpY2ggaGFzIGdyZWF0IHZhbHVlIHRvIHRoZSBhcmVhLiB+IHNvbWUgQUkgZ2VuZXJhdGVkIHRleHQuJ1xuICApO1xuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmQoZGVzY3JpcHRpb25IZWFkZXIsIGRlc2NyaXB0aW9uVGV4dCk7XG5cbiAgY29uc3QgZ2FsbGVyeURpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGdhbGxlcnlEaXYuaWQgPSAnZ2FsbGVyeSc7XG4gIGNvbnN0IGhvbWVUd28gPSBjcmVhdGUoJ2RpdicpO1xuICBob21lVHdvLmlkID0gJ2hvbWUtMic7XG4gIGNvbnN0IGhvbWVUaHJlZSA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGhvbWVUaHJlZS5pZCA9ICdob21lLTMnO1xuICBjb25zdCBob21lRm91ciA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGhvbWVGb3VyLmlkID0gJ2hvbWUtNCc7XG4gIGNvbnN0IGhvbWVGaXZlID0gY3JlYXRlKCdkaXYnKTtcbiAgaG9tZUZpdmUuaWQgPSAnaG9tZS01JztcbiAgZ2FsbGVyeURpdi5hcHBlbmQoaG9tZVR3bywgaG9tZVRocmVlLCBob21lRm91ciwgaG9tZUZpdmUpO1xuXG4gIGNvbnN0IGZhcSA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGZhcS5pZCA9ICdmYXEnO1xuICBjb25zdCBmYXFIZWFkZXIgPSBjcmVhdGUoJ2gyJyk7XG4gIGZhcUhlYWRlci50ZXh0Q29udGVudCA9ICdGQVEnO1xuICBmYXFIZWFkZXIuaWQgPSAnZmFxLWhlYWRlcic7XG4gIGNvbnN0IGxlZnRGYXEgPSBjcmVhdGUoJ2RpdicpO1xuICBsZWZ0RmFxLmlkID0gJ2xlZnQtZmFxJztcbiAgY29uc3QgbGVmdFF1ZXN0aW9uT25lSGVhZGVyID0gY3JlYXRlKCdoMycpO1xuICBsZWZ0UXVlc3Rpb25PbmVIZWFkZXIudGV4dENvbnRlbnQgPSAnV2hhdCBpcyBWZWdhbj8nO1xuICBjb25zdCBsZWZ0UXVlc3Rpb25PbmVUZXh0ID0gY3JlYXRlKCdwJyk7XG4gIGxlZnRRdWVzdGlvbk9uZVRleHQudGV4dENvbnRlbnQgPSAoXG4gICAgJ1ZlZ2FuaXNtIGlzIHRoZSBwcmFjdGljZSBvZiBhYnN0YWluaW5nIGZyb20gdGhlIHVzZSBvZiBhbmltYWwgcHJvZHVjdHMsIHBhcnRpY3VsYXJseSBpbiBkaWV0LCBhbmQgYW4gYXNzb2NpYXRlZCBwaGlsb3NvcGh5IHRoYXQgcmVqZWN0cyB0aGUgY29tbW9kaXR5IHN0YXR1cyBvZiBhbmltYWxzLiBWZWdldGFibGVzIGFyZSBub3QgcmVxdWlyZWQgdG8gaGF2ZSBhbmltYWwgd2VsZmFyZSwgYW5kIHNvLCBtb3N0IGZhbW91c2x5LCB2ZWdhbmlzbSBleGNsdWRlcyBhbmltYWwgcHJvZHVjdHMgZnJvbSBhZ3JpY3VsdHVyZS4gSG93ZXZlciwgb3JnYW5pYyBmb29kIGlzIGNvbW1vbmx5IGNvbnNpZGVyZWQgYSBoZWFsdGh5IG9wdGlvbiBiZWNhdXNlIHRoZSBwcm9kdWN0aW9uIG9mIG5hdHVyYWwgaW5ncmVkaWVudHMgcmVxdWlyZXMgdGhhdCB5b3UgYWxzbyBlYXQgdmVnYW4uJ1xuICApO1xuICBsZWZ0RmFxLmFwcGVuZChsZWZ0UXVlc3Rpb25PbmVIZWFkZXIsIGxlZnRRdWVzdGlvbk9uZVRleHQpO1xuICBjb25zdCByaWdodEZhcSA9IGNyZWF0ZSgnZGl2Jyk7XG4gIHJpZ2h0RmFxLmlkID0gJ3JpZ2h0LWZhcSc7XG4gIGNvbnN0IHJpZ2h0UXVlc3Rpb25PbmVIZWFkZXIgPSBjcmVhdGUoJ2gzJyk7XG4gIHJpZ2h0UXVlc3Rpb25PbmVIZWFkZXIudGV4dENvbnRlbnQgPSAnQ2FuIEkgcmVzZXJ2ZSBhIHRhYmxlPyc7XG4gIGNvbnN0IHJpZ2h0UXVlc3Rpb25PbmVUZXh0ID0gY3JlYXRlKCdwJyk7XG4gIHJpZ2h0UXVlc3Rpb25PbmVUZXh0LnRleHRDb250ZW50ID0gKFxuICAgICdZZXMsIHlvdSBjYW4gcmVzZXJ2ZSBhIHRhYmxlIGF0IG91ciByZXN0YXVyYW50LiBZb3UgY2FuIHJlc2VydmUgYSB0YWJsZSBieSBjYWxsaW5nIHVzIG9yIGJ5IHNlbmRpbmcgdXMgYW4gZW1haWwuIFdlIHdpbGwgY29udGFjdCB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS4nXG4gICk7XG4gIHJpZ2h0RmFxLmFwcGVuZChyaWdodFF1ZXN0aW9uT25lSGVhZGVyLCByaWdodFF1ZXN0aW9uT25lVGV4dCk7XG4gIGZhcS5hcHBlbmQoZmFxSGVhZGVyLCBsZWZ0RmFxLCByaWdodEZhcSk7XG5cbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlKCdkaXYnKTtcbiAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG4gIGNvbnN0IGZvb3RlclRleHQgPSBjcmVhdGUoJ3AnKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9ICfCqSAyMDIwIFRoZSBWZWdhbiBDaGVmJztcbiAgY29uc3QgZ2l0aHViVGV4dCA9IGNyZWF0ZSgncCcpO1xuICBjb25zdCBnaXRodWJMaW5rID0gY3JlYXRlKCdhJyk7XG4gIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vVG9tU29lcnIvb2Rpbi1yZXN0YXVyYW50LXBhZ2UnO1xuICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gJ0dpdEh1Yic7XG4gIGdpdGh1YlRleHQuYXBwZW5kKGdpdGh1YkxpbmspO1xuICBmb290ZXIuYXBwZW5kKGZvb3RlclRleHQsIGdpdGh1YlRleHQpO1xuXG4gIHBhZ2UuYXBwZW5kKHdlbGNvbWVEaXYsIGRlc2NyaXB0aW9uRGl2LCBnYWxsZXJ5RGl2LCBmYXEsIGZvb3Rlcik7XG4gIHJldHVybiBwYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiZnVuY3Rpb24gbWVudSgpIHtcbiAgZnVuY3Rpb24gY3JlYXRlKHRhZykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIH1cblxuICBjb25zdCBwYWdlID0gY3JlYXRlKCdkaXYnKTtcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG5cbiAgY29uc3QgbWVudU9uZUltZyA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG1lbnVPbmVJbWcuaWQgPSAnbWVudS0xJztcbiAgY29uc3QgbWVudU9uZVRleHRXcmFwcGVyID0gY3JlYXRlKCdkaXYnKTtcbiAgbWVudU9uZVRleHRXcmFwcGVyLmlkID0gJ21lbnUtMS10ZXh0JztcbiAgY29uc3QgbWVudU9uZUhlYWRpbmcgPSBjcmVhdGUoJ2gyJyk7XG4gIG1lbnVPbmVIZWFkaW5nLnRleHRDb250ZW50ID0gJ1ZlZ2FuIEJvd2wnO1xuICBjb25zdCBtZW51T25lRGVzY3JpcHRpb24gPSBjcmVhdGUoJ3AnKTtcbiAgbWVudU9uZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gKFxuICAgICdUaGUgVmVnYW4gQm93bCBpcyBhIHZlZ2FuIHNhbGFkIHdpdGggdG9mdTsgY2hlZXNlLCBrYWxlLCBhdm9jYWRvLCB0b21hdG9lcywgb25pb24sIGV0Yy4gXFxyXFxuIFRhbWFyaW5kXFwncyBWZWdnaWUgQm93bCBpcyBhIGJvd2wgb2YgdmVnZXRhYmxlcyB0aGF0IGNhbiBiZSBoYWQgaW4gb25seSB0d28gc2l6ZXMhIFxcclxcbiBPbmUgc2l6ZSB1cCwgbGlrZSB2ZWdhbiBvciBnbHV0ZW4gZnJlZS4gVHJ5IG91ciBWZWdhbiBDaGVlc2UgQm93bCB3aXRoIGFsbCB0aGUgdmVnYW4gY2hlZXNlIHlvdSB3YW50LiBPdXIgdG9mdSBib3dsIGhhcyAxLzQgY3VwIHZlZ2FuIGJ1dHRlciwgMS80IGN1cCB2ZWdhbiBzb3kgY2hlZXNlLCAxLzIgY3VwIGJyb3duIHN1Z2FyLiBXZSB1c2Ugc295IGFuZCBjb2NvbnV0IGJ1dHRlciBhbmQgdHJ5IHRvIHVzZSAxMDAlIGluIGJ1bGsgKDEgVGJzcCB0byB0aGUgYW1vdW50IHlvdSBuZWVkIGZvciB0aGlzIGJvd2wpLiBBcyBhbHdheXMsIHRoZXJlIGlzIGEgbGltaXQgb24gaG93IG11Y2ggeW91IGNhbiBhZGQsIGJ1dCBpZiB5b3VcXCdyZSBtYWtpbmcgdGhlbSB3aXRoIGFsbW9uZCBtaWxrIG9yIG90aGVyIGRhaXJ5IGFuZCBidXR0ZXIgc3Vic3RpdHV0ZXMsIGFkZCAyIHNtYWxsIGJhZ3MuJ1xuICApO1xuICBtZW51T25lVGV4dFdyYXBwZXIuYXBwZW5kKG1lbnVPbmVIZWFkaW5nLCBtZW51T25lRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IG1lbnVUd29JbWcgPSBjcmVhdGUoJ2RpdicpO1xuICBtZW51VHdvSW1nLmlkID0gJ21lbnUtMic7XG4gIGNvbnN0IG1lbnVUd29UZXh0V3JhcHBlciA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG1lbnVUd29UZXh0V3JhcHBlci5pZCA9ICdtZW51LTItdGV4dCc7XG4gIGNvbnN0IG1lbnVUd29IZWFkaW5nID0gY3JlYXRlKCdoMicpO1xuICBtZW51VHdvSGVhZGluZy50ZXh0Q29udGVudCA9ICdWZWdhbiBQaXp6YSc7XG4gIGNvbnN0IG1lbnVUd29EZXNjcmlwdGlvbiA9IGNyZWF0ZSgncCcpO1xuICBtZW51VHdvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQSB2ZWdhbiBwaXp6YSB3aXRoIGEgc2lkZSBvZiBmcmllcy4nO1xuICBtZW51VHdvVGV4dFdyYXBwZXIuYXBwZW5kKG1lbnVUd29IZWFkaW5nLCBtZW51VHdvRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IG1lbnVUaHJlZUltZyA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG1lbnVUaHJlZUltZy5pZCA9ICdtZW51LTMnO1xuICBjb25zdCBtZW51VGhyZWVUZXh0V3JhcHBlciA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG1lbnVUaHJlZVRleHRXcmFwcGVyLmlkID0gJ21lbnUtMy10ZXh0JztcbiAgY29uc3QgbWVudVRocmVlSGVhZGluZyA9IGNyZWF0ZSgnaDInKTtcbiAgbWVudVRocmVlSGVhZGluZy50ZXh0Q29udGVudCA9ICdWZWdhbiBTYWxhZCc7XG4gIGNvbnN0IG1lbnVUaHJlZURlc2NyaXB0aW9uID0gY3JlYXRlKCdwJyk7XG4gIG1lbnVUaHJlZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0EgdmVnYW4gc2FsYWQgd2l0aCBhIHNpZGUgb2YgZnJpZXMuJztcbiAgbWVudVRocmVlVGV4dFdyYXBwZXIuYXBwZW5kKG1lbnVUaHJlZUhlYWRpbmcsIG1lbnVUaHJlZURlc2NyaXB0aW9uKTtcblxuICBjb25zdCBmb290ZXIgPSBjcmVhdGUoJ2RpdicpO1xuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGNyZWF0ZSgncCcpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gJ8KpIDIwMjAgVGhlIFZlZ2FuIENoZWYnO1xuICBjb25zdCBnaXRodWJUZXh0ID0gY3JlYXRlKCdwJyk7XG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBjcmVhdGUoJ2EnKTtcbiAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9Ub21Tb2Vyci9vZGluLXJlc3RhdXJhbnQtcGFnZSc7XG4gIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSAnR2l0SHViJztcbiAgZ2l0aHViVGV4dC5hcHBlbmQoZ2l0aHViTGluayk7XG4gIGZvb3Rlci5hcHBlbmQoZm9vdGVyVGV4dCwgZ2l0aHViVGV4dCk7XG5cbiAgcGFnZS5hcHBlbmQoXG4gICAgbWVudU9uZUltZyxcbiAgICBtZW51T25lVGV4dFdyYXBwZXIsXG4gICAgbWVudVR3b1RleHRXcmFwcGVyLFxuICAgIG1lbnVUd29JbWcsXG4gICAgbWVudVRocmVlSW1nLFxuICAgIG1lbnVUaHJlZVRleHRXcmFwcGVyLFxuICAgIGZvb3RlcixcbiAgKTtcbiAgcmV0dXJuIHBhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuY2xhc3MgcmVzdGF1cmFudFBhZ2Uge1xuICAjY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jaG9tZVBhZ2UoKTtcbiAgfVxuXG4gICNjcmVhdGVUYWIodGFiTmFtZSkge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgdGFiLnRleHRDb250ZW50ID0gdGFiTmFtZTtcbiAgICByZXR1cm4gdGFiO1xuICB9XG5cbiAgI2hvbWVQYWdlKCkge1xuICAgIGNvbnN0IG1lbnVUYWIgPSB0aGlzLiNjcmVhdGVUYWIoJ01lbnUnKTtcbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4jbWVudVBhZ2UoKTtcbiAgICB9KTtcbiAgICBjb25zdCBjb250YWN0VGFiID0gdGhpcy4jY3JlYXRlVGFiKCdDb250YWN0Jyk7XG4gICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuI2NvbnRhY3RQYWdlKCk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy4jY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oXG4gICAgICBoZWFkZXIoW21lbnVUYWIsIGNvbnRhY3RUYWJdKSxcbiAgICAgIGhvbWUoKSxcbiAgICApO1xuICB9XG5cbiAgI21lbnVQYWdlKCkge1xuICAgIGNvbnN0IGhvbWVUYWIgPSB0aGlzLiNjcmVhdGVUYWIoJ0hvbWUnKTtcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4jaG9tZVBhZ2UoKTtcbiAgICB9KTtcbiAgICBjb25zdCBjb250YWN0VGFiID0gdGhpcy4jY3JlYXRlVGFiKCdDb250YWN0Jyk7XG4gICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuI2NvbnRhY3RQYWdlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiNjb250ZW50LnJlcGxhY2VDaGlsZHJlbihcbiAgICAgIGhlYWRlcihbaG9tZVRhYiwgY29udGFjdFRhYl0pLFxuICAgICAgbWVudSgpLFxuICAgICk7XG4gIH1cblxuICAjY29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgaG9tZVRhYiA9IHRoaXMuI2NyZWF0ZVRhYignSG9tZScpO1xuICAgIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiNob21lUGFnZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1lbnVUYWIgPSB0aGlzLiNjcmVhdGVUYWIoJ01lbnUnKTtcbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4jbWVudVBhZ2UoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuI2NvbnRlbnQucmVwbGFjZUNoaWxkcmVuKFxuICAgICAgaGVhZGVyKFtob21lVGFiLCBtZW51VGFiXSksXG4gICAgICBjb250YWN0KCksXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBwYWdlID0gbmV3IHJlc3RhdXJhbnRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=