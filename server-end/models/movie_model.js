const mongoose = require("mongoose");
const Schema = mongoose.schema;

const Movie = new Schema(
  {
    name: { type: String, require: true },
    time: { type: [String], require: true },
    rating: { type: Number.require },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('movies',Movie)