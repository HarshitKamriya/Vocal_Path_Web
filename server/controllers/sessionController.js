const Session = require("../models/Session");

// START a session
const startSession = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const session = await Session.create({
      userId,
    });

    res.status(201).json({
      message: "Session started",
      sessionId: session._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to start session" });
  }
};

// END a session
const endSession = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    session.endedAt = new Date();
    await session.save();

    res.json({ message: "Session ended" });
  } catch (error) {
    res.status(500).json({ message: "Failed to end session" });
  }
};

module.exports = { startSession, endSession };
