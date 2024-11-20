const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  homeScore: { type: Number, required: true },
  awayScore: { type: Number, required: true },
  winner: { type: String, required: true },
  group: { type: String, required: true },
});

const stageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  group: { type: String, required: true },
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Matchs" }],
});

const tournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stage" }],
});

const Tournament = mongoose.model("Tournament", tournamentSchema);
const Stage = mongoose.model("Stage", stageSchema);
const Match = mongoose.model("Matchs", matchSchema);

module.exports = { Tournament, Stage, Match };
