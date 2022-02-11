const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  alternatives: [
    {
      text: String,
      index: Number,
    },
  ],
  rightOne: {
    type: Number,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  hasObject: {
    type: Boolean,
    default: false,
  },
  objName: {
    type: String,
  },
  path: {
    type: String,
  },

  hasImg: {
    type: Boolean,
    default: false,
  },
  imgURL: {
    type: String,
  },
  imgKey: {
    type: String,
  },
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
