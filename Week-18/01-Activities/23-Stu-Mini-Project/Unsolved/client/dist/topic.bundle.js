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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/topic.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/api.js":
/*!**************************!*\
  !*** ./assets/js/api.js ***!
  \**************************/
/*! exports provided: loadArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadArticles\", function() { return loadArticles; });\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n/* harmony import */ var _indexeddb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexeddb */ \"./assets/js/indexeddb.js\");\n/* harmony import */ var _topic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic */ \"./assets/js/topic.js\");\n\n\n\nfunction loadArticles() {\n  var BASE_URL = \"https://newsapi.org/v2/everything?sortBy=published&apiKey=e41ee36d9a714a199911b42cb75a4fe3&q=\";\n\n  var _getParams = Object(_topic__WEBPACK_IMPORTED_MODULE_2__[\"getParams\"])(),\n      query = _getParams.query;\n\n  return new Promise(function (resolve, reject) {\n    fetch(BASE_URL + query).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var articles = Object(_topic__WEBPACK_IMPORTED_MODULE_2__[\"createArticleIds\"])(data.articles);\n      resolve(articles);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/api.js?");

/***/ }),

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// Helper function for creating elements\nfunction createElement(type, attributes) {\n  var element = document.createElement(type);\n\n  if (_typeof(attributes) === \"object\") {\n    for (var key in attributes) {\n      if (key.startsWith(\"on\")) {\n        var event = key.substring(2).toLowerCase();\n        var handler = attributes[key];\n        element.addEventListener(event, handler);\n      } else {\n        element.setAttribute(key, attributes[key]);\n      }\n    }\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  children.forEach(function (child) {\n    if (typeof child === \"boolean\" || child === null || child === undefined) {\n      return;\n    }\n\n    var node;\n\n    if (child instanceof HTMLElement) {\n      node = child;\n    } else {\n      node = document.createTextNode(child);\n    }\n\n    element.appendChild(node);\n  });\n  return element;\n}\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/indexeddb.js":
/*!********************************!*\
  !*** ./assets/js/indexeddb.js ***!
  \********************************/
/*! exports provided: checkForIndexedDb, useIndexedDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForIndexedDb\", function() { return checkForIndexedDb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useIndexedDb\", function() { return useIndexedDb; });\nfunction checkForIndexedDb() {\n  // window.indexedDB =\n  //   window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;\n  // window.IDBTransaction =\n  //   window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;\n  // window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;\n  if (!window.indexedDB) {\n    console.log(\"Your browser doesn't support a stable version of IndexedDB.\");\n    return false;\n  }\n\n  return true;\n}\n;\nfunction useIndexedDb(databaseName, storeName, method, object) {\n  return new Promise(function (resolve, reject) {\n    var request = window.indexedDB.open(databaseName, 1);\n    var db, tx, store;\n\n    request.onupgradeneeded = function (e) {\n      var db = request.result;\n      db.createObjectStore(storeName, {\n        keyPath: \"_id\"\n      });\n    };\n\n    request.onerror = function (e) {\n      console.log(\"There was an error\");\n    };\n\n    request.onsuccess = function (e) {\n      db = request.result;\n      tx = db.transaction(storeName, \"readwrite\");\n      store = tx.objectStore(storeName);\n\n      db.onerror = function (e) {\n        console.log(\"error\");\n      };\n\n      if (method === \"put\") {\n        store.put(object);\n      } else if (method === \"get\") {\n        var all = store.getAll();\n\n        all.onsuccess = function () {\n          resolve(all.result);\n        };\n      } else if (method === \"delete\") {\n        store[\"delete\"](object._id);\n      }\n\n      tx.oncomplete = function () {\n        db.close();\n      };\n    };\n  });\n}\n;\n\n//# sourceURL=webpack:///./assets/js/indexeddb.js?");

/***/ }),

/***/ "./assets/js/topic.js":
/*!****************************!*\
  !*** ./assets/js/topic.js ***!
  \****************************/
