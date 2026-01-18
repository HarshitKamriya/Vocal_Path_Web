const express = require("express");
const router = express.Router();

const {
  startSession,
  endSession,
} = require("../controllers/sessionController");

router.post("/sessions/start", startSession);
router.patch("/sessions/end/:sessionId", endSession);

module.exports = router;
