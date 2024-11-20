const seedData = require("../../src/START/app/seederSerieA");
const Calendar = require("../schemas/Calender");

exports.getAllMatches = async (req, res) => {
  try {
    let allmatches = await Calendar.find({}).sort({ giornata: 1 });

    return res.status(200).json({ data: allmatches, message: "List of all matches sorted by giornata" });
  } catch (err) {
    console.error("Error in getAllMatches:", err);
    return res.status(500).json({ message: "Server Error" });
  }
};
exports.addAllMatches = async (req, res) => {
  try {
    await Calendar.deleteMany({});

    const documents = seedData.gamedays.map((gameday) => ({
      giornata: gameday.giornata,
      matches: gameday.matches,
    }));

    const allmatches = await Calendar.insertMany(documents);

    console.log(`Calendar data initialized: ${documents.length} game days inserted`);

    return res.status(200).json({ data: allmatches, message: "List of all matches" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.UpdateMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const { matches } = req.body;

    if (!matches || !Array.isArray(JSON.parse(matches))) {
      return res.status(400).json({ message: "Invalid matches data" });
    }

    const calendarData = await Calendar.findById(id);

    if (!calendarData) {
      return res.status(404).json({ message: "Calendar not found" });
    }

    calendarData.matches = JSON.parse(matches);
    calendarData.updatedAt = new Date();

    await calendarData.save();

    return res.status(200).json({ message: "Matches updated successfully", data: calendarData });
  } catch (err) {
    console.error("Error in UpdateMatch:", err);
    return res.status(500).json({ message: "Server Error" });
  }
};
