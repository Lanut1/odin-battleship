/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/inconsolata-webfont.woff2 */ \"./src/fonts/inconsolata-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/inconsolata-webfont.woff */ \"./src/fonts/inconsolata-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/cross-svgrepo-com.svg */ \"./src/icons/cross-svgrepo-com.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: 'inconsolatamedium';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\n       url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes scaleIn {\n  from { \n      transform: scale(0.8);\n      opacity: 0;\n  }\n  to { \n      transform: scale(1);\n      opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from { opacity: 1; }\n  to { opacity: 0; }\n}\n\n@keyframes scaleOut {\n  from {\n      transform: scale(1);\n      opacity: 1;\n  }\n  to {\n      transform: scale(0.8);\n      opacity: 0;\n  }\n}\n\n#ship-placement-dialog::backdrop {\n  background: radial-gradient(circle at 50% 50%, #003f5b, #2b4b7d, #5f5195, #98509d, #cc4c91, #f25375, #ff6f4e, #ff9913); /* made at https://learnui.design/tools/gradient-generator.html */\n}\n\n.dialog-header {\n  font-family: 'inconsolatamedium', sans-serif;\n  font-weight: bold;\n  font-size: 3rem;\n  text-align: center;\n  color: #003f5b;\n}\n\n#ship-placement-dialog {\n  font-family: 'inconsolatamedium', sans-serif;\n  border: none;\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.buttons {\n  display: flex;\n  gap: 3rem;\n}\n\nbutton {\n  font-family: inherit;\n  font-size: 2rem;\n  font-weight: bold;\n  padding: 5px;\n  border-radius: 5px;\n  border: none;\n  background-color: #f25375;\n  color: #003f5b;\n  cursor: pointer;\n  transition: 0.4s;\n}\n\nbutton:hover {\n  background-color: #ff6f4e;\n  scale: 1.07;\n}\n\nbody {\n  background: radial-gradient(\n  circle at 50% 50%,\n  rgba(0, 63, 91, 0.5),\n  rgba(43, 75, 125, 0.5),\n  rgba(95, 81, 149, 0.5),\n  rgba(152, 80, 157, 0.5),\n  rgba(204, 76, 145, 0.5),\n  rgba(242, 83, 117, 0.5),\n  rgba(255, 111, 78, 0.5),\n  rgba(255, 153, 19, 0.5)\n);\n}\n\n.main-section {\n  display: flex;\n  gap: 5rem;\n  justify-content: center;\n  padding-top: 3rem;\n}\n\n.message-container {\n  min-height: 10vh;\n  font-family: 'inconsolatamedium', sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  color:#003f5b;\n  text-align: center;\n  padding-top: 1.5rem;\n}\n\n.cell {\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 1px solid #971414;\n  box-sizing: border-box;\n}\n\n.cell.ship {\n  background-color: #ff6f4e;\n}\n\n.cell.hit-ship {\n  background-color: #cc4c91;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n\n.cell.miss {\n  background-color: rgb(95, 81, 149, 0.6);\n}\n\n.dialog-container {\n  display: flex;\n  gap: 3rem;\n}\n\n.ships-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 25vw; \n}\n\n.ships-container.vertical {\n  flex-direction: row;\n}\n\n.carrier-container,\n.battleship-container,\n.cruiser-container,\n.submarine-container,\n.destroyer-container {\n  background-color: rgb(0, 63, 91, 0.5);\n}\n\n.carrier-container {\n  height: 2.5rem;\n  width: 12.5rem;\n}\n\n.battleship-container {\n  height: 2.5rem;\n  width: 10rem;\n}\n\n.cruiser-container,\n.submarine-container {\n  height: 2.5rem;\n  width: 7.5rem;\n}\n\n.destroyer-container {\n  height: 2.5rem;\n  width: 5rem;\n}\n\n#result-dialog {\n  background-color: transparent;\n  border: none;\n}\n\n#result-dialog::backdrop {\n  background: radial-gradient(\n  circle at 50% 50%,\n  rgba(0, 63, 91),\n  rgba(43, 75, 125),\n  rgba(95, 81, 149),\n  rgba(152, 80, 157),\n  rgba(204, 76, 145),\n  rgba(242, 83, 117),\n  rgba(255, 111, 78),\n  rgba(255, 153, 19)\n  );\n}\n\n.results-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  font-family: 'inconsolatamedium', sans-serif;\n  font-size: 3rem;\n  font-weight: bold;\n  color:#f25375;\n}\n\n.result-buttons {\n  display: flex;\n  gap: 1.5rem;\n}\n\n.show-animation {\n  animation: scaleIn 0.7s ease forwards;\n}\n\n.show-animation::backdrop {\n  animation: fadeIn 0.7s ease forwards;\n}\n\n.hide-animation {\n  animation: scaleOut 0.7s ease forwards;\n}\n\n.hide-animation::backdrop {\n  animation: fadeOut 0.7s ease forwards;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleshipUI.ts":
/*!*****************************!*\
  !*** ./src/battleshipUI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameboardUI: () => (/* binding */ GameboardUI)\n/* harmony export */ });\nvar GameboardUI = /** @class */ (function () {\n    function GameboardUI(containerId, size) {\n        if (size === void 0) { size = 10; }\n        this.gameboard = document.getElementById(containerId);\n        this.size = size;\n        this.makeBoard();\n    }\n    GameboardUI.prototype.makeBoard = function () {\n        this.gameboard.replaceChildren;\n        this.gameboard.style.display = 'grid';\n        this.gameboard.style.gridTemplateColumns = \"repeat(\".concat(this.size, \", 1fr)\");\n        for (var x = 0; x < this.size; x++) {\n            for (var y = 0; y < this.size; y++) {\n                var cellElement = document.createElement('div');\n                cellElement.className = 'cell';\n                cellElement.dataset.x = x.toString();\n                cellElement.dataset.y = y.toString();\n                this.gameboard.appendChild(cellElement);\n            }\n        }\n    };\n    GameboardUI.prototype.placeShip = function (x, y, length, type, isHorizontal) {\n        for (var i = 0; i < length; i++) {\n            var newX = isHorizontal ? x : x + i;\n            var newY = isHorizontal ? y + i : y;\n            var cell = this.gameboard.querySelector(\"[data-x=\\\"\".concat(newX, \"\\\"][data-y=\\\"\").concat(newY, \"\\\"]\"));\n            if (cell) {\n                cell.classList.add('ship', type);\n            }\n        }\n        var shipElement = document.querySelector(\".ship[data-ship=\\\"\".concat(type, \"\\\"]\"));\n        if (shipElement && shipElement.parentElement) {\n            shipElement.parentElement.removeChild(shipElement);\n        }\n    };\n    GameboardUI.prototype.resetBoard = function () {\n        var cells = this.gameboard.querySelectorAll('.cell');\n        cells.forEach(function (cell) {\n            cell.className = 'cell';\n        });\n    };\n    return GameboardUI;\n}());\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/battleshipUI.ts?");

/***/ }),

