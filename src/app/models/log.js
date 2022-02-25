const mongoose = require("../../database");

const LogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  spent_time: {
    type: Number,
    default: 0,
    required: true,
  },
  last_access: {
    type: Date,
  },
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
