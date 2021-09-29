const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const AnswerSchema = new mongoose.Schema({
  questionary: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questionary",
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  classe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
  },
  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  timeBegin: {
    type: Date,
    required: true,
  },
  timeEnd: {
    type: Date,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;
