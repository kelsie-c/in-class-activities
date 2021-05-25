/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// Helper function for creating elements\nfunction createElement(type, attributes) {\n  var element = document.createElement(type);\n\n  if (_typeof(attributes) === \"object\") {\n    for (var key in attributes) {\n      if (key.startsWith(\"on\")) {\n        var event = key.substring(2).toLowerCase();\n        var handler = attributes[key];\n        element.addEventListener(event, handler);\n      } else {\n        element.setAttribute(key, attributes[key]);\n      }\n    }\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  children.forEach(function (child) {\n    if (typeof child === \"boolean\" || child === null || child === undefined) {\n      return;\n    }\n\n    var node;\n\n    if (child instanceof HTMLElement) {\n      node = child;\n    } else {\n      node = document.createTextNode(child);\n    }\n\n    element.appendChild(node);\n  });\n  return element;\n}\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n // Setting up dummy topics data\n\nvar topicData = [{\n  id: 1,\n  name: \"Politics\"\n}, {\n  id: 2,\n  name: \"Environment\"\n}, {\n  id: 3,\n  name: \"Sports\"\n}, {\n  id: 4,\n  name: \"Entertainment\"\n}];\nvar lastId = 4; // Empty topic container, render topics\n\nfunction renderTopics() {\n  var topicContainer = document.querySelector(\".topic-container\");\n  var topics = createTopics(topicData);\n\n  while (topicContainer.firstChild) {\n    topicContainer.removeChild(topicContainer.firstChild);\n  }\n\n  topicContainer.appendChild(topics);\n} // Return HTML for each topic provided\n\n\nfunction createTopics(topicData) {\n  var fragment = document.createDocumentFragment();\n  topicData.forEach(function (data) {\n    var topic = createTopic(data);\n    fragment.appendChild(topic);\n  });\n  return fragment;\n} // Return markup for a topic object\n\n\nfunction createTopic(_ref) {\n  var name = _ref.name,\n      id = _ref.id;\n  return Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"topic\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n    \"aria-label\": \"Close\",\n    \"data-id\": id,\n    onClick: handleTopicDelete\n  }, \"×\"), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n    href: \"topic.html?query=\".concat(name)\n  }, name));\n} // Deletes a topic on click\n\n\nfunction handleTopicDelete(event) {\n  var id = Number(event.target.getAttribute(\"data-id\"));\n  topicData = topicData.filter(function (topic) {\n    return topic.id !== id;\n  });\n  renderTopics();\n}\n\nfunction handleTopicAdd(event) {\n  event.preventDefault();\n  var input = document.querySelector(\"#add-topic\");\n  var value = input.value.trim();\n\n  if (!value) {\n    return;\n  }\n\n  topicData = [].concat(_toConsumableArray(topicData), [{\n    id: ++lastId,\n    name: value\n  }]);\n  input.value = \"\";\n  renderTopics();\n} // Helper function for creating elements\n// function createElement(type, attributes, ...children) {\n//   const element = document.createElement(type);\n//   if (typeof attributes === \"object\") {\n//     for (const key in attributes) {\n//       if (key.startsWith(\"on\")) {\n//         const event = key.substring(2).toLowerCase();\n//         const handler = attributes[key];\n//         element.addEventListener(event, handler);\n//       } else {\n//         element.setAttribute(key, attributes[key]);\n//       }\n//     }\n//   }\n//   children.forEach(child => {\n//     if (typeof child === \"boolean\" || child === null || child === undefined) {\n//       return;\n//     }\n//     let node;\n//     if (child instanceof HTMLElement) {\n//       node = child;\n//     } else {\n//       node = document.createTextNode(child);\n//     }\n//     element.appendChild(node);\n//   });\n//   return element;\n// }\n// Renders topics on page load\n\n\nrenderTopics(); // Handle new topic submissions\n\ndocument.querySelector(\"#submit-topic\").addEventListener(\"click\", handleTopicAdd);\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ })

/******/ });