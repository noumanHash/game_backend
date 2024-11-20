const express = require("express");
const { UpdateGiornata, getDeaultGiornata } = require("../../controllers/defaultDay");

const router = express.Router();

router.route("/get-deafault-giornata").get(getDeaultGiornata);
router.route("/update-giornata").post(UpdateGiornata);

module.exports = router;
