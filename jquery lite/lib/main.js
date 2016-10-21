const Hello = require('./hello.js');
const DOMNodeCollection = require('./dom_node_collection.js');

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
