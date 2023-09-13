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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Crete+Round&family=Open+Sans:ital,wght@0,500;1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  font-family: "Crete Round", serif;
  font-weight: 600;
  color: #fff;
}

html {
  scroll-behavior: smooth;
}

.nav-header {
  position: fixed;
  width: 100%;
  z-index: 1;
}

.nav-header,
.footer {
  background-color: #09554e;
  padding: 0 10%;
  text-align: center;
}

.nav-list,
.nav-title,
.nav-bar {
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 24px;
  color: #fff;
}

#logo {
  width: 50px;
  padding-top: 10px;
}

.nav-bar {
  justify-content: space-between;
}

.nav-list a {
  color: #fff;
  font-size: 20px;
}

.nav-list a:hover {
  color: #75c2ba;
}

.movie-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 32px;
  padding-top: 100px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid;
  border-radius: 10px;
  min-height: 100px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease;
}

.movie-title {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.movie-name {
  font-size: 20px;
  justify-content: flex-start;
  color: #000;
}

.like-btn {
  display: flex;
  gap: 10px;
}

.likesCount {
  color: #000;
  font-size: 20px;
}

.like {
  font-size: 20px;
  background-color: #fff;
  border: none;
  font-weight: 800;
  color: #09554e;
  cursor: pointer;
}

.card-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.comments-button {
  padding: 10px 45px;
  border-radius: 10px;
  background-color: #09554e;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}

.footer {
  padding: 10px 0;
}

/* for pop up */

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.popup-container {
  position: absolute;
  top: 0;
  margin: 30px;
  padding: 20px 30px 20px;
  z-index: 10;
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #fafefe;
  color: #09554e;
}

.hide {
  display: none;
}

.close-btn {
  font-size: 40px;
  cursor: pointer;
  display: flex;
  align-self: end;
}

.popup-img {
  width: 50%;
}

.popup-img-container {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 10px;
}

.popup-title {
  text-align: center;
  padding: 10px;
}

.popup-info {
  padding: 10px;
  text-align: center;
}

.popup-description {
  padding: 10px;
  text-align: justify;
}

.popup-comments {
  border: 2px solid #09554e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#popup-name {
  height: 35px;
  border: 2px solid #09554e;
  padding: 0 20px;
  font-weight: 800;
}

#popup-insight {
  height: 140px;
  border: 2px solid #09554e;
  padding: 10px 20px;
  font-weight: 800;
}

.popup-btn {
  cursor: pointer;
  height: 40px;
  font-size: 20px;
  background-color: #09554e;
  color: #fff;
  border-radius: 10px;
}

.comments-button:hover,
.popup-btn:hover {
  background-color: #fff;
  color: #09554e;
  border: 2px solid #09554e;
  font-weight: 600;
}

@media screen and (max-width: 1000px) {
  .movie-name,
  .likesCount {
    font-size: 20px;
  }

  .movie-title {
    padding: 0 30px;
  }
}

@media screen and (min-width: 700px) {
  .card:hover {
    transform: scale(1.02);
    z-index: 9999;
  }
}

@media screen and (max-width: 700px) {
  .nav-header {
    padding: 0 7%;
  }

  .nav-title p {
    display: none;
  }

  .nav-list {
    gap: 5px;
  }

  .movie-container {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .popup-container {
    width: 90%;
    padding: 10px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Crete+Round&family=Open+Sans:ital,wght@0,500;1,500&display=swap\");\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  font-family: \"Crete Round\", serif;\r\n  font-weight: 600;\r\n  color: #fff;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.nav-header {\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-header,\r\n.footer {\r\n  background-color: #09554e;\r\n  padding: 0 10%;\r\n  text-align: center;\r\n}\r\n\r\n.nav-list,\r\n.nav-title,\r\n.nav-bar {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  font-size: 24px;\r\n  color: #fff;\r\n}\r\n\r\n#logo {\r\n  width: 50px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.nav-bar {\r\n  justify-content: space-between;\r\n}\r\n\r\n.nav-list a {\r\n  color: #fff;\r\n  font-size: 20px;\r\n}\r\n\r\n.nav-list a:hover {\r\n  color: #75c2ba;\r\n}\r\n\r\n.movie-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 30px;\r\n  padding: 32px;\r\n  padding-top: 100px;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  border: 1px solid;\r\n  border-radius: 10px;\r\n  min-height: 100px;\r\n  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.8);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.movie-title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 10px;\r\n}\r\n\r\n.movie-name {\r\n  font-size: 20px;\r\n  justify-content: flex-start;\r\n  color: #000;\r\n}\r\n\r\n.like-btn {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.likesCount {\r\n  color: #000;\r\n  font-size: 20px;\r\n}\r\n\r\n.like {\r\n  font-size: 20px;\r\n  background-color: #fff;\r\n  border: none;\r\n  font-weight: 800;\r\n  color: #09554e;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.comments-button {\r\n  padding: 10px 45px;\r\n  border-radius: 10px;\r\n  background-color: #09554e;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  padding: 10px 0;\r\n}\r\n\r\n/* for pop up */\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 5;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.popup-container {\r\n  position: absolute;\r\n  top: 0;\r\n  margin: 30px;\r\n  padding: 20px 30px 20px;\r\n  z-index: 10;\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fafefe;\r\n  color: #09554e;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.close-btn {\r\n  font-size: 40px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-self: end;\r\n}\r\n\r\n.popup-img {\r\n  width: 50%;\r\n}\r\n\r\n.popup-img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 10px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 10px;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-title {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.popup-info {\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.popup-description {\r\n  padding: 10px;\r\n  text-align: justify;\r\n}\r\n\r\n.popup-comments {\r\n  border: 2px solid #09554e;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n#popup-name {\r\n  height: 35px;\r\n  border: 2px solid #09554e;\r\n  padding: 0 20px;\r\n  font-weight: 800;\r\n}\r\n\r\n#popup-insight {\r\n  height: 140px;\r\n  border: 2px solid #09554e;\r\n  padding: 10px 20px;\r\n  font-weight: 800;\r\n}\r\n\r\n.popup-btn {\r\n  cursor: pointer;\r\n  height: 40px;\r\n  font-size: 20px;\r\n  background-color: #09554e;\r\n  color: #fff;\r\n  border-radius: 10px;\r\n}\r\n\r\n.comments-button:hover,\r\n.popup-btn:hover {\r\n  background-color: #fff;\r\n  color: #09554e;\r\n  border: 2px solid #09554e;\r\n  font-weight: 600;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .movie-name,\r\n  .likesCount {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .movie-title {\r\n    padding: 0 30px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .card:hover {\r\n    transform: scale(1.02);\r\n    z-index: 9999;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .nav-header {\r\n    padding: 0 7%;\r\n  }\r\n\r\n  .nav-title p {\r\n    display: none;\r\n  }\r\n\r\n  .nav-list {\r\n    gap: 5px;\r\n  }\r\n\r\n  .movie-container {\r\n    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n  }\r\n\r\n  .popup-container {\r\n    width: 90%;\r\n    padding: 10px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/commentInvolvement.js":
/*!*******************************************!*\
  !*** ./src/modules/commentInvolvement.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComments: () => (/* binding */ getComments),
/* harmony export */   postComments: () => (/* binding */ postComments)
/* harmony export */ });
const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BHkrUTs0Q4TVtczjuly5/comments';

const postComments = async (id) => {
  const username = document.getElementById('popup-name').value;
  const comment = document.getElementById('popup-insight').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch(commentApi, options).then((res) => res.text());
};

const getComments = async (id) => {
  const res = await fetch(`${commentApi}?item_id=${id}`);
  const data = await res.json();
  return data;
};




/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counter = (item) => (item ? item.length : 0);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);


