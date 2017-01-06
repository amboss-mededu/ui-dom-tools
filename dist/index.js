module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.climb = undefined;

	var _climb = __webpack_require__(1);

	var _climb2 = _interopRequireDefault(_climb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.climb = _climb2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (start, predicate, limit) {

	  if (!start) return null;

	  var cursor = start,
	      lim = limit || document.body;

	  while (cursor !== lim) {
	    if (cursor === document.body) break;
	    if (predicate(cursor)) {
	      return cursor;
	    } else {
	      cursor = cursor.parentNode;
	    }
	  }

	  return null;
	};

	; /**
	   * Climbs up the DOM up to but not including the limit element (or
	   * `body` if not specified) looking for and returning the first
	   * element that passes the predicate, or `null` if nothing does.
	   *
	   * @param {HTMLElement} start
	   * @param {function} predicate
	   * @param {HTMLElement} limit
	   * @returns {*}
	   */

/***/ }
/******/ ]);