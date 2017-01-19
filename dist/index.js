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
	exports.bboxDiff = exports.climb = undefined;

	var _climb = __webpack_require__(1);

	var _climb2 = _interopRequireDefault(_climb);

	var _bboxDiff = __webpack_require__(2);

	var _bboxDiff2 = _interopRequireDefault(_bboxDiff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.climb = _climb2.default;
	exports.bboxDiff = _bboxDiff2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (start, predicate, limit) {

	  if (!start) return null;

	  var cursor = start;

	  var lim = limit || document.body;

	  while (cursor !== lim) {
	    if (cursor === document.body) {
	      break;
	    } else if (predicate(cursor)) {
	      return cursor;
	    } else {
	      cursor = cursor.parentNode;
	    }
	  }

	  return null;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (a, b, keys) {

	  // do the hard math here
	  var aBox = a.getBoundingClientRect();

	  var result = { visible: true };

	  var ks = keys && keys.length ? keys : boxKeys;

	  // if this has a null BBox, it's not even visible
	  if (aBox.height === 0 && aBox.width === 0) result.visible = false;

	  var bBox = b.nodeType ? b.getBoundingClientRect() : b;

	  ks.forEach(function (k) {
	    result[k] = aBox[k] - bBox[k];
	  });

	  return result;
	};

	/**
	 * Returns the relative offsets up to the limit node
	 *
	 * @param {Element} a – the target, whose visibility is also checked
	 * @param {Element}|{Object} b – the referent, which can also be an existing bbox.
	 * @param {Array} [keys] - a set of box keys to query instead of the full set.
	 * @returns {Object} diffBox
	 */

	var boxKeys = ['bottom', 'height', 'left', 'right', 'top', 'width'];

	;

/***/ }
/******/ ]);