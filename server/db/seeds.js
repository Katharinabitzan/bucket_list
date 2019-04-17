use bucket_list;
db.dropDatabase();

db.bucket_list.insertMany(
  [
    {activity: "Bungee-jumping",
    location: "New Zealand",
    status: "Incomplete"
  },
    {activity: "See the Grand Canyon",
    location: "Arizona",
    status: "Complete"
  },
  {activity: "Diving with Great White Sharks",
  location: "Australia",
  status: "Incomplete"
}
]);
