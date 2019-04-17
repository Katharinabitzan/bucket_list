const BucketList = require('./models/bucket_list.js');
const ListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("Javascript Loaded");

  const listContainer = document.querySelector('#list-container');
  const listView = new ListView(listContainer);
  listView.bindEvents();


  const bucketList = new BucketList();
  bucketList.getData();





});
