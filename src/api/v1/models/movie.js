const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title_id: {
    type: String,
    index: {
      unique: true,
    },
    required: [true, "Movie Title ID is a required field."],
  },
  title: {
    type: String,
    required: [true, "Movie Title is a required field."],
  },
  poster: {
    type: String,
    default: "NA",
  },
  releaseYear: {
    type: Number,
    required: [true, "Release Year is a required field."],
  },
  rating: {
    type: Number,
    default: 0,
    required: [true, "Release Year is a required field."],
  },
  certificate: {
    type: String,
    default: "NA",
  },
  runtime: {
    type: String,
    default: "NA",
  },
  genre: {
    type: Array,
    default: "NA",
  },
  description: {
    type: String,
    default: "NA",
  },
});

module.exports = mongoose.model("Movie", movieSchema);
