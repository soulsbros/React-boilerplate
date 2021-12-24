const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(501).send("Not implemented");
});

router.get("/api/restart", (req, res) => {
  res.status(200).send("Restarting...");
  process.exit(1);
});

module.exports = router;
