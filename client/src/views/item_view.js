const PubSub = require('../helpers/pub_sub.js')

const ItemView = function (container, data) {
  this.container = container;
  this.data = data;
};

ItemView.prototype.render = function() {
  const listDiv = document.createElement('div');
  listDiv.classList.add('list-div');
  this.container.appendChild(listDiv);

  const list = document.createElement('ul');
  listDiv.appendChild(list);

  const activity = document.createElement('li');
  activity.textContent = this.data.activity;
  list.appendChild(activity);

  const location = document.createElement('li');
  location.textContent = this.data.location;
  list.appendChild(location);

  const status = document.createElement('li');
  status.textContent = this.data.status;
  list.appendChild(status);
  
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Mark complete';
  completeButton.value = this.data._id;
  completeButton.classList.add('green');
  listDiv.appendChild(completeButton);

  completeButton.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:item-completed', evt.target.value);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.value = this.data._id;
  deleteButton.classList.add('red');
  listDiv.appendChild(deleteButton);

  deleteButton.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:item-deleted', evt.target.value);
  });
};










module.exports = ItemView;
