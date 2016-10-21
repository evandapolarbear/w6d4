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
