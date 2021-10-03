const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const AnswerSchema = new mongoose.Schema({
  questionary: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questionary",
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  classe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  answers: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
      alternative: {
        type: String,
        required: true,
      },
      index: Number,
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
