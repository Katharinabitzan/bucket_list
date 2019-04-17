const PubSub = require('../helpers/pub_sub.js');

const FormView = function(form) {
  this.form = form;
};

FormView.prototype.bindEvents = function() {
  this.form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function(evt) {
  const newListItem = {};
  newListItem.activity = evt.target.activity.value;
  newListItem.location = evt.target.location.value;
  newListItem.status = "Incomplete";
  PubSub.publish('FormView:form-submitted', newListItem);
};

module.exports = FormView;
