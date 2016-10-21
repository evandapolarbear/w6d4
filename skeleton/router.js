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