/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");


const header = () => {
  const nav = document.querySelector('.nav-header');
  nav.innerHTML = `
    <div class="nav-bar">
    <div class="nav-title">
    <a href="iner.html"><img id="logo" src="${_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__}" alt="logo"></a>
    <p>The Movie Maven<p>
    </div>
    <ul class="nav-list">
    <li><a href="#">Home</a><li>
    <li><a href="#">About</a><li>
    <li><a href="#">Movies(<span id="counter"></span>)</a></li>
    </ul>
    </div>
   `;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

// hDkEluBB7846EKcvd1Hz


/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLikesCount: () => (/* binding */ getLikesCount),
/* harmony export */   postLikes: () => (/* binding */ postLikes)
/* harmony export */ });
/* eslint-disable no-unused-vars */
const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BHkrUTs0Q4TVtczjuly5/likes';

const postLikes = async (id) => {
  const test = { item_id: id };
  const response = await fetch(likesApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(test),
  });
  return response;
};

const getLikesCount = async () => {
  const likes = await fetch(likesApi);
  const response = await likes.json();
  return response;
};




/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   movieCounter: () => (/* binding */ movieCounter)
/* harmony export */ });
const movieCounter = (count) => {
  const counter = document.getElementById('counter');
  count = document.querySelectorAll('.card').length;

  if (count === 0) count = 'No movies';
  if (count > 999) count = '999+';

  counter.innerText = count;
  return count;
};

