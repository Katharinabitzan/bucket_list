const PubSub = require('../helpers/pub_sub.js')

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

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.value = this.data._id;
  this.container.appendChild(deleteButton);

  deleteButton.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:item-deleted', evt.target.value);
  });

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Mark complete';
  completeButton.value = this.data._id;
  this.container.appendChild(completeButton);

  completeButton.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:item-completed', evt.target.value);
  });
};










module.exports = ItemView;
