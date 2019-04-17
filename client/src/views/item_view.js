const ItemView = function (container, data) {
  this.container = container;
  this.data = data;
};

ItemView.prototype.render = function() {
  const list = document.createElement('ul');
  this.container.appendChild(list);

  const activity = document.createElement('li');
  activity.textContent = this.data.activity;
  list.appendChild(activity);

  const location = document.createElement('li');
  location.textContent = this.data.location;
  list.appendChild(location);

  const status = document.createElement('li');
  status.textContent = this.data.status;
  list.appendChild(status);
};










module.exports = ItemView;
