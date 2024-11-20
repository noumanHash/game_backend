const express = require("express");
const { getAllMatches, addAllMatches, UpdateMatch } = require("../../controllers/calendar");

const router = express.Router();

// const {
//   addCategory,
//   getCategory,
// } = require("../../controllers/category/category");
// const auth = require("../../middleware/checkauth");
router.route("/get-all-matches").get(getAllMatches);
router.route("/add-all-matches").post(addAllMatches);
router.route("/update-match-by-id/:id").post(UpdateMatch);

module.exports = router;
