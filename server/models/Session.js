const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    totalSteps: {
      type: Number,
      default: 0,
    },
    path: {
      type: [String], // e.g. ["F", "L", "F", "R"]
      default: [],
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    endedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", sessionSchema);
