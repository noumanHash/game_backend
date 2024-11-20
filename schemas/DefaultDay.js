// model/Calendar.js
const mongoose = require("mongoose");

const DefaultDaySchema = new mongoose.Schema({
  giornata: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("default", DefaultDaySchema);
