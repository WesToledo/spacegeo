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
  path: {
    type: String,
  },
  objName: {
    type: String,
  },
  hasImg: {
    type: Boolean,
    default: false,
  },
  imgURL: {
    type: String,
  },
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