/* eslint-disable import/prefer-default-export */



/***/ }),

/***/ "./src/modules/movies.js":
/*!*******************************!*\
  !*** ./src/modules/movies.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMovies: () => (/* binding */ getMovies)
/* harmony export */ });
/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement.js */ "./src/modules/involvement.js");


const movies = 'https://api.tvmaze.com/shows';

const getMovies = async (test) => {
  try {
    const result = await fetch(movies);
    let output = '';
    const data = await result.json();
    data.forEach((movie) => {
      const newMovie = `<div class="card" item_id="${movie.id}">
                <img src=${movie.image.medium}>
                <div class="movie-title">
                <h2 class="movie-name">${movie.name}</h2>                
                <div class="like-btn">
                <button class="like"><i class="fa fa-heart-o likes" id=${movie.id}></i></button>
                <h2 class="likesCount" id="likesCount-${movie.id}"></h2>
                </div>
                </div>
                <div class="card-buttons">
                <button class="comments-button" id=${movie.id}>Comment</button>
                </div>
            </div>
            `;
      output += newMovie;
    });

    const displayMovies = document.querySelector('.movie-container');
    displayMovies.innerHTML = output;
    // passed in test above in order to be able to get length of all movies available
    test(data.length);

    // update likes counter and display on DOM
    const updateLikesCount = async () => {
      const likesData = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.getLikesCount)();
      likesData.forEach((item) => {
        const likesCount = [`${item.likes}`];
        const likesCountElement = document.getElementById(
          `likesCount-${item.item_id}`,
        );
        if (likesCountElement) likesCountElement.innerText = likesCount || '0';
      });
    };

    updateLikesCount();

    // like button functionality
    const likeBtn = document.querySelectorAll('.like');
    likeBtn.forEach((button) => {
      button.addEventListener('click', async (item) => {
        const { id } = item.target; // get the ID of the clicked element
        (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(id); // pass the ID to postLikes
        item.preventDefault();
      });
      updateLikesCount();
    });
  } catch (error) {
    const displayMovies = document.querySelector('.movie-container');
    displayMovies.innerText = error;
  }
};

/* eslint-disable import/prefer-default-export */



/***/ }),

/***/ "./src/modules/pop-up.js":
/*!*******************************!*\
  !*** ./src/modules/pop-up.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeBtn: () => (/* binding */ closeBtn),
/* harmony export */   popUp: () => (/* binding */ popUp),
/* harmony export */   submitComment: () => (/* binding */ submitComment)
/* harmony export */ });
/* harmony import */ var _commentInvolvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentInvolvement.js */ "./src/modules/commentInvolvement.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ "./src/modules/counter.js");



