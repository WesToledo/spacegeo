const mongoose = require("../../database");

const LogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  spent_time: {
    hour: {
      type: Number,
      default: 0,
    },
    minutes: {
      type: Number,
      default: 0,
    },
    seconds: {
      type: Number,
      default: 0,
    },
  },
  start_date: {
    type: Date,
  },
  last_access: {
    type: Date,
  },
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
