const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const QuestionarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
  publish: {
    type: Boolean,
    required: true,
    default: false,
  },
  grade: {
    type: Number,
    required: true,
    default: 0,
  },
  type: {
    type: String,
    required: true,
    default: "teacher",
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Questionary = mongoose.model("Questionary", QuestionarySchema);

module.exports = Questionary;
