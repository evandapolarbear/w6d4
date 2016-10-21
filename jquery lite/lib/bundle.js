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

	const Hello = __webpack_require__(1);
	const DOMNodeCollection = __webpack_require__(2);

	document.addEventListener("DOMContentLoaded", function(event) {
	  window.hello = new Hello();


	  window.$l = function(selector) {
	    if (typeof selector === "string" ) {
	      let nodelist = document.querySelectorAll(selector);
	      let nodelistArr = Array.from(nodelist);
	      window.domNodeCollection = new DOMNodeCollection(nodelistArr);
	      return window.domNodeCollection;
	    } else if (selector[0] instanceof HTMLElement) {
	      let args = Array.from(selector);
	      window.domNodeCollection = new DOMNodeCollection(args);
	    }
	  };



	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Hello {

	   hello() {
	    alert("hello!");
	  }

	}

	module.exports = Hello;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor(htmlElements) {
	    this.htmlElements = htmlElements;
	  }
	}

	DOMNodeCollection.prototype.html = function(str) {
	  if (typeof str === 'undefined') {
	    return this.htmlElements[0].innerHTML;
	  } else {
	    this.htmlElements.forEach((e) => {
	      e.innerHTML = str;
	    });
	    return this.htmlElements;
	  }
	};

	DOMNodeCollection.prototype.empty = function() {
	    this.htmlElements.forEach((e) => {
	      e.innerHTML = '';
	    });
	    return this.htmlElements;
	};

	DOMNodeCollection.prototype.append = function(arg) {

	    this.htmlElements.forEach((e) => {

	      if (typeof arg === 'string') {
	        e.innerHTML = e.innerHTML + arg;
	      } else if (arg instanceof HTMLElement) {
	        e.appendChild(arg);
	      } else if (arg instanceof DOMNodeCollection) {
	        arg.forEach((el) => {
	          e.appendChild(el.cloneNode(true));
	        });
	      }
	      return this.htmlElements;
	    });
	};


	DOMNodeCollection.prototype.attr = function(name, value) {
	  let attrGet = [];
	  if (name && value) {
	    this.htmlElements.forEach((el) => {
	      el.setAttribute(name, value);
	    });
	    return this.htmlElements;
	  } else if (name) {
	    this.htmlElements.forEach((el) => {
	       attrGet.push(el.getAttribute(name));
	    });
	    return attrGet;
	  }
	};


	DOMNodeCollection.prototype.addClass = function(value) {
	  if (value) {
	    this.htmlElements.forEach((el) => {
	      let oldClass = el.getAttribue("class");
	      el.setAttribute("class", oldClass + ' ' + value);
	    });
	    return this.htmlElements;
	  }
	};



	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);