const movies = 'https://api.tvmaze.com/shows';
const popUpSection = document.querySelector('.popup-section');

const popUp = async () => {
  const res = await fetch(movies);
  const data = await res.json();

  const commentBtn = document.querySelectorAll('.comments-button');

  commentBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      popUpSection.innerHTML = `
  <div class="overlay">
    <div class="popup-container" id = ${data[i].id}>
     <span class="close-btn">&times;</span>
       <div class="popup-img-container">
          <img src=${data[i].image.medium} alt=${data[i].name} class="popup-img" id = ${data[i].id} />
        </div>
        <h3 class="popup-title">${data[i].name}</h3>
        <div class="popup-info">
          <p class="popup-genre"><strong>Genre:</strong> ${data[i].genres}</p>
          <p class="popup-type"><strong>Type:</strong> ${data[i].type}</p>
          <p class="popup-language"><strong>Language:</strong> ${data[i].language}</p>
          <p class="popup-rating"><strong>Rating:</strong> ${data[i].rating.average}</p>
          <p class="popup-premiered"><strong>Premiered:</strong> ${data[i].premiered}</p>
        </div>
        <div class="popup-description">
          <p class="popup-summary">${data[i].summary}</p>
       </div>
        <div class="popup-comments">
        <h3>Comments (<span class="comment-count"></span>) </h3>
          <ul class="comments-list">
          </ul>
        </div>
        <form class="form">
          <input
            type="text"
            name="fname"
            id="popup-name"
            placeholder="Your name"
            required
          />
        <textarea name="insights" cols="30" rows="5" id="popup-insight" placeholder="Your insights" required></textarea>
        <button type= "submit" class="popup-btn" id = ${data[i].id}>Comment</button>
        </form>
    </div>
  </div>
    `;
    });
  });
};

const closeBtn = () => {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('.close-btn');
    const section = e.target.parentElement.parentElement;
    if (!target) return;
    section.classList.add('hide');
  });
};

const displayComment = (comment) => {
  const commentContainer = document.querySelector('.comments-list');
  if (!comment.error) {
    commentContainer.innerHTML = comment.map(
      (item) => `<li> ${item.creation_date}: ${item.username}: ${item.comment} </li>`,
    );
  }
  const allComments = document.querySelectorAll('.comments-list li');
  const commentCount = document.querySelector('.comment-count');
  commentCount.innerHTML = (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allComments);
};

const submitComment = () => {
  document.addEventListener('submit', async (e) => {
    e.preventDefault();
    const target = e.target.closest('.form');
    const targetId = Number(e.target.parentElement.id);
    if (!target) return;
    await (0,_commentInvolvement_js__WEBPACK_IMPORTED_MODULE_0__.postComments)(targetId);
    const comment = await (0,_commentInvolvement_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(Number(targetId));
    displayComment(comment);
    target.reset();
  });
};

const cardContainer = document.querySelector('.movie-container');
cardContainer.addEventListener('click', async (e) => {
  if (e.target.className === 'comments-button') {
    const comment = await (0,_commentInvolvement_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(Number(e.target.id));
    displayComment(comment);
  }
});




/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b72d8d3142a2e73ee94.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_movies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/movies.js */ "./src/modules/movies.js");
/* harmony import */ var _modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/movieCounter.js */ "./src/modules/movieCounter.js");
/* harmony import */ var _modules_involvement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/involvement.js */ "./src/modules/involvement.js");
/* harmony import */ var _modules_pop_up_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pop-up.js */ "./src/modules/pop-up.js");








(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_movies_js__WEBPACK_IMPORTED_MODULE_2__.getMovies)(_modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_3__.movieCounter, _modules_involvement_js__WEBPACK_IMPORTED_MODULE_4__.postLikes, _modules_involvement_js__WEBPACK_IMPORTED_MODULE_4__.getLikesCount);
(0,_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_5__.popUp)();
(0,_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_5__.closeBtn)();
(0,_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_5__.submitComment)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map