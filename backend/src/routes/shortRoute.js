// backend/src/routes/shortRoute.js
const express = require("express");
const router = express.Router();
const { createShortUrl, getStats } = require("../controllers/shortController");

router.post("/", createShortUrl);
router.get("/:shortcode", getStats);

module.exports = router;
