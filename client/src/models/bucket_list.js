const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function () {
  this.request = new RequestHelper('http://localhost:3000/api/bucketlist');
}

BucketList.prototype.getData = function () {
  this.request.get()
  .then( (data) => {
      PubSub.publish('BucketList:data-ready', data);
  });
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:form-submitted', (evt) => {
    this.request.post(evt.detail)
      .then( (data) => {
        PubSub.publish('BucketList:data-ready', data);
      });
  });
};

module.exports = BucketList;
