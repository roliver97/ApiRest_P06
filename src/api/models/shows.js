const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  {
  title: {type: String, required: true},
  imgUrl: {type: String, required: true},
  categories: [{type: String, required: true, enum: ["Horror","Drama","Thriller","Mystery","Comedy","Romance","Fantasy","Action","Adventure","Crime","Superhero"]}],
  seasons: {type: Number, required: true},
  chapters: {type: Number, required: true},
  isAdultContent: {type: Boolean, default: false},
  platforms: [{ type: mongoose.Types.ObjectId, required: true, ref: "platforms" }]
  },
  {
  timestamps: true,
  collection: "shows"
  }
)

const Show = mongoose.model("shows", showSchema, "shows")

module.exports = Show; 