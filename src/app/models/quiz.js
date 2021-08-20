const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const QuizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
