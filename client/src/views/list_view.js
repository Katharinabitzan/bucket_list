const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ListView = function (container) {
  this.container = container;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-ready', (event) => {
    this.render(event.detail);
  });
};

ListView.prototype.render = function (data) {
  data.forEach( (item) => {
    const itemView = new ItemView(this.container, item);
    itemView.render();
  });
};



module.exports = ListView;
