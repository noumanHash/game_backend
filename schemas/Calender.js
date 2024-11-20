// model/Calendar.js
const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
  numero: Number,
  day: String,
  time: String,
  team1: String,
  team2: String,
  pron: String,
  results: String,
});

const CalendarSchema = new mongoose.Schema({
  giornata: Number,
  matches: [MatchSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Calendar", CalendarSchema);
