const express = require("express");
const { getAllMatches, updateMatchById } = require("../../controllers/match");

const router = express.Router();

// const {
//   addCategory,
//   getCategory,
// } = require("../../controllers/category/category");
// const auth = require("../../middleware/checkauth");
router.route("/get-all-matches").get(getAllMatches);
router.route("/update-match-by-id/:id").post(updateMatchById);

module.exports = router;
