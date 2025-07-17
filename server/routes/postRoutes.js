const express = require("express");
const router = express.Router();

// Sample route
router.get("/", (req, res) => {
  res.send("Posts API working!");
});

module.exports = router;
