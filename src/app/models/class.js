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
      ref: "Users",
    },
  ],
  hash: {
    type: String,
    required: true,
  },
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
