const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const DefaultQuestionarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
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
    },
  ],
  grade: {
    type: Number,
    required: true,
    default: 0,
  },
});

const DefaultQuestionary = mongoose.model(
  "DefaultQuestionary",
  DefaultQuestionarySchema
);

module.exports = DefaultQuestionary;
