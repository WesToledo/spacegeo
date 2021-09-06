const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  hash: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
