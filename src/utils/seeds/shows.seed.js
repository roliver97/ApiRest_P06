const shows = require("../../data/shows");
const Show = require("../../api/models/shows");
const mongoose = require("mongoose");
require("dotenv").config()

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allShows = await Show.find();

    if (allShows.length) {
      await Show.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Show.insertMany(shows);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))

  .finally(() => mongoose.disconnect());