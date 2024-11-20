const DefaultDays = require("../schemas/DefaultDay");

exports.getDeaultGiornata = async (req, res) => {
  try {
    let day = await DefaultDays.find();
    console.log(day);

    return res.status(200).json({ data: day[0], message: "Default Day" });
  } catch (err) {
    console.error("Error in getAllMatches:", err);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.UpdateGiornata = async (req, res) => {
  try {
    const { giornata } = req.body;
    if (!giornata) {
      return res.status(400).json({ message: "Invalid data" });
    }
    await DefaultDays.deleteMany({});

    await DefaultDays.create({ giornata: giornata });
    return res.status(200).json({ message: "Giornata updated successfully", data: giornata });
  } catch (err) {
    console.error("Error in UpdateDay:", err);
    return res.status(500).json({ message: "Server Error" });
  }
};
