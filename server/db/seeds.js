use bucket_list;
db.dropDatabase();

db.bucket_list.insertMany(
  [
    {activity: "Bungee-jumping",
    location: "New Zealand",
    priority: 2
  },
    {activity: "See the Grand Canyon",
    location: "Arizona",
    priority: 3
  },
  {activity: "Diving with Great White Sharks",
  location: "Australia",
  priority: 2
}
]);