/***/ "./src/cell.ts":
/*!*********************!*\
  !*** ./src/cell.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cell: () => (/* binding */ Cell)\n/* harmony export */ });\nvar Cell = /** @class */ (function () {\n    function Cell() {\n        this.hasShip = null;\n        this.isHit = false;\n    }\n    Cell.prototype.placeShip = function (ship) {\n        this.hasShip = ship;\n    };\n    Cell.prototype.hitCell = function () {\n        this.isHit = true;\n        return this.hasShip;\n    };\n    Cell.prototype.resetCell = function () {\n        this.hasShip = null;\n        this.isHit = false;\n    };\n    return Cell;\n}());\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/cell.ts?");

/***/ }),

/***/ "./src/gameboard.ts":
/*!**************************!*\
  !*** ./src/gameboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./src/cell.ts\");\n\nvar Gameboard = /** @class */ (function () {\n    function Gameboard(size) {\n        this.totalShips = [];\n        this.allSunk = false;\n        this.size = size;\n        this.board = Array.from({ length: size }, function () {\n            return Array.from({ length: size }, function () { return new _cell__WEBPACK_IMPORTED_MODULE_0__.Cell(); });\n        });\n    }\n    Gameboard.prototype.placeShip = function (ship, x, y) {\n        if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) {\n            throw new Error(\"Coordinates are out of bounds\");\n        }\n        var endX = ship.isHorizontal ? x : x + ship.length - 1;\n        var endY = ship.isHorizontal ? y + ship.length - 1 : y;\n        if (endX >= this.size || endY >= this.size) {\n            throw new Error(\"Ship placement exceeds board boundaries\");\n        }\n        for (var i = -1; i <= ship.length; i++) {\n            for (var j = -1; j <= 1; j++) {\n                var checkX = ship.isHorizontal ? x + j : x + i;\n                var checkY = ship.isHorizontal ? y + i : y + j;\n                if (checkX < 0 || checkX >= this.size || checkY < 0 || checkY >= this.size)\n                    continue;\n                if (this.board[checkX][checkY].hasShip !== null) {\n                    throw new Error(\"Ship cannot be placed due to proximity to another ship\");\n                }\n            }\n        }\n        for (var i = 0; i < ship.length; i++) {\n            var cell = ship.isHorizontal ? this.board[x][y + i] : this.board[x + i][y];\n            cell.placeShip(ship);\n        }\n        ship.startX = x;\n        ship.startY = y;\n        this.totalShips.push(ship);\n    };\n    Gameboard.prototype.receiveAttack = function (x, y) {\n        if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) {\n            throw new Error(\"Attack coordinates are out of bounds\");\n        }\n        var cell = this.board[x][y];\n        if (cell.isHit === true) {\n            throw new Error(\"This cell has already been attacked\");\n        }\n        var isShip = cell.hitCell();\n        if (isShip !== null) {\n            isShip.hit();\n            var sunk = isShip.isSunk();\n            var allSunk = this.areAllSunk();\n            return {\n                hit: true,\n                sunk: sunk,\n                allSunk: allSunk\n            };\n        }\n        return {\n            hit: false,\n            sunk: false,\n            allSunk: false\n        };\n    };\n    Gameboard.prototype.areAllSunk = function () {\n        return this.totalShips.every(function (ship) { return ship.isSunk() === true; });\n    };\n    Gameboard.prototype.resetBoard = function () {\n        this.totalShips = [];\n        this.allSunk = false;\n        this.board.forEach(function (row) { return row.forEach(function (cell) { return cell.resetCell(); }); });\n    };\n    Gameboard.prototype.cellsAroundSunkShip = function (ship) {\n        var cells = [];\n        var x = ship.startX;\n        var y = ship.startY;\n        if (x !== null && y !== null) {\n            for (var i = -1; i <= ship.length; i++) {\n                for (var j = -1; j <= 1; j++) {\n                    var checkX = ship.isHorizontal ? x + j : x + i;\n                    var checkY = ship.isHorizontal ? y + i : y + j;\n                    if (checkX < 0 || checkX >= this.size || checkY < 0 || checkY >= this.size)\n                        continue;\n                    if (this.board[checkX][checkY].hasShip)\n                        continue;\n                    this.board[checkX][checkY].isHit = true;\n                    cells.push(\"\".concat(checkX, \",\").concat(checkY));\n                }\n            }\n        }\n        return cells;\n    };\n    return Gameboard;\n}());\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/gameboard.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _battleshipUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battleshipUI */ \"./src/battleshipUI.ts\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.ts\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.ts\");\n\n\n\n\nvar Game = /** @class */ (function () {\n    function Game() {\n        this.playerBoardUI = null;\n        this.computerBoardUI = null;\n        this.players = [];\n        this.playerTurn = true;\n        this.dialog = document.getElementById('ship-placement-dialog');\n        this.placeShipsBoardUI = new _battleshipUI__WEBPACK_IMPORTED_MODULE_1__.GameboardUI('gameboard-container');\n        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_3__.Player('real', 10));\n        this.init();\n    }\n    Game.prototype.init = function () {\n        this.dialog.showModal();\n        this.setupEventListeners();\n        this.setupButtons();\n    };\n    Game.prototype.setupEventListeners = function () {\n        var _this = this;\n        var ships = document.querySelectorAll('.ship');\n        ships.forEach(function (ship) {\n            ship.addEventListener('dragstart', function (e) {\n                if (e instanceof DragEvent) {\n                    _this.dragStart(e);\n                }\n            });\n        });\n    };\n    Game.prototype.setupButtons = function () {\n        var _this = this;\n        this.placeShipsBoardUI.gameboard.addEventListener('dragover', function (e) { return _this.dragOver(e); });\n        this.placeShipsBoardUI.gameboard.addEventListener('drop', function (e) { return _this.drop(e); });\n        var confirmButton = document.getElementById(\"confirm-button\");\n        if (confirmButton) {\n            confirmButton.addEventListener('click', function () { return _this.startGame(); });\n        }\n        var resetButton = document.getElementById(\"reset-button\");\n        if (resetButton) {\n            resetButton.addEventListener('click', function () { return _this.resetShips(); });\n        }\n        var rotateButton = document.getElementById(\"rotate-button\");\n        if (rotateButton) {\n            rotateButton.addEventListener('click', function () { return _this.rotateShips(); });\n        }\n        var startNewGameButton = document.querySelector(\".start-new-game\");\n        if (startNewGameButton) {\n            startNewGameButton.addEventListener('click', function () { return _this.resetGame(); });\n        }\n        var viewCodeButton = document.querySelector(\".view-code\");\n        if (viewCodeButton) {\n            viewCodeButton.addEventListener('click', function () {\n                window.location.href = \"https://github.com/Lanut1/odin-battleship\";\n            });\n        }\n    };\n    Game.prototype.dragStart = function (e) {\n        var _a;\n        var target = e.target;\n        (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text/plain', \"\".concat(target.dataset.ship, \",\").concat(target.dataset.length, \",\").concat(target.dataset.horizontal));\n    };\n    Game.prototype.dragOver = function (e) {\n        e.preventDefault();\n    };\n    Game.prototype.drop = function (e) {\n        var _a;\n        e.preventDefault();\n        var target = e.target;\n        if (!target.classList.contains('cell'))\n            return;\n        var data = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text/plain');\n        if (!data)\n            return;\n        var _b = data.split(','), shipType = _b[0], shipLength = _b[1], shipPosition = _b[2];\n        var x = parseInt(target.dataset.x || '0');\n        var y = parseInt(target.dataset.y || '0');\n        var isHorizontal = shipPosition === 'true';\n        try {\n            var ship = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(parseInt(shipLength), shipType, isHorizontal);\n            this.players[0].gameboard.placeShip(ship, x, y);\n            this.placeShipsBoardUI.placeShip(x, y, parseInt(shipLength), shipType, isHorizontal);\n            if (this.players[0].gameboard.totalShips.length === 5) {\n                var confirmButton = document.getElementById(\"confirm-button\");\n                if (confirmButton) {\n                    confirmButton.disabled = false;\n                }\n            }\n        }\n        catch (error) {\n            console.error(\"Invalid ship placement:\", error);\n        }\n    };\n    Game.prototype.rotateShips = function () {\n        var ships = document.querySelectorAll('.ships-container .ship');\n        var shipsContainer = document.querySelector('.ships-container');\n        shipsContainer.classList.toggle('vertical');\n        ships.forEach(function (ship) {\n            if (ship instanceof HTMLElement) {\n                var isHorizontal = ship.dataset.horizontal === 'true';\n                ship.dataset.horizontal = (!isHorizontal).toString();\n                if (ship.dataset.length !== undefined) {\n                    var length_1 = parseInt(ship.dataset.length);\n                    if (ship.dataset.horizontal === \"true\") {\n                        ship.style.height = '2.5rem';\n                        ship.style.width = \"\".concat(length_1 * 2.5, \"rem\");\n                    }\n                    else {\n                        ship.style.height = \"\".concat(length_1 * 2.5, \"rem\");\n                        ship.style.width = '2.5rem';\n                    }\n                }\n            }\n        });\n    };\n    Game.prototype.resetShips = function () {\n        this.players[0].gameboard.resetBoard();\n        this.placeShipsBoardUI.resetBoard();\n        var shipsContainer = document.querySelector('.ships-container');\n        shipsContainer.replaceChildren();\n        var shipData = [\n            { type: 'carrier', length: 5 },\n            { type: 'battleship', length: 4 },\n            { type: 'cruiser', length: 3 },\n            { type: 'submarine', length: 3 },\n            { type: 'destroyer', length: 2 }\n        ];\n        shipData.forEach(function (ship) {\n            var shipElement = document.createElement('div');\n            shipElement.className = \"ship \".concat(ship.type, \"-container\");\n            shipElement.draggable = true;\n            shipElement.dataset.ship = ship.type;\n            shipElement.dataset.length = ship.length.toString();\n            shipElement.dataset.horizontal = 'true';\n            shipElement.style.width = \"\".concat(ship.length * 2.5, \"rem\");\n            shipElement.style.height = '2.5rem';\n            shipsContainer.appendChild(shipElement);\n            if (shipsContainer.classList.contains('vertical')) {\n                shipsContainer.classList.toggle('vertical');\n            }\n        });\n        this.setupEventListeners();\n    };\n    Game.prototype.resetGame = function () {\n        var _a, _b;\n        this.resetShips();\n        this.players[1].attackCells.clear();\n        this.playerTurn = true;\n        (_a = this.computerBoardUI) === null || _a === void 0 ? void 0 : _a.resetBoard();\n        this.players[1].gameboard.resetBoard();\n        (_b = this.playerBoardUI) === null || _b === void 0 ? void 0 : _b.resetBoard();\n        var resultsDialog = document.querySelector(\"#result-dialog\");\n        resultsDialog.classList.remove(\"show-animation\");\n        resultsDialog.classList.add(\"hide-animation\");\n        setTimeout(function () {\n            resultsDialog.close();\n        }, 700);\n        this.dialog.classList.remove(\"hide-animation\");\n        this.dialog.classList.add(\"show-animation\");\n        this.dialog.showModal();\n    };\n    Game.prototype.startGame = function () {\n        var _this = this;\n        this.dialog.classList.add(\"hide-animation\");\n        setTimeout(function () {\n            _this.dialog.close();\n            _this.dialog.classList.remove(\"hide-animation\");\n        }, 800);\n        this.makeRealPlayer();\n        this.makeComputerPLayer();\n        this.setupAttackEventListeners();\n    };\n    Game.prototype.showMessage = function (message) {\n        var container = document.querySelector('.message-container');\n        if (message instanceof Error) {\n            container.innerText = message.message;\n        }\n        else {\n            container.innerText = message;\n        }\n        setTimeout(function () {\n            container.innerText = \"\";\n        }, 1500);\n    };\n    Game.prototype.showResults = function (message) {\n        var resultsDialog = document.querySelector('#result-dialog');\n        var messageContainer = document.querySelector('.result-message');\n        messageContainer.innerText = message;\n        resultsDialog.classList.remove('hide-animation');\n        resultsDialog.classList.add('show-animation');\n        resultsDialog.showModal();\n    };\n    Game.prototype.makeRealPlayer = function () {\n        var _this = this;\n        var realPlayer = this.players[0];\n        if (this.playerBoardUI === null) {\n            var playerUIBoard = new _battleshipUI__WEBPACK_IMPORTED_MODULE_1__.GameboardUI(\"player-gameboard-container\");\n            this.playerBoardUI = playerUIBoard;\n        }\n        realPlayer.gameboard.totalShips.forEach(function (ship) {\n            var _a;\n            if (ship.startX !== null && ship.startY !== null) {\n                (_a = _this.playerBoardUI) === null || _a === void 0 ? void 0 : _a.placeShip(ship.startX, ship.startY, ship.length, ship.type, ship.isHorizontal);\n            }\n        });\n    };\n    Game.prototype.makeComputerPLayer = function () {\n        var _this = this;\n        if (!this.players[1]) {\n            var computerPlayer = new _player__WEBPACK_IMPORTED_MODULE_3__.Player(\"computer\", 10);\n            this.players.push(computerPlayer);\n            var computerUIBoard = new _battleshipUI__WEBPACK_IMPORTED_MODULE_1__.GameboardUI(\"computer-gameboard-container\");\n            this.computerBoardUI = computerUIBoard;\n        }\n        var ships = [\n            { type: 'carrier', length: 5 },\n            { type: 'battleship', length: 4 },\n            { type: 'cruiser', length: 3 },\n            { type: 'submarine', length: 3 },\n            { type: 'destroyer', length: 2 }\n        ];\n        ships.forEach(function (ship) {\n            var placed = false;\n            while (!placed) {\n                var x = Math.floor(Math.random() * 10);\n                var y = Math.floor(Math.random() * 10);\n                var isHorizontal = Math.random() < 0.5;\n                try {\n                    var newShip = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(ship.length, ship.type, isHorizontal);\n                    _this.players[1].gameboard.placeShip(newShip, x, y);\n                    placed = true;\n                }\n                catch (error) {\n                    // If placement fails, the loop will try again with new random coordinates\n                }\n            }\n        });\n    };\n    Game.prototype.setupAttackEventListeners = function () {\n        var _this = this;\n        var computerGameboardContainer = document.getElementById(\"computer-gameboard-container\");\n        if (!(computerGameboardContainer === null || computerGameboardContainer === void 0 ? void 0 : computerGameboardContainer.dataset.listenerAttached)) {\n            computerGameboardContainer === null || computerGameboardContainer === void 0 ? void 0 : computerGameboardContainer.addEventListener('click', function (event) { return _this.handleAttack(event); });\n            computerGameboardContainer === null || computerGameboardContainer === void 0 ? void 0 : computerGameboardContainer.setAttribute('data-listener-attached', 'true');\n        }\n    };\n    ;\n    Game.prototype.handleAttack = function (event) {\n        var target = event.target;\n        if (target.classList.contains(\"cell\") && this.playerTurn === true) {\n            if (target.dataset.x && target.dataset.y) {\n                var x = parseInt(target.dataset.x);\n                var y = parseInt(target.dataset.y);\n                try {\n                    var attackResult = this.players[1].gameboard.receiveAttack(x, y);\n                    if (attackResult.hit === true) {\n                        target.classList.add('hit-ship');\n                        if (attackResult.sunk === true) {\n                            this.handleSunkShip(x, y, false);\n                        }\n                        if (attackResult.allSunk === true) {\n                            this.showResults(\"You won!\");\n                            return;\n                        }\n                    }\n                    else {\n                        target.classList.add('miss');\n                    }\n                    this.playerTurn = false;\n                    this.playComputerRound();\n                }\n                catch (error) {\n                    if (error instanceof Error) {\n                        this.showMessage(error);\n                    }\n                    else {\n                        this.showMessage(String(error));\n                    }\n                }\n            }\n        }\n    };\n    Game.prototype.handleSunkShip = function (x, y, isPlayerShip) {\n        var _this = this;\n        var playerIndex = isPlayerShip ? 0 : 1;\n        var opponentIndex = isPlayerShip ? 1 : 0;\n        var boardContainerId = isPlayerShip ? \"player-gameboard-container\" : \"computer-gameboard-container\";\n        this.showMessage(\"\".concat(isPlayerShip ? \"Your\" : \"Computer's\", \" ship is sunk!\"));\n        var sunkShip = this.players[playerIndex].gameboard.board[x][y].hasShip;\n        var cellsAround = this.players[playerIndex].gameboard.cellsAroundSunkShip(sunkShip);\n        cellsAround.forEach(function (cell) {\n            if (isPlayerShip) {\n                _this.players[opponentIndex].attackCells.add(cell);\n            }\n            var _a = cell.split(','), cellX = _a[0], cellY = _a[1];\n            var gameboardContainer = document.querySelector(\"#\".concat(boardContainerId));\n            var UICell = gameboardContainer.querySelector(\"[data-x=\\\"\".concat(cellX, \"\\\"][data-y=\\\"\").concat(cellY, \"\\\"]\"));\n            if (!UICell.classList.contains('miss')) {\n                UICell.classList.add('miss');\n            }\n        });\n    };\n    Game.prototype.playComputerRound = function () {\n        var _a;\n        var boardSize = this.players[0].gameboard.size;\n        var cellKey;\n        var x;\n        var y;\n        do {\n            x = Math.floor(Math.random() * boardSize);\n            y = Math.floor(Math.random() * boardSize);\n            cellKey = \"\".concat(x, \",\").concat(y);\n        } while (this.players[1].attackCells.has(cellKey));\n        try {\n            var computerAttackResult = this.players[0].gameboard.receiveAttack(x, y);\n            var cell = (_a = this.playerBoardUI) === null || _a === void 0 ? void 0 : _a.gameboard.querySelector(\"[data-x=\\\"\".concat(x, \"\\\"][data-y=\\\"\").concat(y, \"\\\"]\"));\n            if (computerAttackResult.hit === true) {\n                cell.classList.add('hit-ship');\n                if (computerAttackResult.sunk === true) {\n                    this.handleSunkShip(x, y, true);\n                }\n                if (computerAttackResult.allSunk === true) {\n                    this.showResults(\"Computer won!\");\n                    return;\n                }\n            }\n            else {\n                cell.classList.add('miss');\n            }\n            this.players[1].attackCells.add(cellKey);\n            this.playerTurn = true;\n        }\n        catch (error) {\n            if (error instanceof Error) {\n                this.showMessage(error);\n            }\n            else {\n                this.showMessage(String(error));\n            }\n        }\n    };\n    return Game;\n}());\ndocument.addEventListener('DOMContentLoaded', function () {\n    new Game();\n});\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.ts\");\n\nvar Player = /** @class */ (function () {\n    function Player(type, boardOrSize) {\n        if (type === void 0) { type = 'real'; }\n        this.attackCells = new Set;\n        this.type = type;\n        if (boardOrSize instanceof _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard) {\n            this.gameboard = boardOrSize;\n        }\n        else {\n            this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard(boardOrSize);\n        }\n    }\n    return Player;\n}());\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/player.ts?");

/***/ }),

/***/ "./src/ship.ts":
/*!*********************!*\
  !*** ./src/ship.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nvar Ship = /** @class */ (function () {\n    function Ship(length, type, position) {\n        if (position === void 0) { position = true; }\n        this.startX = null;\n        this.startY = null;\n        this.hits = 0;\n        this.sunk = false;\n        this.length = length;\n        this.type = type;\n        this.isHorizontal = position;\n    }\n    Ship.prototype.hit = function () {\n        this.hits += 1;\n    };\n    Ship.prototype.isSunk = function () {\n        if (this.hits >= this.length) {\n            this.sunk = true;\n        }\n        return this.sunk;\n    };\n    return Ship;\n}());\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/ship.ts?");

/***/ }),

/***/ "./src/fonts/inconsolata-webfont.woff":
/*!********************************************!*\
  !*** ./src/fonts/inconsolata-webfont.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"194af6ff0012f51acd02.woff\";\n\n//# sourceURL=webpack://odin-battleship/./src/fonts/inconsolata-webfont.woff?");

/***/ }),

/***/ "./src/fonts/inconsolata-webfont.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/inconsolata-webfont.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e217a604a4e467d6ed3f.woff2\";\n\n//# sourceURL=webpack://odin-battleship/./src/fonts/inconsolata-webfont.woff2?");

/***/ }),

/***/ "./src/icons/cross-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./src/icons/cross-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ca9c44d709668e9cbba.svg\";\n\n//# sourceURL=webpack://odin-battleship/./src/icons/cross-svgrepo-com.svg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;