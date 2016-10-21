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
