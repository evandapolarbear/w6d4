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

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);
	const routes = {inbox: new Inbox()};


	document.addEventListener("DOMContentLoaded", function(event) {
	  const side = document.getElementsByClassName("sidebar-nav");
	  const content = document.querySelector(".content");
	  const router = new Router(content, routes).start();

	  side[0].addEventListener("click", function (e) {
	    e.preventDefault();
	    let newHash = e.target.innerHTML.toLowerCase();
	    window.location.hash = newHash;
	  });


	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Router(node, routes) {
	  this.node = node;
	  this.routes = routes;
	}

	Router.prototype.start = function () {
	  this.render();
	  window.addEventListener("hashchange", () => {
	    this.render();
	    console.log('hi');
	  });
	};

	Router.prototype.activeRoute = function () {
	  let hash = window.location.hash;
	  let currentRoute = hash.slice(1);
	  return this.routes[currentRoute];
	};

	Router.prototype.render = function () {
	  this.node.innerHTML = "";
	  let routeName = this.activeRoute();
	  let p = document.createElement("p");
	  p.innerHTML = routeName;
	  this.node.appendChild(p);
	};

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function Inbox() {
	  this.inbox = {};

	}

	Inbox.prototype.render = function () {
	  let ul = document.createElement("ul");
	  ul.className("messages");
	  ul.innerHTML = "An inbox message";
	  return ul;
	};


	module.exports = Inbox;


/***/ }
/******/ ]);