/*! exports provided: createArticleIds, getParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArticleIds\", function() { return createArticleIds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getParams\", function() { return getParams; });\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n/* harmony import */ var _indexeddb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexeddb */ \"./assets/js/indexeddb.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./assets/js/api.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction removeSpecialCharsFromString(str) {\n  return str.replace(/[.,/#!$%^&*;:{}=\\-_`~()]/g, \"\").replace(/\\s/g, \"\");\n} // Creates pseudo-unique ids for articles\n\n\nfunction createArticleIds(articles) {\n  return articles.map(function (article) {\n    article._id = removeSpecialCharsFromString(article.url);\n    return article;\n  });\n} // Clear the article container and insert placeholder articles\n\nfunction renderPlaceHolders() {\n  var articleContainer = document.querySelector(\".article-container\");\n  var placeholders = createPlaceholders();\n\n  while (articleContainer.firstChild) {\n    articleContainer.removeChild(articleContainer.firstChild);\n  }\n\n  articleContainer.appendChild(placeholders);\n} // Create and return 4 placeholder articles\n\n\nfunction createPlaceholders() {\n  var fragment = document.createDocumentFragment();\n\n  for (var i = 0; i < 4; i++) {\n    var placeholder = createPlaceholder();\n    fragment.appendChild(placeholder);\n  }\n\n  return fragment;\n} // Returns markup for a placeholder article\n\n\nfunction createPlaceholder() {\n  return Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__header\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__title\"\n  }), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__published\"\n  })), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__content\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__image\"\n  }), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  })));\n} // Empties article container and appends articles\n\n\nfunction renderArticles(articleData) {\n  renderPlaceHolders();\n  var articleContainer = document.querySelector(\".article-container\");\n  var topicHeader = document.querySelector(\"header h1\");\n  var articles = createArticles(articleData);\n\n  while (articleContainer.firstChild) {\n    articleContainer.removeChild(articleContainer.firstChild);\n  }\n\n  var _getParams = getParams(),\n      query = _getParams.query;\n\n  topicHeader.textContent = query;\n  articleContainer.appendChild(articles);\n} // Return HTML for each article provided\n\n\nfunction createArticles(articleData) {\n  var fragment = document.createDocumentFragment();\n  articleData.forEach(function (data) {\n    var article = createArticle(data);\n    fragment.appendChild(article);\n  });\n  return fragment;\n} // Returns markup for a single article\n\n\nfunction createArticle(_ref) {\n  var source = _ref.source,\n      author = _ref.author,\n      title = _ref.title,\n      description = _ref.description,\n      url = _ref.url,\n      urlToImage = _ref.urlToImage,\n      publishedAt = _ref.publishedAt,\n      _id = _ref._id,\n      favorite = _ref.favorite;\n  return Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"article\", null, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-header\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-header__title\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, title)), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-header__published\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", null, author), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", null, formatDate(publishedAt)))), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"article-container\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", null, urlToImage && Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n    src: urlToImage,\n    alt: title\n  }), description), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", null, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"small\", null, \"Continue reading at \", Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n    href: url,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, source.name))), !favorite ? Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n    \"class\": \"button button--primary\",\n    onclick: function onclick() {\n      Object(_indexeddb__WEBPACK_IMPORTED_MODULE_1__[\"useIndexedDb\"])(\"articles\", \"ArticleStore\", \"put\", {\n        source: source,\n        author: author,\n        title: title,\n        description: description,\n        url: url,\n        urlToImage: urlToImage,\n        publishedAt: publishedAt,\n        _id: _id\n      });\n      loadPage();\n    }\n  }, \"Save to Favorites\") : Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n    \"class\": \"button button--danger\",\n    onclick: function onclick() {\n      Object(_indexeddb__WEBPACK_IMPORTED_MODULE_1__[\"useIndexedDb\"])(\"articles\", \"ArticleStore\", \"delete\", {\n        _id: _id\n      });\n      loadPage();\n    }\n  }, \"Remove from Favorites\")));\n} // Formats and returns date in MMMM/DD/YYYY format\n\n\nfunction formatDate(dateStr) {\n  var date = new Date(dateStr);\n  var options = {\n    year: \"numeric\",\n    month: \"long\",\n    day: \"numeric\"\n  };\n  return date.toLocaleDateString(options);\n} // Returns URL query params as object\n\n\nfunction getParams() {\n  return location.search.substring(1).split(\"&\").reduce(function (acc, curr) {\n    var _curr$split = curr.split(\"=\"),\n        _curr$split2 = _slicedToArray(_curr$split, 2),\n        key = _curr$split2[0],\n        value = _curr$split2[1];\n\n    acc[key] = value;\n    return acc;\n  }, {});\n} // Call renderArticles on page load\n\nfunction loadPage() {\n  Object(_indexeddb__WEBPACK_IMPORTED_MODULE_1__[\"useIndexedDb\"])(\"articles\", \"ArticleStore\", \"get\").then(function (results) {\n    var favorites = results;\n    Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"loadArticles\"])().then(function (data) {\n      var mappedData = data.map(function (article) {\n        article.favorite = false;\n        favorites.forEach(function (fav) {\n          if (article._id === fav._id) {\n            article.favorite = true;\n          }\n        });\n        return article;\n      });\n      renderArticles(mappedData);\n    });\n  });\n}\n\nloadPage();\n\n//# sourceURL=webpack:///./assets/js/topic.js?");

/***/ })

/******/ });