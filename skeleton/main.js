const Router = require('./router.js');
const Inbox = require('./inbox.js');
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
