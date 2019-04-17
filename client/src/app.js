const BucketList = require('./models/bucket_list.js');
const ListView = require('./views/list_view.js');
const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("Javascript Loaded");

  const listContainer = document.querySelector('#list-container');
  const listView = new ListView(listContainer);
  listView.bindEvents();

  const form = document.querySelector('#bucketlist-form');
  const formView = new FormView(form);
  formView.bindEvents();

  const bucketList = new BucketList();
  bucketList.getData();
  bucketList.bindEvents();


});
