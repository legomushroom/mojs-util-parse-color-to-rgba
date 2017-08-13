(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mojs-util-parse-color-to-rgba"] = factory();
	else
		root["mojs-util-parse-color-to-rgba"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mojs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.mojs = mod.exports;
    }
  })(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    /**
     * DOMDiv - and element that is added to DOM for enviroment test purposes.
     */
    var DOMDiv = document.createElement('div');
    document.body.append(DOMDiv);

    /**
     * `normalizeHex` - Function to normalize part of a HEX color to FF format,
     *                  if one character passed, return doubled version of it.
     *
     * @param {Steing} Color part to normalize.
     * @param {Steing} Normalized part of a color.
     */
    var normalizeHex = function (string) {
      // eslint-disable-line arrow-body-style
      return string.length === 2 ? string : string + string;
    };

    /**
     * `parseHEXColor` - function to parse #HEX colors.
     */
    var parseHEXColor = function (color) {
      var result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
      if (result) {
        return {
          r: parseInt(normalizeHex(result[1]), 16),
          g: parseInt(normalizeHex(result[2]), 16),
          b: parseInt(normalizeHex(result[3]), 16),
          a: 1
        };
      }
    };

    /**
     * Function to parse a color string to color object.
     *
     * @param {String} String to parse.
     * @returns {Object} Color object.
     */
    var parseColorToRgba = exports.parseColorToRgba = function (color) {
      var originColor = color;
      // #HEX
      if (color[0] === '#') {
        return parseHEXColor(color);
      }

      var isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
      // if color is not `rgb`, it is a shortcut (`cyan`, `hotpink` etc)
      // so we need to set the color on DOM element and get the calculated color
      if (!isRgb) {
        DOMDiv.style.color = 'black';
        DOMDiv.style.color = color;
        color = window.getComputedStyle(DOMDiv).color;
      }

      // parse `rgb` color
      var regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),';
      var regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$';
      var result = new RegExp(regexString1 + regexString2, 'gi').exec(color);
      var a = parseFloat(result[4] || 1);

      if (result) {
        var r = parseInt(result[1], 10);
        var g = parseInt(result[2], 10);
        var b = parseInt(result[3], 10);
        // if origin color was not black but black
        // returned from the DOM - that's an error
        return originColor !== 'black' && r === 0 && g === 0 && b === 0 && a === 1 ? { isError: true } : { r: r, g: g, b: b, a: a };
      }

      return {
        isError: true
      };
    };

    exports.default = parseColorToRgba;
  });
});

/***/ })
/******/ ]);
});