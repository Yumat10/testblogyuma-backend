const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    defauult: Date.now,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
