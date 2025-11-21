const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema(
  {
  name: {type: String, required: true},
  imgUrl: {type: String, required: true},
  },
  {
  timestamps: true,
  collection: "platforms"
  }
)

const Platform = mongoose.model("platforms", platformSchema, "platforms")

module.exports = Platform; 