const { default: mongoose } = require("mongoose");
const { Stage, Match } = require("../schemas/Match");
exports.getAllMatches = async (req, res) => {
  try {
    let record = await Stage.find().populate("matches");
    return res.status(200).json({
      message: "Test match retrieval results",
      matches: record,
    });
  } catch (err) {
    console.error("Error in testMatchRetrieval:", err);
    return res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

exports.updateMatchById = async (req, res) => {
  try {
    const { id } = req.params;
    const { homeTeam, awayTeam, homeScore, awayScore, winner, group } = req.body;

    const updatedMatch = await Match.findByIdAndUpdate(
      id,
      {
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        winner,
        group,
      },
      { new: true },
    );

    if (!updatedMatch) {
      return res.status(404).json({
        message: "Match not found",
      });
    }

    return res.status(200).json({
      message: "Match updated successfully",
      match: updatedMatch,
    });
  } catch (err) {
    console.error("Error in updateMatchById:", err);
    return res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};
